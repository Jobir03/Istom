"use client";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React, { useState } from "react";
import exampleImage from "@/assets/images/image.png";

interface ImagesProp {
  images: {
    image: string;
  }[];
}

const ProductDetailImages: React.FC<ImagesProp> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  console.log(images);
  return (
    <div className="flex-1 md:flex md:flex-row-reverse h-full gap-3 w-full  min-h-[340px] product-images">
      <div className="md:flex-1">
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 h-[370px] md:h-[500px] w-full "
          direction="horizontal"
        >
          {images?.map((image: any, ind: any) => (
            <SwiperSlide
              key={ind}
              className="border h-full w-full m-0 rounded-[10px]"
            >
              <Image
                src={image?.image || exampleImage}
                alt="product name"
                className="w-full object-contain"
                fill
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={20}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-3 md:mt-0 h-auto md:h-[500px]"
          direction="vertical"
          breakpoints={{
            0: {
              direction: "horizontal",
            },
            768: {
              direction: "vertical",
            },
          }}
        >
          {images?.map((image: any, ind: any) => (
            <SwiperSlide
              key={ind}
              className="border p-2 min-h-[75px] md:max-h-[110px] w-[110px] md:min-w-[110px] cursor-pointer rounded-[10px] overflow-hidden"
            >
              <Image
                src={image?.image || exampleImage}
                alt="product name"
                className="w-full object-cover"
                fill
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDetailImages;
