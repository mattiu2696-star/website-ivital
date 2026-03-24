import { motion } from 'motion/react';
import { Smartphone, ShieldCheck, Activity, Heart, Zap, Database, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import { PageProps } from '../types';
import { SectionHeader } from './ui/SectionHeader';
import { CallToActionBanner } from './ui/CallToActionBanner';
import { FloatingStatCard } from './ui/FloatingStatCard';

const features = [
  { icon: <Zap className="text-ivital-pink" size={32} />, title: 'AI Assistant', description: 'Trợ lý ảo thông minh tư vấn sức khỏe 24/7 dựa trên dữ liệu cá nhân.' },
  { icon: <Database className="text-ivital-blue" size={32} />, title: 'Hồ sơ số hóa', description: 'Lưu trữ toàn bộ lịch sử khám bệnh, xét nghiệm và đơn thuốc an toàn.' },
  { icon: <Smartphone className="text-ivital-pink" size={32} />, title: 'Kết nối bác sĩ', description: 'Đặt lịch khám và tư vấn trực tuyến với các bác sĩ đầu ngành.' },
  { icon: <ShieldCheck className="text-ivital-blue" size={32} />, title: 'Bảo mật tuyệt đối', description: 'Dữ liệu được mã hóa chuẩn y tế, đảm bảo quyền riêng tư người dùng.' },
];

const userBenefits = [
  'Tiết kiệm 50% thời gian chờ đợi tại bệnh viện.',
  'Theo dõi sức khỏe chủ động mọi lúc mọi nơi.',
  'Nhận cảnh báo sớm về các nguy cơ bệnh lý.',
  'Tiếp cận dịch vụ y tế chất lượng cao với chi phí tối ưu.',
];

const partnerBenefits = [
  'Số hóa quy trình quản lý bệnh nhân và hồ sơ bệnh án.',
  'Tăng cường khả năng chẩn đoán chính xác nhờ hỗ trợ từ AI.',
  'Mở rộng mạng lưới tiếp cận bệnh nhân tiềm năng.',
  'Nâng cao trải nghiệm dịch vụ và uy tín thương hiệu.',
];

const otherProjects = [
  { title: 'iVital Lab', icon: <Activity size={32} />, image: 'https://picsum.photos/seed/lab-2/800/600', description: 'Hệ thống xét nghiệm thông minh ứng dụng AI.' },
  { title: 'iVital Pharmacy', icon: <Building2 size={32} />, image: 'https://picsum.photos/seed/pharmacy-2/800/600', description: 'Chuỗi nhà thuốc số hóa toàn diện.' },
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
            Trợ lý sức khỏe cá nhân toàn diện, kết nối bác sĩ và bệnh nhân mọi lúc mọi nơi thông qua nền tảng di động thông minh.
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
          <div className="relative z-10 w-72 md:w-80 h-[600px] bg-ivital-dark rounded-[3.5rem] p-4 shadow-2xl border-8 border-gray-800">
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/app-ui/600/1200" 
                alt="App UI" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ivital-pink/20 to-transparent" />
            </div>
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
                <div key={idx} className="flex items-center gap-4 p-6 bg-ivital-dark text-white rounded-3xl">
                  <CheckCircle2 className="text-ivital-blue flex-shrink-0" size={24} />
                  <p className="text-lg font-bold">{benefit}</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                  referrerPolicy="no-referrer"
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
