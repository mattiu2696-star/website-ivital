import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Database, ShieldCheck, Syringe, ScanSearch, FlaskConical, ArrowRight, Clock } from 'lucide-react';
import { CallToActionBanner } from './ui/CallToActionBanner';
import { SectionHeader } from './ui/SectionHeader';
import { useLanguage } from '../i18n/LanguageContext';
import { FloatingStatCard } from './ui/FloatingStatCard';

function getProduct(t: any, name: string) {
  return t.ecosystem.products.find((p: any) => p.title.toLowerCase() === name.toLowerCase());
}

export const IVitalLab = () => {
  const { t, locale } = useLanguage();
  const product = getProduct(t, 'iVital Lab');
  const features: string[] = product?.features ?? [];

  const featureIcons = [
    <Syringe size={22} />,
    <Clock size={22} />,
    <ScanSearch size={22} />,
    <Database size={22} />,
  ];

  const featureDescs = locale === 'en'
    ? [
        'A certified professional collects your sample at home — no clinic visit required.',
        'Get lab results delivered digitally within hours, not days.',
        'Advanced AI highlights key findings and flags values outside normal ranges.',
        'Your full test history is securely encrypted and accessible whenever you need it.',
      ]
    : [
        'Chuyên gia được chứng nhận lấy mẫu tại nhà bạn — không cần đến phòng khám.',
        'Nhận kết quả xét nghiệm dạng số trong vài giờ, không phải vài ngày.',
        'AI nâng cao làm nổi bật các phát hiện quan trọng và đánh dấu giá trị ngoài ngưỡng bình thường.',
        'Toàn bộ lịch sử xét nghiệm được mã hóa bảo mật và truy cập bất cứ lúc nào.',
      ];

  const steps = locale === 'en'
    ? [
        { title: 'Request testing', desc: 'Choose the service and schedule home sample collection.' },
        { title: 'Sample collection', desc: 'Professional collection with full traceability.' },
        { title: 'AI analysis', desc: 'AI interprets results and highlights key patterns.' },
        { title: 'Store & share', desc: 'Securely store lifetime records for future care.' },
      ]
    : [
        { title: 'Chọn xét nghiệm', desc: 'Chọn dịch vụ và đặt lịch lấy mẫu tại nhà.' },
        { title: 'Lấy mẫu', desc: 'Lấy mẫu chuyên nghiệp với quy trình có thể truy vết.' },
        { title: 'Phân tích bằng AI', desc: 'AI diễn giải kết quả và làm nổi bật các dấu hiệu quan trọng.' },
        { title: 'Lưu trữ & chia sẻ', desc: 'Lưu trữ an toàn hồ sơ lâu dài để phục vụ theo dõi sức khỏe.' },
      ];

  const heroStats = locale === 'en'
    ? [
        { value: '2h', label: 'Result time' },
        { value: '50+', label: 'Test types' },
        { value: '99%', label: 'Accuracy' },
        { value: '∞', label: 'Record storage' },
      ]
    : [
        { value: '2h', label: 'Thời gian có kết quả' },
        { value: '50+', label: 'Loại xét nghiệm' },
        { value: '99%', label: 'Độ chính xác' },
        { value: '∞', label: 'Lưu trữ hồ sơ' },
      ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ivital-blue/10 to-transparent -z-10 blur-3xl" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ivital-blue/10 text-ivital-blue rounded-full text-sm font-bold">
              <FlaskConical size={16} /> iVital Lab
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-ivital-dark leading-tight">
              iVital <span className="text-ivital-blue">Lab</span>
            </h1>
            <p className="text-xl text-ivital-gray max-w-xl leading-relaxed">
              {product?.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {features.slice(0, 2).map((f, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-ivital-light rounded-full border border-gray-100 text-sm font-semibold text-ivital-dark">
                  <CheckCircle2 size={14} className="text-ivital-blue" /> {f}
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
              <div className="bg-gradient-to-br from-ivital-blue/5 via-white to-sky-50 rounded-[3rem] p-10 border border-gray-100 shadow-xl">
                <div className="grid grid-cols-2 gap-5">
                  {heroStats.map((s, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 text-center">
                      <p className="text-3xl font-black text-ivital-blue">{s.value}</p>
                      <p className="text-sm text-ivital-gray font-semibold mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <FloatingStatCard
                icon={<ShieldCheck size={24} />}
                iconClassName="bg-ivital-blue/10 text-ivital-blue"
                label={locale === 'en' ? 'Security' : 'Bảo mật'}
                value={locale === 'en' ? 'Encrypted' : 'Mã hóa'}
                className="absolute -top-6 -right-6"
              />
              <FloatingStatCard
                icon={<ScanSearch size={24} />}
                iconClassName="bg-ivital-pink/10 text-ivital-pink"
                label={locale === 'en' ? 'AI Analysis' : 'Phân tích AI'}
                value={locale === 'en' ? 'Instant' : 'Tức thì'}
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
              title={locale === 'en' ? 'iVital Lab Features' : 'Tính năng iVital Lab'}
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
                <div className="w-12 h-12 bg-ivital-blue/10 text-ivital-blue rounded-2xl flex items-center justify-center mb-5">
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
              title={locale === 'en' ? 'From sample to results' : 'Từ mẫu đến kết quả'}
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
                <div className="w-10 h-10 bg-ivital-blue text-white rounded-full flex items-center justify-center font-black text-sm mb-5">
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
        bgColor="bg-ivital-blue"
        title={<>{t.ecosystem.ctaTitle1} <br /> {t.ecosystem.ctaTitle2}</>}
        description={t.ecosystem.ctaDescription}
      >
        <Link to="/contact" className="px-10 py-5 bg-white text-ivital-blue rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          {t.ecosystem.ctaContact}
        </Link>
        <Link to="/ecosystem" className="px-10 py-5 bg-ivital-dark text-white rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          {t.nav.ecosystem}
        </Link>
      </CallToActionBanner>
    </div>
  );
};
