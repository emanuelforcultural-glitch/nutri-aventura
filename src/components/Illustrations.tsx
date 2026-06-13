import React from "react";

// Cute waving dinosaur illustration matching the reference
export const DinosaurIllustration: React.FC<{ className?: string }> = ({ className = "w-32 h-32" }) => (
  <svg viewBox="0 0 120 150" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Body shadow */}
    <ellipse cx="60" cy="138" rx="35" ry="8" fill="#D3E0D1" />
    
    {/* Dinosaur Main Body */}
    <path
      d="M 45 40 
         C 45 10, 85 10, 85 40 
         C 85 50, 80 65, 80 80 
         C 80 100, 95 110, 92 125 
         C 90 135, 75 135, 55 135 
         C 35 135, 25 130, 25 115 
         C 25 90, 45 70, 45 40"
      fill="#85B271"
      stroke="#4D6B42"
      strokeWidth="2.5"
    />
    
    {/* Dinosaur Spikes / Back Plates */}
    <path d="M 83 25 L 91 22 L 85 33 Z" fill="#ECA965" stroke="#4D6B42" strokeWidth="2" />
    <path d="M 85 36 L 94 34 L 85 45 Z" fill="#ECA965" stroke="#4D6B42" strokeWidth="2" />
    <path d="M 83 48 L 92 48 L 81 58 Z" fill="#ECA965" stroke="#4D6B42" strokeWidth="2" />
    <path d="M 80 61 L 89 62 L 80 71 Z" fill="#ECA965" stroke="#4D6B42" strokeWidth="2" />
    <path d="M 80 74 L 88 77 L 80 85 Z" fill="#ECA965" stroke="#4D6B42" strokeWidth="2" />
    <path d="M 81 88 L 89 93 L 83 100 Z" fill="#ECA965" stroke="#4D6B42" strokeWidth="2" />

    {/* Tail */}
    <path
      d="M 85 110 C 105 110, 115 125, 110 133 C 105 138, 92 130, 88 123"
      fill="#85B271"
      stroke="#4D6B42"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path d="M 103 118 L 111 117 L 105 125 Z" fill="#ECA965" stroke="#4D6B42" strokeWidth="2" />
    
    {/* Belly Patch (Lighter green) */}
    <path
      d="M 45 55 
         C 40 70, 40 100, 48 118 
         C 52 125, 75 125, 75 115 
         C 75 100, 72 70, 65 55
         C 60 48, 50 48, 45 55 Z"
      fill="#D7ECD1"
      stroke="#4D6B42"
      strokeWidth="1.5"
    />
    {/* Belly horizontal stripes */}
    <line x1="45" y1="75" x2="68" y2="75" stroke="#4D6B42" strokeWidth="1.5" />
    <line x1="43" y1="90" x2="71" y2="90" stroke="#4D6B42" strokeWidth="1.5" />
    <line x1="45" y1="105" x2="72" y2="105" stroke="#4D6B42" strokeWidth="1.5" />

    {/* Left Arm (Waving) */}
    <path
      d="M 33 65 C 10 55, 15 35, 23 45 C 28 51, 33 55, 34 60"
      fill="#85B271"
      stroke="#4D6B42"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Right Arm */}
    <path
      d="M 78 72 C 88 72, 92 84, 85 88 C 81 90, 76 83, 76 78"
      fill="#85B271"
      stroke="#4D6B42"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Feet */}
    <path
      d="M 32 128 C 32 138, 48 138, 48 128 Z"
      fill="#85B271"
      stroke="#4D6B42"
      strokeWidth="2.5"
    />
    <path
      d="M 68 128 C 68 138, 84 138, 84 128 Z"
      fill="#85B271"
      stroke="#4D6B42"
      strokeWidth="2.5"
    />

    {/* Eyes */}
    <circle cx="52" cy="30" r="3" fill="#253321" />
    <circle cx="70" cy="30" r="3" fill="#253321" />
    
    {/* Cheek Blush */}
    <ellipse cx="46" cy="36" rx="4" ry="2" fill="#E88D82" opacity="0.8" />
    <ellipse cx="76" cy="35" rx="4" ry="2" fill="#E88D82" opacity="0.8" />
    
    {/* Mouth */}
    <path
      d="M 52 38 C 52 48, 70 48, 70 38"
      fill="#7E2420"
      stroke="#4D6B42"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Little cute tooth */}
    <polygon points="56,39 60,39 58,43" fill="#ffffff" />
  </svg>
);

