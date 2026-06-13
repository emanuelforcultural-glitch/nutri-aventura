import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, User, Sparkles, ChevronRight, RotateCcw } from "lucide-react";
import { useNutri } from "../context/NutriContext";
import {
  DinosaurIllustration,
  AppleIllustration,
  TrophyIllustration,
  PrimerBocadoMedal,
  StarMedalBadge,
  BoyProfileIllustration
} from "./Illustrations";

export const HomeView: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { role, setRole, points, resetApp } = useNutri();

  return (
    <div className="absolute inset-0 bg-[#FCFBF8] flex flex-col justify-between overflow-hidden text-neutral-800">
      
      {/* HEADER */}
      <header className="px-4 py-2.5 md:px-8 md:py-4 bg-white border-b border-gray-100 flex items-center justify-between shadow-xs relative z-30 shrink-0">
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-1 px-2 text-brand-green hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer animate-pulse"
        >
          <Menu className="w-6 h-6 stroke-[2.5]" />
        </button>
        
        <h1 className="text-lg md:text-xl font-extrabold tracking-wider text-brand-green font-display select-none flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-brand-orange fill-brand-orange" />
          NUTRI AVENTURA
        </h1>

        <button 
          onClick={() => navigate("/recompensas")} 
          className="p-1 border-2 border-brand-cream rounded-full overflow-hidden hover:scale-105 active:scale-95 transition-all cursor-pointer bg-brand-cream/30 flex items-center justify-center relative"
          title="Ver perfil y recompensas"
        >
          <BoyProfileIllustration className="w-8 h-8 md:w-10 md:h-10" />
          <span className="absolute -bottom-1 -right-1 bg-brand-orange text-white text-[8px] md:text-[10px] px-1 font-extrabold rounded-full px-1.5 py-0.5 line-height-none leading-none shadow-3xs">
            {points}pt
          </span>
        </button>
      </header>

      {/* SIDE DRAWER MENU (For hamburguesa interaction) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-black z-45 cursor-pointer"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 bottom-0 w-72 bg-[#FCFBF8] shadow-2xl z-50 p-6 flex flex-col justify-between rounded-r-[24px] overflow-hidden border-r-4 border-brand-green"
            >
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-brand-green font-display mt-2 uppercase tracking-wide">Nutri Aventura</h2>
                  <p className="text-xs text-neutral-500 font-sans">Alimentación infantil inteligente</p>
                </div>

                <hr className="border-neutral-200" />

                <div className="bg-[#EBF1EA] p-3 md:p-4 rounded-2xl flex flex-col gap-1 border border-brand-green/20">
                  <span className="text-[10px] md:text-xs font-bold text-brand-green uppercase tracking-wide">Modo de usuario activo:</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-base md:text-lg">{role === "child" ? "🧒" : "👨‍👩‍👦"}</span>
                    <span className="text-xs md:text-sm font-bold text-brand-dark">
                      {role === "child" ? "Jugando como: Niño" : "Supervisando como: Padre"}
                    </span>
                  </div>
                </div>

                <nav className="flex flex-col gap-2.5">
                  <button
                    onClick={() => { setMenuOpen(false); navigate("/home"); }}
                    className="flex items-center gap-3 w-full p-3 rounded-xl bg-brand-cream/45 text-brand-dark font-extrabold text-left transition-all text-xs md:text-sm"
                  >
                    <span>🏠</span> Inicio
                  </button>
                  <button
                    onClick={() => { setMenuOpen(false); navigate("/retos"); }}
                    className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-neutral-100 text-neutral-700 font-bold text-left transition-all text-xs md:text-sm"
                  >
                    <span>🎯</span> Retos del Día
                  </button>
                  <button
                    onClick={() => { setMenuOpen(false); navigate("/recompensas"); }}
                    className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-neutral-100 text-neutral-700 font-bold text-left transition-all text-xs md:text-sm"
                  >
                    <span>🏆</span> Recompensas
                  </button>
                  <button
                    onClick={() => { setMenuOpen(false); navigate("/consejos"); }}
                    className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-neutral-100 text-neutral-700 font-bold text-left transition-all text-xs md:text-sm"
                  >
                    <span>👨‍👩‍👦</span> Consejos para Papás
                  </button>
                </nav>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    resetApp();
                  }}
                  className="w-full text-left p-2.5 text-xs text-red-600 hover:bg-red-50 rounded-xl transition-all font-bold flex items-center gap-2 border border-red-200/50 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 font-bold" /> Reiniciar Simulación
                </button>

                <div className="text-center text-xs text-neutral-500 bg-brand-cream/20 p-3 rounded-2xl border border-brand-cream">
                  <p className="font-semibold text-brand-green">¡Come sano, crece feliz!</p>
                  <div className="mt-1 text-[10px] text-neutral-400">Prototipo Exclusivo Móvil/Tablet</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* SCROLLABLE SCREEN CONTENT */}
      <div className="flex-1 overflow-y-auto px-4 py-4 md:px-8 md:py-6 flex flex-col gap-4 md:gap-6">

        {/* HERO BANNER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-brand-cream rounded-[24px] md:rounded-[32px] p-5 md:p-8 text-center border-2 border-[#E9DCB2] shadow-xs relative overflow-hidden animate-fade-in"
        >
          {/* Sparkly corner overlays */}
          <div className="absolute top-2 left-2 text-brand-orange opacity-40">✨</div>
          <div className="absolute bottom-2 right-2 text-brand-orange opacity-40">✨</div>

          <p className="text-brand-dark text-[13px] md:text-base font-extrabold leading-relaxed px-1 md:px-12">
            "¡Pequeños pasos, grandes hábitos! Come verduras y frutas para crecer fuerte con mamá y papá."
          </p>

          {/* Central Characters Illustration */}
          <div className="flex justify-center items-end gap-3 md:gap-6 mt-4 md:mt-6 mb-1">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <DinosaurIllustration className="w-24 h-24 md:w-36 md:h-36 drop-shadow-md" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
            >
              <AppleIllustration className="w-16 h-16 md:w-24 md:h-24 drop-shadow-md" />
            </motion.div>
          </div>
        </motion.div>

        {/* CORE INTERACTIVE ACTION BUTTONS */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-3.5 md:gap-5">
          {/* Button 1: Comenzar Aventura */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setRole("child");
              navigate("/retos");
            }}
            className="w-full bg-[#FCE5CF] hover:bg-[#FAD9B5] text-brand-dark hover:text-neutral-900 py-3.5 md:py-4.5 px-6 rounded-[20px] md:rounded-[24px] font-extrabold text-center border-2 border-brand-orange/45 shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer text-md md:text-lg leading-none"
          >
            <span>🚀</span> ¡Comenzar Aventura! (Niño)
          </motion.button>

          {/* Button 2: Soy mamá o papá */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setRole("parent");
              navigate("/consejos");
            }}
            className="w-full bg-[#EBF1EA] hover:bg-[#DDE9DB] text-brand-green py-3.5 md:py-4.5 px-6 rounded-[20px] md:rounded-[24px] font-extrabold text-center border-2 border-brand-green/35 shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer text-md md:text-lg leading-none"
          >
            <span>👨‍👩‍👧‍👦</span> Soy mamá o papá
          </motion.button>
        </div>

        {/* SECTION: ¿Qué encontrarás? */}
        <div className="flex flex-col gap-2.5">
          <h3 className="text-xs md:text-sm font-extrabold text-[#5F7F5D] tracking-widest mt-1 uppercase font-display">
            ¿Qué encontrarás?
          </h3>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {/* Card 1: Retos Divertidos */}
            <motion.div
              whileTap={{ scale: 0.94 }}
              onClick={() => {
                setRole("child");
                navigate("/retos");
              }}
              className="bg-brand-cream/40 rounded-[20px] md:rounded-[24px] p-2 py-3 md:p-4 md:py-6 flex flex-col items-center justify-between text-center border border-brand-cream/70 shadow-3xs hover:bg-brand-cream/60 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white shadow-3xs overflow-hidden mb-2">
                <PrimerBocadoMedal className="w-8 h-9 md:w-11 md:h-12" />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-brand-dark leading-tight h-7 md:h-8 flex items-center justify-center">
                Retos Divertidos
              </span>
            </motion.div>

            {/* Card 2: Recompensas Geniales */}
            <motion.div
              whileTap={{ scale: 0.94 }}
              onClick={() => navigate("/recompensas")}
              className="bg-[#FCF5E3] rounded-[20px] md:rounded-[24px] p-2 py-3 md:p-4 md:py-6 flex flex-col items-center justify-between text-center border border-yellow-200/80 shadow-3xs hover:bg-[#FAEFD5] transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white shadow-3xs overflow-hidden mb-2">
                <TrophyIllustration className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-brand-dark leading-tight h-7 md:h-8 flex items-center justify-center">
                Recompensas
              </span>
            </motion.div>

            {/* Card 3: Recompensas Amigos */}
            <motion.div
              whileTap={{ scale: 0.94 }}
              onClick={() => navigate("/recompensas")}
              className="bg-brand-cream/40 rounded-[20px] md:rounded-[24px] p-2 py-3 md:p-4 md:py-6 flex flex-col items-center justify-between text-center border border-brand-cream/70 shadow-3xs hover:bg-brand-cream/60 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white shadow-3xs overflow-hidden mb-2">
                <StarMedalBadge className="w-9 h-9 md:w-11 md:h-11" />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-brand-dark leading-tight h-7 md:h-8 flex items-center justify-center">
                Amigos Personajes
              </span>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM TIP LINK */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/consejos")}
          className="bg-[#FCE5CF]/50 rounded-[20px] md:rounded-[24px] p-3 md:p-4 border border-brand-orange/20 shadow-3xs flex items-center justify-between gap-3 hover:bg-[#FCE5CF]/70 transition-colors cursor-pointer mt-1"
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden shrink-0 flex items-center justify-center bg-white rounded-full border border-neutral-100">
              <AppleIllustration className="w-9 h-9 md:w-10 md:h-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-bold tracking-wider text-brand-orange uppercase leading-none mb-0.5 font-display">
                Para papás
              </span>
              <p className="text-xs md:text-sm font-semibold text-neutral-600 leading-tight">
                El rol del padre es fundamental para validar cada reto.
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-brand-orange shrink-0 stroke-[2.5]" />
        </motion.div>

      </div>

      {/* BOTTOM NAV BAR */}
      <footer className="bg-white border-t border-neutral-105 py-2.5 md:py-4 px-4 md:px-8 flex justify-around items-center z-20 shadow-lg shrink-0">
        <button onClick={() => navigate("/home")} className="flex flex-col items-center gap-0.5 text-brand-green cursor-pointer">
          <span className="text-xl md:text-2xl">🏠</span>
          <span className="text-[9px] md:text-[11px] font-bold">Inicio</span>
        </button>
        <button onClick={() => navigate("/retos")} className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-brand-green transition-colors cursor-pointer">
          <span className="text-xl md:text-2xl">🎯</span>
          <span className="text-[9px] md:text-[11px] font-bold">Retos</span>
        </button>
        <button 
          onClick={() => {
            if (role === "child") {
              alert("🔔 ¡Aviso de NutriAventura!: Haz tus tareas del día y avísale a tus padres para que te den tus estrellas.");
            } else {
              alert("🔔 ¡Control Parental!: Tienes retos pendientes que requieren tu revisión en la pestaña 'Papás'.");
            }
          }}
          className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-brand-green transition-colors cursor-pointer"
        >
          <span className="text-xl md:text-2xl">🔔</span>
          <span className="text-[9px] md:text-[11px] font-bold">Avisos</span>
        </button>
        <button onClick={() => navigate("/recompensas")} className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-brand-green transition-colors cursor-pointer">
          <span className="text-xl md:text-2xl">🏆</span>
          <span className="text-[9px] md:text-[11px] font-bold">Logros</span>
        </button>
      </footer>

    </div>
  );
};
