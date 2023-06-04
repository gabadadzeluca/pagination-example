import { useEffect, useState } from 'react'

const getSavedValue = (key:string,):number => {
  const savedValue = (localStorage.getItem(key));
  if(savedValue) return JSON.parse(savedValue);
  return 1; // if no return value return 1;
}

export default function useLocalStorage(key:string){
  const [value, setValue] = useState(()=>{
    return getSavedValue(key);
  });

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}