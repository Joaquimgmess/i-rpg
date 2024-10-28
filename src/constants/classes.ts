import { Sword, Shield, Wand } from "lucide-react";

export const classes = {
  warrior: {
    name: "Guerreiro",
    icon: Sword,
    baseStats: {
      hp: 150,
      maxHp: 150,
      attack: 15,
      defense: 10,
    },
    description: "Forte e resistente, especialista em combate corpo a corpo.",
  },
  mage: {
    name: "Mago",
    icon: Wand,
    baseStats: {
      hp: 80,
      maxHp: 80,
      attack: 25,
      defense: 5,
    },
    description: "Domina magias poderosas, alto dano mas baixa defesa.",
  },
  paladin: {
    name: "Paladino",
    icon: Shield,
    baseStats: {
      hp: 120,
      maxHp: 120,
      attack: 12,
      defense: 15,
    },
    description: "Equilibrado entre ataque e defesa, com habilidades de cura.",
  },
} as const;
