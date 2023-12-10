// App.js
import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import Lamp from './Lamp';

const App = () => {
  const [isLampOn, setIsLampOn] = useState(false);

  const handleToggleLamp = () => {
    setIsLampOn((prev) => !prev);
  };

  return (
    <div>
      <h1>Interactive Lamp</h1>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Lamp isOn={isLampOn} />
      </Canvas>
      <button onClick={handleToggleLamp}>{isLampOn ? 'Turn Off' : 'Turn On'}</button>
    </div>
  );
};

export default App;