// Green apple waving matching reference
export const AppleIllustration: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Shadow */}
    <ellipse cx="60" cy="110" rx="30" ry="6" fill="#EDE4CA" />

    {/* Stem */}
    <path d="M 60 30 Q 64 12, 72 10" fill="none" stroke="#7A5636" strokeWidth="3" strokeLinecap="round" />
    
    {/* Leaf */}
    <path d="M 62 25 C 72 16, 85 24, 76 28 C 68 31, 64 27, 62 25 Z" fill="#698D5B" stroke="#3D513C" strokeWidth="1.5" />

    {/* Apple Body */}
    <path
      d="M 60 34 
         C 46 32, 23 35, 23 64 
         C 23 90, 42 106, 60 102 
         C 78 106, 97 90, 97 64 
         C 97 35, 74 32, 60 34 Z"
      fill="#A2C85C"
      stroke="#3D513C"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />

    {/* Waving Left Hand */}
    <path
      d="M 25 65 C 10 58, 12 45, 18 52 C 22 57, 24 61, 25 63"
      fill="none"
      stroke="#3D513C"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    
    {/* Right Hand */}
    <path
      d="M 95 65 C 105 68, 108 61, 103 59"
      fill="none"
      stroke="#3D513C"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Feet */}
    <path d="M 45 101 C 45 110, 49 110, 49 101" stroke="#3D513C" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 75 101 C 75 110, 79 110, 79 101" stroke="#3D513C" strokeWidth="2.5" strokeLinecap="round" />

    {/* Eyes */}
    <circle cx="48" cy="56" r="3.5" fill="#253321" />
    <circle cx="72" cy="56" r="3.5" fill="#253321" />

    {/* Blush */}
    <circle cx="42" cy="62" r="3" fill="#E88D82" opacity="0.9" />
    <circle cx="78" cy="62" r="3" fill="#E88D82" opacity="0.9" />

    {/* Big cute mouth */}
    <path
      d="M 52 64 Q 60 74, 68 64 Z"
      fill="#7E2420"
      stroke="#3D513C"
      strokeWidth="1.5"
    />
  </svg>
);

// Grapes waving (Screen 3 grape mascot)
export const GrapeIllustration: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 120 130" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Shadow */}
    <ellipse cx="60" cy="116" rx="26" ry="5" fill="#E4DBC3" />

    {/* Stem & Tendril */}
    <path d="M 60 22 C 60 10, 68 12, 65 5" fill="none" stroke="#7A5636" strokeWidth="3" strokeLinecap="round" />
    <path d="M 58 18 C 50 15, 48 24, 42 22" fill="none" stroke="#688C5E" strokeWidth="1.5" strokeLinecap="round" />

    {/* Grape group circles */}
    {/* Back layer */}
    <circle cx="44" cy="45" r="14" fill="#6A4D96" stroke="#3E2063" strokeWidth="2" />
    <circle cx="76" cy="45" r="14" fill="#6A4D96" stroke="#3E2063" strokeWidth="2" />
    <circle cx="60" cy="98" r="12" fill="#6A4D96" stroke="#3E2063" strokeWidth="2" />

    {/* Middle layer */}
    <circle cx="36" cy="65" r="15" fill="#805FB2" stroke="#3E2063" strokeWidth="2" />
    <circle cx="84" cy="65" r="15" fill="#805FB2" stroke="#3E2063" strokeWidth="2" />
    <circle cx="48" cy="85" r="14" fill="#7251A3" stroke="#3E2063" strokeWidth="2" />
    <circle cx="72" cy="85" r="14" fill="#7251A3" stroke="#3E2063" strokeWidth="2" />

    {/* Front center grape body with the face */}
    <circle cx="60" cy="55" r="18" fill="#8E6EC4" stroke="#3E2063" strokeWidth="2" />

    {/* Cute little grape faces on neighboring grapes */}
    {/* Main face details (on the main center grape) */}
    <circle cx="53" cy="50" r="2.5" fill="#201138" />
    <circle cx="67" cy="50" r="2.5" fill="#201138" />
    <ellipse cx="48" cy="54" rx="2.5" ry="1.5" fill="#EB8BA2" />
    <ellipse cx="72" cy="54" rx="2.5" ry="1.5" fill="#EB8BA2" />
    <path d="M 56 55 Q 60 61, 64 55" fill="none" stroke="#3E2063" strokeWidth="2" strokeLinecap="round" />

    {/* Waving Hands */}
    <path d="M 23 60 C 12 50, 10 38, 16 42" fill="none" stroke="#3E2063" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 97 60 C 108 50, 110 38, 104 42" fill="none" stroke="#3E2063" strokeWidth="2.5" strokeLinecap="round" />

    {/* Feet */}
    <path d="M 48 110 C 48 118, 52 118, 52 110" stroke="#3E2063" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 72 110 C 72 118, 76 118, 76 110" stroke="#3E2063" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Cute Orange Carrot waving character
