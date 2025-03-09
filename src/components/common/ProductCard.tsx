// 'use client';

// import Image from 'next/image';
// import { Button } from '../ui/button';
// import { ImStarFull } from 'react-icons/im';
// import { GoHeartFill } from 'react-icons/go';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { addProduct } from '@/store/cartSlice/cartSlice';
// import { useDispatch } from 'react-redux';
// import { Product } from '@/types';
// import StoreIcon from '@/assets/icons/store-cart.svg';
// import { addFavoriteProduct } from '@/services.jsx/products';

// const product = {
//   id: 1,
//   name: 'Product 1',
//   price: 100,
//   description: 'Description 1',

//   images: [
//     {
//       image: '/path/to/image1.jpg',
//     },
//   ],
// };

// const ProductCard = ({ product }: { product: Product }) => {
//   const dispatch = useDispatch();
//   const [selectedSize, setSelectedSize] = useState<string>('');
//   const [quantity, setQuantity] = useState<number>(1);
//   const handleAddToCart = () => {
//     if (product) {
//       const productToAdd: any = {
//         ...product,
//         quantity: quantity,
//         size: selectedSize,
//         totalPrice: product.price * quantity,
//       };
//       dispatch(addProduct(productToAdd));
//       setSelectedSize('');
//       setQuantity(1);
//     }
//   };

//   const addToFavorite = (id: number) => {
//     addFavoriteProduct(id);
//   };

