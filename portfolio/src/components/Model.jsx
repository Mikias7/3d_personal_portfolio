import { useGLTF, OrbitControls } from '@react-three/drei';

function Model({ url = "/models/scene.gltf", position, rotation = [0,0,0] }) {
  const { scene } = useGLTF(url); // Load GLTF or GLB model
  return (
    <primitive position={position} object={scene} rotation={rotation}/>
);
}

export default Model;