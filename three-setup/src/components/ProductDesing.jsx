import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {OrbitControls, Stage} from "@react-three/drei";
import ModelMan from "./ModelMan.jsx";


const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`

export function  ProductDesing () {
    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        <ModelMan/>
                    </Stage>
                    <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
            </Canvas>
            <Desc>
                Позволь себе больше стиля...
            </Desc>
        </>
    );
}
export default ProductDesing;