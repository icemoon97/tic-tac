export type Player = 'X' | 'O';
export type CellValue = Player | null;
export type Board = CellValue[];
export type GameStatus = 'playing' | 'won' | 'draw';

export interface GameState {
  boards: Board[];
  currentPlayer: Player;
  winner: Player | null;
  gameStatus: GameStatus;
}