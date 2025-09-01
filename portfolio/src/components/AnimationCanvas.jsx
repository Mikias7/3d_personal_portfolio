import { Canvas } from "@react-three/fiber";

function AnimationCanvas() {
  return (
    <div className="w-screen h-screen">
        <Canvas className="w-full h-full border-2 border-rose-500 bg-stone-400">
            {/* 3D content */}
        </Canvas>
    </div>

  );
}

export default AnimationCanvas;
