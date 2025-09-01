import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";

function AnimationCanvas() {
  return (
    <div className="w-full h-full">
        <Canvas className="w-full h-full border-2 border-rose-500 bg-stone-400">
            {/* 3D content */}
            <ambientLight intensity={0.5} />
            <directionalLight color="white" position={[0, 30, -50]} />
            <directionalLight color="white" position={[0, 10, 0]} />
            <Model position={[0,-1.2,3]} rotation={[0,0.5,0]}/>
            {/* <OrbitControls /> */}
        </Canvas>
    </div>

  );
}

export default AnimationCanvas;
