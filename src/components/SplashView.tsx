import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DinosaurIllustration } from "./Illustrations";
import { motion } from "motion/react";

export const SplashView: React.FC = () => {
  const navigate = useNavigate();

  // Automatically navigate to Home after 4.5 seconds for true mobile splash behavior
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 4500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 bg-brand-green flex flex-col justify-between items-center text-center p-6 text-white cursor-pointer select-none"
      onClick={() => navigate("/home")}
    >
      {/* Top Margin/Bar Spacer */}
      <div className="w-full flex justify-between px-4 pt-4 text-xs opacity-60 font-mono">
        <span>9:41</span>
        <span>⚡ 100%</span>
      </div>

      {/* Main Centered Content */}
      <div className="flex-1 flex flex-col justify-center items-center gap-6 max-w-xs -mt-10">
        
        {/* Playful NA Logo Box */}
        <motion.div
          initial={{ scale: 0.3, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="w-24 h-24 bg-brand-cream rounded-[24px] flex items-center justify-center shadow-lg border-2 border-[#E9DCB2]"
        >
          <span className="text-brand-green font-display text-5xl font-extrabold tracking-tight select-none">
            NA
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-brand-orange font-bold font-display text-xs tracking-widest uppercase"
        >
          Alimentación Infantil Inteligente
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, delay: 0.5 }}
          className="text-3xl font-extrabold font-display uppercase tracking-wide leading-none"
          style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.15)" }}
        >
          <span className="text-brand-cream block text-3xl font-display">Nutri Aventura</span>
        </motion.h1>

        {/* Descriptive Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-brand-cream/90 text-sm leading-relaxed font-sans px-2 mt-2"
        >
          ¡Retos divertidos, consejos útiles y personajes que te acompañarán a crecer fuerte y saludable!
        </motion.p>
      </div>

      {/* Dinosaur Character & Action Prompt */}
      <div className="w-full flex flex-col items-center gap-4">
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center"
        >
          <DinosaurIllustration className="w-36 h-36 drop-shadow-lg" />
        </motion.div>

        {/* Enter Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-xs font-medium tracking-wide text-brand-cream/80 mb-6 bg-brand-dark/20 backdrop-blur-xs px-4 py-1.5 rounded-full"
        >
          Toca en cualquier parte para comenzar
        </motion.div>
      </div>
    </motion.div>
  );
};
