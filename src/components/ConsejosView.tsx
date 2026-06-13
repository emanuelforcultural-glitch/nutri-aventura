import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, BookOpen, Clock, Heart, X, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { useNutri } from "../context/NutriContext";
import {
  FamilyIllustration,
  FruitBowlIllustration,
  ClockIllustration,
  BoyProfileIllustration,
  CheckboxIllustration
} from "./Illustrations";

interface TipStrategy {
  id: string;
  icon: React.ReactNode;
  text: string;
  color: string;
  detailTitle: string;
  detailBody: string;
  authorLabel: string;
}

export const ConsejosView: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTip, setSelectedTip] = useState<TipStrategy | null>(null);
  const { challenges, approveChallenge, rejectChallenge, role } = useNutri();

  // Get only pending challenges for parent validation
  const pendingChallenges = challenges.filter(ch => ch.status === "pending");

  const tips: TipStrategy[] = [
    {
      id: "tip-1",
      icon: <FruitBowlIllustration className="w-10 h-10 md:w-12 md:h-12 drop-shadow-3xs" />,
      text: "Ofrece variedad de frutas y verduras de diferentes colores",
      color: "bg-[#FDF6E2] border-brand-cream",
      detailTitle: "El Arcoíris de Nutrientes 🌈",
      detailBody: "Ofrecer alimentos de múltiples colores asegura un espectro completo de vitaminas y fitonutrientes esenciales. Por ejemplo, el rojo (jitomate/fresa) aporta licopenos para el corazón; el verde (brócoli/espinaca) provee hierro y fibra; y el naranja (zanahoria) beneficia la vista por sus betacarotenos. ¡Haz del juego de pintar el plato una dinámica divertida!",
      authorLabel: "Psicología Infantil e Higiene Alimentaria"
    },
    {
      id: "tip-2",
      icon: <ClockIllustration className="w-10 h-10 md:w-12 md:h-12 drop-shadow-3xs" />,
      text: "Involucra a tu hijo en la preparación de sus alimentos",
      color: "bg-[#FCF5E3] border-yellow-200",
      detailTitle: "Pequeños Chefs en Acción 🧑‍🍳",
      detailBody: "Cuando los niños participan lavando las hojas de lechuga, pelando plátanos con sus manos o batiendo aderezos suaves, se crea un lazo emocional de pertenencia con la comida. Desaparece el rechazo defensivo porque 'ellos mismos lo crearon'. El orgullo de cocinar acelera exponencialmente la bienvenida de nuevos texturas.",
      authorLabel: "Crianza con Apego y Autonomía"
    },
    {
      id: "tip-3",
      icon: <BoyProfileIllustration className="w-10 h-10 md:w-12 md:h-12 drop-shadow-3xs" />,
      text: "Elogia sus intentos cuando pruebe algo nuevo",
      color: "bg-[#FDF6E2] border-brand-cream",
      detailTitle: "Festividades de la Valentía 🎉",
      detailBody: "No presiones para que limpie el plato ni enfoques la atención en la cantidad. Premia la audacia: un pequeño lengüetazo o un mordisco tímido son victorias titánicas. Frases como: '¡Me encanta lo valiente que eres probando este brócoli aventurero!' estimulan dopamina positiva y asocian la comida con el elogio, no con el reproche.",
      authorLabel: "Refuerzo Positivo Conductual"
    },
    {
      id: "tip-4",
      icon: <CheckboxIllustration className="w-10 h-10 md:w-12 md:h-12 drop-shadow-3xs" />,
      text: "Se un ejemplo, come saludable en familia",
      color: "bg-[#FDF6E2] border-brand-cream",
      detailTitle: "El Espejo de los Padres 👪",
      detailBody: "Las neuronas espejo de los infantes se activan con el modelado. Si te ven masticar verduras asadas con genuino deleite, masticación tranquila y expresión de felicidad, el cerebro infantil lo cataloga como un alimento seguro para la supervivencia. Los sermones no sirven; comer en familia saboreando lo verde, sí.",
      authorLabel: "Nutrición Pediátrica Familiar"
    }
  ];

  return (
    <div className="absolute inset-0 bg-[#FCFBF8] flex flex-col justify-between overflow-hidden text-neutral-800">
      
      {/* HEADER WITH BACK BUTTON */}
      <header className="px-4 py-2.5 md:px-8 md:py-4 bg-white border-b border-gray-100 flex items-center justify-between shadow-xs z-10 shrink-0">
        <button
          onClick={() => navigate("/home")}
          className="p-1 text-brand-green hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer flex items-center"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
        
        <h1 className="text-md md:text-lg font-extrabold tracking-wider text-brand-green font-display select-none text-center flex-1 pr-6 uppercase leading-tight">
          CONSEJOS PARA PAPÁS
        </h1>
      </header>

      {/* EXPANDABLE MODAL POPUP (Educational detail drawer) */}
      <AnimatePresence>
        {selectedTip && (
          <>
            {/* Dark opaque backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTip(null)}
              className="absolute inset-0 bg-black z-45 cursor-pointer"
            />

            {/* Strategy Detail Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="absolute left-0 right-0 bottom-0 max-h-[75%] bg-white rounded-t-[32px] p-6 md:p-8 shadow-2xl border-t-4 border-brand-green z-50 flex flex-col justify-between"
            >
              <div>
                {/* Header detail */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 text-brand-green">
                    <BookOpen className="w-5 h-5 text-brand-orange" />
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-orange leading-none font-display">
                      Estrategia Nutricional
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedTip(null)}
                    className="p-1 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5 text-neutral-400" />
                  </button>
                </div>

                {/* Card Title */}
                <h3 className="text-lg md:text-xl font-extrabold text-brand-dark mb-3 leading-tight font-display">
                  {selectedTip.detailTitle}
                </h3>

                {/* Body paragraph */}
                <p className="text-sm md:text-base font-semibold text-neutral-600 leading-relaxed font-sans mb-4">
                  {selectedTip.detailBody}
                </p>
              </div>

              {/* Advisory stamp */}
              <div className="bg-[#F2F7F1] p-3 md:p-4 rounded-2xl flex items-center gap-2.5 border border-brand-green/20">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-brand-green fill-brand-green shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-brand-green tracking-wider uppercase leading-none font-display">
                    Avalado por
                  </span>
                  <span className="text-xs md:text-sm font-bold text-neutral-600">
                    {selectedTip.authorLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CORE SCROLLABLE VIEWS */}
      <div className="flex-1 overflow-y-auto px-4 py-4 md:px-8 md:py-6 flex flex-col gap-4 md:gap-6">

        {/* HERO FAMILY CARD BANNER */}
        <div className="bg-brand-cream rounded-[24px] md:rounded-[32px] p-4 md:p-6 border border-[#E9DCB2] shadow-2xs flex flex-col items-center text-center gap-2">
          <p className="text-brand-dark text-sm md:text-base font-bold leading-normal px-2">
            "Pequeñas acciones hoy, grandes hábitos mañana familiares."
          </p>

          {/* Family Illustration Vector */}
          <div className="flex justify-center -mt-1 -mb-3 h-32 md:h-36 overflow-hidden">
            <FamilyIllustration className="w-40 h-40 md:w-48 md:h-48 drop-shadow-md" />
          </div>
        </div>

        {/* SECTION: Validación de retos (STRICT PROMPT REQUIREMENT) */}
        <div className="flex flex-col gap-3.5 border-t border-b border-neutral-100 py-3.5 md:py-5">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-xs md:text-sm font-extrabold text-[#5F7F5D] tracking-widest uppercase leading-none font-display flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-brand-green" />
              Validación de Retos
            </h2>
            <span className="text-[9px] md:text-[10px] font-extrabold bg-[#FCE5CF] text-amber-800 px-2 py-0.5 rounded-full uppercase font-display">
              Control Parental
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-5 mt-1">
            {pendingChallenges.length === 0 ? (
              <div className="col-span-full bg-white/60 p-5 md:p-8 rounded-[22px] border border-dashed border-neutral-200 text-center flex flex-col items-center justify-center gap-2 shadow-3xs">
                <span className="text-2xl md:text-3xl">✨</span>
                <p className="text-[11px] md:text-sm font-bold text-neutral-500 leading-snug">
                  No hay retos pendientes de validación.<br/>
                  <span className="text-[10px] md:text-xs font-normal text-neutral-400">Pásale el teléfono a tu hijo para que empiece a avanzar sus metas en "Retos".</span>
                </p>
              </div>
            ) : (
              pendingChallenges.map(ch => (
                <div 
                  key={ch.id} 
                  className="bg-[#FFFDF6] border border-brand-orange/20 rounded-[20px] md:rounded-[24px] p-3.5 md:p-5 shadow-2xs flex flex-col justify-between gap-3 relative overflow-hidden"
                >
                  {/* Decorative corner tag */}
                  <div className="absolute top-0 right-0 bg-brand-orange text-white text-[8px] font-extrabold px-3 py-1 rounded-bl-xl uppercase font-display tracking-widest animate-pulse">
                    Pendiente
                  </div>

                  {/* Header info */}
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl md:text-2xl">
                      {ch.id === "banana" ? "🍌" : ch.id === "broccoli" ? "🥦" : "💧"}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-[13px] md:text-sm font-extrabold text-[#384c37] leading-tight pr-14">
                        {ch.title}
                      </h4>
                      <p className="text-[10px] md:text-xs text-neutral-400 font-semibold mt-0.5 leading-none">
                        Fecha: {ch.dateStr || "Hoy"} • Avance: {ch.current}/{ch.max}
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] md:text-xs font-medium text-neutral-600 bg-white/70 p-2 md:p-3 rounded-xl border border-neutral-100">
                    El niño informa que completó con éxito este hábito saludable interactivo.
                  </p>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3 mt-1">
                    <button
                      onClick={() => rejectChallenge(ch.id)}
                      className="bg-[#FFF0F0] hover:bg-red-100 text-red-600 text-xs md:text-sm font-extrabold py-2.5 px-4 rounded-xl border border-red-200/50 transition-colors cursor-pointer text-center shadow-3xs"
                    >
                      Rechazar
                    </button>
                    <button
                      onClick={() => {
                        approveChallenge(ch.id);
                        // Add elegant local alert
                      }}
                      className="bg-brand-green hover:bg-brand-green/90 text-white text-xs md:text-sm font-extrabold py-2.5 px-4 rounded-xl shadow-3xs transition-transform active:scale-97 cursor-pointer text-center"
                    >
                      Aprobar Reto
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* LIST OF STRATEGIES */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xs md:text-sm font-extrabold text-[#5F7F5D] tracking-widest mt-1 uppercase leading-none font-display">
            Estrategias prácticas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-5">
            {tips.map(tip => (
              <motion.div
                key={tip.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedTip(tip)}
                className="p-3.5 md:p-4 rounded-[20px] md:rounded-[24px] border shadow-3xs flex items-center justify-between gap-3 bg-brand-cream/35 border-brand-cream/60 hover:bg-brand-cream/55 transition-colors cursor-pointer"
              >
                {/* Circle Icon left */}
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-brand-cream/50 shadow-3xs">
                  {tip.icon}
                </div>

                {/* Subtitle center */}
                <div className="flex-1 min-w-0 pr-1">
                  <p className="text-xs md:text-sm font-bold text-neutral-700 leading-snug">
                    {tip.text}
                  </p>
                </div>

                {/* Chevron icon right */}
                <div className="shrink-0">
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-brand-orange stroke-[2.5]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* SUMMARY EDUCATION SUB CARD */}
      <div className="bg-brand-green text-brand-cream p-3 px-5 md:py-4 text-center text-xs md:text-sm font-bold flex items-center justify-center gap-2.5 shadow-md">
        <span>👨‍👩‍👧‍👦</span>
        <span>Acompaña a tu hijo con amor y paciencia</span>
      </div>

    </div>
  );
};
