'use client';
import React, { useEffect, useState } from 'react';
import { ProductCard } from '.';
import { GetData } from '@/services.jsx/data';
import { Button } from '../ui/button';
import adsBg from '@/assets/images/card.png';
import { getAllProducts, getFavoriteProducts } from '@/services.jsx/products';

const FavoriteProductList = ({
  title,
  adsBanner,
}: {
  title: string;
  adsBanner?: boolean;
}) => {
  const [products, setProducts] = useState([{ id: 0, name: '' }]);

  // useEffect(() => {
  //   GetData("api/v1/product/products/?is_discount=true").then((res) => {
  //     setProducts(res?.results);
  //   });
  // }, []);

  useEffect(() => {
    getFavoriteProducts()
      .then((res) => {
        console.log(res?.results);
        setProducts(res?.results);
      })
      .catch(console.error);
  }, []);

  const handleRemoveFavorite = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, is_featured: false } : product
      )
    );

    setTimeout(() => {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    }, 300);
  };

  return (
    <section>
      <div className='relative'>
        <h2 className='text-[19px] md:text-[30px] font-bold md:mb-6 mb-3 font-cygre'>
          {title}
        </h2>
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full  gap-2 md:gap-4'>
          {products?.map((product: any, index) => (
            <ProductCard
              product={product}
              key={index}
              onRemoveFavorite={handleRemoveFavorite}
            />
          ))}
          {adsBanner && (
            <div
              style={{
                background: `url(${adsBg.src}) no-repeat center center / cover`,
              }}
              className=' h-full w-full rounded-[5px] md:rounded-[10px] p-4 py-6 bg-cover'
            >
              <h2 className='text-[18px] md:text-[30px] font-bold text-white leading-tight font-cygre'>
                НОВОГОДНИЕ СКИДКИ!
              </h2>
              <Button className=' mt-3 font-aeonic bg-[#FFFFFF] text-xs md:text-[15px] font-bold rounded-full h-[38px] md:h-[54px] w-[130px] md:w-[192px] text-[#FFB224] '>
                Скидки до 60%
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FavoriteProductList;
