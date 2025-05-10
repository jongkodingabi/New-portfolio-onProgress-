import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { Object3DNode, MaterialNode } from "@react-three/fiber";
import * as THREE from "three";

export {}; // penting agar file dikenali sebagai module

// Deklarasi modul untuk meshline (jika diperlukan untuk import)
declare module "meshline" {
  export class MeshLineGeometry extends THREE.BufferGeometry {}
  export class MeshLineMaterial extends THREE.ShaderMaterial {}
}

// Perluas JSX namespace agar mendukung elemen JSX kustom dari meshline
declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
    meshLineMaterial: MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>;
  }
}

// (opsional) jika belum dideklarasikan di vite-env.d.ts
declare module "*.glb";
declare module "*.png";
