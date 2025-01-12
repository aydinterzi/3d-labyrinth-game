import { create } from "zustand";

interface GameState {
  isGameOver: boolean;
  hasWon: boolean;
  setGameOver: (value: boolean) => void;
  setWin: (value: boolean) => void;
  resetGame: () => void;
}

const useGameState = create<GameState>((set) => ({
  isGameOver: false,
  hasWon: false,
  setGameOver: (value) => set({ isGameOver: value }),
  setWin: (value) => set({ hasWon: value }),
  resetGame: () => set({ isGameOver: false, hasWon: false }),
}));

export default useGameState;
