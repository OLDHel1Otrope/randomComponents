import { useEffect, useState } from 'react';

export function useControls() {
  const [keys, setKeys] = useState({ forward: false, backward: false, left: false, right: false });

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.code === 'KeyW') setKeys((keys) => ({ ...keys, forward: true }));
      if (e.code === 'KeyS') setKeys((keys) => ({ ...keys, backward: true }));
      if (e.code === 'KeyA') setKeys((keys) => ({ ...keys, left: true }));
      if (e.code === 'KeyD') setKeys((keys) => ({ ...keys, right: true }));
    };
    const keyUpHandler = (e: KeyboardEvent) => {
      if (e.code === 'KeyW') setKeys((keys) => ({ ...keys, forward: false }));
      if (e.code === 'KeyS') setKeys((keys) => ({ ...keys, backward: false }));
      if (e.code === 'KeyA') setKeys((keys) => ({ ...keys, left: false }));
      if (e.code === 'KeyD') setKeys((keys) => ({ ...keys, right: false }));
    };

    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, []);

  return keys;
}