export const CarrotIllustration: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 100 130" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Shadow */}
    <ellipse cx="50" cy="118" rx="20" ry="4" fill="#E6DCC3" />

    {/* Leaf tops (Green) */}
    <path d="M 50 30 Q 35 10, 42 5" fill="none" stroke="#688C5E" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M 50 30 Q 50 5, 53 3" fill="none" stroke="#688C5E" strokeWidth="4" strokeLinecap="round" />
    <path d="M 50 30 Q 65 10, 58 5" fill="none" stroke="#688C5E" strokeWidth="4.5" strokeLinecap="round" />

    {/* Carrot Body orange tapered pod */}
    <path
      d="M 32 36 
         C 32 26, 68 26, 68 36 
         C 68 55, 58 95, 51 112 
         C 50 115, 48 115, 47 112
         C 40 95, 32 55, 32 36 Z"
      fill="#ECA965"
      stroke="#5A3A1C"
      strokeWidth="2"
      strokeLinejoin="round"
    />

    {/* Body details / horizontal indent lines */}
    <path d="M 37 48 L 45 49" stroke="#BD7E3B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M 58 60 L 63 61" stroke="#BD7E3B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M 39 74 L 48 75" stroke="#BD7E3B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M 52 90 L 59 91" stroke="#BD7E3B" strokeWidth="1.5" strokeLinecap="round" />

    {/* Eyes */}
    <circle cx="43" cy="50" r="2.5" fill="#2D1D0D" />
    <circle cx="57" cy="50" r="2.5" fill="#2D1D0D" />
    <ellipse cx="39" cy="54" rx="2.5" ry="1.5" fill="#EB7E74" />
    <ellipse cx="61" cy="54" rx="2.5" ry="1.5" fill="#EB7E74" />
    
    {/* Smile */}
    <path d="M 47 56 Q 50 60, 53 56" fill="none" stroke="#5A3A1C" strokeWidth="1.5" strokeLinecap="round" />

    {/* Hands */}
    <path d="M 32 60 Q 20 54, 24 50" fill="none" stroke="#5A3A1C" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 68 62 Q 78 66, 75 58" fill="none" stroke="#5A3A1C" strokeWidth="2.5" strokeLinecap="round" />

    {/* Tiny Legs */}
    <path d="M 44 112 C 44 118, 41 120, 44 120" stroke="#5A3A1C" strokeWidth="2" strokeLinecap="round" />
    <path d="M 53 112 C 53 118, 56 120, 53 120" stroke="#5A3A1C" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Cute Pink Rabbit waving character
