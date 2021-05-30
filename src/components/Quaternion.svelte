<script>
    import QuaternionValues from "./QuaternionValues.svelte";
    import QuaternionSingleAngle from "./QuaternionSingleAngle.svelte";
    import QuaternionThreeAxis from "./QuaternionThreeAxis.svelte";
    import {QUATERNION_VALUES, QUATERNION_SINGLE_ANGLE, QUATERNION_THREE_AXIS} from "../consts";
    import {quaternion} from "../store";
    import {getInitialQuaternion} from "../utils/getInitialQuaternion";

    let mode = QUATERNION_VALUES;

    function handleTabSwitch() {
        $quaternion = getInitialQuaternion();
    }
</script>

<style>
    .quaternion {
        margin-bottom: 4px;
    }
</style>

<div>
    <select bind:value={mode} on:change={handleTabSwitch}>
        <option value={QUATERNION_VALUES}>Bezpośrednie wartości</option>
        <option value={QUATERNION_SINGLE_ANGLE}>Pojedynczy kąt</option>
        <option value={QUATERNION_THREE_AXIS}>Obrót wokół trzech osi</option>
    </select>
    {#if mode === QUATERNION_VALUES}
        <QuaternionValues />
    {:else if mode === QUATERNION_SINGLE_ANGLE}
        <QuaternionSingleAngle />
    {:else if mode === QUATERNION_THREE_AXIS}
        <QuaternionThreeAxis />
    {/if}
    {#if mode !== QUATERNION_VALUES}
        <div class="quaternion">
            a = {$quaternion.w}<br />
            b = {$quaternion.x}<br />
            c = {$quaternion.y}<br />
            d = {$quaternion.z}<br />
        </div>
    {/if}
</div>
