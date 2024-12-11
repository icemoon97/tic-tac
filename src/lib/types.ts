export type Player = 'X' | 'O';
export type CellValue = Player | null;
export type Board = CellValue[];
export type GameStatus = 'playing' | 'won' | 'draw';
export type GameResult = [status: GameStatus, winner: CellValue];

// state is atomic
export interface GameState {
  readonly boards: Board[];
  readonly currentPlayer: Player;
  readonly lastMove: number | null;
  readonly result: GameResult;
  // derived
  readonly boardResults: GameResult[];
  readonly openBoards: number[];
}