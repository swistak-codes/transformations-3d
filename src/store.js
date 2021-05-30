import {writable} from "svelte/store";
import {getIdentityMatrix} from "./utils/getIdentityMatrix";
import {DEFAULT_SHAPE} from "./consts";
import {getInitialQuaternion} from "./utils/getInitialQuaternion";

export const matrix = writable(getIdentityMatrix());
export const shape = writable(DEFAULT_SHAPE);
export const quaternion = writable(getInitialQuaternion());
