<script lang="ts">
    import type { Board, GameResult } from '../types';
    import BoardSquare from './BoardSquare.svelte';

    interface Props {
        board: Board;
        gameResult: GameResult;
        onSquareClick: (position: number) => void;
    }

    let { 
        board,
        gameResult,
        onSquareClick
    }: Props = $props();
</script>

<div class="board">
    {#each board as value, i}
        <BoardSquare
            {value}
            {gameResult}
            onSquareClick={() => onSquareClick(i)}
        />
    {/each}
</div>

<style>
    .board {
        display: grid;
        grid-template-columns: repeat(3, auto);
        width: fit-content;
        gap: 5px;
    }
</style>
