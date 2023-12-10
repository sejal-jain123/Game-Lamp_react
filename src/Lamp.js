// Lamp.js
import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';

const Lamp = ({ isOn }) => {
  const lampRef = useRef();

  // Rotate the lamp based on its state
  useFrame(() => {
    lampRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={lampRef}>
      {/* Lamp base */}
      <cylinderBufferGeometry attach="geometry" args={[1, 1, 2, 32]} />
      <meshStandardMaterial attach="material" color={isOn ? 'yellow' : 'gray'} />
      {/* Lamp shade */}
      <coneBufferGeometry attach="geometry" args={[1.5, 2, 8, 32]} position={[0, 4, 0]} />
      <meshStandardMaterial attach="material" color={isOn ? 'yellow' : 'gray'} />
    </mesh>
  );
};

export default Lamp;
