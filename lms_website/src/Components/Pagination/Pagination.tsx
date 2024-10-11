
interface PaginationProps {}

const Pagination: React.FC<PaginationProps> = () => (
  <div className="pagination">
    <button className="pagination-button">
      <img src="./assets/icon-left-chevron.svg" alt="Previous" />
    </button>
    <button className="pagination-button active">1</button>
    <button className="pagination-button">2</button>
    <button className="pagination-button">3</button>
    <button className="pagination-button">
      <img src="./assets/chevron-right.svg" alt="Next" />
    </button>
  </div>
);

export default Pagination;