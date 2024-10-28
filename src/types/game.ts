export interface GameState {
  player: Player | null;
  currentMonster: Monster | null;
  gameStarted: boolean;
  combatLog: string[];
}

export interface PlayerStats {
  hp: number;
  maxHp: number;
  attack: number;
  defense: number;
}

export interface Player {
  name: string;
  class: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  gold: number;
  stats: PlayerStats;
}

export interface Monster {
  id: number;
  name: string;
  hp: number;
  currentHp: number;
  attack: number;
  defense: number;
  xp: number;
  gold: number;
  level: number;
}
