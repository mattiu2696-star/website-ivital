import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Bot, Database, MessageCircle, BellRing,
  HeadphonesIcon, ShieldCheck, Zap, Star,
  Send, Activity, ArrowRight, CheckCircle2,
} from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { CallToActionBanner } from './ui/CallToActionBanner';
import { FloatingStatCard } from './ui/FloatingStatCard';
import { useLanguage } from '../i18n/LanguageContext';

const featureIcons = [
  <HeadphonesIcon className="text-ivital-pink" size={28} />,
  <Bot className="text-ivital-blue" size={28} />,
  <BellRing className="text-ivital-pink" size={28} />,
  <Star className="text-ivital-blue" size={28} />,
];

const stepIcons = [
  <Database className="text-white" size={28} />,
  <Bot className="text-white" size={28} />,
  <MessageCircle className="text-white" size={28} />,
  <BellRing className="text-white" size={28} />,
];

const highlightIcons = [
  <HeadphonesIcon size={24} />,
  <Zap size={24} />,
  <Star size={24} />,
  <ShieldCheck size={24} />,
];

type AIChatCopy = {
  title: string;
  online: string;
  botMessage1: string;
  userMessage: string;
  botMessage2: string;
  placeholder: string;
};

function AIChatVisual({ tc }: { tc: AIChatCopy }) {
  return (
    <div className="bg-white rounded-[3rem] shadow-2xl p-8 border border-gray-100 w-full max-w-sm mx-auto">
      <div className="flex items-center gap-3 pb-5 border-b border-gray-100 mb-5">
        <div className="w-10 h-10 bg-gradient-to-br from-ivital-pink to-ivital-blue rounded-2xl flex items-center justify-center">
          <Bot size={20} className="text-white" />
        </div>
        <div>
          <p className="font-extrabold text-ivital-dark">{tc.title}</p>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="text-xs text-green-600 font-semibold">{tc.online}</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-ivital-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Bot size={14} className="text-ivital-pink" />
          </div>
          <div className="bg-ivital-light rounded-2xl rounded-tl-sm p-3 max-w-[200px]">
            <p className="text-xs text-ivital-dark">{tc.botMessage1}</p>
          </div>
        </div>
        <div className="flex gap-3 justify-end">
          <div className="bg-ivital-pink/10 rounded-2xl rounded-tr-sm p-3 max-w-[180px]">
            <p className="text-xs text-ivital-dark">{tc.userMessage}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-ivital-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Bot size={14} className="text-ivital-pink" />
          </div>
          <div className="bg-ivital-light rounded-2xl rounded-tl-sm p-3 max-w-[220px]">
            <p className="text-xs text-ivital-dark">{tc.botMessage2}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-ivital-light rounded-2xl p-3 mt-2">
          <p className="text-xs text-ivital-gray flex-1">{tc.placeholder}</p>
          <div className="w-7 h-7 bg-ivital-pink rounded-xl flex items-center justify-center">
            <Send size={12} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export const IVitalAI = () => {
  const { t } = useLanguage();
  const tc = t.ivitalAI;

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
            <Bot size={16} /> {tc.heroBadge}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-ivital-dark leading-tight">
            iVital <span className="gradient-text">AI</span>
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
          <AIChatVisual tc={tc.demo} />
          <FloatingStatCard
            icon={<Activity size={24} />}
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

      {/* What is iVital AI */}
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
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                alt="iVital AI"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-ivital-pink/10 text-ivital-pink rounded-2xl flex items-center justify-center">
                  <CheckCircle2 size={24} />
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
