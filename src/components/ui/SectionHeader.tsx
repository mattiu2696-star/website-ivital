interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  subtitleColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}

export const SectionHeader = ({
  subtitle,
  title,
  description,
  centered = true,
  subtitleColor = 'text-ivital-pink',
  titleColor = 'text-ivital-dark',
  descriptionColor = 'text-ivital-gray',
}: SectionHeaderProps) => (
  <div className={`space-y-4 ${centered ? 'text-center' : ''}`}>
    {subtitle && (
      <h2 className={`text-sm font-bold uppercase tracking-widest ${subtitleColor}`}>
        {subtitle}
      </h2>
    )}
    <h3 className={`text-4xl font-extrabold ${titleColor}`}>{title}</h3>
    {description && (
      <p className={`text-lg leading-relaxed ${descriptionColor}`}>{description}</p>
    )}
  </div>
);
