import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  HeartPulse, Heart, BellRing, Gauge,
  Activity, Smartphone, ShieldCheck, Timer,
  Database, CheckCircle2, ArrowRight,
} from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { CallToActionBanner } from './ui/CallToActionBanner';
import { FloatingStatCard } from './ui/FloatingStatCard';
import { useLanguage } from '../i18n/LanguageContext';

const featureIcons = [
  <Heart className="text-ivital-pink" size={28} />,
  <BellRing className="text-ivital-blue" size={28} />,
  <Gauge className="text-ivital-pink" size={28} />,
  <Activity className="text-ivital-blue" size={28} />,
];

const stepIcons = [
  <Smartphone className="text-white" size={28} />,
  <Activity className="text-white" size={28} />,
  <BellRing className="text-white" size={28} />,
  <Heart className="text-white" size={28} />,
];

const highlightIcons = [
  <Gauge size={24} />,
  <Timer size={24} />,
  <HeartPulse size={24} />,
  <Database size={24} />,
];

type BPVisualCopy = {
  bpLabel: string;
  normal: string;
  heartRate: string;
  bodyTemp: string;
};

function BPMonitorVisual({ tc }: { tc: BPVisualCopy }) {
  return (
    <div className="bg-white rounded-[3rem] shadow-2xl p-8 border border-gray-100 w-full max-w-sm mx-auto">
      <div className="text-center space-y-5">
        <div className="w-16 h-16 bg-rose-50 rounded-full mx-auto flex items-center justify-center">
          <HeartPulse size={32} className="text-ivital-pink animate-pulse" />
        </div>
        <div>
          <p className="text-xs font-bold text-ivital-gray uppercase tracking-widest mb-3">{tc.bpLabel}</p>
          <div className="flex items-end justify-center gap-1">
            <span className="text-6xl font-black text-ivital-dark">120</span>
            <span className="text-3xl font-bold text-ivital-gray mb-2">/80</span>
            <span className="text-sm text-ivital-gray mb-1 ml-1">mmHg</span>
          </div>
          <div className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-bold">
            <CheckCircle2 size={12} /> {tc.normal}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
          <div className="text-center">
            <p className="text-xl font-black text-ivital-pink">72</p>
            <p className="text-xs text-ivital-gray font-semibold">{tc.heartRate}</p>
          </div>
          <div className="text-center border-x border-gray-100">
            <p className="text-xl font-black text-ivital-blue">98%</p>
            <p className="text-xs text-ivital-gray font-semibold">SpO2</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-black text-ivital-dark">36.5°</p>
            <p className="text-xs text-ivital-gray font-semibold">{tc.bodyTemp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const IVitalBP = () => {
  const { t } = useLanguage();
  const tc = t.ivitalBP;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding flex flex-col lg:flex-row items-center gap-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-100/60 to-transparent -z-10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ivital-pink/10 text-ivital-pink rounded-full text-sm font-bold">
            <HeartPulse size={16} /> {tc.heroBadge}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-ivital-dark leading-tight">
            iVital <span className="gradient-text">BP</span>
          </h1>
          <p className="text-xl text-ivital-gray max-w-xl leading-relaxed">
            {tc.heroDescription}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              {tc.ctaContact} <ArrowRight size={20} />
            </Link>
            <Link to="/ecosystem" className="btn-outline">{t.nav.ecosystem}</Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 relative flex justify-center py-10"
        >
          <BPMonitorVisual tc={tc.demo} />
          <FloatingStatCard
            icon={<BellRing size={24} />}
            iconClassName="bg-ivital-pink/10 text-ivital-pink"
            label={tc.stat1Label}
            value={tc.stat1Value}
            className="absolute top-4 -right-4 lg:-right-10"
          />
          <FloatingStatCard
            icon={<ShieldCheck size={24} />}
            iconClassName="bg-ivital-blue/10 text-ivital-blue"
            label={tc.stat2Label}
            value={tc.stat2Value}
            className="absolute bottom-4 -left-4 lg:-left-10"
            style={{ animationDelay: '1.5s' }}
          />
        </motion.div>
      </section>

      {/* What is iVital BP */}
      <section className="section-padding bg-ivital-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionHeader subtitle={tc.aboutSubtitle} title={tc.aboutTitle} description={tc.aboutDescription} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tc.features.map((feature, idx) => (
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
              subtitle={tc.howSubtitle}
              title={tc.howTitle}
              description={tc.howDescription}
              titleColor="text-white"
              descriptionColor="text-gray-400"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tc.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative text-center space-y-6"
              >
                <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-ivital-pink to-rose-400 rounded-3xl flex items-center justify-center shadow-lg">
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
              subtitle={tc.highlightSubtitle}
              title={tc.highlightTitle}
              centered={false}
            />
            <div className="space-y-6">
              {tc.highlights.map((item, idx) => (
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
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="iVital BP"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-ivital-pink/10 text-ivital-pink rounded-2xl flex items-center justify-center">
                  <Heart size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black text-ivital-dark">{tc.trustValue}</p>
                  <p className="text-sm text-ivital-gray">{tc.trustLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToActionBanner
        bgColor="bg-ivital-pink"
        title={<>{tc.ctaTitle}</>}
        description={tc.ctaDescription}
      >
        <Link to="/contact" className="px-10 py-5 bg-white text-ivital-pink rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          {tc.ctaContact}
        </Link>
        <Link to="/ecosystem" className="px-10 py-5 bg-ivital-dark text-white rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          {tc.ctaExplore}
        </Link>
      </CallToActionBanner>
    </div>
  );
};
