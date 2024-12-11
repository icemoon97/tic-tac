<script lang="ts">
    import type { CellValue, GameResult } from '../types';

    interface Props {
        value: CellValue;
        isOpen: boolean;
        boardResult: GameResult;
        onSquareClick: () => void;
    }

    let {
        value,
        isOpen,
        boardResult,
        onSquareClick
    }: Props = $props();

    const COLORS = {
        X_WIN: '#65b2f0',
        O_WIN: '#ed837b',
        DRAW: '#b5b5b5',
        DEFAULT: '#ffffff',
        X_PLAYER: '#2196F3',
        O_PLAYER: '#F44336'
    }

    const computeColor = ([status, winner]: GameResult): string => {
        if (status === 'won') {
            return winner === 'X' ? COLORS.X_WIN : COLORS.O_WIN;
        }
        return status === 'draw' ? COLORS.DRAW : COLORS.DEFAULT;
    };

    let bgColor = $derived(computeColor(boardResult));
    let moveAllowed = $derived(isOpen && value === null && boardResult[0] === 'playing');
    
    function handleClick(event: MouseEvent) {
        if (moveAllowed) {
            onSquareClick();
        }
    }
</script>

<button
    class="square"
    class:valid-move={moveAllowed}
    onclick={handleClick}
    disabled={!moveAllowed}
    data-value={value}
    style:background={bgColor}
>
    {value || ''}
</button>

<style>
    .square {
        width: 60px;
        height: 60px;
        border: 2px solid #333;
        font-size: 2.5rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        user-select: none;
    }

    .square.valid-move::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30px;
        height: 30px;
        background: yellow;
        border-radius: 20%;
        animation: glow 1.5s ease-in-out infinite;
        pointer-events: none;
        z-index: 1;
    }

    @keyframes glow {
        0%, 100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(0.8);
        }
        50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1);
        }
    }

    .square:hover:not([disabled]) {
        background: #cbcbcb;
        transform: translate(-1px, -2px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .square[disabled] {
        cursor: default;
    }

    .square[data-value="X"] {
        color: #2196F3;
    }

    .square[data-value="O"] {
        color: #F44336;
    }
</style>
