import {BOX, CONE, CYLINDER, SPHERE, TORUS, TORUSKNOT} from "../consts";
import * as THREE from "three";

export function getGeometry(shape) {
    switch (shape) {
    case CONE:
        return new THREE.ConeGeometry(1, 2, 64);
    case CYLINDER:
        return new THREE.CylinderGeometry(1, 1, 2, 64, 64);
    case TORUS:
        return new THREE.TorusGeometry(1, 0.4, 16, 64);
    case TORUSKNOT:
        return new THREE.TorusKnotGeometry(1, 0.2, 64, 64);
    case SPHERE:
        return new THREE.SphereGeometry(1, 64, 64);
    case BOX:
    default:
        return new THREE.BoxGeometry(2, 2, 2);
    }
}
