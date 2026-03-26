import { motion } from 'motion/react';
import { Smartphone, ShieldCheck, Activity, Heart, Zap, Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageProps } from '../types';
import { SectionHeader } from './ui/SectionHeader';
import { CallToActionBanner } from './ui/CallToActionBanner';
import { FloatingStatCard } from './ui/FloatingStatCard';

const features = [
  { icon: <Zap className="text-ivital-pink" size={32} />, title: 'AI Assistant', description: 'Trợ lý ảo thông minh tư vấn sức khỏe 24/7 dựa trên dữ liệu cá nhân.' },
  { icon: <Database className="text-ivital-blue" size={32} />, title: 'Hồ sơ số hóa', description: 'Lưu trữ toàn bộ lịch sử chăm sóc, xét nghiệm và đơn thuốc an toàn.' },
  { icon: <Smartphone className="text-ivital-pink" size={32} />, title: 'Kết nối điều dưỡng', description: 'Đặt lịch và kết nối điều dưỡng chăm sóc sức khoẻ tại nhà.' },
  { icon: <ShieldCheck className="text-ivital-blue" size={32} />, title: 'Bảo mật tuyệt đối', description: 'Dữ liệu được mã hóa chuẩn y tế, đảm bảo quyền riêng tư người dùng.' },
];

const userBenefits = [
  'Tiết kiệm 50% thời gian chờ đợi và di chuyển.',
  'Theo dõi sức khỏe chủ động mọi lúc mọi nơi.',
  'Nhận cảnh báo sớm về các nguy cơ bệnh lý.',
  'Kết nối điều dưỡng chăm sóc tại nhà nhanh chóng.',
];

const partnerBenefits = [
  'Số hóa quy trình quản lý bệnh nhân và hồ sơ bệnh án.',
  'Chẩn đoán chính xác hơn với AI.',
  'Mở rộng mạng lưới tiếp cận bệnh nhân tiềm năng.',
  'Nâng cao trải nghiệm dịch vụ và uy tín thương hiệu.',
];

const otherProjects = [
  { title: 'iVital AI', icon: <Zap size={32} />, image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80', description: 'Trợ lý ảo thông minh tư vấn sức khỏe 24/7.' },
  { title: 'iVital Lab', icon: <Activity size={32} />, image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80', description: 'Hệ thống xét nghiệm công nghệ cao ứng dụng AI.' },
  { title: 'iVital BP', icon: <Heart size={32} />, image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80', description: 'App theo dõi huyết áp và sức khỏe tim mạch.' },
];

export const Projects = ({ onPageChange }: PageProps) => {
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
            <Smartphone size={16} /> Ứng dụng di động
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-ivital-dark leading-tight">
            iVital <span className="gradient-text">Care</span>
          </h1>
          <p className="text-xl text-ivital-gray max-w-xl leading-relaxed">
            Trợ lý sức khỏe cá nhân toàn diện, kết nối điều dưỡng và bệnh nhân mọi lúc mọi nơi thông qua nền tảng di động thông minh.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn-primary flex items-center gap-2">
              Tải ứng dụng ngay <ArrowRight size={20} />
            </button>
            <button className="btn-outline">Xem demo</button>
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
                  {/* App UI built with code */}
                  <div className="pt-12 pb-6 px-5 min-h-[460px] bg-white">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-[10px] font-semibold text-gray-800 mb-4 px-1">
                      <span>9:41</span>
                      <div className="flex gap-1 items-center">
                        <div className="w-3.5 h-2 border border-gray-800 rounded-sm relative"><div className="absolute inset-[1px] right-[2px] bg-gray-800 rounded-[1px]" /></div>
                      </div>
                    </div>
                    {/* Greeting */}
                    <p className="text-[11px] text-ivital-gray">Chào buổi sáng 👋</p>
                    <p className="text-sm font-bold text-ivital-dark mb-4">Nguyễn Văn A</p>
                    {/* Health score card */}
                    <div className="bg-gradient-to-r from-ivital-pink to-ivital-blue rounded-2xl p-4 text-white mb-4">
                      <p className="text-[10px] opacity-80 mb-1">Chỉ số sức khỏe</p>
                      <div className="flex items-end justify-between">
                        <p className="text-3xl font-black">92<span className="text-sm font-bold">/100</span></p>
                        <p className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Rất tốt ✓</p>
                      </div>
                    </div>
                    {/* Quick stats */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-pink-50 rounded-xl p-3">
                        <Heart size={14} className="text-ivital-pink mb-1" />
                        <p className="text-[10px] text-ivital-gray">Nhịp tim</p>
                        <p className="text-sm font-bold">72 BPM</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-3">
                        <Activity size={14} className="text-ivital-blue mb-1" />
                        <p className="text-[10px] text-ivital-gray">Huyết áp</p>
                        <p className="text-sm font-bold">120/80</p>
                      </div>
                    </div>
                    {/* Upcoming */}
                    <p className="text-[10px] font-bold text-ivital-dark mb-2">Lịch hẹn sắp tới</p>
                    <div className="bg-ivital-light rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-ivital-pink/10 rounded-lg flex items-center justify-center">
                        <Smartphone size={14} className="text-ivital-pink" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold">Khám tổng quát</p>
                        <p className="text-[9px] text-ivital-gray">Hôm nay, 14:00</p>
                      </div>
                    </div>
                  </div>
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
            label="Nhịp tim"
            value="72 BPM"
            className="absolute top-20 -right-10"
          />
          <FloatingStatCard
            icon={<Heart size={24} />}
            iconClassName="bg-ivital-blue/10 text-ivital-blue"
            label="Sức khỏe"
            value="Rất tốt"
            className="absolute bottom-20 -left-10"
            style={{ animationDelay: '1.5s' }}
          />
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-ivital-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionHeader subtitle="Tính năng nổi bật" title="Công nghệ tiên phong cho sức khỏe" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all space-y-6"
              >
                <div className="w-16 h-16 bg-ivital-light rounded-2xl flex items-center justify-center">
                  {feature.icon}
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
            <SectionHeader subtitle="Lợi ích mang lại" title="Dành cho người dùng" centered={false} />
            <div className="space-y-6">
              {userBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-ivital-light rounded-3xl">
                  <CheckCircle2 className="text-ivital-pink flex-shrink-0" size={24} />
                  <p className="text-lg font-bold text-ivital-dark">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <SectionHeader subtitle="Hợp tác chiến lược" title="Dành cho đối tác y tế" centered={false} subtitleColor="text-ivital-blue" />
            <div className="space-y-6">
              {partnerBenefits.map((benefit, idx) => (
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
            <SectionHeader subtitle="Dự án khác" title="Khám phá các giải pháp khác" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {otherProjects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="group relative h-[400px] rounded-[3rem] overflow-hidden cursor-pointer shadow-lg"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ivital-dark/90 via-ivital-dark/20 to-transparent p-12 flex flex-col justify-end">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-lg text-white rounded-2xl flex items-center justify-center">
                      {project.icon}
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
        title={<>Trải nghiệm iVital Care <br /> ngay hôm nay</>}
        description="Tham gia cùng hàng triệu người dùng đã thay đổi cách chăm sóc sức khỏe của họ."
      >
        <button className="px-10 py-5 bg-ivital-pink text-white rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          Tải cho iOS
        </button>
        <button className="px-10 py-5 bg-white text-ivital-dark rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          Tải cho Android
        </button>
      </CallToActionBanner>
    </div>
  );
};
