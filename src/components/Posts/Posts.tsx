import styled from "styled-components";
import PhotoObjectInterface from "../../utils/PhotoObjectInterface"

export default function Posts(props:{
  batchData: PhotoObjectInterface[];
}) {
  const data = props.batchData;
  return (
    <Grid>
      {data.map((obj:PhotoObjectInterface)=>
        <StyledDiv>
          <p>Album ID: {obj.albumId}</p>
          <a href={obj.url} target="_blank">
            <img src={obj.thumbnailUrl} />
          </a>
          <h4>{obj.title}</h4>
        </StyledDiv>
      )}
    </Grid>
  )
}

const Grid = styled.div`
  margin-top: 4rem;
  width: 80%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3,30%);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2rem;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  font-size: 1.5rem;
  padding: 2rem 4rem;
  outline: 1px solid #6130e8;
  &>p{
    margin-bottom: 1.5rem;
  }
  & img{
    width: 100%;
    margin-bottom: 2rem;
  }

  &>h4{
    font-size: 1.5rem;
  }
`