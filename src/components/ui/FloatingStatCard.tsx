import { CSSProperties, ReactNode } from 'react';

interface FloatingStatCardProps {
  icon: ReactNode;
  iconClassName: string;
  label: string;
  value: string;
  className?: string;
  style?: CSSProperties;
}

export const FloatingStatCard = ({
  icon,
  iconClassName,
  label,
  value,
  className = '',
  style,
}: FloatingStatCardProps) => (
  <div
    className={`glass-card p-6 rounded-3xl z-20 animate-float shadow-xl ${className}`}
    style={style}
  >
    <div className="flex items-center gap-4">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${iconClassName}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{label}</p>
        <p className="text-lg font-extrabold">{value}</p>
      </div>
    </div>
  </div>
);
