import {useLoader} from "@react-three/fiber";
import React from "react";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";


export function Shoes () {
    const gltf = useLoader(GLTFLoader, "./children/scene.gltf");

    return (
        <>
            <primitive position={[0, 2.96, -0.13]} object={gltf.scene} scale={[1, 1, 1]}/>
        </>
    );
}
export default Shoes;