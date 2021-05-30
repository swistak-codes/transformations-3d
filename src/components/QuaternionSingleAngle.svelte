<script>
    import {afterUpdate} from "svelte";
    import {quaternion} from "../store";
    import {degToRad} from "../utils/degToRad";

    let theta = 0;
    let betaX = 0;
    let betaY = 0;
    let betaZ = 0;

    function setQuaternion() {
        const angle = degToRad(theta / 2);
        const sin = Math.sin(angle);
        $quaternion.w = Math.cos(angle);
        $quaternion.x = sin * Math.cos(degToRad(betaX));
        $quaternion.y = sin * Math.cos(degToRad(betaY));
        $quaternion.z = sin * Math.cos(degToRad(betaZ));
    }

    afterUpdate(setQuaternion);

    $: if (!$quaternion.w && !$quaternion.x && !$quaternion.y && !quaternion.z) {
        theta = 0;
        betaX = 0;
        betaY = 0;
        betaZ = 0;
    }
</script>

<style>
    .wrapper {
        margin-top: 20px;
    }

    .form-input {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 16px;
    }

    label {
        margin-bottom: 0.5em;
        margin-right: 0.5em;
    }

    input {
        width: 85%;
    }
</style>

<div class="wrapper">
    <div class="form-input">
        <label for="theta">&theta; = </label>
        <input id="theta" bind:value={theta} type="number" step="1">
    </div>
    <div class="form-input">
        <label for="betaX">&beta;<sub>x</sub> = </label>
        <input id="betaX" bind:value={betaX} type="number" step="1">
    </div>
    <div class="form-input">
        <label for="betaY">&beta;<sub>y</sub> = </label>
        <input id="betaY" bind:value={betaY} type="number" step="1">
    </div>
    <div class="form-input">
        <label for="betaZ">&beta;<sub>z</sub> = </label>
        <input id="betaZ" bind:value={betaZ} type="number" step="1">
    </div>
</div>
