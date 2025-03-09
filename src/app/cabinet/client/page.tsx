import FavoriteProductList from '@/components/common/FavoriteProductList';
import ProductsList from '@/components/common/ProductsList';
import React from 'react';

const FeaturedProducts = () => {
  return (
    <div>
      <FavoriteProductList title={'Избранные товары'} />
    </div>
  );
};

export default FeaturedProducts;
