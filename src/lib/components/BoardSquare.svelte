<script lang="ts">
    import type { CellValue, GameResult } from '../types';

    interface Props {
        value: CellValue;
        gameResult: GameResult;
        onSquareClick: () => void;
    }

    let {
        value,
        gameResult,
        onSquareClick
    }: Props = $props();

    const computeColor = (result: GameResult): string => {
        console.log(result);
        const [status, winner] = result;
        if (status === 'won') {
            if (winner === 'X') {
                return "#65b2f0";
            } else {
                return "#ed837b";
            }
        } else if (status === 'draw') {
            return "#b5b5b5";
        } 
        return "#ffffff";
    }

    let bg_color = $derived(computeColor(gameResult));
    
    const handleClick = () => {
        const [status, _] = gameResult;
        if (!value && status === 'playing') {
            onSquareClick();
        }
    };
</script>

<button
    class="square"
    onclick={handleClick}
    disabled={value !== null || gameResult[0] !== 'playing'}
    data-value={value}
    style:background="{bg_color}"
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
        /* background: "{bg_color}"; */
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .square:hover:not([disabled]) {
        background: #cbcbcb;
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

    /* .square[data-is-winning=true] {
        background: rgb(213, 255, 150);
    } */
</style>
