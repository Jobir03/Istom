"use client";

import { useEffect, useState } from "react";
import ProductsList from "@/components/common/ProductsList";
import {
  ProductDetailImages,
  ProductDetailInfo,
  ProductFeatues,
} from "@/components/client";
import { GetData, GetDataToken } from "@/services.jsx/data";
import CustomBreadcrumb from "@/components/common/CustomBreadcrumb";
import { getProductDetail } from "@/services.jsx/products";

const breadcrumbs = [
  { name: "Каталог", link: "" },
  { name: "Стоматотологические материалы", link: "" },
];

export default function ProductDetails({ params }: any) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getProductDetail(params.slug).then((res) => {
      setData(res);
      console.log(res);
    });
  }, [params.slug]);

  return (
    <section className="pt-6 ">
      <div className="container mb-16">
        <CustomBreadcrumb items={breadcrumbs} />
        <div className="product mt-5 md:mt-8 md:min-h-[500px] flex flex-col lg:flex-row  items-start gap-8">
          <ProductDetailImages images={data?.images} />
          <ProductDetailInfo productData={data} />
        </div>
        <div className="mt-10">
          <ProductFeatues item={data?.description} />
        </div>
      </div>
      <div className="pb-[70px]">
        <div className="container">
          <ProductsList title={"Похожие товары"} />
        </div>
      </div>
    </section>
  );
}
