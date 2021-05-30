import {Quaternion} from "three";

export function storeQuaternionToQuaternion(quaternion) {
    return new Quaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
}
