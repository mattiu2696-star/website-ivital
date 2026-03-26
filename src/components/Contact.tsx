import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, MessageCircle, Globe, Users, Building2, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PageProps } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

const partnerTypeIcons = [
  <Building2 className="text-ivital-pink" size={24} />,
  <Users className="text-ivital-blue" size={24} />,
  <Globe className="text-ivital-pink" size={24} />,
];

export const Contact = (_props: PageProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const contactChannels = [
    { icon: <Mail />, label: 'Email', value: 'contact@ivital.vn', color: 'bg-ivital-pink/10 text-ivital-pink' },
    { icon: <Phone />, label: 'Hotline', value: '+84 923 266 979', color: 'bg-ivital-blue/10 text-ivital-blue' },
    { icon: <MapPin />, label: t.contact.channelAddress, value: 'Số 3A, Tổ 3 Cụm Kiến Thiết, P. Thanh Xuân, Hà Nội', color: 'bg-ivital-pink/10 text-ivital-pink' },
    { icon: <MessageCircle />, label: 'Zalo', value: 'iVital Technology', color: 'bg-ivital-blue/10 text-ivital-blue' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setStatus('idle');

    try {
      await emailjs.sendForm(
        'service_48d6rnr',
        'template_etp045m',
        formRef.current,
        'iYduyRsbVU8wI-PA4'
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

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
          <h2 className="text-sm font-bold text-ivital-pink uppercase tracking-widest">{t.contact.heroSubtitle}</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-ivital-dark leading-tight">
            {t.contact.heroTitle} <span className="gradient-text">{t.contact.heroTitleHighlight}</span> <br /> {t.contact.heroTitleEnd}
          </h1>
          <p className="text-xl text-ivital-gray leading-relaxed">
            {t.contact.heroDescription}
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <h3 className="text-4xl font-extrabold text-ivital-dark">{t.contact.formTitle}</h3>
              <p className="text-ivital-gray text-lg">{t.contact.formDescription}</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ivital-dark uppercase tracking-wider">{t.contact.labelName}</label>
                  <input 
                    type="text"
                    name="from_name"
                    required
                    placeholder={t.contact.placeholderName} 
                    className="w-full px-6 py-4 bg-ivital-light border border-gray-200 rounded-2xl focus:outline-none focus:border-ivital-pink transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ivital-dark uppercase tracking-wider">{t.contact.labelEmail}</label>
                  <input 
                    type="email"
                    name="from_email"
                    required
                    placeholder="example@gmail.com" 
                    className="w-full px-6 py-4 bg-ivital-light border border-gray-200 rounded-2xl focus:outline-none focus:border-ivital-pink transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-ivital-dark uppercase tracking-wider">{t.contact.labelSubject}</label>
                <select name="subject" className="w-full px-6 py-4 bg-ivital-light border border-gray-200 rounded-2xl focus:outline-none focus:border-ivital-pink transition-colors appearance-none">
                  {t.contact.subjectOptions.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-ivital-dark uppercase tracking-wider">{t.contact.labelMessage}</label>
                <textarea 
                  rows={5}
                  name="message"
                  required
                  placeholder={t.contact.placeholderMessage} 
                  className="w-full px-6 py-4 bg-ivital-light border border-gray-200 rounded-2xl focus:outline-none focus:border-ivital-pink transition-colors resize-none"
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700">
                  <CheckCircle2 size={20} />
                  <span className="font-semibold">{t.contact.successMessage}</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700">
                  <AlertCircle size={20} />
                  <span className="font-semibold">{t.contact.errorMessage}</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={sending}
                className="btn-primary w-full py-5 flex items-center justify-center gap-3 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>{t.contact.sending} <Loader2 size={20} className="animate-spin" /></>
                ) : (
                  <>{t.contact.sendButton} <Send size={20} /></>
                )}
              </button>
            </form>
          </div>

          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <h3 className="text-4xl font-extrabold text-ivital-dark">{t.contact.infoTitle}</h3>
              <p className="text-ivital-gray text-lg">{t.contact.infoDescription}</p>
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
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80" 
                alt="Map" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="section-padding bg-ivital-dark text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h3 className="text-4xl md:text-5xl font-extrabold whitespace-pre-line">{t.contact.partnerTitle}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t.contact.partnerDescription}
            </p>
            <div className="flex flex-wrap gap-6">
              {t.contact.partnerTypes.map((label, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {partnerTypeIcons[idx]}
                  <span className="font-bold">{label}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary flex items-center gap-2">
              {t.contact.partnerButton} <ArrowRight size={20} />
            </button>
          </div>
          <div className="flex-1">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80" 
                alt="Partnership" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
