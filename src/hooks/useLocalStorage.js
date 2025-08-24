
import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue = null) {
  
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) return storedValue; // <-- return string directly
    return initialValue;
  });

  
  useEffect(() => {
    if (value === null || value === undefined) return;
    localStorage.setItem(key, value); 
  }, [key, value]);

  return [value, setValue]; 
}