export const RabbitIllustration: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 100 130" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Shadow */}
    <ellipse cx="50" cy="118" rx="22" ry="5" fill="#E6DCC3" />

    {/* Long Ears */}
    <path
      d="M 33 40 C 25 15, 38 10, 40 40 Z"
      fill="#EDA2B6"
      stroke="#5A2E3B"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M 34 38 C 29 20, 36 18, 38 38" fill="#F4BACB" />

    <path
      d="M 67 40 C 75 15, 62 10, 60 40 Z"
      fill="#EDA2B6"
      stroke="#5A2E3B"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M 66 38 C 71 20, 64 18, 62 38" fill="#F4BACB" />

    {/* Rabbit Body */}
    <path
      d="M 35 48 
         C 28 48, 26 80, 26 95 
         C 26 112, 74 112, 74 95 
         C 74 80, 72 48, 65 48 
         C 58 48, 42 48, 35 48 Z"
      fill="#EDA2B6"
      stroke="#5A2E3B"
      strokeWidth="2"
      strokeLinejoin="round"
    />

    {/* Little blue pocket or patch on abdomen */}
    <path d="M 40 85 C 40 92, 50 92, 50 85" fill="#85A9D2" stroke="#5A2E3B" strokeWidth="1.5" />
    <path d="M 40 85 L 50 85" stroke="#5A2E3B" strokeWidth="1.5" />

    {/* Eyes */}
    <circle cx="42" cy="62" r="2.5" fill="#2C161D" />
    <circle cx="58" cy="62" r="2.5" fill="#2C161D" />
    <ellipse cx="36" cy="66" rx="2.5" ry="1.5" fill="#E87693" />
    <ellipse cx="64" cy="66" rx="2.5" ry="1.5" fill="#E87693" />

    {/* Nose and Mouth */}
    <polygon points="49,67 51,67 50,69" fill="#5A2E3B" />
    <path d="M 47 72 C 49 74, 50 72, 50 71 Q 50 72, 53 72" fill="none" stroke="#5A2E3B" strokeWidth="1.5" strokeLinecap="round" />

    {/* Waving Hands */}
    <path d="M 27 68 Q 15 62, 19 58" fill="none" stroke="#5A2E3B" strokeWidth="2" strokeLinecap="round" />
    <path d="M 73 70 Q 82 74, 80 66" fill="none" stroke="#5A2E3B" strokeWidth="2" strokeLinecap="round" />

    {/* Short legs */}
    <path d="M 36 112 C 36 120, 44 120, 44 112" fill="#EDA2B6" stroke="#5A2E3B" strokeWidth="2" strokeLinecap="round" />
    <path d="M 56 112 C 56 120, 64 120, 64 112" fill="#EDA2B6" stroke="#5A2E3B" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Lock Silhouette with Question Mark
export const LockedCharacterIllustration: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 100 120" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="110" rx="22" ry="5" fill="#E2DAC4" />
    
    {/* Star / locked shape */}
    <path
      d="M 50 15 
         L 58 35 
         L 80 38 
         L 64 54 
         L 68 76 
         L 50 65 
         L 32 76 
         L 36 54 
         L 20 38 
         L 42 35 Z"
      fill="#CCCCCC"
      stroke="#7A7A7A"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    
    {/* Question mark */}
    <text x="50" y="55" fontSize="24" fontWeight="bold" fill="#7A7A7A" textAnchor="middle" dominantBaseline="middle">
      ?
    </text>
  </svg>
);

// Small food visual elements: Banana
export const BananaIllustration: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 80 80" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 18 18 
         Q 12 28, 15 32 
         Q 20 34, 25 30 
         Q 45 42, 60 48 
         Q 68 50, 70 42 
         Q 72 32, 64 30
         Q 45 28, 18 18 Z"
      fill="#F1B646"
      stroke="#5A3C1A"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Tip details */}
    <path d="M 16 20 C 14 24, 15 28, 18 29" fill="#5A3C1A" />
    <path d="M 66 38 C 68 40, 70 41, 68 44" fill="#6E4426" strokeWidth="1" />
  </svg>
);

// Broccoli
export const BroccoliIllustration: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 80 80" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Stalk */}
    <path
      d="M 34 50 L 30 72 C 30 75, 50 75, 50 72 L 46 50 Z"
      fill="#CCD9B2"
      stroke="#4D603A"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    
    {/* Fluffy Green Topping */}
    <circle cx="32" cy="38" r="14" fill="#5F824A" stroke="#4D603A" strokeWidth="2.5" />
    <circle cx="48" cy="38" r="14" fill="#5F824A" stroke="#4D603A" strokeWidth="2.5" />
    <circle cx="40" cy="24" r="14" fill="#6A9452" stroke="#4D603A" strokeWidth="2.5" />
  </svg>
);

// Water Droplet
export const WaterDropIllustration: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 60 80" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 30 10 
         C 30 10, 52 42, 52 56 
         C 52 68, 42 76, 30 76 
         C 18 76, 8 68, 8 56 
         C 8 42, 30 10, 30 10 Z"
      fill="#68BCE5"
      stroke="#204066"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Shine reflection */}
    <path
      d="M 18 52 C 16 57, 18 64, 25 66"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Bowl of fruits
