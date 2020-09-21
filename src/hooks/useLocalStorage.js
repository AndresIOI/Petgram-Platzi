import { useState } from 'react';

export function useLocalStorage(key, initialValue = false){

 const [valueStorage, setValueStorage] = useState(() => {
  const value = window.localStorage.getItem(key);
  return value !== null ? JSON.parse(value) : initialValue;
});

 const setLocalStorage = value => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    setValueStorage(value);
  } catch (e) {
    console.error(e);
  }
 }

 return [valueStorage, setLocalStorage];
}