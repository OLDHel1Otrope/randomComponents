// import { useBox } from "@react-three/cannon";
// import { useRef } from "react";
// import { useFrame, useThree } from "@react-three/fiber";
// import { useControls } from "../hooks/useControls";
// import * as THREE from "three";

// export function Vehicle() {
//   const vehicleRef = useRef(null);

//   const [ref, api] = useBox(
//     () => ({
//       mass: 500,
//       position: [0, 5, 0],
//       args: [2, 1, 3],
//       angularDamping: 1,
//       linearDamping: 0.5,
//       collisionFilterGroup: 1,
//       collisionFilterMask: -1,
//     }),
//     vehicleRef
//   );

//   const controls = useControls();
//   const { camera } = useThree();
//   const velocity = useRef([0, 0, 0]);

//   useFrame(() => {
//     api.velocity.subscribe((v) => (velocity.current = v));
//   });

//   useFrame(() => {
//     if (!ref.current) return;

//     const position = new THREE.Vector3();
//     ref.current.getWorldPosition(position);
//     camera.position.lerp(
//       new THREE.Vector3(position.x, position.y + 2, position.z + 5),
//       0.3
//     );
//     camera.lookAt(position);

//     api.angularVelocity.set(0, 0, 0);

//     const speed = 5;
//     let forward = new THREE.Vector3(0, 0, -1).applyQuaternion(
//       ref.current.quaternion
//     );

//     if (controls.forward)
//       api.velocity.set(
//         forward.x * speed,
//         velocity.current[1],
//         forward.z * speed
//       );
//     if (controls.backward)
//       api.velocity.set(
//         -forward.x * speed,
//         velocity.current[1],
//         -forward.z * speed
//       );
//   });

//   return (
//     <group ref={ref} castShadow>
//       <mesh position={[0, 0, 0]}>
//         <boxGeometry args={[2, 1, 3]} />
//         <meshStandardMaterial color="grey" />
//       </mesh>

//       <mesh position={[0, 0.75, 0]}>
//         <boxGeometry args={[1.5, 0.7, 2]} />
//         <meshStandardMaterial color="grey" />
//       </mesh>

//       <mesh position={[0, -0.2, 1.6]}>
//         <boxGeometry args={[2, 0.3, 0.5]} />
//         <meshStandardMaterial color="grey" />
//       </mesh>

//       <mesh position={[0, -0.2, -1.6]}>
//         <boxGeometry args={[2, 0.3, 0.5]} />
//         <meshStandardMaterial color="grey" />
//       </mesh>
//     </group>
//   );
// }
