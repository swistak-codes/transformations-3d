<script>
    import {quaternion} from "../store";
</script>

<style>
    .wrapper {
        margin-top: 60px;
    }

    .form-input {
        display: flex;
        align-items: center;
    }

    label {
        margin-bottom: 0.5em;
        margin-right: 0.5em;
    }
</style>

<div class="wrapper">
    <div class="form-input">
        <label for="a">a = </label>
        <input id="a" bind:value={$quaternion.w} type="number" step="0.01">
    </div>
    <div class="form-input">
        <label for="b">b = </label>
        <input id="b" bind:value={$quaternion.x} type="number" step="0.01">
    </div>
    <div class="form-input">
        <label for="c">c = </label>
        <input id="c" bind:value={$quaternion.y} type="number" step="0.01">
    </div>
    <div class="form-input">
        <label for="d">d = </label>
        <input id="d" bind:value={$quaternion.z} type="number" step="0.01">
    </div>
</div>
