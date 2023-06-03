import { useState, useEffect } from 'react';
import PhotoObjectInterface from './utils/PhotoObjectInterface';
import axios from 'axios';

const ITEMS_PER_PAGE : number = 10;

function App() {
  const [data, setData] = useState<PhotoObjectInterface[]>([]);
  
  useEffect(()=>{
   fetchData();
  }, []);

  const fetchData = async () => {
    // const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/?_start=${0}&_limit=${5000}`);
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/`);
    console.log(res.data.length);
    setData(res.data);
   }


  return (
    <>
    </>
  )
}

export default App
