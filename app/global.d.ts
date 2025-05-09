export {};

declare module "*.glb";
declare module "*.png";

declare module "meshline" {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

/// <reference types="vite/client" />
declare module "*.glb";
declare module "*.png";
