import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ProfileData = () => {
  return (
    <div className="font-aeonic">
      <h1 className="text-[25px] md:text-[30px] font-bold font-cygre">
        Личные данные
      </h1>
      <p className="text-[#6C6D70] text-base">Внесите подробную информацию!</p>
      <div className="px-6 py-7 product-card rounded-[10px] mt-4">
        <h2 className="font-bold text-[22px]">Укажите ваши Личные данные</h2>
        <div className="grid grid-cols-3 gap-8 mt-2">
          <div className="space-y-1">
            <Label
              htmlFor="name"
              className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
            >
              ФИО
            </Label>
            <Input
              id="name"
              placeholder="Введите ваше ФИО"
              className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
            />
          </div>
          <div className="space-y-1 font-aeonic">
            <Label
              htmlFor="name"
              className="text-[#84818A] font-normal text-[13px] md:text-[15px]"
            >
              Электронная почта
            </Label>
            <Input
              id="name"
              placeholder="Введите ваш E-mail"
              className="w-full  h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
            />
            <p className="text-[#A7A7B2] font-normal text-[13px] md:text-[14px]">
              *Является также логином для входа на сайт
            </p>
          </div>
          <div className="space-y-1">
            <Label
              htmlFor="name"
              className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
            >
              Телефон
            </Label>
            <Input
              id="name"
              placeholder="Ваш номер телефона"
              className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
            />
          </div>
          <div className="space-y-1">
            <Label
              htmlFor="name"
              className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
            >
              Укажите ИНН
            </Label>
            <Input
              id="name"
              placeholder="ИНН организации"
              className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
