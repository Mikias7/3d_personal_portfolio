import { useGLTF, OrbitControls } from '@react-three/drei';

function Model({ url = "/models/scene.gltf" }) {
  const { scene } = useGLTF(url); // Load GLTF or GLB model
  return (
    <primitive position={[0,-1.5,3.5]} object={scene} />
);
}

export default Model;