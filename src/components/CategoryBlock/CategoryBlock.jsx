import React from 'react';
import Styled from './CategoryBlock.style';

const CategoryBlock = ({
  id,
  imageUrl,
  title
}) => {
  return (
    <Styled.CategoryBlock data-testid="categoryItem-block" to={`/categories/${id}`}>
      <Styled.Image alt={title} src={imageUrl} />
      {title}
    </Styled.CategoryBlock>
  );
};

export default CategoryBlock;