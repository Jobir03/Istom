"use client";
import React, { Fragment } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "@/store/cartSlice/cartSlice";
import { Product } from "@/types";
import Link from "next/link";
import { MinusIcon, PlusIcon, X, XIcon } from "lucide-react";

const CartItem = ({ item, index }: { item: any; index: number }) => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      {/* ---- Desktop ---- */}
      <tr className="hidden lg:table-row">
        <td className="pb-4">
          <div className="flex items-center  gap-4 py-5 font-cygre">
            <Link href={`/product/${item.id}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={260}
                height={200}
                className="w-[240px] h-[180px] rounded-[15px] bg-gray-100 object-cover"
              />
            </Link>
            <div>
              <div className="font-bold text-[19px] leading-tight">
                {item.name}
              </div>
              <div className="text-[15px] mt-2 text-[#A7A7B2]">
                SKU 234565: ШЕО - 1шт, утилизация
              </div>
            </div>
          </div>
        </td>
        <td className="text-center text-[22px] font-bold font-cygre">
          {item.price} ₽
        </td>
        <td>
          <div className="flex items-center h-[75px] w-[165px] rounded-[10px] bg-[#F6F6F6] justify-center gap-2">
            <Button
              onClick={() => dispatch(decreaseQuantity(item))}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <MinusIcon className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center font-cygre font-bold text-[20px]">
              {item.quantity}
            </span>
            <Button
              onClick={() => dispatch(increaseQuantity(item))}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
        </td>
        <td className=" text-center text-[22px] font-bold font-cygre">
          {item.price * item.quantity} ₽
        </td>
        <td align="right">
          <Button
            onClick={() => dispatch(removeProduct(item))}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <XIcon className="h-4 w-4 text-[#FFB224]" />
          </Button>
        </td>
      </tr>
      {/* ---- Mobile ---- */}
      <div
        style={{ paddingTop: index == 0 ? "16px" : "40px" }}
        className="flex lg:hidden flex-col gap-4 py-4 max-w-2xl"
      >
        <div className="flex items-center gap-4 ">
          <div className="relative w-[115px] h-[90px] bg-[#F6F6F6] rounded-[5px] overflow-hidden">
            <Image
              src={item.image}
              alt="product image"
              fill
              className="object-contain p-2"
            />
          </div>

          <div className="flex-1 h-full">
            <div className="flex items-center h-full">
              <div className="">
                <h2 className="font-bold line-clamp-2 text-sm font-cygre">
                  {item.name}
                </h2>
                <p className="text-xs mt-1 text-[#A7A7B2] font-aeonic">
                  SMARTmatic, S20, -, это, угловой, стоматологический...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-xs font-aeonic uppercase ">ЦЕНА</div>
          </div>
          <div className="font-bold text-lg font-cygre">{item.price} ₽</div>
        </div>

        <div className=" flex items-center justify-between border-y py-4">
          <div className="flex items-center gap-2 bg-[#F6F6F6] rounded-sm p-2 w-fit">
            <Button
              onClick={() => dispatch(decreaseQuantity(item))}
              variant="ghost"
              size="icon"
              className="h-8 w-8"
            >
              -
            </Button>
            <span className="text-[13px] font-bold font-cygre">
              {item.quantity}
            </span>
            <Button
              onClick={() => dispatch(increaseQuantity(item))}
              variant="ghost"
              size="icon"
              className="h-8 w-8"
            >
              +
            </Button>
          </div>
          <Button
            onClick={() => dispatch(removeProduct(item))}
            variant="ghost"
            size="icon"
            className="h-8 w-8 -mr-2"
          >
            <X className="h-5 w-5 text-[#FFB224]" />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-xs font-aeonic uppercase">СУММА</div>
          </div>
          <div className="font-bold text-lg font-cygre">
            {item.price * item.quantity} ₽
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
