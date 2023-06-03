const ACTIONS = [-5, -1, 0, 1, 5];

export default function Pagination(props: {
  handlePageChange: (pageNumber: number) => void;
  currentPage: number;
}) {
  const { currentPage, handlePageChange } = props;

  return (
    <div>
      <button onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
      {ACTIONS.map((number) => (
        <button onClick={() => handlePageChange(currentPage + number)}>
          {currentPage + number < 0 ? "" : currentPage + number}
        </button>
      ))}
      <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
    </div>
  );
}
