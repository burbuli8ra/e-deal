import React from 'react';
import { CategoryBlock } from 'components';
import { useAppContext } from 'provider';

const CategoriesList = ({ categories }) => {
  const [{ error }] = useAppContext();

  return (
    <>
      {error || categories.map(category =>
        <CategoryBlock
          imageUrl={category.image_url}
          key={`${category.id}-${category.slug}`}
          {...category}
        />
      )}
    </>
  );
};

export default CategoriesList;