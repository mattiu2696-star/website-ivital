import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Activity, ShieldCheck, Zap, Heart, Database, Smartphone, Users } from 'lucide-react';
import { PageProps } from '../types';
import { SectionHeader } from './ui/SectionHeader';
import { CallToActionBanner } from './ui/CallToActionBanner';
import { FloatingStatCard } from './ui/FloatingStatCard';

const visionItems = [
  { icon: <Database className="text-ivital-pink" size={32} />, title: 'Dữ liệu lớn (Big Data)', description: 'Phân tích hàng triệu điểm dữ liệu để đưa ra dự đoán chính xác về tình trạng sức khỏe.' },
  { icon: <Zap className="text-ivital-blue" size={32} />, title: 'Trí tuệ nhân tạo (AI)', description: 'Hệ thống AI thông minh hỗ trợ chẩn đoán và tư vấn sức khỏe 24/7.' },
  { icon: <Smartphone className="text-ivital-pink" size={32} />, title: 'Kết nối vạn vật (IoT)', description: 'Tích hợp mượt mà với các thiết bị đeo thông minh để theo dõi chỉ số sinh tồn.' },
];

const ecosystemPreviewItems = [
  { title: 'iVital Care', icon: <Smartphone size={24} />, description: 'App đặt điều dưỡng chăm sóc sức khoẻ' },
  { title: 'iVital AI', icon: <Zap size={24} />, description: 'Trợ lý ảo thông minh' },
  { title: 'iVital Lab', icon: <Activity size={24} />, description: 'Xét nghiệm công nghệ cao' },
  { title: 'iVital BP', icon: <Heart size={24} />, description: 'App theo dõi sức khoẻ' },
];

const differentiators = [
  { title: 'Công nghệ hàng đầu', description: 'Ứng dụng những xu hướng công nghệ mới nhất thế giới.' },
  { title: 'Đội ngũ chuyên gia', description: 'Sự kết hợp giữa các kỹ sư và bác sĩ đầu ngành.' },
  { title: 'Cá nhân hóa tối đa', description: 'Giải pháp được thiết kế riêng cho từng thể trạng.' },
];