export const FruitBowlIllustration: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 80" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Fruits peaking out */}
    <circle cx="32" cy="32" r="12" fill="#5E834D" /> {/* broccoli */}
    <circle cx="46" cy="24" r="10" fill="#ECA965" /> {/* carrot or orange */}
    <path d="M 54 13 L 56 25 L 50 25 Z" fill="#68BCE5" /> {/* water droplet */}
    <circle cx="68" cy="34" r="12" fill="#8E6EC4" /> {/* grape */}
    <circle cx="76" cy="36" r="12" fill="#E8665E" /> {/* apple */}
    
    {/* Bowl */}
    <path
      d="M 15 36 
         C 15 36, 17 76, 50 76 
         C 83 76, 85 36, 85 36 
         C 85 36, 50 36, 15 36 Z"
      fill="#F5AF5D"
      stroke="#4D2E11"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Bowl base rim */}
    <line x1="32" y1="76" x2="68" y2="76" stroke="#4D2E11" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// Green medal with apple
export const PrimerBocadoMedal: React.FC<{ className?: string }> = ({ className = "w-20 h-24" }) => (
  <svg viewBox="0 0 100 130" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Ribbons */}
    <path d="M 38 75 L 26 120 L 45 110 L 50 82 Z" fill="#4B6A41" stroke="#253520" strokeWidth="1.5" />
    <path d="M 62 75 L 74 120 L 55 110 L 50 82 Z" fill="#4B6A41" stroke="#253520" strokeWidth="1.5" />
    
    {/* Ribbon folds */}
    <path d="M 34 116 L 38 120" stroke="#253520" strokeWidth="2" />
    <path d="M 66 116 L 62 120" stroke="#253520" strokeWidth="2" />

    {/* Rounded Medallion border */}
    <circle cx="50" cy="50" r="36" fill="#89A67D" stroke="#253520" strokeWidth="2" />
    <circle cx="50" cy="50" r="30" fill="#D3ECD0" stroke="#253520" strokeWidth="1.5" />

    {/* Mini Apple inside */}
    <path d="M 50 34 C 41 33, 36 38, 36 52 C 36 64, 45 68, 50 67 C 55 68, 64 64, 64 52 C 64 38, 59 33, 50 34 Z" fill="#6AA451" />
    <circle cx="45" cy="46" r="1.5" fill="#152510" />
    <circle cx="55" cy="46" r="1.5" fill="#152510" />
    <path d="M 47 52 Q 50 55, 53 52" fill="none" stroke="#152510" strokeWidth="1" />
  </svg>
);

// Orange medal with carrot
export const SuperSaludableMedal: React.FC<{ className?: string }> = ({ className = "w-20 h-24" }) => (
  <svg viewBox="0 0 100 130" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Ribbons */}
    <path d="M 38 75 L 26 120 L 45 110 L 50 82 Z" fill="#AC622C" stroke="#5E2F10" strokeWidth="1.5" />
    <path d="M 62 75 L 74 120 L 55 110 L 50 82 Z" fill="#AC622C" stroke="#5E2F10" strokeWidth="1.5" />

    {/* Medallion border */}
    <circle cx="50" cy="50" r="36" fill="#D4864F" stroke="#5E2F10" strokeWidth="2" />
    <circle cx="50" cy="50" r="30" fill="#FCE5CF" stroke="#5E2F10" strokeWidth="1.5" />

    {/* Mini Carrot */}
    <path
      d="M 38 40 C 38 34, 62 34, 62 40 C 62 48, 54 62, 50 69 C 46 62, 38 48, 38 40 Z"
      fill="#E78E48"
    />
    <path d="M 50 34 Q 45 25, 48 24 M 50 34 Q 55 25, 52 24" stroke="#48683F" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Purple medal with grape
