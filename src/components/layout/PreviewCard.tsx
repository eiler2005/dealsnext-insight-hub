
import { ReactNode } from "react";

interface PreviewCardProps {
  icon: ReactNode;
  title: string;
  color?: string;
}

export default function PreviewCard({ icon, title, color }: PreviewCardProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 mb-1 last:mb-0">
      <span className="flex items-center justify-center rounded-lg" style={{ minWidth: 28, minHeight: 28 }}>
        {icon}
      </span>
      <span className="text-sm font-medium" style={color ? { color } : undefined}>
        {title}
      </span>
    </div>
  );
}
