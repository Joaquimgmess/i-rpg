import { createContext, useContext, useReducer, type ReactNode } from "react";
import { type GameState, type Player, type Monster } from "../types/game";

type GameAction =
  | { type: "START_GAME"; payload: Player }
  | { type: "SPAWN_MONSTER"; payload: Monster }
  | { type: "UPDATE_COMBAT"; payload: { player: Player; monster: Monster } }
  | { type: "ADD_COMBAT_LOG"; payload: string }
  | { type: "LEVEL_UP"; payload: Player }
  | {
      type: "DEFEAT_MONSTER";
      payload: { player: Player; gold: number; xp: number };
    };

const initialState: GameState = {
  player: null,
  currentMonster: null,
  gameStarted: false,
  combatLog: [],
};

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        player: action.payload,
        gameStarted: true,
      };
    case "SPAWN_MONSTER":
      return {
        ...state,
        currentMonster: action.payload,
      };
    case "UPDATE_COMBAT":
      return {
        ...state,
        player: action.payload.player,
        currentMonster: action.payload.monster,
      };
    case "ADD_COMBAT_LOG":
      return {
        ...state,
        combatLog: [action.payload, ...state.combatLog].slice(0, 5),
      };
    case "LEVEL_UP":
      return {
        ...state,
        player: action.payload,
      };
    case "DEFEAT_MONSTER":
      return {
        ...state,
        player: action.payload.player,
        currentMonster: null,
      };
    default:
      return state;
  }
};

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} | null>(null);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
