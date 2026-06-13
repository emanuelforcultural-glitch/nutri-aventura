import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { SplashView } from "./components/SplashView";
import { HomeView } from "./components/HomeView";
import { RetosView } from "./components/RetosView";
import { RecompensasView } from "./components/RecompensasView";
import { ConsejosView } from "./components/ConsejosView";
import { NutriProvider, useNutri } from "./context/NutriContext";
import { motion, AnimatePresence } from "motion/react";

function NutriAppContent() {
  const { role, setRole, toastMessage } = useNutri();

  return (
    <div 
      id="nutri-aventura-viewport"
      className="min-h-screen w-full bg-[#f4f2ee] flex items-center justify-center p-0 lg:p-6 overflow-hidden select-none font-sans"
    >
      {/* 
        Mockup Case Frame:
        - Full Screen on Mobile & Tablet: w-full h-screen (up to 1024px width)
        - Premium centered phone simulator on Desktop (lg:): max-w-[460px] max-h-[920px] lg:rounded-[36px] lg:shadow-[0_25px_60px_rgba(0,0,0,0.18)] lg:border-[8px] lg:border-neutral-900
      */}
      <div 
        id="smartphone-frame"
        className="w-full h-screen lg:w-[450px] lg:h-[880px] lg:rounded-[40px] lg:shadow-[0_30px_60px_rgba(0,0,0,0.18)] lg:border-[8px] lg:border-neutral-800 bg-[#FCFBF8] relative overflow-hidden flex flex-col transition-all duration-300"
      >
        {/* Simulated Top Dynamic Notch for premium fidelity ONLY on desktop view to preserve native space on tablet/mobile */}
        <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5.5 bg-neutral-800 rounded-b-2xl z-50">
          {/* Embedded camera dot and reflection */}
          <div className="absolute right-4 top-1 w-2 h-2 bg-neutral-900 rounded-full border border-neutral-700/50 flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-[#204066] rounded-full" />
          </div>
          {/* Speaker lines */}
          <div className="absolute left-6 top-1.5 w-10 h-0.5 bg-neutral-700/40 rounded-full" />
        </div>

        {/* Standard Status Bar indicator overlay - Hidden on mobile/tablet to let native controls take over, shown on desktop mockup */}
        <div className="hidden lg:flex w-full justify-between px-6 pt-3 pb-1 text-[11px] font-bold text-neutral-500 bg-white/70 backdrop-blur-xs select-none">
          <span>9:41</span>
          <div className="flex items-center gap-1.5 text-[9px]">
            <span>📶</span>
            <span>5G</span>
            <span>🔋 100%</span>
          </div>
        </div>

        {/* Global High Fidelity Role Selection Bar (Child vs Parent Mode Toggler) */}
        <div className="w-full bg-[#EBF1EA] border-b border-neutral-200/40 px-3 py-2 flex items-center justify-between z-40 shrink-0">
          <span className="text-[10px] font-extrabold text-brand-dark uppercase tracking-wide">
            Control de Rol:
          </span>
          <div className="flex bg-white/80 p-0.5 rounded-full border border-[#d6e3d5] shadow-3xs">
            <button
              onClick={() => setRole("child")}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                role === "child"
                  ? "bg-brand-green text-white shadow-3xs"
                  : "text-neutral-500 hover:text-brand-dark"
              }`}
            >
              🧒 Niño
            </button>
            <button
              onClick={() => setRole("parent")}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                role === "parent"
                  ? "bg-brand-orange text-white shadow-3xs"
                  : "text-neutral-500 hover:text-brand-dark"
              }`}
            >
              👨‍👩‍👦 Papá/Mamá
            </button>
          </div>
        </div>

        {/* FLOAT CELEBRATION TOAST */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="absolute top-16 left-4 right-4 z-50 bg-brand-green text-white p-3 py-4 rounded-[20px] shadow-xl border-2 border-brand-cream text-center font-bold text-xs leading-tight flex items-center justify-center gap-2"
            >
              <span>⭐</span> {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated, Sandboxed Content Router Area */}
        <div className="flex-1 w-full h-full relative" id="screen-viewport">
          <Routes>
            <Route path="/" element={<SplashView />} />
            <Route path="/home" element={<HomeView />} />
            <Route path="/retos" element={<RetosView />} />
            <Route path="/recompensas" element={<RecompensasView />} />
            <Route path="/consejos" element={<ConsejosView />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <NutriProvider>
        <NutriAppContent />
      </NutriProvider>
    </HashRouter>
  );
}
