import React from 'react';
import Styled from './Paginations.style';

const Pagination = ({
  currentPage,
  onClick,
  pageItems,
  totalItems
}) => {
  const totalPages = Math.ceil(totalItems / pageItems);
  const pages = Array.from({ length: totalPages }).map(
    (item, index) => ++index
  );
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <Styled.Pagination data-testid="pagination">
      <Styled.PageItem
        data-testid="page-prev"
        isDisabled={isFirstPage}
        onClick={() => { if (!isFirstPage) onClick(--currentPage) }}
      >
        {'< Prev'}
      </Styled.PageItem>
      {pages.map(page => (
        <Styled.PageItem
          data-testid="page-item"
          isActive={currentPage === page}
          key={page}
          onClick={() => onClick(page)}
        >
          {page}
        </Styled.PageItem>
      ))}
      <Styled.PageItem
        data-testid="page-next"
        isDisabled={isLastPage}
        onClick={() => { if (!isLastPage) onClick(++currentPage) }}
      >
        {'Next >'}
      </Styled.PageItem>
    </Styled.Pagination>
  );
};

export default Pagination;