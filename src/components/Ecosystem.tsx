import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Smartphone, Zap, Activity, Heart, ShieldCheck, Database, Globe, CheckCircle2 } from 'lucide-react';
import { PageProps } from '../types';
import { SectionHeader } from './ui/SectionHeader';
import { CallToActionBanner } from './ui/CallToActionBanner';
import { useLanguage } from '../i18n/LanguageContext';

const coreFeatureIcons = [
  <Database size={24} />,
  <Activity size={24} />,
  <Globe size={24} />,
];

const productIcons = [
  <Smartphone size={32} />,
  <Zap size={32} />,
  <Activity size={32} />,
  <Heart size={32} />,
];

export const Ecosystem = ({ onPageChange }: PageProps) => {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      {/* Ecosystem Hero */}
      <section className="section-padding bg-ivital-dark text-white text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-ivital-pink/10 rounded-full blur-[150px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-sm font-bold text-ivital-pink uppercase tracking-widest">{t.ecosystem.heroSubtitle}</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            {t.ecosystem.heroTitle1} <span className="gradient-text">{t.ecosystem.heroTitle2}</span> <br /> {t.ecosystem.heroTitle3}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            {t.ecosystem.heroDescription}
          </p>
        </motion.div>
      </section>

      {/* Interactive Diagram Section */}
      <section className="section-padding bg-ivital-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-12">
            <SectionHeader
              subtitle={t.ecosystem.systemSubtitle}
              title={t.ecosystem.systemTitle}
              description={t.ecosystem.systemDescription}
              centered={false}
              titleColor="text-white"
              descriptionColor="text-gray-400"
            />

            <div className="space-y-6">
              {t.ecosystem.coreFeatures.map((item, idx) => (
                <div key={idx} className="flex gap-6 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 bg-ivital-pink/20 text-ivital-pink rounded-2xl flex items-center justify-center flex-shrink-0">
                    {coreFeatureIcons[idx]}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center relative">
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border border-white/10 rounded-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-ivital-pink rounded-2xl flex items-center justify-center shadow-lg">
                  <Smartphone size={32} />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-ivital-blue rounded-2xl flex items-center justify-center shadow-lg">
                  <Activity size={32} />
                </div>
              </motion.div>

              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-16 border border-white/10 rounded-full"
              >
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white text-ivital-dark rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart size={32} />
                </div>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-ivital-pink rounded-2xl flex items-center justify-center shadow-lg">
                  <ShieldCheck size={32} />
                </div>
              </motion.div>

              <div className="absolute inset-32 bg-gradient-to-br from-ivital-pink to-ivital-blue rounded-full flex items-center justify-center shadow-2xl z-10">
                <div className="text-center">
                  <h4 className="text-3xl font-black">CORE</h4>
                  <p className="text-xs font-bold opacity-80">AI ENGINE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionHeader subtitle={t.ecosystem.detailSubtitle} title={t.ecosystem.detailTitle} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.ecosystem.products.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-ivital-light p-12 rounded-[3rem] space-y-8 border border-gray-100"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white text-ivital-pink rounded-2xl flex items-center justify-center shadow-sm">
                    {productIcons[idx]}
                  </div>
                  <h4 className="text-3xl font-bold">{item.title}</h4>
                </div>
                <p className="text-ivital-gray leading-relaxed">{item.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-ivital-pink" />
                      <span className="text-sm font-bold text-ivital-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToActionBanner
        bgColor="bg-ivital-pink"
        title={<>{t.ecosystem.ctaTitle1} <br /> {t.ecosystem.ctaTitle2}</>}
        description={t.ecosystem.ctaDescription}
      >
        <Link to="/contact" className="px-10 py-5 bg-white text-ivital-pink rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          {t.ecosystem.ctaContact}
        </Link>
        <Link to="/projects" className="px-10 py-5 bg-ivital-dark text-white rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          {t.ecosystem.ctaProjects}
        </Link>
      </CallToActionBanner>
    </div>
  );
};
