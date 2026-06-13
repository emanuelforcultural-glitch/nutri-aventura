import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, Star, Clock, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { useNutri } from "../context/NutriContext";
import {
  GrapeIllustration,
  DinosaurIllustration,
  RabbitIllustration,
  CarrotIllustration,
  LockedCharacterIllustration
} from "./Illustrations";

export const RetosView: React.FC = () => {
  const navigate = useNavigate();
  const {
    role,
    points,
    challenges,
    incrementProgress,
    submitChallenge,
    approveChallenge,
    rejectChallenge,
    activeChar,
    setActiveChar,
    isUnlockedCharacter
  } = useNutri();

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
        
        <h1 className="text-md md:text-lg font-extrabold tracking-wider text-brand-green font-display select-none text-center flex-1 pr-6 uppercase">
          RETOS DEL DÍA
        </h1>
      </header>

      {/* BODY CONTAINER */}
      <div className="flex-1 overflow-y-auto px-4 py-4 md:px-8 md:py-6 flex flex-col gap-4 md:gap-6">

        {/* VERIFICATION RULES EXPLANATORY COMPONENT */}
        <div className="bg-[#EBF1EA] border border-brand-green/20 rounded-[20px] md:rounded-[24px] p-3.5 md:p-5 text-xs text-brand-dark space-y-1.5 md:space-y-2 py-3 shadow-3xs">
          <div className="flex items-center gap-1.5 font-bold font-display text-brand-green text-[11px] md:text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-brand-green" />
            Flujo de Validación Activo
          </div>
          <p className="text-[11px] md:text-sm leading-relaxed font-semibold">
            Los puntos <strong className="text-brand-orange">no se otorgan de forma automática</strong>. Completa el avance de tu reto, haz clic en enviar y pídele a tu papá o mamá que lo apruebe para recibir tus estrellas.
          </p>
        </div>

        {/* FRUITS OF ENERGY BANNER */}
        <div className="bg-brand-cream rounded-[24px] md:rounded-[32px] p-4 md:p-6 border border-[#E9DCB2] flex items-center justify-between gap-3 md:gap-6 relative shadow-2xs">
          <div className="flex-1">
            <p className="text-brand-dark text-xs md:text-sm font-bold leading-snug">
              {role === "parent" 
                ? "👁️ Estás supervisando el avance de tus hijos. Revisa y valida sus retos." 
                : "¡Completa hoy tu reto y envíalo para aprobación parental! 🦸"}
            </p>
          </div>
          <div className="shrink-0 -mt-2 -mb-2">
            <GrapeIllustration className="w-20 h-20 md:w-24 md:h-24 filter drop-shadow-sm" />
          </div>
        </div>

        {/* LIST OF CHALLENGES */}
        <div className="flex flex-col gap-3">
          <span className="text-xs md:text-sm font-bold text-neutral-500 uppercase tracking-widest px-1 font-display flex justify-between">
            <span>Tus retos de hoy:</span>
            {role === "parent" && <span className="text-brand-orange text-[9px] md:text-[10px] font-extrabold bg-brand-orange/10 px-2 py-0.5 rounded-full">VISTA PADRE</span>}
          </span>

          {/* Grid responsive on tablet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-5">
            {challenges.map(ch => {
              const isFilled = ch.current === ch.max;
              const progressPct = (ch.current / ch.max) * 100;

              return (
                <div
                  key={ch.id}
                  className={`rounded-[20px] md:rounded-[24px] p-3.5 md:p-5 border transition-all shadow-2xs flex flex-col justify-between gap-3 ${
                    ch.status === "approved"
                      ? "bg-[#F3F9EE] border-brand-green/45"
                      : ch.status === "pending"
                      ? "bg-[#FEF9EC] border-brand-orange/40"
                      : "bg-brand-cream/35 border-brand-cream/60 hover:bg-brand-cream/50"
                  }`}
                >
                  {/* Main Card row */}
                  <div 
                    onClick={() => {
                      if (ch.status === "idle") {
                        incrementProgress(ch.id);
                      }
                    }}
                    className={`flex items-center justify-between gap-3 md:gap-4 ${ch.status === "idle" ? "cursor-pointer" : ""}`}
                  >
                    {/* Food Avatar Column */}
                    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-white border border-brand-cream/40 flex items-center justify-center shadow-3xs">
                      <span className="text-2xl md:text-3xl drop-shadow-xs">
                        {ch.id === "banana" ? "🍌" : ch.id === "broccoli" ? "🥦" : "💧"}
                      </span>
                    </div>

                    {/* Info and Progress Column */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[13px] md:text-sm font-extrabold text-brand-dark leading-tight mb-1">
                        {ch.title}
                      </h4>
                      
                      {/* Progress Text */}
                      <div className="flex justify-between items-center text-[10px] md:text-xs font-bold text-neutral-500 mb-1 leading-none">
                        <span>Avance</span>
                        <span className="text-brand-green font-mono">{ch.current}/{ch.max}</span>
                      </div>

                      {/* Progress Bar Track */}
                      <div className="w-full h-2.5 md:h-3.5 bg-neutral-200/50 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${ch.status === "approved" ? "bg-brand-green" : ch.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${progressPct}%` }}
                          transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        />
                      </div>
                    </div>

                    {/* Right Status Indicator */}
                    <div className="shrink-0 pl-1">
                      {ch.status === "approved" ? (
                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-green fill-brand-green/10" />
                      ) : ch.status === "pending" ? (
                        <Clock className="w-5 h-5 md:w-6 md:h-6 text-brand-orange animate-pulse" />
                      ) : (
                        <Star
                          className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${
                            isFilled
                              ? "fill-amber-400 text-amber-500 stroke-[2]"
                              : "text-neutral-300 stroke-[1.5]"
                          }`}
                        />
                      )}
                    </div>
                  </div>

                  {/* Sub-card Actions Panel based on status & currentRole */}
                  {ch.status === "idle" && isFilled && (
                    <motion.button
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        submitChallenge(ch.id);
                      }}
                      className="w-full py-2.5 md:py-3 px-3 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-extrabold text-xs md:text-sm flex items-center justify-center gap-1.5 cursor-pointer shadow-3xs transition-transform transform active:scale-97"
                    >
                      <span>🎯</span> ¡Reto Completado! Enviar a Papás <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  )}

                  {ch.status === "pending" && (
                    <div className="flex items-center justify-between text-[10px] md:text-xs bg-brand-orange/10 px-3 py-1.5 rounded-xl text-brand-orange font-bold border border-brand-orange/20">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        Pendiente de validación familiar
                      </span>
                      
                      {role === "parent" && (
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => approveChallenge(ch.id)}
                            className="bg-brand-green text-white text-[9px] md:text-[10px] font-extrabold px-2.5 py-1 rounded-md cursor-pointer hover:bg-brand-green-dark shadow-3xs"
                          >
                            Aprobar
                          </button>
                          <button
                            onClick={() => rejectChallenge(ch.id)}
                            className="bg-red-500 text-white text-[9px] md:text-[10px] font-extrabold px-2.5 py-1 rounded-md cursor-pointer hover:bg-red-600 shadow-3xs"
                          >
                            Rechazar
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {ch.status === "approved" && (
                    <div className="flex items-center gap-1.5 text-[11px] md:text-xs text-brand-green font-extrabold bg-brand-green/10 px-3 py-1.5 rounded-xl border border-brand-green/20">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-brand-green" />
                      <span>¡Aprobado por Papás! Ganaste +{ch.rewardPoints} puntos de salud 🎉</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION: Elige tu personaje */}
        <div className="flex flex-col gap-2.5 mt-2 border-t border-neutral-100 pt-4">
          <span className="text-xs md:text-sm font-bold text-neutral-500 uppercase tracking-widest px-1 font-display">
            Elige tu personaje:
          </span>

          <div className="grid grid-cols-4 gap-2.5 md:gap-4">
            
            {/* Dino Character Button */}
            <button
              onClick={() => setActiveChar("dino")}
              className={`p-1.5 py-2.5 md:p-3 md:py-4 rounded-[20px] md:rounded-[24px] bg-[#FFFFFF] border transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                activeChar === "dino"
                  ? "border-[3px] border-brand-green shadow-xs bg-brand-cream/20"
                  : "border-neutral-200/60 hover:border-brand-green/30"
              }`}
            >
              <DinosaurIllustration className="w-10 h-10 md:w-16 md:h-16" />
              <span className="text-[10px] md:text-sm font-bold text-neutral-700">Dino</span>
            </button>

            {/* Rabbit Character Button */}
            <button
              onClick={() => setActiveChar("rabbit")}
              className={`p-1.5 py-2.5 md:p-3 md:py-4 rounded-[20px] md:rounded-[24px] bg-[#FFFFFF] border transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                activeChar === "rabbit"
                  ? "border-[3px] border-brand-green shadow-xs bg-brand-cream/20"
                  : "border-neutral-200/60 hover:border-brand-green/30"
              }`}
            >
              <RabbitIllustration className="w-10 h-10 md:w-16 md:h-16" />
              <span className="text-[10px] md:text-sm font-bold text-neutral-700">Conejo</span>
            </button>

            {/* Carrot Character Button */}
            <button
              onClick={() => setActiveChar("carrot")}
              className={`p-1.5 py-2.5 md:p-3 md:py-4 rounded-[20px] md:rounded-[24px] bg-[#FFFFFF] border transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                activeChar === "carrot"
                  ? "border-[3px] border-brand-green shadow-xs bg-brand-cream/20"
                  : "border-neutral-200/60 hover:border-brand-green/30"
              }`}
            >
              <CarrotIllustration className="w-10 h-10 md:w-16 md:h-16" />
              <span className="text-[10px] md:text-sm font-bold text-neutral-700">Zana</span>
            </button>

            {/* Gold Superhero Character - Dynamically Unlocks at 110 points! */}
            {isUnlockedCharacter("secret_hero") ? (
              <button
                onClick={() => setActiveChar("secret_hero")}
                className={`p-1.5 py-2.5 md:p-3 md:py-4 rounded-[20px] md:rounded-[24px] bg-[#FEF9EC] border transition-all cursor-pointer flex flex-col items-center justify-center gap-1 relative overflow-hidden ${
                  activeChar === "secret_hero"
                    ? "border-[3px] border-yellow-500 shadow-xs bg-yellow-100/30"
                    : "border-yellow-200 hover:border-yellow-500"
                }`}
              >
                <div className="absolute top-0 right-0 bg-yellow-500 text-white text-[7px] md:text-[9px] px-1 md:px-2 py-0.5 rounded-bl-lg font-extrabold animate-pulse">🌟</div>
                <div className="text-xl md:text-3xl">🦸</div>
                <span className="text-[9px] md:text-xs font-extrabold text-amber-700 leading-tight">SuperHéroe</span>
              </button>
            ) : (
              <button
                disabled
                title="Consigue 110 puntos para desbloquear"
                className="p-1.5 py-2.5 md:p-3 md:py-4 rounded-[20px] md:rounded-[24px] bg-neutral-100/50 border border-neutral-200/40 opacity-75 flex flex-col items-center justify-center gap-1 cursor-not-allowed text-center"
              >
                <LockedCharacterIllustration className="w-9 h-9 md:w-14 md:h-14 filter grayscale saturate-75 opacity-70" />
                <span className="text-[9px] md:text-[11px] font-extrabold text-neutral-400">Bloqueado</span>
              </button>
            )}

          </div>
          <span className="text-[10px] text-neutral-400 px-1 font-medium italic mt-0.5">
            * El personaje secreto 'SuperHéroe' se desbloquea al alcanzar los 110 puntos de salud.
          </span>
        </div>

      </div>

      {/* SCORE STATUS CARD FOOTER (Short mini summaries) */}
      <div className="bg-brand-cream/30 border-t border-neutral-100 px-4 py-2.5 text-center text-xs font-semibold text-brand-dark flex items-center justify-center gap-2 shrink-0">
        <span>⭐ Puntuación Acumulada:</span>
        <span className="bg-brand-orange text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
          {points} Puntos
        </span>
      </div>

      {/* BOTTOM NAV BAR */}
      <footer className="bg-white border-t border-neutral-105 py-2.5 md:py-4 px-4 md:px-8 flex justify-around items-center z-20 shadow-lg shrink-0">
        <button onClick={() => navigate("/home")} className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-brand-green transition-colors cursor-pointer">
          <span className="text-xl md:text-2xl">🏠</span>
          <span className="text-[9px] md:text-[11px] font-bold">Inicio</span>
        </button>
        <button onClick={() => navigate("/retos")} className="flex flex-col items-center gap-0.5 text-brand-green cursor-pointer">
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
