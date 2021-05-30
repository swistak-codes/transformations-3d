<script>
    import {afterUpdate} from "svelte";
    import {quaternion} from "../store";
    import {degToRad} from "../utils/degToRad";

    let thetaX = 0;
    let thetaY = 0;
    let thetaZ = 0;

    function setQuaternion() {
        const angle = {
            x: degToRad(thetaX / 2),
            y: degToRad(thetaY / 2),
            z: degToRad(thetaZ / 2),
        };
        const cos = {
            x: Math.cos(angle.x),
            y: Math.cos(angle.y),
            z: Math.cos(angle.z),
        };
        const sin = {
            x: Math.sin(angle.x),
            y: Math.sin(angle.y),
            z: Math.sin(angle.z),
        };

        $quaternion.w = cos.x * cos.y * cos.z + sin.x * sin.y * sin.z;
        $quaternion.x = sin.x * cos.y * cos.z - cos.x * sin.y * sin.z;
        $quaternion.y = cos.x * sin.y * cos.z + sin.x * cos.y * sin.z;
        $quaternion.z = cos.x * cos.y * sin.z - sin.x * sin.y * sin.z;
    }

    afterUpdate(setQuaternion);

    $: if (!$quaternion.w && !$quaternion.x && !$quaternion.y && !quaternion.z) {
        thetaX = 0;
        thetaY = 0;
        thetaZ = 0;
    }
</script>

<style>
    .wrapper {
        margin-top: 40px;
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
</style>

<div class="wrapper">
    <div class="form-input">
        <label for="thetaX">&theta;<sub>x</sub> = </label>
        <input id="thetaX" bind:value={thetaX} type="number" step="1">
    </div>
    <div class="form-input">
        <label for="thetaY">&theta;<sub>y</sub> = </label>
        <input id="thetaY" bind:value={thetaY} type="number" step="1">
    </div>
    <div class="form-input">
        <label for="thetaZ">&theta;<sub>z</sub> = </label>
        <input id="thetaZ" bind:value={thetaZ} type="number" step="1">
    </div>
</div>
