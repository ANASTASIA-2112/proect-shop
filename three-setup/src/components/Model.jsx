import {useLoader} from "@react-three/fiber";
import React from "react";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";


const Model = () => {
    const gltf = useLoader(GLTFLoader, "./model/scene.gltf");

    return (
        <>
            <primitive  position={[0, 2.96, -0.13]} object={gltf.scene} scale={[5, 5, 5]} />
        </>
    );
};

export default Model;