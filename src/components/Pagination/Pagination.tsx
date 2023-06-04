import styled from "styled-components";
import SButton from "../Button/Button.styled";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import { useState } from "react";

const ACTIONS = [-5, -1, 0, 1, 5];

export default function Pagination(props: {
  handlePageChange: (pageNumber: number) => void;
  currentPage: number;
}) {
  const { currentPage, handlePageChange } = props;
  const [userInput, setUserInput] = useState<number>();
  
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>):void => {
    const value = (e.target.value.replace(/[^0-9]+/g, ""));
    setUserInput(parseInt(value));
  }

  console.log("user input",userInput);
  return (
    <ButtonsContainer>
      <SButton onClick={() => handlePageChange(currentPage - 1)} active img={arrowLeft}></SButton>
      <SButton active>...</SButton>
      {ACTIONS.map((number, index) => (
        <SButton
          key={index}
          onClick={() => handlePageChange(currentPage + number)}
          active={currentPage+number >= 0}
          current={index === 2}
        >
          {currentPage + number <= 0 ? "" : currentPage + number}
        </SButton>
      ))}
      <SButton active>...</SButton>
      <SButton onClick={() => handlePageChange(currentPage + 1)} active img={arrowRight}></SButton>
      <input type='number' onChange={handleUserInput} value={userInput}/>
    </ButtonsContainer>
  );
}

const ButtonsContainer = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-top: 4rem;
  margin-bottom: 6rem;
`
