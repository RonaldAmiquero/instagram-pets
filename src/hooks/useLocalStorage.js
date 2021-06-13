import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      /* puede ocurrir un error cuando el navegador tiene la navegacion privada activada */
      console.error(e);
    }
  };
  return [storedValue, setLocalStorage];
}
