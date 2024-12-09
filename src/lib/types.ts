export type Player = 'X' | 'O';
export type CellValue = Player | null;
export type Board = CellValue[];
export type GameStatus = 'playing' | 'won' | 'draw';
export type GameResult = [status: GameStatus, winner: Player | null];

export interface GameState {
  boards: Board[];
  currentPlayer: Player;
  result: GameResult;
}