"use client";

import { HistoryProductCard } from "@/components/partner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { GetData, GetDataToken } from "@/services.jsx/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductHistory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        GetDataToken("api/v1/product/order-products/").then((res) =>
            setProducts(res?.results)
        );
    }, []);
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex md:items-center flex-col md:flex-row gap-3">
                    <h2 className="text-[24px] md:text-[36px] font-bold">
                    История заказов
                    </h2>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            className="border-yellow w-[20px] h-[20px] bg-[#F0F1F2] "
                            id="terms"
                        />
                        <label
                            htmlFor="terms"
                            className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            24 вашего товара
                        </label>
                    </div>
                </div>
                <Button className="text-[14px] hidden md:block border font-normal hover:brightness-[0.95] px-6 h-[30px] rounded-[4px] bg-[#ffffff] hover:bg-[#F4F4F4] text-black">
                    По популярности
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
                {products?.map((product: any, index) => (
                    <HistoryProductCard key={index} product={product} />
                ))}
            </div>
            <ButtonLink label="Добавить товар" href="/client/home"></ButtonLink>
        </div>
    );
};

export default ProductHistory;

function ButtonLink({ href, label }: { href: string; label: string }) {
    return (
        <Button
            asChild
            className="max-w-[180px] w-full lg:max-w-[310px] text-[11px] lg:text-[18px] font-normal hover:brightness-[0.95] px-6 h-[33px] md:h-[50px] rounded-[5px] md:rounded-[12px]"
        >
            <Link href={href}>{label}</Link>
        </Button>
    );
}
