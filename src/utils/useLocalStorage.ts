import { useEffect, useState } from 'react'

const getSavedValue = (key:string, initialvalue:number):number => {
  const savedValue = (localStorage.getItem(key));
  if(savedValue) return JSON.parse(savedValue);
  return 1;
}

export default function useLocalStorage(key:string, initialvalue:number){
  const [value, setValue] = useState(()=>{
    return getSavedValue(key, initialvalue);
  });

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}