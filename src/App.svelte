<script lang="ts">
  import Board from './lib/components/Board.svelte';
  import Controls from './lib/components/Controls.svelte';
</script>

<main>
  <h1>bad tic tac toe</h1>
  <div class="center-col">
    <Board />
    <Controls />
  </div>
</main>

<style>
  main {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

  h1 {
    color: #333;
    margin-bottom: 2rem;
  }

  .center-col {
    display: flex;
    flex-direction: column;
  }
</style>