export const ValienteProbadorMedal: React.FC<{ className?: string }> = ({ className = "w-20 h-24" }) => (
  <svg viewBox="0 0 100 130" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Ribbons */}
    <path d="M 38 75 L 26 120 L 45 110 L 50 82 Z" fill="#6A418E" stroke="#3A1C54" strokeWidth="1.5" />
    <path d="M 62 75 L 74 120 L 55 110 L 50 82 Z" fill="#6A418E" stroke="#3A1C54" strokeWidth="1.5" />

    {/* Medallion border */}
    <circle cx="50" cy="50" r="36" fill="#9574BB" stroke="#3A1C54" strokeWidth="2" />
    <circle cx="50" cy="50" r="30" fill="#ECDDFB" stroke="#3A1C54" strokeWidth="1.5" />

    {/* Mini Grape */}
    <circle cx="44" cy="40" r="6" fill="#7548A4" />
    <circle cx="56" cy="40" r="6" fill="#7548A4" />
    <circle cx="50" cy="47" r="7" fill="#885CB7" />
    <circle cx="50" cy="56" r="6" fill="#7548A4" />
    <path d="M 50 34 L 54 28" stroke="#48683F" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Gray secrecy medal with question mark
export const SecretoMedal: React.FC<{ className?: string }> = ({ className = "w-20 h-24" }) => (
  <svg viewBox="0 0 100 130" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Ribbons */}
    <path d="M 38 75 L 26 120 L 45 110 L 50 82 Z" fill="#7A7A7A" stroke="#404040" strokeWidth="1.5" />
    <path d="M 62 75 L 74 120 L 55 110 L 50 82 Z" fill="#7A7A7A" stroke="#404040" strokeWidth="1.5" />

    {/* Medallion border */}
    <circle cx="50" cy="50" r="36" fill="#9E9E9E" stroke="#404040" strokeWidth="2" />
    <circle cx="50" cy="50" r="30" fill="#E2E2E2" stroke="#404040" strokeWidth="1.5" />

    {/* Question mark */}
    <text x="50" y="55" fontSize="26" fontWeight="bold" fill="#505050" textAnchor="middle" dominantBaseline="middle">
      ?
    </text>
  </svg>
);

// Star medal badge (Tu progreso right-hand star)
export const StarMedalBadge: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 80 80" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Red / orange ribbons */}
    <path d="M 30 50 L 22 75 L 34 70 L 40 54 Z" fill="#ECA965" stroke="#7A4D1A" strokeWidth="1" />
    <path d="M 50 50 L 58 75 L 46 70 L 40 54 Z" fill="#ECA965" stroke="#7A4D1A" strokeWidth="1" />

    {/* Medallion border */}
    <circle cx="40" cy="34" r="24" fill="#F1B646" stroke="#7A4D1A" strokeWidth="1.5" />
    <circle cx="40" cy="34" r="19" fill="#FDF3CE" stroke="#7A4D1A" strokeWidth="1" />

    {/* Central Shiny Gold Star */}
    <path
      d="M 40 18 
         L 44 28 
         L 55 29 
         L 47 37 
         L 49 48 
         L 40 42 
         L 31 48 
         L 33 37 
         L 25 29 
         L 36 28 Z"
      fill="#F1B646"
      stroke="#7A4D1A"
      strokeWidth="1"
    />
  </svg>
);

// Clock vector illustration
export const ClockIllustration: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 80 80" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="34" fill="#9F8BB5" stroke="#48385A" strokeWidth="2.5" />
    <circle cx="40" cy="40" r="28" fill="#ECDEFB" stroke="#48385A" strokeWidth="2" />
    
    {/* Clock numbers markers */}
    <line x1="40" y1="16" x2="40" y2="20" stroke="#48385A" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="64" x2="40" y2="60" stroke="#48385A" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="40" x2="20" y2="40" stroke="#48385A" strokeWidth="2" strokeLinecap="round" />
    <line x1="64" y1="40" x2="60" y2="40" stroke="#48385A" strokeWidth="2" strokeLinecap="round" />
    
    {/* Clock hands */}
    <line x1="40" y1="40" x2="40" y2="26" stroke="#48385A" strokeWidth="3" strokeLinecap="round" />
    <line x1="40" y1="40" x2="52" y2="48" stroke="#48385A" strokeWidth="3" strokeLinecap="round" />
    <circle cx="40" cy="40" r="4" fill="#48385A" />
  </svg>
);

// Green Checkbox
export const CheckboxIllustration: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 80 80" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="56" height="56" rx="14" fill="#E4ECD9" stroke="#4D6B3C" strokeWidth="2.5" />
    <path
      d="M 24 38 L 36 50 L 58 26"
      fill="none"
      stroke="#5F8C40"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Star header right side icon
