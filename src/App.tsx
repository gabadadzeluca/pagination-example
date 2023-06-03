import { useState, useEffect } from 'react';
import PhotoObjectInterface from './utils/PhotoObjectInterface';
import axios from 'axios';

const ITEMS_PER_PAGE : number = 10;

function App() {
  const [data, setData] = useState<PhotoObjectInterface[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  useEffect(()=>{
   fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/`);
    console.log(res.data.length);
    setData(res.data);
   }

  const getBatchData = (start:number, end:number):PhotoObjectInterface[] => {
    // Slice the data array to get the images for the current page
    return data.slice(start, end);
  };
  
  const handlePageChange = (pageNumber:number) =>{
    setCurrentPage(pageNumber);
  }

  return (
    <>
    </>
  )
}

export default App
