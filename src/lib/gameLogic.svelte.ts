import type { Board, GameState, GameStatus, Player } from './types';

const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// const checkWinner = (board: Board): Player | null => {
//     const squares = countWinningSquares(board);
//     if (squares.length) {
//         return board[squares[0]];
//     }
//     return null;
// };

// const countWinningSquares = (board: Board): number[] => {
//     for (const [a, b, c] of WINNING_COMBINATIONS) {
//         if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//             return [a, b, c];
//         }
//     }
//     return [];
// }

// const checkDraw = (board: Board): boolean => {
//     return board.every(cell => cell !== null);
// };

const initialGameState = (): GameState => {
    return {
        boards: Array(9).fill(Array(9).fill(null)),
        currentPlayer: 'X',
        winner: null,
        gameStatus: 'playing'
    };
  }

class GameManager {
    private state: GameState = $state(initialGameState());
    // public winningSquares: number[] = $derived(countWinningSquares(this.state.board));

    public move(board: number, pos: number): void {
        this.getBoard(board)[pos] = this.state.currentPlayer;

        this.state.currentPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    }

    public getBoard(i: number): Board {
        return this.state.boards[i];
    }

    get boards(): Board[] {
        return this.state.boards;
    }

    get currentPlayer(): Player {
        return this.state.currentPlayer;
    }

    get winner(): Player | null {
        return this.state.winner;
    }

    get gameStatus(): GameStatus {
        return this.state.gameStatus;
    }

    // public move(pos: number): void {
    //     if (this.state.board[pos] || this.state.gameStatus !== 'playing') {
    //         return;
    //     }

    //     const nextBoard = [...this.state.board];
    //     nextBoard[pos] = this.state.currentPlayer;
    //     this.state.board = nextBoard;

    //     const winner = checkWinner(this.state.board);
    //     const isDraw = checkDraw(this.state.board);

    //     if (winner) {
    //         this.state.winner = winner;
    //         this.state.gameStatus = 'won';
    //     } else if (isDraw) {
    //         this.state.gameStatus = 'draw';
    //     } else {
    //         // Switch players
    //         this.state.currentPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    //     }
    // }

    public resetGame(): void {
        this.state = initialGameState();
    }
}

export const gameManager = new GameManager();
