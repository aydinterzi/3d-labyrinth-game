import { useState, useEffect } from "react";

function useKeyPress(targetKeys: string[]) {
  const [keysPressed, setKeysPressed] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    function downHandler({ key }: KeyboardEvent) {
      if (targetKeys.includes(key)) {
        setKeysPressed((prevKeys) => ({ ...prevKeys, [key]: true }));
      }
    }

    const upHandler = ({ key }: KeyboardEvent) => {
      if (targetKeys.includes(key)) {
        setKeysPressed((prevKeys) => ({ ...prevKeys, [key]: false }));
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKeys]);

  return keysPressed;
}

export default useKeyPress;
