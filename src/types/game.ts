import { type Monster } from "./monster";
import { type Player } from "./player";

export interface GameState {
  player: Player | null;
  currentMonster: Monster | null;
  gameStarted: boolean;
  combatLog: string[];
}
