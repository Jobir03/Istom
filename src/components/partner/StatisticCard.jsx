import Image from "next/image";
import React from "react";
import ImageProduct from "@/assets/images/image.png";
import { ApexChart } from ".";
import { Card, CardContent, CardHeader } from "../ui/card";

const StatisticCard = ({ count }) => {
  return (
    <div className={`p-5 product-card rounded-[10px]`}>
      <div className="flex gap-3">
        <div className="min-w-[75px] h-[75px] md:min-w-[160px] md:h-[160px] border rounded-[10px]">
          <Image
            src={ImageProduct}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <Card className="bg-[#FAFAFA] border-0">
          <CardHeader className="grid grid-cols-3 items-center p-4 pb-0 gap-2 space-y-0">
            <div>
              <div className="text-sm text-muted-foreground font-aeonic">
                Наименование
              </div>
              <div className="font-bold text-lg font-cygre">Отбеливатель</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground font-aeonic">
                Статус
              </div>
              <span className="font-bold text-lg font-cygre text-[#40D01C]">
                Оплачено
              </span>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground font-aeonic">
                Цена
              </div>
              <div className="font-bold text-lg font-cygre">2 050 ₽</div>
            </div>
          </CardHeader>
          <CardContent className="px-4 mt-0">
            <div className="text-sm text-muted-foreground font-aeonic">
              Описание
            </div>
            <p className="mt-1 font-cygre leading-tight">
              Повседневная практика показывает, что перспективное планирование
              является
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-1 mt-3 ">
        <p className="text-[12px] md:text-base font-normal text-[#A7A7B2] font-aeonic mt-2">
          Статистика за месяц-дневной эквивалент продаж
        </p>
      </div>
      <ApexChart />
    </div>
  );
};

export default StatisticCard;
