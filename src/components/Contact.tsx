import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Globe, Users, Building2, ArrowRight } from 'lucide-react';
import { PageProps } from '../types';

const contactChannels = [
  { icon: <Mail />, label: 'Email', value: 'contact@ivital.vn', color: 'bg-ivital-pink/10 text-ivital-pink' },
  { icon: <Phone />, label: 'Hotline', value: '+84 123 456 789', color: 'bg-ivital-blue/10 text-ivital-blue' },
  { icon: <MapPin />, label: 'Địa chỉ', value: 'Quận 1, TP. HCM', color: 'bg-ivital-pink/10 text-ivital-pink' },
  { icon: <MessageCircle />, label: 'Zalo', value: 'iVital Technology', color: 'bg-ivital-blue/10 text-ivital-blue' },
];

const partnerTypes = [
  { icon: <Building2 className="text-ivital-pink" size={24} />, label: 'Bệnh viện & Phòng khám' },
  { icon: <Users className="text-ivital-blue" size={24} />, label: 'Chuyên gia y tế' },
  { icon: <Globe className="text-ivital-pink" size={24} />, label: 'Đối tác công nghệ' },
];

export const Contact = (_props: PageProps) => {
  return (
    <div className="pt-24">
      {/* Contact Hero */}
      <section className="section-padding bg-ivital-light text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-ivital-pink/5 rounded-full blur-3xl -z-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-sm font-bold text-ivital-pink uppercase tracking-widest">Liên hệ iVital</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-ivital-dark leading-tight">
            Cùng nhau <span className="gradient-text">kiến tạo</span> <br /> giá trị mới
          </h1>
          <p className="text-xl text-ivital-gray leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn trên hành trình chăm sóc sức khỏe toàn diện.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <h3 className="text-4xl font-extrabold text-ivital-dark">Gửi tin nhắn cho chúng tôi</h3>
              <p className="text-ivital-gray text-lg">Điền thông tin vào form bên dưới, đội ngũ iVital sẽ phản hồi bạn sớm nhất có thể.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ivital-dark uppercase tracking-wider">Họ và tên</label>
                  <input 
                    type="text" 
                    placeholder="Nguyễn Văn A" 
                    className="w-full px-6 py-4 bg-ivital-light border border-gray-200 rounded-2xl focus:outline-none focus:border-ivital-pink transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ivital-dark uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="example@gmail.com" 
                    className="w-full px-6 py-4 bg-ivital-light border border-gray-200 rounded-2xl focus:outline-none focus:border-ivital-pink transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-ivital-dark uppercase tracking-wider">Chủ đề</label>
                <select className="w-full px-6 py-4 bg-ivital-light border border-gray-200 rounded-2xl focus:outline-none focus:border-ivital-pink transition-colors appearance-none">
                  <option>Hợp tác kinh doanh</option>
                  <option>Hỗ trợ kỹ thuật</option>
                  <option>Tuyển dụng</option>
                  <option>Khác</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-ivital-dark uppercase tracking-wider">Tin nhắn</label>
                <textarea 
                  rows={5} 
                  placeholder="Nhập nội dung tin nhắn của bạn..." 
                  className="w-full px-6 py-4 bg-ivital-light border border-gray-200 rounded-2xl focus:outline-none focus:border-ivital-pink transition-colors resize-none"
                ></textarea>
              </div>
              <button className="btn-primary w-full py-5 flex items-center justify-center gap-3 text-lg">
                Gửi tin nhắn <Send size={20} />
              </button>
            </form>
          </div>

          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <h3 className="text-4xl font-extrabold text-ivital-dark">Thông tin liên hệ</h3>
              <p className="text-ivital-gray text-lg">Bạn cũng có thể kết nối với chúng tôi qua các kênh sau.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactChannels.map((info, idx) => (
                <div key={idx} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all space-y-4">
                  <div className={`w-12 h-12 ${info.color} rounded-2xl flex items-center justify-center`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-ivital-gray uppercase tracking-wider">{info.label}</p>
                    <p className="text-lg font-bold text-ivital-dark">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[3rem] overflow-hidden shadow-xl h-64 border-8 border-white">
              <img 
                src="https://picsum.photos/seed/map/1000/600" 
                alt="Map" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="section-padding bg-ivital-dark text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h3 className="text-4xl md:text-5xl font-extrabold">Trở thành đối tác <br /> của iVital</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Chúng tôi luôn tìm kiếm những cơ hội hợp tác cùng các bệnh viện, phòng khám và các chuyên gia y tế để cùng nhau nâng tầm chất lượng dịch vụ y tế Việt Nam.
            </p>
            <div className="flex flex-wrap gap-6">
              {partnerTypes.map((type, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {type.icon}
                  <span className="font-bold">{type.label}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary flex items-center gap-2">
              Đăng ký đối tác <ArrowRight size={20} />
            </button>
          </div>
          <div className="flex-1">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/10">
              <img 
                src="https://picsum.photos/seed/partnership/1000/800" 
                alt="Partnership" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
