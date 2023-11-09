import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cubes= () => {
    //текс содержит имя пользователя
    const textRef = useRef();
    //используем рамку
    //узнаем текущее положение по оси х используем математику чтоб прекращать вращения
    useFrame(
        (state) =>
            (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
    );
    return (
        <mesh>
            <boxGeometry/>
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <color attach="background" args={["red"]} />
                    <Text ref={textRef} fontSize={3} color="white">
                        %
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    );
};

export default Cubes;