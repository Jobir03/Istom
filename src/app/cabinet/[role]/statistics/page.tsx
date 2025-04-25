"use client";
import { StatisticCard } from "@/components/partner";
import { GetDataToken } from "@/services.jsx/data";
import React, { useEffect, useState } from "react";

const Statistics = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        GetDataToken("api/v1/product/order-products/weekly-statistics/").then(
            (res) => {
                setProducts(res?.results);
                console.log(res?.results);
            }
        );
    }, []);

    return (
        <div>
            <h1 className="text-[24px] md:text-[36px] font-bold">
                Статистика продаж
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2  my-4">
                <StatisticCard count={1} />
                <StatisticCard count={2} />
                <StatisticCard count={3} />
                <StatisticCard count={4} />
            </div>
        </div>
    );
};

export default Statistics;
