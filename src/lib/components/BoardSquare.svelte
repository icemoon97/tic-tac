<script lang="ts">
    import type { CellValue } from '../types';

    interface Props {
        value: CellValue;
        position: number;
        onSquareClick: (position: number) => void;
        isWinning: boolean;
    }

    let {
        value,
        position,
        onSquareClick,
        isWinning
    }: Props = $props();
    
    const handleClick = () => {
        if (!value) {
            onSquareClick(position);
        }
    };
</script>

<button
    class="square"
    onclick={handleClick}
    disabled={value !== null}
    data-value={value}
    data-is-winning={isWinning}
>
    {value || ''}
</button>

<style>
    .square {
        width: 100px;
        height: 100px;
        border: 2px solid #333;
        font-size: 2.5rem;
        font-weight: bold;
        background: white;
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

    .square[data-is-winning=true] {
        background: rgb(213, 255, 150);
    }
</style>
