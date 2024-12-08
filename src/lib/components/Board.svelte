<script lang="ts">
    import BoardSquare from './BoardSquare.svelte';
    import { gameManager } from '../gameLogic.svelte';
</script>

<div class="board">
    {#each gameManager.board as value, i}
        <BoardSquare
            {value}
            position={i}
            onSquareClick={() => {
                console.log("clicked " + i);
                gameManager.move(i);
            }}
            isWinning={gameManager.winningSquares.includes(i)}
        />
    {/each}
</div>

<style>
    .board {
        display: grid;
        grid-template-columns: repeat(3, 100px);
        gap: 4px;
        margin: 20px auto;
    }
</style>
