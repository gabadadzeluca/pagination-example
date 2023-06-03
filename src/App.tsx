import { useState, useEffect } from "react";
import PhotoObjectInterface from "./utils/PhotoObjectInterface";
import axios from "axios";
import Pagination from "./components/Pagination/Pagination";
import Posts from "./components/Posts/Posts";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/theme";


const ITEMS_PER_PAGE: number = 10;

function App() {
  const [data, setData] = useState<PhotoObjectInterface[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = (currentPage + 1) * ITEMS_PER_PAGE;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/`);
    setData(res.data);
  };

  const getBatchData = (start: number, end: number): PhotoObjectInterface[] => {
    if (end === 0) {
      // corner case
      return [...data.slice(start, -1), data[data.length - 1]];
    }
    // Slice the data array to get the images for the current page
    return data.slice(start, end);
  };

  const handlePageChange = (pageNumber: number) => {
    if(pageNumber<0) return;
    setCurrentPage(pageNumber);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <SContainer>
        <Posts
          batchData={getBatchData(startIndex, endIndex)}
        />
        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </SContainer>
    </ThemeProvider>
  );
}

export default App;


const SContainer = styled.div`
  background-color: ${({theme})=>theme.bg};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({theme})=> theme.text};
  overflow-x: hidden;

`