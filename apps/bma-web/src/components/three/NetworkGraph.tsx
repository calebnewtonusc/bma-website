"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface Node {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  connections: number[];
}

function NetworkScene() {
  const { size } = useThree();
  const nodeCount = 60;
  const maxDist = 3.5;

  const nodes = useMemo<Node[]>(() => {
    return Array.from({ length: nodeCount }, (_, i) => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.003
      ),
      connections: [],
    }));
  }, []);

  // Build connections
  useMemo(() => {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].connections = [];
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < maxDist) {
          nodes[i].connections.push(j);
        }
      }
    }
  }, [nodes]);

  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { pointPositions, linePositions } = useMemo(() => {
    const pp = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      pp[i * 3] = nodes[i].position.x;
      pp[i * 3 + 1] = nodes[i].position.y;
      pp[i * 3 + 2] = nodes[i].position.z;
    }

    const lines: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (const j of nodes[i].connections) {
        lines.push(
          nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
          nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
        );
      }
    }
    return { pointPositions: pp, linePositions: new Float32Array(lines) };
  }, [nodes]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const speed = 0.3;

    for (let i = 0; i < nodes.length; i++) {
      nodes[i].position.x += nodes[i].velocity.x * speed;
      nodes[i].position.y += nodes[i].velocity.y * speed;
      nodes[i].position.z += nodes[i].velocity.z * speed;

      if (Math.abs(nodes[i].position.x) > 7) nodes[i].velocity.x *= -1;
      if (Math.abs(nodes[i].position.y) > 5) nodes[i].velocity.y *= -1;
      if (Math.abs(nodes[i].position.z) > 4) nodes[i].velocity.z *= -1;
    }

    if (pointsRef.current) {
      const pos = pointsRef.current.geometry.attributes.position;
      for (let i = 0; i < nodeCount; i++) {
        pos.setXYZ(i, nodes[i].position.x, nodes[i].position.y, nodes[i].position.z);
      }
      pos.needsUpdate = true;
    }

    if (linesRef.current) {
      const pos = linesRef.current.geometry.attributes.position;
      let idx = 0;
      for (let i = 0; i < nodes.length; i++) {
        for (const j of nodes[i].connections) {
          const dist = nodes[i].position.distanceTo(nodes[j].position);
          if (dist < maxDist) {
            pos.setXYZ(idx, nodes[i].position.x, nodes[i].position.y, nodes[i].position.z);
            pos.setXYZ(idx + 1, nodes[j].position.x, nodes[j].position.y, nodes[j].position.z);
            idx += 2;
          }
        }
      }
      pos.needsUpdate = true;
    }

    if (linesRef.current?.parent) {
      linesRef.current.parent.rotation.y = t * 0.05;
      linesRef.current.parent.rotation.x = Math.sin(t * 0.03) * 0.1;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={pointPositions}
            count={nodeCount}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#3b82f6"
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={linePositions}
            count={linePositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#1d4ed8"
          transparent
          opacity={0.3}
        />
      </lineSegments>
    </group>
  );
}

export function NetworkGraph() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 60 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />
      <NetworkScene />
    </Canvas>
  );
}
