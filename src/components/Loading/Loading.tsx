import styled from "styled-components"

export default function Loading() {
  return (
    <SDiv>Loading....</SDiv>
  )
}

const SDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
