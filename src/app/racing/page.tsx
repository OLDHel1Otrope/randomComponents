"use client";
// import { Canvas } from "@react-three/fiber";
// import { Debug, Physics } from "@react-three/cannon";
// import { Suspense } from "react";
// import { FirstPersonControls } from "@react-three/drei";
// import { RaceTrack } from "@/components/RaceTrack";
// import { Vehicle } from "@/components/Vehicle";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      {/* <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} />
        <Physics>
          <Debug color="red" scale={1.1}>
            <Suspense fallback={null}>
              <RaceTrack />
              <Vehicle />
            </Suspense>
          </Debug>
        </Physics>
        <FirstPersonControls />
      </Canvas> */}
    </div>
  );
}
