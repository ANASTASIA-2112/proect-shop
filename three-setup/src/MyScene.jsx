// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import {useLoader} from "@react-three/fiber";
// import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
//
//
// const MyScene = () => {
//     const gltf = useLoader(GLTFLoader, "./model/scene.gltf");
//     useEffect(() => {
//         // Создать сцену
//         const scene = new THREE.Scene();
//
//         // Создать камеру
//         const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 50);
//         camera.position.z = 5;
//
//         // Создать рендерер
//         const renderer = new THREE.WebGLRenderer({ antialias: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         mountRef.current.appendChild(renderer.domElement);
//
//         // Создать геометрию и материал объекта
//         const geometry = new THREE.BoxGeometry();
//         const material = new THREE.MeshBasicMaterial({ color: 0xdc9dcd });
//         const cube = new THREE.Mesh(geometry, material);
//         scene.add(cube);
//
//         // Анимация
//         const animate = function () {
//             requestAnimationFrame(animate);
//
//             cube.rotation.x += 0.01;
//             cube.rotation.y += 0.01;
//
//             renderer.render(scene, camera);
//         };
//
//         animate();
//
//         // Очистить ресурсы после размонтирования компонента
//         return  <>
//             <primitive position={[0, 0, 0]} object={gltf.scene} scale={[5, 5, 5]} />
//         </>
//     });
// };
// export default MyScene;