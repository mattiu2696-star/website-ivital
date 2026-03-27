import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, HeartPulse, ShieldCheck, Gauge, Heart, Timer, BellRing, ArrowRight, Activity } from 'lucide-react';
import { CallToActionBanner } from './ui/CallToActionBanner';
import { SectionHeader } from './ui/SectionHeader';
import { useLanguage } from '../i18n/LanguageContext';
import { FloatingStatCard } from './ui/FloatingStatCard';

function getProduct(t: any, name: string) {
  return t.ecosystem.products.find((p: any) => p.title.toLowerCase() === name.toLowerCase());
}

export const IVitalBP = () => {
  const { t, locale } = useLanguage();
  const product = getProduct(t, 'iVital BP');
  const features: string[] = product?.features ?? [];

  const featureIcons = [
    <Heart size={22} />,
    <BellRing size={22} />,
    <Gauge size={22} />,
    <Activity size={22} />,
  ];

  const featureDescs = locale === 'en'
    ? [
        'Track systolic and diastolic readings around the clock for a complete picture of your heart health.',
        'Get instant notifications when readings exceed safe thresholds so you can act quickly.',
        'Beautiful, easy-to-read trend charts that make your data meaningful at a glance.',
        'Pair seamlessly with your smartwatch or BP cuff for automatic, hands-free measurement.',
      ]
    : [
        'Theo dõi chỉ số huyết áp tâm thu và tâm trương liên tục để có cái nhìn toàn diện về sức khỏe tim mạch.',
        'Nhận thông báo ngay khi chỉ số vượt ngưỡng an toàn để bạn có thể xử lý kịp thời.',
        'Biểu đồ xu hướng trực quan, dễ đọc giúp bạn hiểu dữ liệu ngay lập tức.',
        'Kết nối liền mạch với đồng hồ thông minh hoặc máy đo huyết áp để đo tự động.',
      ];

  const steps = locale === 'en'
    ? [
        { title: 'Connect device', desc: 'Pair your wearable or BP monitor with iVital BP.' },
        { title: 'Monitor 24/7', desc: 'Track blood pressure readings and trends over time.' },
        { title: 'Get alerts', desc: 'Early warnings when readings enter abnormal ranges.' },
        { title: 'Improve habits', desc: 'Actionable recommendations to support healthier routines.' },
      ]
    : [
        { title: 'Kết nối thiết bị', desc: 'Ghép nối thiết bị đo hoặc vòng đeo thông minh với iVital BP.' },
        { title: 'Theo dõi 24/7', desc: 'Theo dõi chỉ số huyết áp và xu hướng theo thời gian.' },
        { title: 'Nhận cảnh báo', desc: 'Thông báo sớm khi chỉ số vượt ngưỡng bất thường.' },
        { title: 'Cải thiện thói quen', desc: 'Gợi ý điều chỉnh để nâng sức khỏe bền vững.' },
      ];

  const heroStats = locale === 'en'
    ? [
        { value: '24/7', label: 'Monitoring' },
        { value: '≤2min', label: 'Alert time' },
        { value: '99%', label: 'Accuracy' },
        { value: '5+', label: 'Device brands' },
      ]
    : [
        { value: '24/7', label: 'Theo dõi liên tục' },
        { value: '≤2min', label: 'Thời gian cảnh báo' },
        { value: '99%', label: 'Độ chính xác' },
        { value: '5+', label: 'Thương hiệu thiết bị' },
      ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ivital-pink/10 to-transparent -z-10 blur-3xl" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ivital-pink/10 text-ivital-pink rounded-full text-sm font-bold">
              <HeartPulse size={16} /> iVital BP
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-ivital-dark leading-tight">
              iVital <span className="gradient-text">BP</span>
            </h1>
            <p className="text-xl text-ivital-gray max-w-xl leading-relaxed">
              {product?.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {features.slice(0, 2).map((f, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-ivital-light rounded-full border border-gray-100 text-sm font-semibold text-ivital-dark">
                  <CheckCircle2 size={14} className="text-ivital-pink" /> {f}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                {t.ecosystem.ctaContact} <ArrowRight size={20} />
              </Link>
              <Link to="/ecosystem" className="btn-outline">{t.nav.ecosystem}</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative flex justify-center py-10"
          >
            <div className="relative w-full max-w-md">
              <div className="bg-gradient-to-br from-ivital-pink/5 via-white to-rose-50 rounded-[3rem] p-10 border border-gray-100 shadow-xl">
                <div className="grid grid-cols-2 gap-5">
                  {heroStats.map((s, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 text-center">
                      <p className="text-3xl font-black text-ivital-pink">{s.value}</p>
                      <p className="text-sm text-ivital-gray font-semibold mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <FloatingStatCard
                icon={<BellRing size={24} />}
                iconClassName="bg-ivital-pink/10 text-ivital-pink"
                label={locale === 'en' ? 'Alerts' : 'Cảnh báo'}
                value={locale === 'en' ? 'Real-time' : 'Thời gian thực'}
                className="absolute -top-6 -right-6"
              />
              <FloatingStatCard
                icon={<ShieldCheck size={24} />}
                iconClassName="bg-ivital-blue/10 text-ivital-blue"
                label={locale === 'en' ? 'Privacy' : 'Bảo mật'}
                value={locale === 'en' ? 'Protected' : 'Được bảo vệ'}
                className="absolute -bottom-6 -left-6"
                style={{ animationDelay: '1.5s' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-ivital-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <SectionHeader
              subtitle={t.ecosystem.detailSubtitle}
              title={locale === 'en' ? 'iVital BP Features' : 'Tính năng iVital BP'}
              centered
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-ivital-pink/10 text-ivital-pink rounded-2xl flex items-center justify-center mb-5">
                  {featureIcons[idx] ?? <CheckCircle2 size={22} />}
                </div>
                <h4 className="text-xl font-bold text-ivital-dark mb-2">{feature}</h4>
                <p className="text-ivital-gray leading-relaxed">{featureDescs[idx]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <SectionHeader
              subtitle={locale === 'en' ? 'How it works' : 'Quy trình hoạt động'}
              title={locale === 'en' ? 'Know your numbers' : 'Nắm rõ chỉ số của bạn'}
              centered
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-ivital-light rounded-3xl p-7 border border-gray-100"
              >
                <div className="w-10 h-10 bg-ivital-pink text-white rounded-full flex items-center justify-center font-black text-sm mb-5">
                  {idx + 1}
                </div>
                <h4 className="text-lg font-bold text-ivital-dark mb-2">{s.title}</h4>
                <p className="text-ivital-gray text-sm leading-relaxed">{s.desc}</p>
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
        <Link to="/ecosystem" className="px-10 py-5 bg-ivital-dark text-white rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          {t.nav.ecosystem}
        </Link>
      </CallToActionBanner>
    </div>
  );
};
