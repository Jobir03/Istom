"use client";
import React, { useState } from "react";
import bgImage from "@/assets/images/Form.png";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { login, signup } from "@/services.jsx/auth";

import Cookie from "js-cookie";
import { Checkbox } from "@/components/ui/checkbox";

const Signup = () => {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    inn: "",
    password: "",
    is_partner: false,
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await signup(inputValue.full_name, inputValue.email, inputValue.phone_number, inputValue.inn, inputValue.password, inputValue.is_partner);
      const { access, refresh } = response;

      // Cookie.set("token", access, { secure: true });
      // Cookie.set("refresh_token", refresh, { secure: true });

      // router.push("/cabinet/client");
    } catch (error: any) {
      // if (error.response && error.response.status === 401) {
      //   alert("Неверный логин или пароль!");
      // } else {
      //   console.error("Login failed:", error);
      //   alert("Что-то пошло не так. Попробуйте снова.");
      // }

      // setTimeout(() => {
      //   window.location.href = "/";
      // }, 2000);
    }
  };

  return (
    <div className="py-6 container min-h-[250px] md:min-h-[450px]">
      <div
        style={{ backgroundImage: `url(${bgImage.src})` }}
        className="h-[700px] bg-no-repeat bg-cover bg-center rounded-[10px]"
      >
        <div className="p-8 text-white font-aeonic">
          <h1 className="text-[25px] md:text-[25px] font-bold font-cygre">
          Регистрация
          </h1>
          <div className="flex items-center text-[15px]">
            <p>Есть аккаунт?</p>
            <Link href="/cabinet/auth/client-login" className="text-black ml-2">
            Войти
            </Link>
          </div>
          <form action="" className="max-w-[430px] mt-4" onSubmit={handleLogin}>
            <div className="space-y-1">
              <Label
                htmlFor="name"
                className="font-normal font-aeonic text-[13px] md:text-[15px]"
              >
                ФИО<span className="text-[#FFB224]">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Введите ваше имя"
                className="w-full text-[15px] px-5 font-aeonic h-[57px] md:h-[63px] focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 rounded-[3px] border-0 text-base bg-[#FFC55B]  placeholder:text-[#FFEFD2]"
                onChange={(e) =>
                  setInputValue({ ...inputValue, full_name: e.target.value })
                }
              />
            </div>
            <div className="space-y-1 mt-2 relative">
              <Label
                htmlFor="email"
                className="font-normal font-aeonic text-[13px] md:text-[15px]"
              >
                Электронная почта<span className="text-[#FFB224]">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Введите ваш E-mail"
                className="w-full text-[15px] px-5 font-aeonic h-[57px] md:h-[63px] focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 rounded-[3px] border-0 text-base bg-[#FFC55B]  placeholder:text-[#FFEFD2] relative"
                onChange={(e) =>
                  setInputValue({ ...inputValue, email: e.target.value })
                }
              />
            </div>
            <div className="space-y-1 mt-2 relative">
                <Label
                    htmlFor="password"
                    className="font-normal font-aeonic text-[13px] md:text-[15px]"
                >
                    Пароль<span className="text-[#FFB224]">*</span>
                </Label>
                <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Введите пароль"
                    className="w-full text-[15px] px-5 font-aeonic h-[57px] md:h-[63px] focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 rounded-[3px] border-0 text-base bg-[#FFC55B]  placeholder:text-[#FFEFD2] relative"
                    onChange={(e) =>
                    setInputValue({ ...inputValue, password: e.target.value })
                    }
                />
                {showPassword ? (
                    <EyeIcon
                    className="absolute right-2 top-[55px] -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                    />
                ) : (
                    <EyeOffIcon
                    className="absolute right-2 top-[55px] -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                    />
                )}
            </div>
            <div className="space-y-1 mt-2 relative">
                <Label
                    htmlFor="password"
                    className="font-normal font-aeonic text-[13px] md:text-[15px]"
                >
                    Повторите пароль<span className="text-[#FFB224]">*</span>
                </Label>
                <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Введите ваш пароль еще раз"
                    className="w-full text-[15px] px-5 font-aeonic h-[57px] md:h-[63px] focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 rounded-[3px] border-0 text-base bg-[#FFC55B]  placeholder:text-[#FFEFD2] relative"
                    onChange={(e) =>
                    setInputValue({ ...inputValue, password: e.target.value })
                    }
                />
                {showPassword ? (
                    <EyeIcon
                    className="absolute right-2 top-[55px] -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                    />
                ) : (
                    <EyeOffIcon
                    className="absolute right-2 top-[55px] -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                    />
                )}
            </div>


            <Button
              type="submit"
              className="bg-[#111318] hover:bg-black rounded-[3px] mt-5 h-[65px] w-full"
            >
              Войти
            </Button>
            <div className="flex gap-2 p-4 text-white rounded-md max-w-md">
              <Checkbox
                id="consent"
                checked={checked}
                onCheckedChange={setChecked}
                className="border-gray-600 data-[state=checked]:bg-white data-[state=checked]:text-black"
              />
              <label
                htmlFor="consent"
                className="text-sm font-normal leading-none cursor-pointer"
              >
                Нажимая кнопку подтверждаю, что я ознакомлен и согласен с{" "}
                <span className="text-yellow font-medium">
                  условиями политики конфиденциальности
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
