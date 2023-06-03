import styled from "styled-components";
import SButton from "../Button/Button.styled";

const ACTIONS = [-5, -1, 0, 1, 5];

export default function Pagination(props: {
  handlePageChange: (pageNumber: number) => void;
  currentPage: number;
}) {
  const { currentPage, handlePageChange } = props;

  return (
    <ButtonsContainer>
      <SButton onClick={() => handlePageChange(currentPage - 1)} active>
        Prev
      </SButton>
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
      <SButton onClick={() => handlePageChange(currentPage + 1)} active>
        Next
      </SButton>
    </ButtonsContainer>
  );
}

const ButtonsContainer = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  /* position: fixed; */
  /* top: 75%; */
`
