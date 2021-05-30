<script>
    import Canvas from "./Canvas.svelte";
    import Matrix from "./Matrix.svelte";
    import ShapeChooser from "./ShapeChooser.svelte";
    import {MATRIX_MODE, QUATERNION_MODE} from "../consts";
    import {matrix, quaternion} from "../store";
    import {getIdentityMatrix} from "../utils/getIdentityMatrix";
    import {getInitialQuaternion} from "../utils/getInitialQuaternion";
    import Quaternion from "./Quaternion.svelte";

    export let mode;

    function handleReset() {
        $matrix = getIdentityMatrix();
        $quaternion = getInitialQuaternion();
    }
</script>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 600px;
        display: flex;
    }

    .flex-max {
        flex: 1 0;
        height: 300px;
    }

    .editor {
        margin: 0 auto;
        padding: 0px 8px 8px;
        background: white;
    }

    .canvas {
        border: 1px solid black;
        position: relative;
        height: 100%;
    }
</style>

<main>
    <div class="flex-max editor">
        {#if mode === MATRIX_MODE}
            <Matrix />
        {:else if mode === QUATERNION_MODE}
            <Quaternion />
        {/if}
        <button on:click={handleReset}>Restart</button>
    </div>
    <div class="flex-max">
        <ShapeChooser />
        <div class="canvas">
            <Canvas />
        </div>
    </div>
</main>
