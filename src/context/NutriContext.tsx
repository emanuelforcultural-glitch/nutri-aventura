import React, { createContext, useContext, useState, useEffect } from "react";

export interface Challenge {
  id: string;
  title: string;
  max: number;
  current: number;
  status: "idle" | "pending" | "approved"; // idle (in progress), pending (pending validation), approved (completed & validated)
  rewardPoints: number;
  color: string;
  dateStr?: string;
}

interface NutriContextProps {
  role: "child" | "parent";
  setRole: (role: "child" | "parent") => void;
  points: number;
  setPoints: (points: number) => void;
  challenges: Challenge[];
  incrementProgress: (id: string) => void;
  submitChallenge: (id: string) => void;
  approveChallenge: (id: string) => void;
  rejectChallenge: (id: string) => void;
  activeChar: string;
  setActiveChar: (char: string) => void;
  isUnlockedMedal: (medalId: string) => boolean;
  isUnlockedCharacter: (charId: string) => boolean;
  toastMessage: string | null;
  triggerToast: (msg: string) => void;
  resetApp: () => void;
}

const NutriContext = createContext<NutriContextProps | undefined>(undefined);

const defaultChallenges: Challenge[] = [
  {
    id: "banana",
    title: "Prueba una fruta nueva hoy",
    max: 1,
    current: 0,
    status: "idle",
    rewardPoints: 10,
    color: "bg-amber-400",
    dateStr: "Hoy"
  },
  {
    id: "broccoli",
    title: "Come verduras de color verde",
    max: 1,
    current: 0,
    status: "idle",
    rewardPoints: 15,
    color: "bg-green-500",
    dateStr: "Hoy"
  },
  {
    id: "water",
    title: "Bebe 5 vasos de agua pura",
    max: 5,
    current: 0,
    status: "idle",
    rewardPoints: 15,
    color: "bg-sky-400",
    dateStr: "Hoy"
  }
];

export const NutriProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<"child" | "parent">(() => {
    const saved = localStorage.getItem("nutri_role");
    return (saved as "child" | "parent") || "child";
  });

  const [points, setPointsState] = useState<number>(() => {
    const saved = localStorage.getItem("nutri_points");
    return saved ? parseInt(saved) : 80;
  });

  const [challenges, setChallengesState] = useState<Challenge[]>(() => {
    const saved = localStorage.getItem("nutri_challenges");
    return saved ? JSON.parse(saved) : defaultChallenges;
  });

  const [activeChar, setActiveCharState] = useState<string>(() => {
    return localStorage.getItem("nutri_active_char") || "dino";
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("nutri_role", role);
  }, [role]);

  useEffect(() => {
    localStorage.setItem("nutri_points", points.toString());
  }, [points]);

  useEffect(() => {
    localStorage.setItem("nutri_challenges", JSON.stringify(challenges));
  }, [challenges]);

  useEffect(() => {
    localStorage.setItem("nutri_active_char", activeChar);
  }, [activeChar]);

  const setRole = (newRole: "child" | "parent") => {
    setRoleState(newRole);
    triggerToast(`Cambiado a Modo: ${newRole === "child" ? "🧒 Niño" : "👨‍👩‍👦 Padre o Madre"}`);
  };

  const setPoints = (newPoints: number) => {
    setPointsState(newPoints);
  };

  const setActiveChar = (char: string) => {
    setActiveCharState(char);
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const resetApp = () => {
    setPointsState(80);
    setChallengesState(defaultChallenges);
    setRoleState("child");
    setActiveCharState("dino");
    triggerToast("✨ Aplicación reiniciada para demostración");
  };

  // Kid increments progress on a challenge
  const incrementProgress = (id: string) => {
    setChallengesState(prev =>
      prev.map(ch => {
        if (ch.id === id) {
          if (ch.status !== "idle") {
            triggerToast("🔒 Este reto ya fue enviado o aprobado.");
            return ch;
          }
          if (ch.current < ch.max) {
            const nextVal = ch.current + 1;
            return { ...ch, current: nextVal };
          } else {
            // Already filled, allow toggling back to 0 if idle
            return { ...ch, current: 0 };
          }
        }
        return ch;
      })
    );
  };

  // Kid submits challenge for parental validation
  const submitChallenge = (id: string) => {
    setChallengesState(prev =>
      prev.map(ch => {
        if (ch.id === id) {
          if (ch.current < ch.max) {
            triggerToast("⚠️ ¡Primero debes completar el avance del reto!");
            return ch;
          }
          triggerToast("📥 Reto enviado con éxito. Esperando aprobación de mamá o papá ⏳");
          return { ...ch, status: "pending", dateStr: new Date().toLocaleDateString("es-ES") };
        }
        return ch;
      })
    );
  };

  // Parent approves challenge
  const approveChallenge = (id: string) => {
    let earned = 0;
    setChallengesState(prev => {
      const updated = prev.map(ch => {
        if (ch.id === id) {
          earned = ch.rewardPoints;
          return { ...ch, status: "approved" };
        }
        return ch;
      });
      return updated;
    });

    if (earned > 0) {
      setPointsState(prev => prev + earned);
      triggerToast(`✅ ¡Reto Aprobado! Sumaste +${earned} puntos de salud 🌟`);
    }
  };

  // Parent rejects challenge
  const rejectChallenge = (id: string) => {
    setChallengesState(prev =>
      prev.map(ch => {
        if (ch.id === id) {
          triggerToast("❌ Reto rechazado. El niño deberá intentarlo de nuevo.");
          return { ...ch, status: "idle", current: 0 };
        }
        return ch;
      })
    );
  };

  // Computed badges/medals unlocked conditions
  const isUnlockedMedal = (medalId: string): boolean => {
    const approvedCount = challenges.filter(ch => ch.status === "approved").length;
    if (medalId === "primer_bocado") {
      return true; // Always unlocked first step
    }
    if (medalId === "super_saludable") {
      return approvedCount >= 1; // Completed 1
    }
    if (medalId === "valiente_probador") {
      return approvedCount >= 2; // Completed 2
    }
    if (medalId === "secreto") {
      return approvedCount >= 3; // All 3 complete
    }
    return false;
  };

  // Computed characters unlocked conditions (e.g. golden/secret character)
  const isUnlockedCharacter = (charId: string): boolean => {
    if (charId === "dino" || charId === "rabbit" || charId === "carrot") {
      return true;
    }
    if (charId === "secret_hero") {
      return points >= 110; // Unlocked at 110 points
    }
    return false;
  };

  return (
    <NutriContext.Provider
      value={{
        role,
        setRole,
        points,
        setPoints,
        challenges,
        incrementProgress,
        submitChallenge,
        approveChallenge,
        rejectChallenge,
        activeChar,
        setActiveChar,
        isUnlockedMedal,
        isUnlockedCharacter,
        toastMessage,
        triggerToast,
        resetApp
      }}
    >
      {children}
    </NutriContext.Provider>
  );
};

export const useNutri = () => {
  const context = useContext(NutriContext);
  if (context === undefined) {
    throw new Error("useNutri must be used within a NutriProvider");
  }
  return context;
};
