"use client";
import bgImage from "@/assets/images/dark-card-bg.png";
import DeliveryIcon from "@/assets/images/Group2.png";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const DarkCards = () => {
  return (
    <div className="">
      <div className="hidden md:grid grid-cols-2 gap-y-20 lg:grid-cols-3 gap-6 ">
        <div className=" bg-[#111318] h-[260px] rounded-[10px] flex justify-center text-center relative">
          <div className="absolute w-full top-0 left-0 overflow-hidden h-[50%]">
            <Image
              src={bgImage}
              alt="bg-image"
              className="w-full  object-contain -translate-y-[150px]"
              loading="lazy"
            />
          </div>
          <Image
            src={DeliveryIcon}
            alt="bg-image"
            className="-top-[110px] object-contain absolute z-10 w-[280px]"
          />
          <div className="max-w-[300px] w-full mt-auto py-8">
            <h3 className="text-[18px] md:text-[25px] font-bold font-cygre text-white">
              Качество
            </h3>
            <p className="text-[#A7A8AA] font-aeonic leading-tight">
              Высокое качество печати и ультратонкая эластичная пленка
            </p>
          </div>
        </div>
        <div className=" bg-[#111318] h-[260px] rounded-[10px] flex justify-center text-center relative">
          <div className="absolute w-full top-0 left-0 overflow-hidden h-[50%]">
            <Image
              src={bgImage}
              alt="bg-image"
              className="w-full  object-contain -translate-y-[150px]"
              loading="lazy"
            />
          </div>
          <Image
            src={DeliveryIcon}
            alt="bg-image"
            className="-top-[110px] object-contain absolute z-10 w-[280px]"
            loading="lazy"
          />
          <div className="max-w-[380px] w-full mt-auto py-8">
            <h3 className="text-[18px] md:text-[25px] font-bold font-cygre text-white">
              Доставка
            </h3>
            <p className="text-[#A7A8AA] font-aeonic fon leading-tight">
              Отправляем заказы в течение 1-2 рабочих дней, бесплатная доставка
              от 2000 ₽
            </p>
          </div>
        </div>
        <div className=" bg-[#111318] h-[260px] rounded-[10px] flex justify-center text-center relative">
          <div className="absolute w-full top-0 left-0 overflow-hidden h-[50%]">
            <Image
              src={bgImage}
              alt="bg-image"
              className="w-full  object-contain -translate-y-[150px]"
              loading="lazy"
            />
          </div>
          <Image
            src={DeliveryIcon}
            alt="bg-image"
            className="-top-[110px] object-contain absolute z-10 w-[280px]"
            loading="lazy"
          />
          <div className="max-w-[380px] w-full mt-auto py-8">
            <h3 className="text-[18px] md:text-[25px] font-bold font-cygre text-white">
              Сотрудничество
            </h3>
            <p className="text-[#A7A8AA] font-aeonic leading-tight">
              Приглашаем к сотрудничеству партнёров по всему миру
            </p>
          </div>
        </div>
      </div>
      <div className="block md:hidden relative">
        <Swiper
          slidesPerView={1}
          loop={true}
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiper"
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide className="py-20 ">
            <div className=" bg-[#111318] h-[200px] rounded-[10px] flex justify-center text-center relative">
              <div className="absolute w-full top-0 left-0 overflow-hidden h-[50%]">
                <Image
                  src={bgImage}
                  alt="bg-image"
                  className="w-full  object-contain -translate-y-[120px] md:-translate-y-[150px]"
                  loading="lazy"
                />
              </div>
              <Image
                src={DeliveryIcon}
                alt="bg-image"
                className="-top-[80px] md:-top-[110px] object-contain absolute z-10 w-[200px]"
                loading="lazy"
              />
              <div className="max-w-[200px] md:max-w-[300px] w-full mt-auto py-8">
                <h3 className="text-[18px] md:text-[25px] font-bold font-cygre text-white">
                  Качество
                </h3>
                <p className="text-[#A7A8AA] text-xs md:text-[17px] font-aeonic leading-tight">
                  Высокое качество печати и ультратонкая эластичная пленка
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-20 ">
            <div className=" bg-[#111318] h-[200px] rounded-[10px] flex justify-center text-center relative">
              <div className="absolute w-full top-0 left-0 overflow-hidden h-[50%]">
                <Image
                  src={bgImage}
                  alt="bg-image"
                  className="w-full  object-contain -translate-y-[120px] md:-translate-y-[150px]"
                  loading="lazy"
                />
              </div>
              <Image
                src={DeliveryIcon}
                alt="bg-image"
                className="-top-[80px] md:-top-[110px] object-contain absolute z-10 w-[200px]"
                loading="lazy"
              />
              <div className="max-w-[200px] md:max-w-[300px] w-full mt-auto py-8">
                <h3 className="text-[18px] md:text-[25px] font-bold font-cygre text-white">
                  Качество
                </h3>
                <p className="text-[#A7A8AA] text-xs md:text-[17px] font-aeonic leading-tight">
                  Высокое качество печати и ультратонкая эластичная пленка
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center gap-4 -translate-y-16 z-20 relative">
          <div className="swiper-button-prev">
            <Image src={ArrowLeft} alt="arrow-left" />
          </div>
          <div className="swiper-button-next">
            <Image src={ArrowRight} alt="arrow-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkCards;