//   return (
//     <React.Fragment>
//       <div className='hidden md:block max-w-[400px] w-full product-card p-3 rounded-[10px]'>
//         <div className='py-2 flex items-center'>
//           <div className='w-[70%]'>
//             <h3 className='text-[17px] font-bold leading-[20px] font-cygre'>
//               {product.name}
//             </h3>
//             <div className='flex items-center mt-2 gap-2 text-[14px] text-[#A7A7B2] font-aeonic'>
//               <p>Осталось:</p>
//               {/* <div className='w-[80px] h-[6px] rounded-full bg-[#E9E9E9] relative'>
//                 <div className='absolute w-[40%] h-full bg-[#FFB224] rounded-full'></div>
//               </div> */}
//               <div className='w-[70px] h-[5px] rounded-full bg-[#E9E9E9] relative'>
//                 <div
//                   className='absolute h-full bg-[#FFB224] rounded-full'
//                   style={{
//                     width: `${(product.quantity / 80) * 100}%`,
//                   }}
//                 ></div>
//               </div>
//               <p>{product.quantity} шт</p>
//             </div>
//           </div>
//           <div
//             onClick={() => addToFavorite(product.id)}
//             className='flex justify-end flex-1 text-xl'
//           >
//             {product.is_featured ? (
//               <GoHeartFill color='#FFB224' />
//             ) : (
//               <GoHeartFill color='#A7A7B2' />
//             )}
//           </div>
//         </div>
//         <Link
//           href={`/client/product/${product?.id}`}
//           className='head w-full relative'
//         >
//           <div className='h-[264px] w-full bg-[#00000010] rounded-[15px]'>
//             <Image
//               src={product?.images && product?.images[0]?.image}
//               alt='product images'
//               width={254}
//               height={254}
//               className='object-cover w-full h-full rounded-[15px]'
//             />
//           </div>
//         </Link>
//         <div className='mt-3 body font-aeonic'>
//           <div className='info mb-4'>
//             <div className='flex items-center gap-3'>
//               <div className='flex items-center gap-2 font-cygre'>
//                 <span className='text-[18px] font-bold'>18 200 ₽</span>
//                 <span className='text-[#A7A7B2] text-[14px] font-bold line-through -translate-y-1'>
//                   {product.old_price}
//                 </span>
//               </div>
//               <div className='flex items-center  gap-1'>
//                 <div className='flex items-center gap-2'>
//                   <ImStarFull className='text-[#F1C644]' />
//                   <span className='text-[15px]'>4,8</span>
//                 </div>
//                 <div className='h-3 w-[1px] bg-[#A7A7B2]'></div>
//                 <p className='text-[14px] text-[#A7A7B2]'>
//                   {product.like_count}
//                 </p>
//               </div>
//             </div>
//             <p className='line-clamp-2 mt-2 text-[#A7A7B2] text-[15px] font-normal leading-[17px]'>
//               {product.description}
//             </p>
//           </div>
//           <Button className='w-full h-[70px] text-[15px] font-bold rounded-[8px]'>
//             <Image
//               src={StoreIcon}
//               alt='store icon'
//               className='mr-2 text-white'
//               width={20}
//             />
//             18 декабря
//           </Button>
//         </div>
//       </div>
//       <div className='md:hidden max-w-[400px] w-full product-card  rounded-[5px] relative'>
//         <div className='head w-full relative'>
//           <Button
//             onClick={() => addToFavorite(product.id)}
//             variant={'ghost'}
//             className='p-0 h-auto absolute top-2 right-2'
//           >
//             {product.is_featured ? (
//               <GoHeartFill color='#FFB224' />
//             ) : (
//               <GoHeartFill color='#A7A7B2' />
//             )}
//           </Button>
//           <Link
//             href={`/client/product/${product?.id}`}
//             className='h-[134px] block w-full bg-[#00000010] rounded-[5px]'
//           >
//             <Image
//               src={product?.images && product?.images[0]?.image}
//               alt='product'
//               width={254}
//               height={254}
//               className='object-cover w-full h-full rounded-[5px]'
//             />
//           </Link>
//         </div>
//         <div className='body p-2 font-aeonic'>
//           <h3 className='text-[14px] font-bold leading-[18px] font-cygre'>
//             {/* Наконечник &quot;KaVo&quot; турбинный */}
//             {product.name}
//           </h3>
//           <p className='text-[12px] text-[#A7A7B2] font-aeonic mt-1'>
//             Осталось:
//           </p>
//           <div className='flex items-center gap-2 text-[14px] text-[#A7A7B2] font-aeonic'>
//             {/* <div className='w-[70px] h-[5px] rounded-full bg-[#E9E9E9] relative'>
//               <div className='absolute w-[40%] h-full bg-[#FFB224] rounded-full'></div>
//             </div> */}
//             <div className='w-[70px] h-[5px] rounded-full bg-[#E9E9E9] relative'>
//               <div
//                 className='absolute h-full bg-[#FFB224] rounded-full'
//                 style={{
//                   width: `${(product.quantity / 80) * 100}%`,
//                 }}
//               ></div>
//             </div>
//             <p className='font-normal text-xs'>{product.quantity} шт</p>
//           </div>
//           <div className='flex items-center gap-2 font-cygre mt-2'>
//             <span className='text-[15px] font-bold'>{product.price} ₽</span>
//             <span className='text-[#A7A7B2] text-[11px] font-bold line-through -translate-y-1'>
//               {product.old_price ? product.old_price : '20 000'} ₽
//             </span>
//           </div>
//           <div className='flex items-center  gap-1 mt-1'>
//             <div className='flex items-center gap-2'>
//               <ImStarFull className='text-[#F1C644] text-[12px]' />
//               <span className='text-[12px]'>4,8</span>
//             </div>
//             <div className='h-3 w-[1px] bg-[#A7A7B2]'></div>
//             <p className='text-[12px] text-[#A7A7B2]'>
//               {product.like_count} оценок
//             </p>
//           </div>
//           <p className='line-clamp-2 mt-2 text-[#A7A7B2] text-[12px] font-normal leading-[13px]'>
//             {/* SMARTmatic, S20, -, это, угловой, стоматологический... */}
//             {product.description}
//           </p>
//           <Button
//             onClick={handleAddToCart}
//             className='w-full h-[45px] text-[12px] mt-2 font-bold rounded-[4px]'
//           >
//             <Image
//               src={StoreIcon}
//               alt='store icon'
//               className='mr-2 text-white '
//               width={12}
//             />
//             18 декабря
//           </Button>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default ProductCard;

// 222
// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { Button } from '../ui/button';
// import { ImStarFull } from 'react-icons/im';
// import { GoHeartFill } from 'react-icons/go';
// import Link from 'next/link';
// import { addProduct } from '@/store/cartSlice/cartSlice';
// import { useDispatch } from 'react-redux';
// import { Product } from '@/types';
// import StoreIcon from '@/assets/icons/store-cart.svg';
// import { addFavoriteProduct } from '@/services.jsx/products';

// const ProductCard = ({ product }: { product: Product }) => {
//   const dispatch = useDispatch();
//   const [isFavorite, setIsFavorite] = useState<boolean>(product.is_featured);

//   useEffect(() => {
//     setIsFavorite(product.is_featured);
//   }, [product.is_featured]);

//   const addToFavorite = async (id: number) => {
//     const newFavoriteState = !isFavorite;
//     setIsFavorite(newFavoriteState); // Мгновенное обновление UI
//     try {
//       await addFavoriteProduct(id); // Отправка запроса
//     } catch (error) {
//       setIsFavorite(!newFavoriteState); // Откат при ошибке
//       console.error('Ошибка при добавлении в избранное:', error);
//     }
//   };

