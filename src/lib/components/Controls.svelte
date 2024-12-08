<script lang="ts">
    import { gameManager } from '../gameLogic.svelte';
</script>

<div class="controls">
    <span style="font-size: 2em;">
        {#if gameManager.gameStatus === 'won'}
            Winner is {gameManager.winner}!!
        {:else if gameManager.gameStatus === 'draw'}
            It's a draw :(
        {/if}
    </span>
    <span>Player <strong>{gameManager.currentPlayer}</strong>'s turn</span>
    <button onclick={() => gameManager.resetGame()}>
        Reset
    </button>
</div>

<style>
    .controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    
    span {
        font-size: large;
    }

    button {
        width: 250px;
        height: 80px;
        border: 2px solid #333;
        font-size: 1.5rem;
        font-weight: bold;
        background: white;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    button:hover {
        background: #ffc9c9;
    }
</style>