<script>
    import * as THREE from "three";
    import {onMount} from "svelte";
    import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
    import {matrix, quaternion, shape} from "../store";
    import {getGeometry} from "../utils/getGeometry";
    import {storeMatrixToMatrix4} from "../utils/storeMatrixToMatrix4";
    import {storeQuaternionToQuaternion} from "../utils/storeQuaternionToQuaternion";

    let wrapper;
    let renderer;
    let mesh;
    let scene;
    let camera;

    function init3D() {
        const width = wrapper.offsetWidth;
        const height = wrapper.offsetHeight;

        scene = new THREE.Scene();
        scene.background = new THREE.Color(153, 153, 153);

        camera = new THREE.PerspectiveCamera(35, width/height, 1, 500);
        camera.position.set(8, 4, 8);
        camera.rotation.set(-0.5, 0.7, 0.5);
        scene.add(camera);

        const grid = new THREE.GridHelper(30, 30);
        scene.add(grid);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        wrapper.appendChild(renderer.domElement);

        createMesh();

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.addEventListener("change", render);
        controls.update();

        render();
    }

    function render() {
        renderer.render(scene, camera);
    }

    function createMesh(rerender = true) {
        if (!scene || !renderer) {
            return;
        }
        if (mesh) {
            scene.remove(mesh);
        }

        const geometry = getGeometry($shape);
        const material = new THREE.MeshNormalMaterial();
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        rerender && render();
    }

    function updateWithUserValues() {
        if (!mesh) {
            return;
        }
        createMesh(false);
        mesh.applyMatrix4(storeMatrixToMatrix4($matrix));
        mesh.applyQuaternion(storeQuaternionToQuaternion($quaternion));
        render();
    }

    onMount(() => {
        init3D();
    });

    $: $matrix, updateWithUserValues();
    $: $shape, updateWithUserValues();
    $: $quaternion, updateWithUserValues();
</script>

<style>
    div {
        width: 100%;
        height: 100%;
    }
</style>

<div bind:this={wrapper}></div>
