import App from "./components/App.svelte";
import {MATRIX_MODE, MODE_PARAM} from "./consts";

const params = new URLSearchParams(window.location.search);

function getMode() {
    const mode = params.get(MODE_PARAM) || MATRIX_MODE;
    return mode;
}

const app = new App({
    target: document.body,
    props: {
        mode: getMode(),
    }
});

export default app;
