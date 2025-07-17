import { motion } from 'framer-motion';

const GlassCard = ({ 
  children, 
  className = "", 
  blur = "backdrop-blur-md", 
  bg = "bg-white/10",
  border = "border border-white/20",
  shadow = "shadow-xl",
  ...props 
}) => {
  return (
    <motion.div
      className={`${bg} ${blur} ${border} ${shadow} rounded-2xl p-6 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;