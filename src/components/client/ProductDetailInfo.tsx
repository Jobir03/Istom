"use client";
import { addProduct } from "@/store/cartSlice/cartSlice";
import { Product } from "@/types";
import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { ImStarFull } from "react-icons/im";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
interface ProductInfo {
  productData: any;
}

const ProductDetailInfo: React.FC<ProductInfo> = ({ productData }) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (productData) {
      const productToAdd: Product = {
        ...productData,
        quantity: quantity,
        size: selectedSize,
        totalPrice: productData?.price * quantity,
      };
      dispatch(addProduct(productToAdd));
      setSelectedSize("");
      setQuantity(1);
    }
  };
  return (
    <div className="flex-1 flex flex-col justify-between min-h-[510px]">
      <div className="flex">
        <h1 className="text-[28px] font-cygre font-bold flex-1">
          {productData?.name}
        </h1>
        <div className="flex items-center gap-1 text-[#A7A7B2]">
          <GoHeartFill className="text-xl" />
          <span className="font-aeonic text-sm">54</span>
        </div>
      </div>
      <div className="flex items-center  gap-1 font-aeonic text-[15px]">
        <div className="flex items-center gap-2">
          <ImStarFull className="text-[#F1C644]" />
          <span>4,8</span>
        </div>
        <div className="h-3 w-[1px] bg-[#A7A7B2]"></div>
        <p className="text-[#A7A7B2]">112 оценок</p>
        <p className="text-[#A7A7B2] ps-2">Артикул: {productData?.sku}</p>
      </div>
      <div className="space-y-2 text-[#A7A7B2] text-[15px] mt-4 font-aeonic">
        <p>Фирма: Kavo</p>
        <p>Страна: Германия</p>
      </div>
      <div className="flex items-center gap-2 font-cygre mt-4">
        <span className="text-[25px] font-bold">
          {productData?.price ? productData.price : "18 200"} ₽
        </span>
        <span className="text-[#A7A7B2] text-[14px] font-bold line-through -translate-y-1">
          {productData?.old_price ? productData.old_price : "20 000"} ₽
        </span>
      </div>
      <div className="h-[65px] mt-2">
        <Button
          variant={"ghost"}
          onClick={decreaseQuantity}
          className="p-0 rounded-sm h-full hover:bg-transparent"
        >
          <Minus />
        </Button>
        <input
          readOnly
          value={productData?.quantity ? productData.quantity : quantity}
          className="w-[52px] text-center bg-[#F6F6F6] h-full rounded-[5px] mx-2 outline-none font-aeonic text-base font-bold"
        />
        <Button
          variant={"ghost"}
          onClick={increaseQuantity}
          className="p-0 rounded-sm h-full hover:bg-transparent"
        >
          <Plus />
        </Button>
      </div>
      <div className="mt-5">
        <h2 className="text-[18px] font-bold font-cygre">Описание:</h2>
        <p className="line-clamp-2 text-base font-aeonic text-[#A7A7B2] leading-tight font-normal">
          {productData?.description}
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center h-auto md:h-[85px] mt-5 gap-2 font-aeonic">
        <Button className="min-h-[60px] md:min-h-auto h-full w-full md:w-auto rounded-sm flex-1 font-bold">
          Купить в один клик
        </Button>
        <Button
          onClick={handleAddToCart}
          className="min-h-[60px] md:min-h-auto w-full md:w-auto md:h-full rounded-sm flex-1 bg-[#FFF7E8] font-bold text-[#FFB224] hover:bg-[#FFF7E8]"
        >
          Добавить в корзину
        </Button>
        <Button className="hidden md:flex items-center justify-center h-full w-[65px] p-0 bg-[#F6F6F6] hover:bg-[#F6F6F6]">
          <GoHeartFill className="text-[#A7A7B2]" />
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