//   return (
//     <div className='hidden md:block max-w-[400px] w-full product-card p-3 rounded-[10px]'>
//       <div className='py-2 flex items-center'>
//         <div className='w-[70%]'>
//           <h3 className='text-[17px] font-bold leading-[20px] font-cygre'>
//             {product.name}
//           </h3>
//         </div>
//         <div
//           onClick={() => addToFavorite(product.id)}
//           className='flex justify-end flex-1 text-xl cursor-pointer'
//         >
//           <GoHeartFill color={isFavorite ? '#FFB224' : '#A7A7B2'} />
//         </div>
//       </div>
//       <Link
//         href={`/client/product/${product.id}`}
//         className='head w-full relative'
//       >
//         <div className='h-[264px] w-full bg-[#00000010] rounded-[15px]'>
//           <Image
//             src={product?.images && product?.images[0]?.image}
//             alt='product images'
//             width={254}
//             height={254}
//             className='object-cover w-full h-full rounded-[15px]'
//           />
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;

// 333

"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { ImStarFull } from "react-icons/im";
import { GoHeartFill } from "react-icons/go";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { addProduct } from "@/store/cartSlice/cartSlice";
import { useDispatch } from "react-redux";
import { Product } from "@/types";
import StoreIcon from "@/assets/icons/store-cart.svg";
import { addFavoriteProduct } from "@/services.jsx/products";

const ProductCard = ({
  product,
  onRemoveFavorite,
}: {
  product: Product;
  onRemoveFavorite?: (id: number) => void;
}) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [isFavorite, setIsFavorite] = useState<boolean>(product.is_featured);

  useEffect(() => {
    setIsFavorite(product.is_featured);
  }, [product.is_featured]);

  const handleAddToCart = () => {
    if (product) {
      const productToAdd: any = {
        ...product,
        quantity,
        size: selectedSize,
        totalPrice: product.price * quantity,
      };
      dispatch(addProduct(productToAdd));
      setSelectedSize("");
      setQuantity(1);
    }
  };

  const addToFavorite = (id: number) => {
    setIsFavorite(!isFavorite);
    if (onRemoveFavorite) {
      onRemoveFavorite(id);
    }
    addFavoriteProduct(id);
  };

  return (
    <React.Fragment>
      <div className="max-w-[400px] w-full product-card p-3 rounded-[10px] flex flex-col min-h-[500px] bg-white shadow-md">
        <div className="py-2 flex items-center">
          <div className="w-[75%]">
            <h3 className="text-[17px] font-bold leading-[20px] font-cygre h-[40px] overflow-hidden line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center mt-2 gap-2 text-[14px] text-[#A7A7B2] font-aeonic">
              <p>Осталось:</p>
              <div className="w-[70px] h-[5px] overflow-hidden rounded-full bg-[#E9E9E9] relative">
                <div
                  className="absolute h-full bg-[#FFB224] rounded-full"
                  style={{ width: `${(product.quantity / 80) * 100}%` }}
                ></div>
              </div>
              <span>{product.quantity} шт</span>
            </div>
          </div>
          <div
            onClick={() => addToFavorite(product.id)}
            className="flex justify-end flex-1 text-xl cursor-pointer"
          >
            <GoHeartFill color={isFavorite ? "#FFB224" : "#A7A7B2"} />
          </div>
        </div>
        <Link
          href={`/product/${product?.id}`}
          className="head w-full relative flex-1"
        >
          <div className="h-[264px] w-full bg-[#00000010] rounded-[15px]">
            <Image
              src={product.images && product.images[0]?.image}
              alt="product images"
              width={254}
              height={254}
              className="object-cover w-full h-full rounded-[15px]"
            />
          </div>
        </Link>
        <div className="mt-3 body font-aeonic flex flex-col flex-1">
          <div className="info mb-4 flex-1">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 font-cygre">
                <span className="text-[18px] font-bold">{product.price} ₽</span>
                {product.old_price && (
                  <span className="text-[#A7A7B2] text-[14px] font-bold line-through -translate-y-1">
                    {product.old_price} ₽
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <ImStarFull className="text-[#F1C644]" />
                <span className="text-[15px]">4,8</span>
                <div className="h-3 w-[1px] bg-[#A7A7B2]"></div>
                <p className="text-[14px] text-[#A7A7B2]">
                  {product.like_count}
                </p>
              </div>
            </div>
            <p className="line-clamp-2 mt-2 text-[#A7A7B2] text-[15px] font-normal leading-[17px]">
              {product.description}
            </p>
          </div>
          <Button
            onClick={handleAddToCart}
            className="w-full h-[50px] md:h-[70px] text-[15px] font-bold rounded-[8px] mt-auto flex items-center justify-center"
          >
            <Image
              src={StoreIcon}
              alt="store icon"
              className="mr-2 text-white"
              width={20}
            />
            18 декабря
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
