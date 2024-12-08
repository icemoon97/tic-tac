<script lang="ts">
  import Board from './lib/components/Board.svelte';
  import Controls from './lib/components/Controls.svelte';
</script>

<main>
  <h1>bad (tic tac toe)<sup>2</sup></h1>
  <div class="center-col">
    <Board />
    <Controls />
  </div>
</main>

<style>
  main {
    max-width: 800px;
    margin: 0 auto;
    padding-top: 20px;
    text-align: center;
  }

  h1 {
    color: #333;
    margin-bottom: 1rem;
  }

  .center-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
