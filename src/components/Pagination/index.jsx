import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)} // to go from index to actual number that I need
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1} // to go from index to actual number that I need
    />
  );
};

export default Pagination;
