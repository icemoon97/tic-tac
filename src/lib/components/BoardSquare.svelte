<script lang="ts">
    import type { CellValue } from '../types';

    interface Props {
        value: CellValue;
        onSquareClick: () => void;
    }

    let {
        value,
        onSquareClick
    }: Props = $props();
    
    const handleClick = () => {
        if (!value) {
            onSquareClick();
        }
    };
</script>

<button
    class="square"
    onclick={handleClick}
    disabled={value !== null}
    data-value={value}
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

    /* .square[data-is-winning=true] {
        background: rgb(213, 255, 150);
    } */
</style>
