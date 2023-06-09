import { useState, useEffect } from "react";
import PhotoObjectInterface from "./utils/PhotoObjectInterface";
import axios from "axios";
import Pagination from "./components/Pagination/Pagination";
import Posts from "./components/Posts/Posts";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/theme";
import Loading from "./components/Loading/Loading";
import useLocalStorage from "./utils/useLocalStorage";

const ITEMS_PER_PAGE: number = 10;

function App() {
  const [data, setData] = useState<PhotoObjectInterface[]>([]);
  const [currentPage, setCurrentPage] = useLocalStorage("currentPage") as [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ];
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = (currentPage + 1) * ITEMS_PER_PAGE;
  const totalPosts = data.length;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/`);
    setData(res.data);
    setIsLoaded(true);
  };

  const getBatchData = (start: number, end: number): PhotoObjectInterface[] => {
    if (end === 0) {
      // corner case
      return [...data.slice(start, -1), data[data.length - 1]];
    }
    // Slice the data array to get the images for the current page
    return data.slice(start - ITEMS_PER_PAGE, end - ITEMS_PER_PAGE);
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber <= 0) return;
    if (totalPosts < pageNumber * ITEMS_PER_PAGE) return;
    setCurrentPage(pageNumber);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <SContainer>
        {isLoaded ? (
          <>
            <Posts batchData={getBatchData(startIndex, endIndex)} />
            <Pagination
              handlePageChange={handlePageChange}
              currentPage={currentPage}
              totalPages={data.length / ITEMS_PER_PAGE}
            />
          </>
        ) : (
          <Loading />
        )}
      </SContainer>
    </ThemeProvider>
  );
}

export default App;

const SContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.text};
  overflow-x: hidden;
`;
