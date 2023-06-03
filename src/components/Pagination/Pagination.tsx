export default function Pagination(props:{
  handlePageChange: (pageNumber: number) => void;
  currentPage: number;
}) {
  const { currentPage, handlePageChange } = props;
  return (
    <div>
      <button onClick={()=>handlePageChange(currentPage - 1)}>-</button>
      <button onClick={()=>handlePageChange(currentPage + 1)}>+</button>
    </div>
  )
}
