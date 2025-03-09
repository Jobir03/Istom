import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/Istom-logo.svg";
import Telegram from "@/assets/icons/telegram.svg";
import Vk from "@/assets/icons/vk.svg";
import Visa from "@/assets/icons/visa.svg";
import Mir from "@/assets/icons/mir.svg";
import MasterCard from "@/assets/icons/master-card.svg";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-[#F4F4F4] md:h-[240px] rounded-t-md py-4 font-aeonic">
      <div className="container flex flex-col md:flex-row md:items-end justify-between space-y-6 h-full">
        <div className="flex flex-col h-full justify-between">
          <Image
            src={Logo}
            alt="logo"
            className="object-contain w-[200px] md:w-[260px]"
            loading="lazy"
          />
          <div className="flex gap-3 mt-4">
            <Link
              href={"#"}
              className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] bg-white flex items-center justify-center rounded-lg"
            >
              <Image
                src={Vk}
                alt="telegram"
                className="w-[18px] md:w-[20px]"
                loading="lazy"
              />
            </Link>
            <Link
              href={"#"}
              className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] bg-white flex items-center justify-center rounded-lg"
            >
              <Image
                src={Telegram}
                alt="telegram"
                loading="lazy"
                className="w-[16px] md:w-[18px]"
              />
            </Link>
          </div>
          <p className="text-[#787878] text-[15px] hidden md:block">
            @2024 Copyright
          </p>
        </div>
        <div className="h-full flex flex-col space-y-8  justify-end">
          <div className="flex items-center space-x-2 md:space-x-3">
            <Image
              src={Visa}
              alt="visa card"
              loading="lazy"
              className="w-[33px] md:w-[50px]"
            />
            <Image src={Mir} alt="mir card" className="w-[38px]  md:w-[58px]" />
            <Image
              src={MasterCard}
              alt="master-card"
              loading="lazy"
              className="w-[82px] md:w-[125px] object-contain"
            />
          </div>
          <div className="flex justify-between md:justify-end">
            <p className="text-[#787878] text-[12px] md:text-[15px] md:hidden">
              @2024 Copyright
            </p>
            <p className="text-[#787878] text-[12px] md:text-[15px]">
              Сделано в UserTech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