const projectShowcaseSmall = [
  { image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80', title: 'iVital Lab', description: 'Hệ thống xét nghiệm thông minh với kết quả được phân tích bởi AI.' },
  { image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80', title: 'iVital BP', description: 'App theo dõi huyết áp và sức khỏe tim mạch' },
];

export const Home = ({ onPageChange }: PageProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D tilt for image card
  const rotateX = useTransform(smoothY, [0, 1], [8, -8]);
  const rotateY = useTransform(smoothX, [0, 1], [-8, 8]);

  // Parallax offsets for floating elements
  const parallax1X = useTransform(smoothX, [0, 1], [-20, 20]);
  const parallax1Y = useTransform(smoothY, [0, 1], [-15, 15]);
  const parallax2X = useTransform(smoothX, [0, 1], [15, -15]);
  const parallax2Y = useTransform(smoothY, [0, 1], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="section-padding flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden"
        style={{ perspective: '1200px' }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ivital-pink/10 to-transparent -z-10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-ivital-blue/10 to-transparent -z-10 blur-3xl" />

        {/* 3D Floating Hearts */}
        {[
          { size: 60, top: '8%', left: '6%', color: '#FF6B9D', opacity: 0.18, duration: 14, rotateEnd: 20 },
          { size: 35, top: '25%', left: '18%', color: '#4A90E2', opacity: 0.15, duration: 18, rotateEnd: -15 },
          { size: 80, top: '15%', right: '12%', color: '#FF6B9D', opacity: 0.12, duration: 20, rotateEnd: 25 },
          { size: 28, top: '68%', right: '22%', color: '#a855f7', opacity: 0.16, duration: 12, rotateEnd: -20 },
          { size: 50, top: '55%', left: '8%', color: '#4A90E2', opacity: 0.13, duration: 22, rotateEnd: 15 },
          { size: 40, top: '42%', left: '52%', color: '#FF6B9D', opacity: 0.10, duration: 16, rotateEnd: -18 },
          { size: 24, top: '75%', left: '45%', color: '#a855f7', opacity: 0.14, duration: 13, rotateEnd: 22 },
        ].map((heart, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute -z-10"
            style={{
              top: heart.top,
              left: (heart as any).left,
              right: (heart as any).right,
              x: i % 2 === 0 ? parallax1X : parallax2X,
              y: i % 2 === 0 ? parallax1Y : parallax2Y,
            }}
            animate={{
              rotateX: [0, heart.rotateEnd, 0],
              rotateY: [0, -heart.rotateEnd, 0],
              scale: [1, 1.15, 1, 0.9, 1],
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg width={heart.size} height={heart.size} viewBox="0 0 24 24" fill={heart.color} opacity={heart.opacity}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}

        {/* Heartbeat / Pulse Lines */}
        {[
          { width: 200, top: '20%', left: '25%', color: '#FF6B9D', opacity: 0.12, duration: 10 },
          { width: 280, top: '50%', right: '5%', color: '#4A90E2', opacity: 0.10, duration: 12 },
          { width: 160, top: '72%', left: '30%', color: '#a855f7', opacity: 0.08, duration: 14 },
        ].map((pulse, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute -z-10"
            style={{
              top: pulse.top,
              left: (pulse as any).left,
              right: (pulse as any).right,
              x: i % 2 === 0 ? parallax2X : parallax1X,
              y: i % 2 === 0 ? parallax2Y : parallax1Y,
            }}
            animate={{
              opacity: [pulse.opacity, pulse.opacity * 2.5, pulse.opacity],
              scaleX: [1, 1.05, 1],
            }}
            transition={{
              duration: pulse.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg width={pulse.width} height={pulse.width * 0.25} viewBox="0 0 200 50" fill="none" stroke={pulse.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity={pulse.opacity}>
              <polyline points="0,25 30,25 40,25 50,10 60,40 70,5 80,45 90,25 100,25 110,25 120,20 130,30 140,25 170,25 200,25" />
            </svg>
          </motion.div>
        ))}

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
          style={{ x: parallax2X }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ivital-pink/10 text-ivital-pink rounded-full text-sm font-bold animate-float">
            <Activity size={16} /> Tiên phong công nghệ y tế
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-ivital-dark">
            Hệ sinh thái <br />
            <span className="gradient-text">Chăm sóc sức khỏe</span> toàn diện
          </h1>
          <p className="text-xl text-ivital-gray max-w-xl leading-relaxed">
            iVital Technology kết hợp sức mạnh của AI và dữ liệu lớn để mang lại giải pháp chăm sóc sức khỏe cá nhân hóa, hiệu quả và dễ tiếp cận cho mọi người.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button onClick={() => onPageChange('ecosystem')} className="btn-primary flex items-center gap-2">
              Khám phá hệ sinh thái <ArrowRight size={20} />
            </button>
            <button onClick={() => onPageChange('about')} className="btn-outline">
              Về chúng tôi
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80" 
              alt="Health Tech" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ivital-pink/10 to-transparent pointer-events-none" />
          </motion.div>
          <motion.div
            className="absolute -top-10 -right-10"
            style={{ x: parallax1X, y: parallax1Y, translateZ: 60 }}
          >
            <FloatingStatCard
              icon={<ShieldCheck size={24} />}
              iconClassName="bg-green-100 text-green-600"
              label="Bảo mật"
              value="100% An toàn"
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-10 -left-10"
            style={{ x: parallax2X, y: parallax2Y, translateZ: 40 }}
          >
            <FloatingStatCard
              icon={<Activity size={24} />}
              iconClassName="bg-blue-100 text-blue-600"
              label="Theo dõi"
              value="Thời gian thực"
              style={{ animationDelay: '1.5s' }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Strategic Vision */}
      <section className="section-padding bg-ivital-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionHeader subtitle="Tầm nhìn chiến lược" title="Định hình tương lai y tế số" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionItems.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-ivital-gray leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <SectionHeader subtitle="Dự án trọng điểm" title="Những giải pháp thay đổi cuộc sống" centered={false} />
            <button onClick={() => onPageChange('projects')} className="btn-outline flex items-center gap-2">
              Xem tất cả dự án <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer shadow-lg"
              onClick={() => onPageChange('projects')}
            >
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80" 
                alt="iVital Care" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ivital-dark/90 via-ivital-dark/20 to-transparent p-12 flex flex-col justify-end">
                <div className="space-y-4">
                  <span className="px-4 py-1 bg-ivital-pink text-white rounded-full text-xs font-bold uppercase tracking-wider">Ứng dụng di động</span>
                  <h4 className="text-4xl font-bold text-white">iVital Care</h4>
                  <p className="text-gray-300 max-w-md">Trợ lý sức khỏe cá nhân toàn diện, kết nối điều dưỡng và bệnh nhân mọi lúc mọi nơi.</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
              {projectShowcaseSmall.map((project, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="group relative h-[236px] rounded-[3rem] overflow-hidden cursor-pointer shadow-lg"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ivital-dark/80 to-transparent p-8 flex flex-col justify-end">
                    <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Preview */}
      <section className="section-padding bg-ivital-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-sm font-bold text-ivital-pink uppercase tracking-widest">Hệ sinh thái iVital</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">Mọi giải pháp trong một điểm chạm</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Chúng tôi xây dựng một vòng lặp khép kín từ phòng ngừa, chẩn đoán đến điều trị và phục hồi chức năng.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-1/2">
              {ecosystemPreviewItems.map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 bg-ivital-pink/20 text-ivital-pink rounded-2xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                <div className="absolute inset-0 bg-ivital-pink/20 blur-[100px] rounded-full animate-pulse" />
                <div className="relative z-10 w-full h-full bg-gradient-to-br from-ivital-pink to-ivital-blue rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-center p-8">
                    <span className="text-6xl md:text-8xl font-black text-white opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">V</span>
                    <h4 className="text-3xl md:text-5xl font-black text-white relative z-10">iVital</h4>
                    <p className="text-white/80 font-bold mt-2 relative z-10">CORE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="flex-1 space-y-8">
            <SectionHeader
              subtitle="Tại sao chọn iVital?"
              title="Chúng tôi khác biệt bởi sự tận tâm và công nghệ"
              description="iVital không chỉ là một công ty công nghệ, chúng tôi là người bạn đồng hành tin cậy trên hành trình chăm sóc sức khỏe của bạn."
              centered={false}
              descriptionColor="text-ivital-gray"
            />
            <div className="space-y-6">
              {differentiators.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-ivital-light rounded-full flex items-center justify-center text-ivital-pink font-black text-xl">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-ivital-gray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="bg-ivital-pink p-8 rounded-[2.5rem] text-white space-y-4">
                  <Users size={40} />
                  <p className="text-4xl font-black">10.000+</p>
                  <p className="font-bold opacity-80">Người dùng tin tưởng</p>
                </div>
                <div className="bg-ivital-light p-8 rounded-[2.5rem] space-y-4">
                  <Activity size={40} className="text-ivital-blue" />
                  <p className="text-4xl font-black text-ivital-dark">50+</p>
                  <p className="font-bold text-ivital-gray">Đối tác y tế</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-ivital-dark p-8 rounded-[2.5rem] text-white space-y-4">
                  <ShieldCheck size={40} className="text-ivital-pink" />
                  <p className="text-4xl font-black">99%</p>
                  <p className="font-bold opacity-80">Độ chính xác</p>
                </div>
                <div className="bg-ivital-blue p-8 rounded-[2.5rem] text-white space-y-4">
                  <Heart size={40} />
                  <p className="text-4xl font-black">24/7</p>
                  <p className="font-bold opacity-80">Hỗ trợ tận tâm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToActionBanner
        bgColor="bg-ivital-pink"
        title={<>Sẵn sàng để bắt đầu <br /> hành trình sức khỏe?</>}
        description="Hãy để iVital cùng bạn kiến tạo một cuộc sống khỏe mạnh và hạnh phúc hơn mỗi ngày."
      >
        <button onClick={() => onPageChange('contact')} className="px-10 py-5 bg-white text-ivital-pink rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          Hợp tác cùng iVital
        </button>
        <button onClick={() => onPageChange('ecosystem')} className="px-10 py-5 bg-ivital-dark text-white rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          Khám phá thêm
        </button>
      </CallToActionBanner>
    </div>
  );
};
