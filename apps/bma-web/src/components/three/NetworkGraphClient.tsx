"use client";

import dynamic from "next/dynamic";

const NetworkGraph = dynamic(
  () => import("./NetworkGraph").then((m) => ({ default: m.NetworkGraph })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gradient-radial from-navy-700/20 to-transparent" />
    ),
  }
);

export { NetworkGraph };
