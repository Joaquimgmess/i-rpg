"use client";

import CharacterSelection from "@/components/game/CharacterSelection";
import GameScreen from "@/components/game/GameScreen";
import { useGameContext } from "~/context/game-context";

export default function Home() {
  const { state } = useGameContext();

  return (
    <main className="container mx-auto p-4">
      {!state.gameStarted ? <CharacterSelection /> : <GameScreen />}
    </main>
  );
}
