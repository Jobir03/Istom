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
    GetData("api/v1/conf/site/banners/").then((res) => {
      setCarouselData(res);
    });
  }, []);
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
        <SwiperSlide className="md:py-3">
          <div className="md:my-7 md:h-[433px] bg-[#EAEAEA] rounded-[10px] relative">
            <Image
              src={BannerBG}
              alt="Login banner"
              className="absolute top-0 left-0 object-contain w-full md:w-[50%] "
            />
            <div className="flex justify-between flex-col md:flex-row relative h-full ">
              <div className="max-w-[450px] w-full p-4 md:p-8">
                <h1 className="text-[23px] md:text-[40px] font-cygre font-extrabold  leading-[25px]  md:leading-[40px]">
                  Инструменты для профессиональных стоматологов
                </h1>
                <p className="text-[13px] md:text-[17px] leading-[18px] md:leading-[24px] mt-2 font-aeonic text-[#6C6D70]">
                  Обеспечьте свою практику лучшими инструментами от ведущих
                  производителей
                </p>
                <Link href="/catalog">
                  <Button className="text-[12px] md:text-[14px] font-aeonic mt-6 hover:brightness-[0.95] px-5 h-[60px] md:h-[80px] w-full md:w-[260px] rounded-[4px] md:rounded-[8px] text-white font-bold">
                    В каталог
                  </Button>
                </Link>
              </div>
              <div className="relative flex items-center   w-full h-full">
                <Image
                  src={BannerPerson}
                  alt="Login banner"
                  className="object-contain md:absolute bottom-0 h-[312px] md:h-[480px]  z-[999] right-5"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="md:py-3">
          <div className="md:my-7 md:h-[433px] bg-[#EAEAEA] rounded-[10px] relative">
            <Image
              src={BannerBG}
              alt="Login banner"
              className="absolute top-0 left-0 object-contain w-full md:w-[50%] "
            />
            <div className="flex justify-between flex-col md:flex-row relative h-full ">
              <div className="max-w-[450px] w-full p-4 md:p-8">
                <h1 className="text-[23px] md:text-[40px] font-cygre font-extrabold  leading-[25px]  md:leading-[40px]">
                  Инструменты для профессиональных стоматологов
                </h1>
                <p className="text-[13px] md:text-[17px] leading-[18px] md:leading-[24px] mt-2 font-aeonic text-[#6C6D70]">
                  Обеспечьте свою практику лучшими инструментами от ведущих
                  производителей
                </p>
                <Button className="text-[12px] md:text-[14px] font-aeonic mt-6 hover:brightness-[0.95] px-5 h-[60px] md:h-[80px] w-full md:w-[260px] rounded-[4px] md:rounded-[8px] text-white font-bold">
                  В каталог
                </Button>
              </div>
              <div className="relative flex items-center   w-full h-full">
                <Image
                  src={BannerPerson}
                  alt="Login banner"
                  className="object-contain md:absolute bottom-0 h-[312px] md:h-[480px]  z-[999] right-5"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarousel;

// {
//   "username":"admin",
//   "password":"1"
//   }
