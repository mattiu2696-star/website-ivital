import { ReactNode } from 'react';

interface CallToActionBannerProps {
  bgColor: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
}

export const CallToActionBanner = ({
  bgColor,
  title,
  description,
  children,
}: CallToActionBannerProps) => (
  <section className="section-padding">
    <div
      className={`max-w-7xl mx-auto ${bgColor} rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden`}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-ivital-blue/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="relative z-10 space-y-8">
        <h3 className="text-4xl md:text-6xl font-black">{title}</h3>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-wrap justify-center gap-6 pt-4">{children}</div>
      </div>
    </div>
  </section>
);
