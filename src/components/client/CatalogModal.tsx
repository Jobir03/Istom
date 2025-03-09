"use client";

import * as React from "react";
import { Grid, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import CatalogIcon from "@/assets/icons/catalog-icon.svg";

interface Category {
  title: string;
  count?: number;
  subcategories?: {
    title: string;
    count: number;
  }[];
}

export default function CatalogButton() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    "Стоматологические материалы"
  );

  const categories: Category[] = [
    {
      title: "Стоматологические материалы",
      count: 378,
      subcategories: [
        { title: "Адгезивы и бондинги", count: 20 },
        { title: "Артикуляционная бумага, спрей", count: 55 },
        { title: "Воры и дрожи стоматологические", count: 18 },
        { title: "Временные пломбы", count: 7 },
        { title: "Гемостатические препараты", count: 24 },
        { title: "Герметики стоматологические", count: 12 },
        { title: "Девитализация пульпы", count: 23 },
        { title: "Жидкотекучие композиты (штрицы, наборы)", count: 0 },
        { title: "Лечебные препараты", count: 20 },
        { title: "Материалы для дисфофореза", count: 32 },
        { title: "Металлы", count: 0 },
        { title: "Обработка и расширение каналов", count: 0 },
        { title: "Отбеливание зубов", count: 0 },
        { title: "Пломбировочные каналов", count: 22 },
        { title: "Пломбировочные средства", count: 0 },
        { title: "Профилактика и гигиена полости рта", count: 18 },
        { title: "Расходабриска наконеч", count: 23 },
        { title: "Рентген", count: 28 },
        { title: "Световые композиты (шприцы, наборы)", count: 0 },
        { title: "Химические композиты", count: 0 },
        { title: "Цементы прибороночные (реставрационные)", count: 0 },
        { title: "Штифты", count: 0 },
      ],
    },
    { title: "Стоматологическое оборудование" },
    { title: "Стоматологические инструменты" },
    { title: "Зуботехнические материалы" },
    { title: "Эндодонтические инструменты" },
    { title: "Расходные материалы" },
    { title: "Анестезия" },
    { title: "Ортопедия" },
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger onMouseEnter={() => setIsOpen(true)} className="">
        <div className="catalog">
          <Link href="/catalog">
            <Button
              className={`text-[15px] font-cygre tracking-wide   relative overflow-hidden px-6 bg-[#111318] font-bold hover:bg-[#111318] hover:brightness-[0.95] h-[65px] w-[170px] rounded-[8px]`}
            >
              <div className="w-[40px] bg-[#FFB224] h-full absolute left-0 top-0 rounded-[8px] flex justify-center items-center">
                <Image
                  src={CatalogIcon}
                  alt="Istom Logo"
                  className="object-contain"
                  priority
                />
              </div>
              Каталог
            </Button>
          </Link>
        </div>
      </PopoverTrigger>
      <PopoverContent className="max-w-[1200px] w-full p-0" align="start">
        <div className="flex h-[650px]">
          {/* Left Column - Main Categories */}
          <div className="w-[300px] border-r">
            <div className="p-4 ">
              <h2 className="text-[30px] font-semibold font-cygre">Каталог</h2>
            </div>
            <div className="overflow-auto font-aeonic h-[calc(100%-57px)]">
              {categories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setSelectedCategory(category.title)}
                  className={`w-full text-[15px] font-normal text-[#A7A7B2] text-left px-4 py-3 hover:bg-gray-100 transition-colors ${
                    selectedCategory === category.title ? "bg-gray-100" : ""
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {selectedCategory && (
            <div className="flex-1">
              <div className="flex items-center justify-between p-4 ">
                <div className="flex items-center gap-3">
                  <h2 className="text-[30px] font-semibold font-cygre">
                    {selectedCategory}
                  </h2>
                  {categories.find((c) => c.title === selectedCategory)
                    ?.count && (
                    <p className="text-sm font-semibold font-aeonic text-[#A7A7B2]">
                      {
                        categories.find((c) => c.title === selectedCategory)
                          ?.count
                      }{" "}
                      товаров
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6 p-6 overflow-auto h-[calc(100%-73px)]">
                {categories
                  .find((c) => c.title === selectedCategory)
                  ?.subcategories?.map((sub) => (
                    <div
                      key={sub.title}
                      className="group cursor-pointer font-aeonic"
                    >
                      <div className="flex  items-center text-[#A7A7B2] ">
                        <span className="group-hover:text-blue-600  font-normal transition-colors">
                          {sub.title}
                        </span>
                        <span className="text-sm ml-2">({sub.count})</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
