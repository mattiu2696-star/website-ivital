import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { HeartPulse, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8 max-w-lg"
      >
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-ivital-pink to-ivital-blue rounded-3xl flex items-center justify-center text-white">
            <HeartPulse size={40} />
          </div>
        </div>
        <h1 className="text-8xl font-extrabold gradient-text">404</h1>
        <p className="text-2xl font-bold text-ivital-dark">Trang không tồn tại</p>
        <p className="text-ivital-gray text-lg">Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.</p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Về trang chủ
        </Link>
      </motion.div>
    </div>
  );
};
