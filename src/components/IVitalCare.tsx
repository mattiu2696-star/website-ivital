import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Smartphone, Heart, ShieldCheck, Activity, Clock, Users, MapPin, Star, ArrowRight, CheckCircle2, Stethoscope, CalendarCheck, FileHeart, HeadphonesIcon } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { CallToActionBanner } from './ui/CallToActionBanner';
import { FloatingStatCard } from './ui/FloatingStatCard';
import { useLanguage } from '../i18n/LanguageContext';

const featureIcons = [
  <Stethoscope className="text-ivital-pink" size={28} />,
  <CalendarCheck className="text-ivital-blue" size={28} />,
  <FileHeart className="text-ivital-pink" size={28} />,
  <HeadphonesIcon className="text-ivital-blue" size={28} />,
];

const stepIcons = [
  <Smartphone className="text-white" size={28} />,
  <Users className="text-white" size={28} />,
  <CalendarCheck className="text-white" size={28} />,
  <Heart className="text-white" size={28} />,
];

const highlightIcons = [
  <ShieldCheck size={24} />,
  <Clock size={24} />,
  <Star size={24} />,
  <MapPin size={24} />,
];

export const IVitalCare = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding flex flex-col lg:flex-row items-center gap-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ivital-pink/10 to-transparent -z-10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ivital-pink/10 text-ivital-pink rounded-full text-sm font-bold">
            <Stethoscope size={16} /> {t.ivitalCare.heroBadge}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-ivital-dark leading-tight">
            iVital <span className="gradient-text">Care</span>
          </h1>
          <p className="text-xl text-ivital-gray max-w-xl leading-relaxed">
            {t.ivitalCare.heroDescription}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn-primary flex items-center gap-2">
              {t.ivitalCare.heroDownload} <ArrowRight size={20} />
            </button>
            <button className="btn-outline">{t.ivitalCare.heroDemo}</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 relative flex justify-center"
        >
          <div className="relative z-10 w-[240px] md:w-[260px]">
            <div className="relative bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1e] rounded-[2.8rem] p-[2px] shadow-[0_0_60px_rgba(0,0,0,0.3)]">
              <div className="bg-black rounded-[2.7rem] p-[1.5px]">
                <div className="relative bg-ivital-light rounded-[2.6rem] overflow-hidden">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 w-[90px] h-[28px] bg-black rounded-full flex items-center justify-center">
                    <div className="w-[8px] h-[8px] bg-[#1a1a2e] rounded-full ring-1 ring-gray-800 mr-3" />
                    <div className="w-[10px] h-[10px] bg-[#0a1a3a] rounded-full ring-1 ring-gray-800" />
                  </div>
                  <img
                    src="https://i.ibb.co/CK1Fz5zm/Screenshot-2026-03-25-at-10-53-08.png"
                    alt="iVital Care App"
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-black/30 rounded-full" />
                </div>
              </div>
            </div>
            <div className="absolute top-[120px] -right-[1px] w-[3px] h-[50px] bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e] rounded-r-sm" />
            <div className="absolute top-[100px] -left-[1px] w-[3px] h-[28px] bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e] rounded-l-sm" />
            <div className="absolute top-[140px] -left-[1px] w-[3px] h-[28px] bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e] rounded-l-sm" />
          </div>
          <FloatingStatCard
            icon={<Activity size={24} />}
            iconClassName="bg-ivital-pink/10 text-ivital-pink"
            label={t.ivitalCare.statNurse}
            value={t.ivitalCare.statNurseValue}
            className="absolute top-20 -right-10"
          />
          <FloatingStatCard
            icon={<Heart size={24} />}
            iconClassName="bg-ivital-blue/10 text-ivital-blue"
            label={t.ivitalCare.statSatisfaction}
            value="98%"
            className="absolute bottom-20 -left-10"
            style={{ animationDelay: '1.5s' }}
          />
        </motion.div>
      </section>

      {/* What is iVital Care */}
      <section className="section-padding bg-ivital-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionHeader subtitle={t.ivitalCare.aboutSubtitle} title={t.ivitalCare.aboutTitle} description={t.ivitalCare.aboutDescription} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.ivitalCare.features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all space-y-6"
              >
                <div className="w-16 h-16 bg-ivital-light rounded-2xl flex items-center justify-center">
                  {featureIcons[idx]}
                </div>
                <h4 className="text-xl font-bold text-ivital-dark">{feature.title}</h4>
                <p className="text-ivital-gray leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-ivital-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionHeader
              subtitle={t.ivitalCare.howSubtitle}
              title={t.ivitalCare.howTitle}
              description={t.ivitalCare.howDescription}
              titleColor="text-white"
              descriptionColor="text-gray-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.ivitalCare.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative text-center space-y-6"
              >
                <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-ivital-pink to-ivital-blue rounded-3xl flex items-center justify-center shadow-lg">
                  {stepIcons[idx]}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-ivital-dark rounded-full flex items-center justify-center font-black text-sm shadow-md">
                    {idx + 1}
                  </div>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t border-dashed border-white/20" />
                )}
                <h4 className="text-xl font-bold">{step.title}</h4>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <SectionHeader
              subtitle={t.ivitalCare.highlightSubtitle}
              title={t.ivitalCare.highlightTitle}
              centered={false}
            />
            <div className="space-y-6">
              {t.ivitalCare.highlights.map((item, idx) => (
                <div key={idx} className="flex gap-6 p-6 bg-ivital-light rounded-3xl hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-ivital-pink/10 text-ivital-pink rounded-2xl flex items-center justify-center flex-shrink-0">
                    {highlightIcons[idx]}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-ivital-dark mb-1">{item.title}</h4>
                    <p className="text-ivital-gray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                alt="Healthcare"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black text-ivital-dark">{t.ivitalCare.trustNurses}</p>
                  <p className="text-sm text-ivital-gray">{t.ivitalCare.trustNursesLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="section-padding bg-ivital-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionHeader subtitle={t.ivitalCare.packagesSubtitle} title={t.ivitalCare.packagesTitle} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.ivitalCare.packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className={`relative p-10 rounded-[3rem] space-y-8 border transition-all ${
                  idx === 1
                    ? 'bg-ivital-dark text-white border-ivital-dark shadow-2xl scale-105'
                    : 'bg-white border-gray-100 shadow-sm hover:shadow-xl'
                }`}
              >
                {idx === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-ivital-pink to-ivital-blue rounded-full text-white text-xs font-bold uppercase tracking-wider">
                    {t.ivitalCare.popularTag}
                  </div>
                )}
                <div>
                  <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
                  <p className={idx === 1 ? 'text-gray-400' : 'text-ivital-gray'}>{pkg.description}</p>
                </div>
                <div className="space-y-4">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className={idx === 1 ? 'text-ivital-pink' : 'text-ivital-pink'} />
                      <span className={`text-sm font-semibold ${idx === 1 ? 'text-gray-300' : 'text-ivital-dark'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  idx === 1
                    ? 'bg-gradient-to-r from-ivital-pink to-ivital-blue text-white hover:opacity-90'
                    : 'bg-ivital-light text-ivital-dark hover:bg-ivital-pink hover:text-white'
                }`}>
                  {t.ivitalCare.packageCta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToActionBanner
        bgColor="bg-ivital-pink"
        title={<>{t.ivitalCare.ctaTitle}</>}
        description={t.ivitalCare.ctaDescription}
      >
        <button className="px-10 py-5 bg-white text-ivital-pink rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          {t.ivitalCare.ctaDownloadIos}
        </button>
        <button className="px-10 py-5 bg-ivital-dark text-white rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          {t.ivitalCare.ctaDownloadAndroid}
        </button>
        <Link to="/contact" className="px-10 py-5 border-2 border-white text-white rounded-full font-black text-lg hover:bg-white hover:text-ivital-pink transition-all">
          {t.ivitalCare.ctaContact}
        </Link>
      </CallToActionBanner>
    </div>
  );
};
