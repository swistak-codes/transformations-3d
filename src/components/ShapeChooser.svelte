<script>
    import {shape} from "../store";
    import {BOX, CONE, CYLINDER, SPHERE, TORUS, TORUSKNOT} from "../consts";
</script>

<style>

</style>

<div>
    <select bind:value={$shape}>
        <option value={BOX}>Sześcian</option>
        <option value={CONE}>Stożek</option>
        <option value={CYLINDER}>Walec</option>
        <option value={SPHERE}>Sfera</option>
        <option value={TORUS}>Torus</option>
        <option value={TORUSKNOT}>Węzeł</option>
    </select>
</div>
