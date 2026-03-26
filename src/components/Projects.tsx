import { motion } from 'motion/react';
import { Smartphone, ShieldCheck, Activity, Heart, Zap, Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageProps } from '../types';
import { SectionHeader } from './ui/SectionHeader';
import { CallToActionBanner } from './ui/CallToActionBanner';
import { FloatingStatCard } from './ui/FloatingStatCard';
import { useLanguage } from '../i18n/LanguageContext';

const featureIcons = [
  <Zap className="text-ivital-pink" size={32} />,
  <Database className="text-ivital-blue" size={32} />,
  <Smartphone className="text-ivital-pink" size={32} />,
  <ShieldCheck className="text-ivital-blue" size={32} />,
];

const otherProjectIcons = [
  <Zap size={32} />,
  <Activity size={32} />,
  <Heart size={32} />,
];

const otherProjectImages = [
  'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
  'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
  'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
];

export const Projects = ({ onPageChange }: PageProps) => {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      {/* Project Hero */}
      <section className="section-padding flex flex-col lg:flex-row items-center gap-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ivital-pink/10 to-transparent -z-10 blur-3xl" />
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ivital-pink/10 text-ivital-pink rounded-full text-sm font-bold">
            <Smartphone size={16} /> {t.projects.heroBadge}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-ivital-dark leading-tight">
            iVital <span className="gradient-text">Care</span>
          </h1>
          <p className="text-xl text-ivital-gray max-w-xl leading-relaxed">
            {t.projects.heroDescription}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn-primary flex items-center gap-2">
              {t.projects.heroDownload} <ArrowRight size={20} />
            </button>
            <button className="btn-outline">{t.projects.heroDemo}</button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 relative flex justify-center"
        >
          {/* iPhone 17 Mockup */}
          <div className="relative z-10 w-[240px] md:w-[260px]">
            {/* Outer frame - titanium style */}
            <div className="relative bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1e] rounded-[2.8rem] p-[2px] shadow-[0_0_60px_rgba(0,0,0,0.3)]">
              {/* Inner bezel */}
              <div className="bg-black rounded-[2.7rem] p-[1.5px]">
                {/* Screen area */}
                <div className="relative bg-ivital-light rounded-[2.6rem] overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 w-[90px] h-[28px] bg-black rounded-full flex items-center justify-center">
                    <div className="w-[8px] h-[8px] bg-[#1a1a2e] rounded-full ring-1 ring-gray-800 mr-3" />
                    <div className="w-[10px] h-[10px] bg-[#0a1a3a] rounded-full ring-1 ring-gray-800" />
                  </div>
                  {/* App screenshot */}
                  <img 
                    src="https://i.ibb.co/CK1Fz5zm/Screenshot-2026-03-25-at-10-53-08.png" 
                    alt="iVital Care App" 
                    className="w-full h-auto object-contain"
                  />
                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-black/30 rounded-full" />
                </div>
              </div>
            </div>
            {/* Side button (power) */}
            <div className="absolute top-[120px] -right-[1px] w-[3px] h-[50px] bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e] rounded-r-sm" />
            {/* Volume buttons */}
            <div className="absolute top-[100px] -left-[1px] w-[3px] h-[28px] bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e] rounded-l-sm" />
            <div className="absolute top-[140px] -left-[1px] w-[3px] h-[28px] bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e] rounded-l-sm" />
          </div>
          <FloatingStatCard
            icon={<Activity size={24} />}
            iconClassName="bg-ivital-pink/10 text-ivital-pink"
            label={t.projects.statHeartRate}
            value="72 BPM"
            className="absolute top-20 -right-10"
          />
          <FloatingStatCard
            icon={<Heart size={24} />}
            iconClassName="bg-ivital-blue/10 text-ivital-blue"
            label={t.projects.statHealth}
            value={t.projects.statHealthValue}
            className="absolute bottom-20 -left-10"
            style={{ animationDelay: '1.5s' }}
          />
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-ivital-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionHeader subtitle={t.projects.featuresSubtitle} title={t.projects.featuresTitle} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.projects.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all space-y-6"
              >
                <div className="w-16 h-16 bg-ivital-light rounded-2xl flex items-center justify-center">
                  {featureIcons[idx]}
                </div>
                <h4 className="text-2xl font-bold">{feature.title}</h4>
                <p className="text-ivital-gray leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <SectionHeader subtitle={t.projects.userBenefitsSubtitle} title={t.projects.userBenefitsTitle} centered={false} />
            <div className="space-y-6">
              {t.projects.userBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-ivital-light rounded-3xl">
                  <CheckCircle2 className="text-ivital-pink flex-shrink-0" size={24} />
                  <p className="text-lg font-bold text-ivital-dark">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <SectionHeader subtitle={t.projects.partnerBenefitsSubtitle} title={t.projects.partnerBenefitsTitle} centered={false} subtitleColor="text-ivital-blue" />
            <div className="space-y-6">
              {t.projects.partnerBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-gradient-to-r from-ivital-blue/10 to-ivital-pink/10 border border-ivital-blue/20 rounded-3xl">
                  <CheckCircle2 className="text-ivital-blue flex-shrink-0" size={24} />
                  <p className="text-lg font-bold text-ivital-dark">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="section-padding bg-ivital-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionHeader subtitle={t.projects.otherSubtitle} title={t.projects.otherTitle} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.projects.otherProjects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="group relative h-[400px] rounded-[3rem] overflow-hidden cursor-pointer shadow-lg"
              >
                <img 
                  src={otherProjectImages[idx]} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ivital-dark/90 via-ivital-dark/20 to-transparent p-12 flex flex-col justify-end">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-lg text-white rounded-2xl flex items-center justify-center">
                      {otherProjectIcons[idx]}
                    </div>
                    <h4 className="text-3xl font-bold text-white">{project.title}</h4>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToActionBanner
        bgColor="bg-ivital-dark"
        title={<>{t.projects.ctaTitle1} <br /> {t.projects.ctaTitle2}</>}
        description={t.projects.ctaDescription}
      >
        <button className="px-10 py-5 bg-ivital-pink text-white rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          {t.projects.ctaIos}
        </button>
        <button className="px-10 py-5 bg-white text-ivital-dark rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          {t.projects.ctaAndroid}
        </button>
      </CallToActionBanner>
    </div>
  );
};
