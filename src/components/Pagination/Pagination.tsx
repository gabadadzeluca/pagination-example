import styled from "styled-components";
import SButton from "../Button/Button.styled";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import { useState } from "react";

const ACTIONS = [-5, -1, 0, 1, 5];

export default function Pagination(props: {
  handlePageChange: (pageNumber: number) => void;
  currentPage: number;
  totalPages: number;
}) {
  const { currentPage, handlePageChange, totalPages } = props;
  const [userInput, setUserInput] = useState<number>();
  
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>):void => {
    const value = (e.target.value.replace(/[^0-9]+/g, ""));
    setUserInput(parseInt(value));
  }

  const handleJump = () =>{
    if(!userInput) return;
    else if(userInput > totalPages) return; // add some kind of error later
    handlePageChange(userInput); 
    setUserInput(0); // clear out the input field
  }

  return (
    <>
      <ButtonsContainer>
        <SButton onClick={() => handlePageChange(currentPage - 1)} active img={arrowLeft}></SButton>
        <SButton>...</SButton>
        {ACTIONS.map((number, index) => (
          <SButton
            key={index}
            onClick={() => handlePageChange(currentPage + number)}
            active={currentPage+number >= 0 && currentPage + number <= totalPages}
            current={index === Math.floor(ACTIONS.length/2)}
          >
            {currentPage + number <= 0 || currentPage + number > totalPages ? "" : currentPage + number}
          </SButton>
        ))}
        <SButton>...</SButton>
        <SButton onClick={() => handlePageChange(currentPage + 1)} active img={arrowRight}></SButton>
      </ButtonsContainer>
      <InputDiv>
        <input type='number' onChange={handleUserInput} value={userInput === 0 ? '' : userInput}/>
        <SButton onClick={handleJump} active>Jump</SButton>
      </InputDiv>
    </>

  );
}

const ButtonsContainer = styled.div`
  height: 5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-top: 4rem;
  margin-bottom: 6rem;
`

const InputDiv = styled(ButtonsContainer)`
  width: 18rem;
  &>input{
    background-color: ${({theme})=>theme.inputBg};
    color: white;
    padding: 1.5rem;
    height: 100%;
    width: 50%;
    border: none;
    font-size: inherit;
    
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0; 
    }
  }
  &>input:focus{
    outline: none;

  }
`