export const BigStarIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#ECA965" stroke="#AB743F" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M 12 2 L 15.09 8.26 L 22 9.27 L 17 14.14 L 18.18 21.02 L 12 17.77 L 5.82 21.02 L 7 14.14 L 2 9.27 L 8.91 8.26 Z" strokeLinejoin="round" />
  </svg>
);

// Gold Trophy matching the Rewards screen
export const TrophyIllustration: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Trophy base */}
    <rect x="36" y="80" width="28" height="8" rx="2" fill="#784E29" stroke="#4D3016" strokeWidth="2" />
    <polygon points="42,80 58,80 54,66 46,66" fill="#ECA965" stroke="#432913" strokeWidth="2" />
    
    {/* Handles */}
    <path d="M 33 34 C 18 34, 18 54, 33 54" fill="none" stroke="#ECA965" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M 67 34 C 82 34, 82 54, 67 54" fill="none" stroke="#ECA965" strokeWidth="4.5" strokeLinecap="round" />

    {/* Main Cup */}
    <path
      d="M 30 26 
         L 70 26 
         C 70 48, 62 66, 50 66 
         C 38 66, 30 48, 30 26 Z"
      fill="#FDCD4B"
      stroke="#432913"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    
    {/* Trophy Star emblem */}
    <path
      d="M 50 34 L 52.5 41 L 60 41 L 54 45.5 L 56 52.5 L 50 48 L 44 52.5 L 46 45.5 L 40 41 L 47.5 41 Z"
      fill="#F1A02E"
    />

    {/* Sparkles */}
    <circle cx="24" cy="20" r="1.5" fill="#FDCD4B" />
    <circle cx="76" cy="18" r="2" fill="#FDCD4B" />
  </svg>
);

// Boy profile face for head / comments
export const BoyProfileIllustration: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 80 80" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Background Circle */}
    <circle cx="40" cy="40" r="38" fill="#FCE5CF" stroke="#D3A780" strokeWidth="1.5" />
    
    {/* Hair back */}
    <path d="M 18 42 C 14 30, 20 12, 40 12 C 60 12, 66 30, 62 42 Z" fill="#6B4423" />

    {/* Friendly Round Face */}
    <circle cx="40" cy="44" r="24" fill="#FCE4C3" />

    {/* Hair spikes / front fringe */}
    <path d="M 18 36 C 24 24, 34 26, 38 32 C 43 24, 55 24, 62 36 C 58 20, 22 20, 18 36 Z" fill="#6B4423" />

    {/* Small Ears */}
    <circle cx="15" cy="44" r="5" fill="#FCE4C3" />
    <circle cx="65" cy="44" r="5" fill="#FCE4C3" />

    {/* Eyes */}
    <circle cx="31" cy="45" r="2.5" fill="#2E1C0C" />
    <circle cx="49" cy="45" r="2.5" fill="#2E1C0C" />

    {/* Blush */}
    <circle cx="26" cy="50" r="2.5" fill="#E07C6B" opacity="0.8" />
    <circle cx="54" cy="50" r="2.5" fill="#E07C6B" opacity="0.8" />

    {/* Smile */}
    <path d="M 36 52 Q 40 56, 44 52" fill="none" stroke="#6B4423" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Family Illustration (Father, Mother, Wearing Cute Outfits)
