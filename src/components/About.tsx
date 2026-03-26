import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Users, Globe, ShieldCheck, Activity, Zap } from 'lucide-react';
import { PageProps } from '../types';
import { SectionHeader } from './ui/SectionHeader';
import { CallToActionBanner } from './ui/CallToActionBanner';
import { useLanguage } from '../i18n/LanguageContext';

const coreValueIcons = [
  <Award size={48} className="text-ivital-pink" />,
  <Heart size={48} className="text-ivital-blue" />,
  <Zap size={48} className="text-ivital-pink" />,
];

const statIcons = [
  <Users />,
  <ShieldCheck />,
  <Award />,
  <Activity />,
];

export const About = ({ onPageChange }: PageProps) => {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-ivital-light text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-ivital-pink/5 rounded-full blur-3xl -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-sm font-bold text-ivital-pink uppercase tracking-widest">{t.about.heroSubtitle}</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-ivital-dark leading-tight">
            {t.about.heroTitle1} <span className="gradient-text">{t.about.heroTitle2}</span> <br /> {t.about.heroTitle3}
          </h1>
          <p className="text-xl text-ivital-gray leading-relaxed">
            {t.about.heroDescription}
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80" 
                alt="Mission" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-[2rem] shadow-xl max-w-[220px] space-y-3">
              <div className="w-12 h-12 bg-ivital-pink text-white rounded-xl flex items-center justify-center">
                <Globe size={24} />
              </div>
              <h4 className="text-lg font-bold leading-snug">{t.about.globalCard}</h4>
              <p className="text-ivital-gray text-xs leading-relaxed">{t.about.globalCardDesc}</p>
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-ivital-pink">
                <Target size={32} />
                <h3 className="text-3xl font-extrabold">{t.about.missionTitle}</h3>
              </div>
              <p className="text-lg text-ivital-gray leading-relaxed">
                {t.about.missionText}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-ivital-blue">
                <Eye size={32} />
                <h3 className="text-3xl font-extrabold">{t.about.visionTitle}</h3>
              </div>
              <p className="text-lg text-ivital-gray leading-relaxed">
                {t.about.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-ivital-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionHeader subtitle={t.about.coreValuesSubtitle} title={t.about.coreValuesTitle} titleColor="text-white" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.about.coreValues.map((value, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-12 rounded-[3rem] text-center space-y-6"
              >
                <div className="flex justify-center">{coreValueIcons[idx]}</div>
                <h4 className="text-2xl font-bold">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <SectionHeader subtitle={t.about.timelineSubtitle} title={t.about.timelineTitle} />
          </div>

          <div className="relative space-y-12">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-ivital-light -translate-x-1/2 hidden md:block" />
            
            {t.about.milestones.map((milestone, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 text-center md:text-left">
                  <div className={`space-y-4 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-4xl font-black text-ivital-pink">{milestone.year}</span>
                    <h4 className="text-2xl font-bold">{milestone.title}</h4>
                    <p className="text-ivital-gray">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-ivital-pink rounded-full border-8 border-white shadow-lg relative z-10 flex-shrink-0" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-ivital-light">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.about.stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-ivital-pink mx-auto shadow-sm">
                {statIcons[idx]}
              </div>
              <p className="text-4xl font-black text-ivital-dark">{stat.value}</p>
              <p className="text-ivital-gray font-bold uppercase tracking-wider text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CallToActionBanner
        bgColor="bg-ivital-blue"
        title={<>{t.about.ctaTitle1} <br /> {t.about.ctaTitle2}</>}
        description={t.about.ctaDescription}
      >
        <Link to="/contact" className="px-10 py-5 bg-white text-ivital-blue rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          {t.about.ctaButton}
        </Link>
      </CallToActionBanner>
    </div>
  );
};
