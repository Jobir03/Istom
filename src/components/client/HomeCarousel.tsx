"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";
import BannerBG from "@/assets/images/banner-bg.png";
import BannerPerson from "@/assets/images/bannes-doc.png";
import { useEffect, useState } from "react";
import { BASE_URL, BASE_URL_IMG, GetData } from "@/services.jsx/data";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const HomeCarousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  useEffect(() => {
    GetData("banner/").then((res) => {
      setCarouselData(res);
    });
  }, []);
  console.log(carouselData);
  return (
    <div className="relative py-2 home-carousel">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        modules={[Pagination, Autoplay]}
      >
        {
          carouselData?.map((item: any, index: number) => (
            <SwiperSlide className="md:py-3" key={item?.id}> 
            <div style={{ backgroundImage: `url(${item?.image})` }} className="md:my-7 bg-cover bg-center md:h-[433px] bg-[#F6F6F6] rounded-[10px] relative  ">
             
              <div className="flex justify-between flex-col md:flex-row relative h-full ">
                <div className="max-w-[450px] w-full p-4 md:p-8">
                  <h1 className="text-[23px] md:text-[40px] font-cygre font-extrabold  leading-[25px]  md:leading-[40px]">
                    {item?.title}
                  </h1>
                  <p className="text-[13px] md:text-[17px] leading-[18px] md:leading-[24px] mt-2 font-aeonic text-[#6C6D70]">
                    {item?.description}
                  </p>
                  <Link href="/catalog">
                    <Button className="text-[12px] md:text-[14px] font-aeonic mt-6 hover:brightness-[0.95] px-5 h-[60px] md:h-[80px] w-full md:w-[260px] rounded-[4px] md:rounded-[8px] text-white font-bold">
                      В каталог
                    </Button>
                  </Link>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          ))

        } 

       
        
      </Swiper>
    </div>
  );
};

export default HomeCarousel;

// {
//   "username":"admin",
//   "password":"1"
//   }
