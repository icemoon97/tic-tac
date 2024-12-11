import type { Board, GameResult, GameState, GameStatus, Player } from './types';

const BOARD_SIZE = 3 * 3;
const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

const computeResult = (board: Board): GameResult => {
    // check for win
    for (const [a, b, c] of WINNING_COMBINATIONS) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return ['won', board[a] as Player];
        }
    }
    // check for draw
    if (board.every(cell => cell !== null)) {
        return ['draw', null];
    }
    return ['playing', null];
}

const checkSubBoards = (boards: Board[]): GameResult[] => {
    return boards.map(board => computeResult(board));
}

const computeOpenBoards = (boardResults: GameResult[], lastMove: number | null): number[] => {
    if (lastMove == null) {
        return [...Array(BOARD_SIZE).keys()];
    }
    
    const [targetBoardState, _] = boardResults[lastMove];
    if (targetBoardState !== 'playing') {
        return [...Array(BOARD_SIZE).keys()];
    }
    
    return [lastMove];
}

const initialGameState = (): GameState => {
    const initialBoards = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(null));
    const initialBoardResults = checkSubBoards(initialBoards);
    return {
        boards: initialBoards,
        currentPlayer: 'X',
        lastMove: null,
        result: ['playing', null],
        boardResults: initialBoardResults,
        openBoards: computeOpenBoards(initialBoardResults, null)
    }
}

class GameManager {
    private state: GameState = $state(initialGameState());

    public move(board: number, pos: number): void {
        console.log(`Move: board=${board}, pos=${pos}`);
        if (this.getBoard(board)[pos] || !this.isOpenBoard(board) || this.status !== 'playing') {
            return;
        }

        const nextBoards = this.state.boards.map(b => [...b]);
        nextBoards[board][pos] = this.state.currentPlayer;

        const nextBoardResults = checkSubBoards(nextBoards);
        const nextResult = computeResult(nextBoardResults.map(([_, player]) => player));
        const isDraw = nextBoardResults.every(([status, _]) => status != 'playing');

        this.state = {
            boards: nextBoards,
            currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X',
            lastMove: pos,
            result: isDraw ? ['draw', null] : nextResult,
            boardResults: nextBoardResults,
            openBoards: computeOpenBoards(nextBoardResults, pos)
        }
    }

    public resetGame(): void {
        this.state = initialGameState();
    }

    public getBoard(i: number): Board {
        return this.state.boards[i];
    }

    public getBoardResult(i: number): GameResult {
        return this.state.boardResults[i];
    }

    public isOpenBoard(i: number): boolean {
        return this.state.openBoards.includes(i);
    }

    get boards(): Board[] {
        return this.state.boards;
    }

    get currentPlayer(): Player {
        return this.state.currentPlayer;
    }

    get winner(): Player | null {
        const [_, winner] = this.state.result;
        return winner;
    }

    get status(): GameStatus {
        const [status, _] = this.state.result;
        return status;
    }
}

export const gameManager = new GameManager();
