import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Users, Globe, ShieldCheck, Activity, Zap } from 'lucide-react';
import { PageProps } from '../types';
import { SectionHeader } from './ui/SectionHeader';
import { CallToActionBanner } from './ui/CallToActionBanner';

const coreValues = [
  { icon: <Award size={48} className="text-ivital-pink" />, title: 'Chất lượng hàng đầu', description: 'Cam kết mang lại những giải pháp công nghệ đạt tiêu chuẩn quốc tế.' },
  { icon: <Heart size={48} className="text-ivital-blue" />, title: 'Tận tâm vì con người', description: 'Mọi sản phẩm đều lấy sức khỏe và hạnh phúc của người dùng làm trọng tâm.' },
  { icon: <Zap size={48} className="text-ivital-pink" />, title: 'Đổi mới không ngừng', description: 'Luôn tiên phong trong việc nghiên cứu và ứng dụng các công nghệ mới nhất.' },
];

const milestones = [
  { year: '2023', title: 'Ý tưởng & nghiên cứu', description: 'Khởi nguồn ý tưởng xây dựng hệ sinh thái chăm sóc sức khỏe ứng dụng công nghệ AI.' },
  { year: '2024', title: 'Xây dựng nền tảng', description: 'Phát triển kiến trúc hệ thống, xây dựng đội ngũ và các sản phẩm cốt lõi.' },
  { year: '2025', title: 'Hoàn thiện & thử nghiệm', description: 'Hoàn thiện iVital Care, AI, Lab, BP và thử nghiệm với người dùng thực tế.' },
  { year: '2026', title: 'Chính thức ra mắt', description: 'Ra mắt hệ sinh thái iVital Technology với 4 sản phẩm, phục vụ 10,000+ người dùng.' },
];

const stats = [
  { icon: <Users />, label: 'Người dùng', value: '10.000+' },
  { icon: <ShieldCheck />, label: 'Đối tác y tế', value: '50+' },
  { icon: <Award />, label: 'Độ chính xác', value: '99%' },
  { icon: <Activity />, label: 'Hỗ trợ', value: '24/7' },
];

export const About = ({ onPageChange }: PageProps) => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-ivital-light text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-ivital-pink/5 rounded-full blur-3xl -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-sm font-bold text-ivital-pink uppercase tracking-widest">Về iVital Technology</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-ivital-dark leading-tight">
            Kiến tạo <span className="gradient-text">tương lai</span> <br /> y tế số Việt Nam
          </h1>
          <p className="text-xl text-ivital-gray leading-relaxed">
            iVital Technology là công ty tiên phong trong việc ứng dụng Trí tuệ nhân tạo (AI) và Dữ liệu lớn (Big Data) vào hệ sinh thái chăm sóc sức khỏe toàn diện.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80" 
                alt="Mission" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-[2rem] shadow-xl max-w-[220px] space-y-3">
              <div className="w-12 h-12 bg-ivital-pink text-white rounded-xl flex items-center justify-center">
                <Globe size={24} />
              </div>
              <h4 className="text-lg font-bold leading-snug">Vươn tầm thế giới</h4>
              <p className="text-ivital-gray text-xs leading-relaxed">Khát vọng đưa giải pháp y tế Việt Nam ra bản đồ công nghệ toàn cầu.</p>
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-ivital-pink">
                <Target size={32} />
                <h3 className="text-3xl font-extrabold">Sứ mệnh</h3>
              </div>
              <p className="text-lg text-ivital-gray leading-relaxed">
                Mang công nghệ y tế hiện đại nhất đến gần hơn với mọi người dân, giúp việc chăm sóc sức khỏe trở nên đơn giản, hiệu quả và cá nhân hóa tối đa.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-ivital-blue">
                <Eye size={32} />
                <h3 className="text-3xl font-extrabold">Tầm nhìn</h3>
              </div>
              <p className="text-lg text-ivital-gray leading-relaxed">
                Trở thành hệ sinh thái y tế số hàng đầu khu vực, nơi mọi dữ liệu sức khỏe được kết nối và phân tích để bảo vệ cuộc sống con người một cách chủ động.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-ivital-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionHeader subtitle="Giá trị cốt lõi" title="Nền tảng của mọi hành động" titleColor="text-white" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {coreValues.map((value, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-12 rounded-[3rem] text-center space-y-6"
              >
                <div className="flex justify-center">{value.icon}</div>
                <h4 className="text-2xl font-bold">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <SectionHeader subtitle="Hành trình phát triển" title="Những cột mốc đáng nhớ" />
          </div>

          <div className="relative space-y-12">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-ivital-light -translate-x-1/2 hidden md:block" />
            
            {milestones.map((milestone, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 text-center md:text-left">
                  <div className={`space-y-4 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-4xl font-black text-ivital-pink">{milestone.year}</span>
                    <h4 className="text-2xl font-bold">{milestone.title}</h4>
                    <p className="text-ivital-gray">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-ivital-pink rounded-full border-8 border-white shadow-lg relative z-10 flex-shrink-0" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-ivital-light">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-ivital-pink mx-auto shadow-sm">
                {stat.icon}
              </div>
              <p className="text-4xl font-black text-ivital-dark">{stat.value}</p>
              <p className="text-ivital-gray font-bold uppercase tracking-wider text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CallToActionBanner
        bgColor="bg-ivital-blue"
        title={<>Cùng iVital xây dựng <br /> cộng đồng khỏe mạnh</>}
        description="Chúng tôi luôn chào đón những đối tác và nhân tài có cùng khát vọng thay đổi tương lai y tế."
      >
        <Link to="/contact" className="px-10 py-5 bg-white text-ivital-blue rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
          Liên hệ hợp tác
        </Link>
      </CallToActionBanner>
    </div>
  );
};
