import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Smartphone, Zap, Activity, Heart, ShieldCheck, Database, Globe, CheckCircle2 } from 'lucide-react';
import { PageProps } from '../types';
import { SectionHeader } from './ui/SectionHeader';
import { CallToActionBanner } from './ui/CallToActionBanner';

const coreFeatures = [
  { title: 'Dữ liệu tập trung', icon: <Database size={24} />, description: 'Mọi chỉ số sức khỏe được lưu trữ an toàn tại một nơi duy nhất.' },
  { title: 'Phân tích thời gian thực', icon: <Activity size={24} />, description: 'Hệ thống AI xử lý dữ liệu liên tục để đưa ra cảnh báo kịp thời.' },
  { title: 'Kết nối đa nền tảng', icon: <Globe size={24} />, description: 'Tương thích với mọi thiết bị và hệ thống y tế hiện hành.' },
];

const ecosystemProducts = [
  {
    title: 'iVital Care',
    icon: <Smartphone size={32} />,
    description: 'Ứng dụng di động đặt điều dưỡng chăm sóc sức khoẻ, kết nối điều dưỡng và bệnh nhân mọi lúc mọi nơi.',
    features: ['Kết nối điều dưỡng nhanh chóng', 'Đặt lịch chăm sóc tại nhà', 'Hồ sơ sức khoẻ số', 'Theo dõi quá trình điều trị'],
  },
  {
    title: 'iVital AI',
    icon: <Zap size={32} />,
    description: 'Trợ lý ảo thông minh hỗ trợ giải đáp thắc mắc y tế và đưa ra các lời khuyên sức khỏe cá nhân hóa.',
    features: ['Tư vấn sức khỏe 24/7', 'Dự đoán nguy cơ bệnh lý', 'Nhắc lịch uống thuốc', 'Phân tích chế độ dinh dưỡng'],
  },
  {
    title: 'iVital Lab',
    icon: <Activity size={32} />,
    description: 'Hệ thống xét nghiệm công nghệ cao, tự động hóa quy trình và phân tích kết quả bằng AI.',
    features: ['Xét nghiệm tại nhà', 'Kết quả nhanh chóng', 'Phân tích AI chuyên sâu', 'Lưu trữ kết quả trọn đời'],
  },
  {
    title: 'iVital BP',
    icon: <Heart size={32} />,
    description: 'App theo dõi huyết áp và sức khỏe tim mạch, cảnh báo sớm các nguy cơ tiềm ẩn.',
    features: ['Theo dõi huyết áp liên tục', 'Cảnh báo chỉ số bất thường', 'Biểu đồ sức khoẻ trực quan', 'Kết nối thiết bị đeo thông minh'],
  },
];

export const Ecosystem = ({ onPageChange }: PageProps) => {
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
          <h2 className="text-sm font-bold text-ivital-pink uppercase tracking-widest">Hệ sinh thái iVital</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Kết nối <span className="gradient-text">mọi giải pháp</span> <br /> trong một điểm chạm
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Chúng tôi xây dựng một hệ sinh thái y tế số khép kín, nơi dữ liệu được kết nối và phân tích để mang lại trải nghiệm chăm sóc sức khỏe liền mạch.
          </p>
        </motion.div>
      </section>

      {/* Interactive Diagram Section */}
      <section className="section-padding bg-ivital-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-12">
            <SectionHeader
              subtitle="Cấu trúc hệ thống"
              title="iVital Core AI"
              description="Trái tim của hệ sinh thái là iVital Core AI - bộ não xử lý dữ liệu khổng lồ từ mọi điểm chạm để đưa ra những phân tích và dự đoán chính xác nhất."
              centered={false}
              titleColor="text-white"
              descriptionColor="text-gray-400"
            />

            <div className="space-y-6">
              {coreFeatures.map((item, idx) => (
                <div key={idx} className="flex gap-6 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 bg-ivital-pink/20 text-ivital-pink rounded-2xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
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
            <SectionHeader subtitle="Chi tiết giải pháp" title="Hệ sinh thái toàn diện" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecosystemProducts.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-ivital-light p-12 rounded-[3rem] space-y-8 border border-gray-100"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white text-ivital-pink rounded-2xl flex items-center justify-center shadow-sm">
                    {item.icon}
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
        title={<>Sẵn sàng kết nối cùng <br /> hệ sinh thái iVital?</>}
        description="Chúng tôi luôn sẵn sàng hỗ trợ bạn trên hành trình chăm sóc sức khỏe toàn diện."
      >
        <Link to="/contact" className="px-10 py-5 bg-white text-ivital-pink rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          Liên hệ ngay
        </Link>
        <Link to="/projects" className="px-10 py-5 bg-ivital-dark text-white rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          Xem các dự án
        </Link>
      </CallToActionBanner>
    </div>
  );
};
