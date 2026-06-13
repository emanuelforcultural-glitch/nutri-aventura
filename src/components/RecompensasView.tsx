import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, ShieldCheck, AlertCircle, Sparkles } from "lucide-react";
import { useNutri } from "../context/NutriContext";
import {
  TrophyIllustration,
  PrimerBocadoMedal,
  SuperSaludableMedal,
  ValienteProbadorMedal,
  SecretoMedal,
  DinosaurIllustration,
  RabbitIllustration,
  CarrotIllustration,
  LockedCharacterIllustration,
  StarMedalBadge,
  BigStarIcon
} from "./Illustrations";

export const RecompensasView: React.FC = () => {
  const navigate = useNavigate();
  const { points, challenges, isUnlockedMedal, isUnlockedCharacter, role } = useNutri();

  const maxGoal = 150;
  const progressPct = Math.min((points / maxGoal) * 100, 100);

  return (
    <div className="absolute inset-0 bg-[#FCFBF8] flex flex-col justify-between overflow-hidden text-neutral-800">
      
      {/* HEADER WITH BACK BUTTON */}
      <header className="px-4 py-2.5 md:px-8 md:py-4 bg-white border-b border-gray-100 flex items-center justify-between shadow-xs shrink-0">
        <button
          onClick={() => navigate("/home")}
          className="p-1 text-brand-green hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer flex items-center"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
        
        <h1 className="text-md md:text-lg font-extrabold tracking-wider text-brand-green font-display select-none text-center flex-1 pr-6 uppercase animate-pulse">
          RECOMPENSAS
        </h1>

        <button 
          onClick={() => alert("⭐ ¡Nutri Estrella!: Los papás dan puntos válidos para desbloquear el trofeo supremo.")}
          className="p-1 text-[#ECA965] hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <BigStarIcon className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </header>

      {/* BODY SCROLL CONTENT */}
      <div className="flex-1 overflow-y-auto px-4 py-4 md:px-8 md:py-6 flex flex-col gap-4 md:gap-6">

        {/* REQUIRED PARENTAL DISCLAIMER NOTICE (STRICT REQUIREMENT) */}
        <div className="bg-amber-50 border border-amber-200 rounded-[20px] md:rounded-[24px] p-3.5 md:p-5 shadow-3xs flex gap-2.5 md:gap-4 items-start">
          <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-brand-orange shrink-0 mt-0.5" />
          <div className="flex-1">
            <h5 className="text-[11px] md:text-xs font-extrabold text-brand-orange uppercase tracking-wide leading-none mb-1 font-display">
              Aviso Importante
            </h5>
            <p className="text-[10.5px] md:text-sm leading-relaxed text-amber-900 font-semibold font-sans">
              Las recompensas son desbloqueadas únicamente cuando un padre o madre valida el cumplimiento de los retos.
            </p>
          </div>
        </div>

        {/* HERO LOGRO BANNER */}
        <div className="bg-brand-cream rounded-[24px] md:rounded-[32px] p-4 md:p-6 border border-[#E9DCB2] flex items-center justify-between gap-3 md:gap-6 relative shadow-2xs">
          <div className="flex-1">
            <p className="text-brand-dark text-xs md:text-sm font-bold leading-snug">
              "¡Lo estás haciendo fantásticamente! Los hábitos saludables te dan súper poderes."
            </p>
          </div>
          <div className="shrink-0 -mt-2 -mb-2">
            <TrophyIllustration className="w-20 h-20 md:w-24 md:h-24 filter drop-shadow-sm" />
          </div>
        </div>

        {/* SECTION 1: Tus medallas */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs md:text-sm font-extrabold text-neutral-500 uppercase tracking-widest px-1 font-display">
            Tus medallas
          </span>

          {/* Medals grid container */}
          <div className="grid grid-cols-4 gap-1.5 md:gap-4 bg-brand-cream/10 p-2.5 md:p-5 rounded-[20px] md:rounded-[28px] border border-brand-cream/45 shadow-3xs">
            {/* Medal 1 - Primer Bocado */}
            <div className="flex flex-col items-center text-center">
              <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <PrimerBocadoMedal className="w-16 h-18 md:w-20 md:h-22 drop-shadow-3xs" />
              </motion.div>
              <span className="text-[9px] md:text-xs font-bold text-neutral-700 leading-tight mt-1 px-1 select-none">
                Primer bocado
              </span>
            </div>

            {/* Medal 2 - Súper Saludable */}
            <div className="flex flex-col items-center text-center">
              <div className={isUnlockedMedal("super_saludable") ? "" : "opacity-35 grayscale"}>
                <motion.div whileHover={{ scale: isUnlockedMedal("super_saludable") ? 1.1 : 1 }} className="cursor-pointer">
                  <SuperSaludableMedal className="w-16 h-18 md:w-20 md:h-22 drop-shadow-3xs" />
                </motion.div>
              </div>
              <span className={`text-[9px] md:text-xs font-bold leading-tight mt-1 px-1 select-none ${isUnlockedMedal("super_saludable") ? "text-neutral-700" : "text-neutral-400"}`}>
                Súper saludable
              </span>
            </div>

            {/* Medal 3 - Valiente Probador */}
            <div className="flex flex-col items-center text-center">
              <div className={isUnlockedMedal("valiente_probador") ? "" : "opacity-35 grayscale"}>
                <motion.div whileHover={{ scale: isUnlockedMedal("valiente_probador") ? 1.1 : 1 }} className="cursor-pointer">
                  <ValienteProbadorMedal className="w-16 h-18 md:w-20 md:h-22 drop-shadow-3xs" />
                </motion.div>
              </div>
              <span className={`text-[9px] md:text-xs font-bold leading-tight mt-1 px-1 select-none ${isUnlockedMedal("valiente_probador") ? "text-neutral-700" : "text-neutral-400"}`}>
                Valiente probador
              </span>
            </div>

            {/* Medal 4 - Secreto / All 3 completed */}
            <div className="flex flex-col items-center text-center">
              <div className={isUnlockedMedal("secreto") ? "" : "opacity-35 grayscale"}>
                <motion.div whileHover={{ scale: isUnlockedMedal("secreto") ? 1.1 : 1 }} className="cursor-pointer">
                  <SecretoMedal className="w-16 h-18 md:w-20 md:h-22 drop-shadow-3xs" />
                </motion.div>
              </div>
              <span className={`text-[9px] md:text-xs font-bold leading-tight mt-1 px-1 select-none ${isUnlockedMedal("secreto") ? "text-neutral-700" : "text-neutral-400"}`}>
                Nutri Campeón
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 2: Personajes desbloqueados */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs md:text-sm font-extrabold text-neutral-500 uppercase tracking-widest px-1 font-display">
            Personajes desbloqueados
          </span>

          <div className="flex justify-around items-center bg-white p-3 py-4 md:p-6 rounded-[20px] md:rounded-[28px] border border-neutral-150 shadow-2xs">
            <motion.div whileTap={{ y: -4 }} className="flex flex-col items-center gap-1 cursor-pointer" title="Dinosaurio">
              <DinosaurIllustration className="w-11 h-11 md:w-16 md:h-16" />
              <span className="text-[8px] md:text-xs font-extrabold text-neutral-500">Dino</span>
            </motion.div>
            <motion.div whileTap={{ y: -4 }} className="flex flex-col items-center gap-1 cursor-pointer" title="Conejo">
              <RabbitIllustration className="w-11 h-11 md:w-16 md:h-16" />
              <span className="text-[8px] md:text-xs font-extrabold text-neutral-500">Conejo</span>
            </motion.div>
            <motion.div whileTap={{ y: -4 }} className="flex flex-col items-center gap-1 cursor-pointer" title="Zanahoria">
              <CarrotIllustration className="w-11 h-11 md:w-16 md:h-16" />
              <span className="text-[8px] md:text-xs font-extrabold text-neutral-500">Zana</span>
            </motion.div>

            {/* Secret Character Display slot */}
            {isUnlockedCharacter("secret_hero") ? (
              <motion.div
                whileTap={{ y: -4 }}
                className="flex flex-col items-center gap-1 cursor-pointer bg-amber-50/75 p-1.5 md:p-2.5 rounded-lg border border-yellow-300 relative"
                title="Súper Héroe Dorado"
              >
                <div className="absolute -top-1 -right-1 bg-yellow-400 text-white text-[7px] md:text-[9px] font-extrabold rounded-full px-1">🌟</div>
                <div className="text-2xl md:text-4xl h-11 md:h-16 flex items-center justify-center">🦸</div>
                <span className="text-[8px] md:text-[10px] font-extrabold text-amber-700">Súper</span>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center gap-1 opacity-45 cursor-not-allowed">
                <LockedCharacterIllustration className="w-11 h-11 md:w-16 md:h-16 grayscale animate-pulse" />
                <span className="text-[8px] md:text-xs font-extrabold text-neutral-400">110 Puntos</span>
              </div>
            )}
          </div>
        </div>

        {/* SECTION 3: Tu progreso */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs md:text-sm font-extrabold text-neutral-500 uppercase tracking-widest px-1 font-display">
            Tu progreso
          </span>

          <div className="bg-white p-4 md:p-6 rounded-[20px] md:rounded-[28px] border border-neutral-150 shadow-2xs flex items-center justify-between gap-4 md:gap-8">
            
            {/* Progress sliding line */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1 text-xs md:text-sm font-bold text-neutral-700">
                <span>Colección de Salud</span>
                <span className="text-brand-orange font-mono">{points} / {maxGoal} pts</span>
              </div>
              
              <div className="w-full h-4 md:h-6 bg-neutral-100 rounded-full overflow-hidden p-[2px] border border-neutral-200/55">
                <motion.div
                  className="h-full bg-brand-orange rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Gold Sticker Badge with point total */}
            <div className="shrink-0 flex flex-col items-center text-center">
              <StarMedalBadge className="w-11 h-11 md:w-16 md:h-16 filter drop-shadow-xs animate-spin-slow" />
              <span className="text-[10px] md:text-xs font-extrabold text-brand-orange leading-none mt-1">
                {points} Puntos
              </span>
            </div>

          </div>
        </div>

        {/* SUPPORTIVE QUOTE FOOTER */}
        <div className="bg-brand-cream rounded-[20px] md:rounded-[28px] p-3.5 md:p-6 border border-brand-cream flex items-center gap-3.5 md:gap-5 mt-1 leading-snug">
          <div className="flex-1">
            <p className="text-xs md:text-sm font-bold text-brand-dark leading-normal">
              "¡Sigue así! Cada elección saludable te hace un campeón con superpoderes de alimentación."
            </p>
          </div>
          <div className="shrink-0">
            <SecretoMedal className="w-10 h-11 md:w-14 md:h-16 rotate-6 drop-shadow-3xs" />
          </div>
        </div>

      </div>

      {/* BOTTOM NAV BAR */}
      <footer className="bg-white border-t border-neutral-105 py-2.5 md:py-4 px-4 md:px-8 flex justify-around items-center z-20 shadow-lg shrink-0">
        <button onClick={() => navigate("/home")} className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-brand-green transition-colors cursor-pointer">
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
        <button onClick={() => navigate("/recompensas")} className="flex flex-col items-center gap-0.5 text-brand-green cursor-pointer">
          <span className="text-xl md:text-2xl">🏆</span>
          <span className="text-[9px] md:text-[11px] font-bold">Logros</span>
        </button>
      </footer>

    </div>
  );
};
