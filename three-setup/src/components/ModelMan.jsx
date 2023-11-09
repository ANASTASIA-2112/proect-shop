import {useLoader} from "@react-three/fiber";
import React from "react";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";


const ModelMan = () => {
    const gltf = useLoader(GLTFLoader, "./modelMan/scene.gltf");

    return (
        <>
            <primitive  position={[0, 2.96, -0.13]} object={gltf.scene} scale={[10, 10, 10]} />
        </>
    );
}

export default ModelMan;