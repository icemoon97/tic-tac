<script lang="ts">
    import { gameManager } from '../gameLogic.svelte';
    import SubBoard from './SubBoard.svelte';
</script>

<div class="super-board">
    {#each gameManager.boards as subBoard, i}
        <SubBoard
            board={subBoard}
            isOpen={gameManager.isOpenBoard(i)}
            boardResult={gameManager.getBoardResult(i)}
            onSquareClick={pos => gameManager.move(i, pos)}
        />
    {/each}
</div>

<style>
    .super-board {
        display: grid;
        grid-template-columns: repeat(3, auto);
        width: fit-content;
        gap: 25px;
    }
</style>