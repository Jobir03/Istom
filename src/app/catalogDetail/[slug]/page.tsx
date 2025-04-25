"use client";

import { ProductCard, Subscribe } from "@/components/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
// import Menu from "../../../../assets/images/menu.png";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GetData } from "@/services.jsx/data";

interface Filters {
  countries?: string[]; // Explicitly type the 'countries' property as an array of strings
  sizes?: string[]; // Explicitly type the 'countries' property as an array of strings
  volumes?: string[]; // Explicitly type the 'countries' property as an array of strings
  sizes_of_brackets?: string[]; // Explicitly type the 'countries' property as an array of strings
  heights_of_closing_brackets?: string[]; // Explicitly type the 'countries' property as an array of strings
  outer_diameters_of_heads?: string[]; // Explicitly type the 'countries' property as an array of strings
}

export default function CatalogDetail({ params }: any) {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState<Filters | null>(null);
  const [query, setQuery] = useState("");
  const [country_, setCountry_] = useState("");
  const [size_, setSize_] = useState("");
  const [volume_, setVolume_] = useState("");
  const [sizes_of_bracket_, setSizes_of_bracket_] = useState("");
  const [heights_of_closing_bracket_, setHeights_of_closing_bracket_] =
    useState("");
  const [outer_diameters_of_head_, setOuter_diameters_of_head_] = useState("");

  useEffect(() => {
    GetData(`api/v1/product/category-product/${params?.slug}/`).then((res) => {
      setProducts(res?.results);
    });
  }, [query]);

  useEffect(() => {
    GetData(`api/v1/product/api/distinct-product-attributes/`).then((res) => {
      setFilters(res);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="lg:text-[36px] font-bold p-0 leading-none">Каталог</h1>
          <span className="border-[1.5px] border-yellow w-[72px] h-[24px] rounded-[4px] flex justify-center items-center text-[10px]">
            1340 товара
          </span>
        </div>
        <Breadcrumb className="my-5">
          <BreadcrumbList className="text-[14px] ">
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/client/home">Главная</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Каталог</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-3 flex gap-5 overflow-auto">
          <Button className="text-[14px] border font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px] bg-[#F4F4F4] hover:bg-[#F4F4F4] text-black">
            Стоматология
          </Button>
          <Button className="text-[14px] border font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px] bg-[#F4F4F4] hover:bg-[#F4F4F4] text-black">
            Косметология
          </Button>
          <Button className="text-[14px] border font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px] bg-[#F4F4F4] hover:bg-[#F4F4F4] text-black">
            Для медицинских учереждений
          </Button>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 mt-4 mb-8">
          <div className="hidden lg:block col-span-1 border min-h-[600px] rounded-[10px] py-2 px-3">
            <h2 className=" md:text-[24px] font-bold">Фильтр</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-2" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  Страна
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  {filters?.countries?.map((country: any, ind) => (
                    <div key={ind} className="flex items-center space-x-2">
                      <Checkbox
                        onClick={() => setCountry_(country)}
                        className="border-[#C5C5C5] bg-[#F0F1F2"
                        id="terms"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-[#818181] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {country}
                      </label>
                    </div>
                  ))}
                  {/* <Button
                                        variant={"ghost"}
                                        className="p-0 text-[#FFAB41] hover:bg-[#fff]"
                                    >
                                        Показать еще...
                                    </Button> */}
                  <div className="">
                    <Button
                      onClick={() => {
                        setQuery(`?country=${country_}`);
                      }}
                      className="text-[14px] w-full font-normal hover:brightness-[0.95] px-6 h-[40px] rounded-[12px]"
                    >
                      Применить
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-2" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  Размеры
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  {filters?.sizes?.map((size: any, ind) => (
                    <div key={ind} className="flex items-center space-x-2">
                      <Checkbox
                        onClick={() => setSize_(size)}
                        className="border-[#C5C5C5] bg-[#F0F1F2"
                        id="terms"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-[#818181] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {size}
                      </label>
                    </div>
                  ))}
                  {/* <Button
                                        variant={"ghost"}
                                        className="p-0 text-[#FFAB41] hover:bg-[#fff]"
                                    >
                                        Показать еще...
                                    </Button> */}
                  <div className="">
                    <Button
                      onClick={() => {
                        setQuery(`?size=${size_}`);
                      }}
                      className="text-[14px] w-full font-normal hover:brightness-[0.95] px-6 h-[40px] rounded-[12px]"
                    >
                      Применить
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-2" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  Объемы
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  {filters?.volumes?.map((volume: any, ind) => (
                    <div key={ind} className="flex items-center space-x-2">
                      <Checkbox
                        onClick={() => setVolume_(volume)}
                        className="border-[#C5C5C5] bg-[#F0F1F2"
                        id="terms"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-[#818181] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {volume}
                      </label>
                    </div>
                  ))}
                  {/* <Button
                                        variant={"ghost"}
                                        className="p-0 text-[#FFAB41] hover:bg-[#fff]"
                                    >
                                        Показать еще...
                                    </Button> */}
                  <div className="">
                    <Button
                      onClick={() => {
                        setQuery(`?volume=${volume_}`);
                      }}
                      className="text-[14px] w-full font-normal hover:brightness-[0.95] px-6 h-[40px] rounded-[12px]"
                    >
                      Применить
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-2" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  Размеры кронштейнов
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  {filters?.sizes_of_brackets?.map(
                    (sizes_of_bracket: any, ind) => (
                      <div key={ind} className="flex items-center space-x-2">
                        <Checkbox
                          onClick={() => setSizes_of_bracket_(sizes_of_bracket)}
                          className="border-[#C5C5C5] bg-[#F0F1F2"
                          id="terms"
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm text-[#818181] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {sizes_of_bracket}
                        </label>
                      </div>
                    )
                  )}
                  {/* <Button
                                        variant={"ghost"}
                                        className="p-0 text-[#FFAB41] hover:bg-[#fff]"
                                    >
                                        Показать еще...
                                    </Button> */}
                  <div className="">
                    <Button
                      onClick={() => {
                        setQuery(`?size_of_brackets=${sizes_of_bracket_}`);
                      }}
                      className="text-[14px] w-full font-normal hover:brightness-[0.95] px-6 h-[40px] rounded-[12px]"
                    >
                      Применить
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-2" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  Высота закрытия скобок
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  {filters?.heights_of_closing_brackets?.map(
                    (heights_of_closing_bracket: any, ind) => (
                      <div key={ind} className="flex items-center space-x-2">
                        <Checkbox
                          onClick={() =>
                            setHeights_of_closing_bracket_(
                              heights_of_closing_bracket
                            )
                          }
                          className="border-[#C5C5C5] bg-[#F0F1F2"
                          id="terms"
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm text-[#818181] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {heights_of_closing_bracket}
                        </label>
                      </div>
                    )
                  )}
                  {/* <Button
                                        variant={"ghost"}
                                        className="p-0 text-[#FFAB41] hover:bg-[#fff]"
                                    >
                                        Показать еще...
                                    </Button> */}
                  <div className="">
                    <Button
                      onClick={() =>
                        setQuery(
                          `?the_height_of_the_closing_barckets=${heights_of_closing_bracket_}`
                        )
                      }
                      className="text-[14px] w-full font-normal hover:brightness-[0.95] px-6 h-[40px] rounded-[12px]"
                    >
                      Применить
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-2" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  Внешний диаметр головки (мм)
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  {filters?.outer_diameters_of_heads?.map(
                    (outer_diameters_of_head: any, ind) => (
                      <div key={ind} className="flex items-center space-x-2">
                        <Checkbox
                          onClick={() =>
                            setOuter_diameters_of_head_(outer_diameters_of_head)
                          }
                          className="border-[#C5C5C5] bg-[#F0F1F2"
                          id="terms"
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm text-[#818181] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {outer_diameters_of_head}
                        </label>
                      </div>
                    )
                  )}
                  {/* <Button
                                        variant={"ghost"}
                                        className="p-0 text-[#FFAB41] hover:bg-[#fff]"
                                    >
                                        Показать еще...
                                    </Button> */}
                  <div className="">
                    <Button
                      onClick={() =>
                        setQuery(
                          `?outer_diameter_of_the_head=${outer_diameters_of_head_}`
                        )
                      }
                      className="text-[14px] w-full font-normal hover:brightness-[0.95] px-6 h-[40px] rounded-[12px]"
                    >
                      Применить
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="col-span-3 md:p-6">
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox className="border-[#C5C5C5] bg-[#F0F1F2" id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Товары в наличии
                </label>
              </div>
              <Button className="text-[14px] border font-normal hover:brightness-[0.95] px-6 h-[30px] rounded-[4px] bg-[#ffffff] hover:bg-[#F4F4F4] text-black flex items-center">
                {/* <Image className="w-[16px] h-[16px]" src={Menu} alt="no img" /> */}
                По популярности
              </Button>
            </div>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-2 mt-5">
              {products?.map((product: any, ind) => (
                <ProductCard key={ind} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}
