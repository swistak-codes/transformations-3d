import {Matrix4} from "three";

export function storeMatrixToMatrix4(matrix) {
    const m = new Matrix4();
    m.set(matrix.m11, matrix.m12, matrix.m13, matrix.m14,
        matrix.m21, matrix.m22, matrix.m23, matrix.m24,
        matrix.m31, matrix.m32, matrix.m33, matrix.m34,
        matrix.m41, matrix.m42, matrix.m43, matrix.m44);

    return m;
}
