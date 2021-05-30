<script>
    import {matrix} from "../store";
</script>

<style>
    div {
        margin-top: 95px;
        padding: 20px;
        border-left: 1px solid black;
        border-right: 1px solid black;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        gap: 2px 10px;
        grid-template-areas:
        ". . . ."
        ". . . ."
        ". . . ."
        ". . . .";
    }

    input {
        width: 100%;
        font-size: 12px;
    }
</style>

<div>
    {#each Object.keys($matrix) as key}
        <input type="number" bind:value={$matrix[key]} step={0.01}/>
    {/each}
</div>
