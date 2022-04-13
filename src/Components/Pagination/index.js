import { useSelector } from 'react-redux';

import { ReactComponent as PaginationLeft } from '../../assets/images/left.svg';
import { ReactComponent as PaginationRight } from '../../assets/images/right.svg';
import './pagination.scss';
const Pagination = ({ page, onNextPagination, onPrevPagination }) => {
  const state = useSelector((state) => state.animalReducer);

  return (
    <div className="pagination">
      <span
        className="pagination-item pagination-redirect"
        onClick={() => onPrevPagination()}
        style={{ pointerEvents: page === 1 ? 'none' : '' }}
      >
        <PaginationLeft />
      </span>
      <p className="pagination-item pagination-item--active ">{page}</p>
      <span
        className="pagination-item pagination-redirect"
        onClick={() => onNextPagination()}
        style={{
          pointerEvents: state.pagination.total_pages === page ? 'none' : '',
        }}
      >
        <PaginationRight />
      </span>
    </div>
  );
};

export default Pagination;
