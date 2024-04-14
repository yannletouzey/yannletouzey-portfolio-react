import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useMatcapTexture, Center, Text3D } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import GUI from 'lil-gui';
console.log(GUI);
const Text = ( { backgroundTitle } ) => {
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load('/matcaps/3.png')
  const canvasRef = useRef();
  const pointLightRef = useRef();
  useEffect(() => {
    const gui = new GUI();
    canvasRef.current.style.backgroundColor = "transparent";
    canvasRef.current.style.display = "none";
    setTimeout(() => {
      gui.add(pointLightRef.current.position, 'x').min(-5).max(5).step(0.01);
      gui.add(pointLightRef.current.position, 'y').min(-5).max(5).step(0.01);
      gui.add(pointLightRef.current.position, 'z').min(-5).max(5).step(0.01);
      gui.add(pointLightRef.current, 'intensity').min(0).max(10).step(0.01);
      console.log(pointLightRef.current.position);
      canvasRef.current.style.display = "block";
    }, 1000);
  }, []);
  return (
    <Canvas ref={canvasRef} style={{position: 'absolute', zIndex: '-20', width: '100%', height: '100%' }} >
      <Center key={backgroundTitle} position={[0, 2.2, 0]}>
        <Text3D font='./fonts/Retro-Cool_Regular.json'>
          {backgroundTitle}
          <meshStandardMaterial color={'red'}  />
          <ambientLight intensity={1} />
          <pointLight ref={pointLightRef} intensity={2} position={[5, 0, 0]} />
        </Text3D>
      </Center>
    </Canvas>
  )
}
export default Text