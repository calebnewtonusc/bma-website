interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-2 mb-4 ${className}`}>
      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
      <span className="text-xs font-semibold text-accent-blue-light uppercase tracking-[0.15em]">
        {children}
      </span>
    </div>
  );
}