export const FamilyIllustration: React.FC<{ className?: string }> = ({ className = "w-44 h-44" }) => (
  <svg viewBox="0 0 160 140" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Background aura shadow */}
    <ellipse cx="80" cy="125" rx="60" ry="12" fill="#EADFBE" opacity="0.6" />

    {/* FATHER (Left) */}
    {/* Body */}
    <path d="M 22 135 L 70 135 L 62 100 L 30 100 Z" fill="#5F8C81" stroke="#3D504C" strokeWidth="1.5" />
    {/* Collar */}
    <polygon points="35,100 46,110 46,100" fill="#3D504C" />
    <polygon points="57,100 46,110 46,100" fill="#3D504C" />
    {/* Neck */}
    <rect x="42" y="88" width="8" height="14" fill="#F5CFB1" stroke="#3D504C" strokeWidth="1.5" />
    {/* Face */}
    <circle cx="46" cy="74" r="16" fill="#F5CFB1" stroke="#3D504C" strokeWidth="1.5" />
    {/* Hair */}
    <path d="M 30 70 C 26 55, 42 54, 52 58 C 50 63, 46 64, 46 64 C 46 64, 38 64, 30 70 Z" fill="#7C5D3F" stroke="#3D504C" strokeWidth="1.5" />
    {/* Ears */}
    <circle cx="29" cy="74" r="3" fill="#F5CFB1" />
    <circle cx="63" cy="74" r="3" fill="#F5CFB1" />
    {/* Face details */}
    <circle cx="41" cy="74" r="1.5" fill="#2E1E11" />
    <circle cx="51" cy="74" r="1.5" fill="#2E1E11" />
    <ellipse cx="37" cy="77" rx="2" ry="1" fill="#E88D82" />
    <ellipse cx="55" cy="77" rx="2" ry="1" fill="#E88D82" />
    <path d="M 43 80 Q 46 83, 49 80" fill="none" stroke="#2E1E11" strokeWidth="1.5" strokeLinecap="round" />


    {/* MOTHER (Right) */}
    {/* Body */}
    <path d="M 90 135 L 138 135 L 130 96 L 98 96 Z" fill="#DE685C" stroke="#5A2E2A" strokeWidth="1.5" />
    {/* Collar necklace */}
    <path d="M 110 96 C 110 102, 126 102, 126 96" fill="none" stroke="#F6DFBE" strokeWidth="1.5" />
    {/* Neck */}
    <rect x="110" y="86" width="8" height="12" fill="#FCDDC3" stroke="#5A2E2A" strokeWidth="1.5" />
    {/* Face */}
    <circle cx="114" cy="72" r="16" fill="#FCDDC3" stroke="#5A2E2A" strokeWidth="1.5" />
    {/* Waving left hand */}
    <path d="M 132 110 C 142 108, 145 92, 138 98 Q 134 102, 131 106" fill="none" stroke="#5A2E2A" strokeWidth="1.5" strokeLinecap="round" />
    {/* Hair */}
    <path d="M 96 74 C 94 48, 134 48, 132 74 C 136 84, 134 100, 130 102" fill="#84502E" stroke="#5A2E2A" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M 98 74 L 108 64 Q 120 66, 128 72" stroke="#5A2E2A" strokeWidth="1.5" fill="none" />
    {/* Face details */}
    <circle cx="109" cy="72" r="1.5" fill="#2E1E11" />
    <circle cx="119" cy="72" r="1.5" fill="#2E1E11" />
    <ellipse cx="105" cy="75" rx="2" ry="1" fill="#E88D82" />
    <ellipse cx="123" cy="75" rx="2" ry="1" fill="#E88D82" />
    <path d="M 111 78 Q 114 81, 117 78" fill="none" stroke="#2E1E11" strokeWidth="1.5" strokeLinecap="round" />


    {/* LITTLE BOY (Center) */}
    {/* Body */}
    <path d="M 60 135 L 100 135 L 94 114 L 66 114 Z" fill="#9AC75C" stroke="#48602E" strokeWidth="1.5" />
    {/* Neck */}
    <rect x="76" y="106" width="6" height="10" fill="#FCE4C3" stroke="#48602E" strokeWidth="1.2" />
    {/* Face */}
    <circle cx="79" cy="94" r="13" fill="#FCE4C3" stroke="#48602E" strokeWidth="1.5" />
    {/* Waving hand */}
    <path d="M 94 125 C 102 120, 102 110, 96 115" fill="none" stroke="#48602E" strokeWidth="1.5" strokeLinecap="round" />
    {/* Hair */}
    <path d="M 68 94 C 64 82, 72 78, 80 80 C 88 78, 94 82, 90 94" fill="#7C5D3F" stroke="#48602E" strokeWidth="1.2" />
    <path d="M 70 88 C 74 84, 84 84, 88 88" stroke="#48602E" strokeWidth="1" fill="none" />
    {/* Face details */}
    <circle cx="74" cy="94" r="1.2" fill="#2E1E11" />
    <circle cx="84" cy="94" r="1.2" fill="#2E1E11" />
    <ellipse cx="71" cy="97" rx="1.5" ry="0.8" fill="#E88D82" />
    <ellipse cx="87" cy="97" rx="1.5" ry="0.8" fill="#E88D82" />
    <path d="M 77 99 Q 79 101, 81 99" fill="none" stroke="#2E1E11" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);
