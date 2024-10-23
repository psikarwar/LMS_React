
interface PaginationProps {}
import { iconchright, paginationleft,  } from "../../images";

const Pagination: React.FC<PaginationProps> = () => (
  <div className="pagination">
    <button className="pagination-button">
      <img src={paginationleft} alt="Previous" />
    </button>
    <button className="pagination-button active">1</button>
    <button className="pagination-button">2</button>
    <button className="pagination-button">3</button>
    <button className="pagination-button">
      <img src={iconchright} alt="Next" />
    </button>
  </div>
);

export default Pagination;