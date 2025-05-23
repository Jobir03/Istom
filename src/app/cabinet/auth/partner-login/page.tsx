"use client";
import React, { useState } from "react";
import bgImage from "@/assets/images/Form-partner.png";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { login } from "@/services.jsx/auth";
import Cookie from "js-cookie";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [inputValue, setInputValue] = useState({
    login: "",
    password: "",
    is_partner: true,
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await login(inputValue.login, inputValue.password);
      const { access, refresh } = response;

      Cookie.set("token", access, { secure: true });
      Cookie.set("refresh_token", refresh, { secure: true });

      window.location.href = "/cabinet/partner";
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        alert("Неверный логин или пароль!");
      } else {
        console.error("Login failed:", error);
        alert("Что-то пошло не так. Попробуйте снова.");
      }

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
  };

  return (
    <div className="py-6 container min-h-[250px] md:min-h-[450px]">
      <div
        style={{ backgroundImage: `url(${bgImage.src})` }}
        className="h-[470px] bg-no-repeat bg-cover bg-center rounded-[10px]"
      >
        <div className="p-8 text-white font-aeonic">
          <h1 className="text-[25px] md:text-[25px] font-bold font-cygre">
            Войти как партнер
          </h1>
          <div className="flex items-center text-[15px]">
            <p>Нет аккаунта?</p>
            <Link href="/cabinet/auth/partner-signup" className="text-[#FFB224] ml-2">
              Создать аккаунт
            </Link>
          </div>
          <form action="" className="max-w-[430px] mt-4" onSubmit={handleLogin}>
            <div className="space-y-1">
              <Label
                htmlFor="email"
                className="font-normal font-aeonic text-[13px] md:text-[15px] text-[#5B5B5B]"
              >
                Электронная почта
              </Label>
              <Input
                id="email"
                onChange={(e) =>
                  setInputValue({ ...inputValue, login: e.target.value })
                }
                placeholder="Введите ваше электронную почту"
                className="w-full text-[15px] px-5 font-aeonic h-[57px] md:h-[63px] focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 rounded-[3px] border-0 text-base bg-[#222428]  placeholder:text-[#5B5B5B]"
              />
            </div>
            <div className="space-y-1 mt-2 relative">
              <Label
                htmlFor="password"
                className="font-normal font-aeonic text-[13px] md:text-[15px] text-[#5B5B5B]"
              >
                Пароль
              </Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                onChange={(e) =>
                  setInputValue({ ...inputValue, password: e.target.value })
                }
                placeholder="Введите пароль"
                className="w-full text-[15px] px-5 font-aeonic h-[57px] md:h-[63px] focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 rounded-[3px] border-0 text-base bg-[#222428]  placeholder:text-[#5B5B5B]"
              />
              {showPassword ? (
                <EyeIcon
                  className="absolute right-5 top-[56px] -translate-y-1/2 cursor-pointer text-white"
                  size={22}
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <EyeOffIcon
                  className="absolute right-5  top-[56px] -translate-y-1/2 cursor-pointer text-white"
                  size={22}
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <Button
              type="submit"
              className="bg-[#FFB224] hover:bg-black rounded-[3px] mt-5 h-[65px] w-full"
            >
              Войти
            </Button>
            <div className="flex  gap-2 p-4  text-white rounded-md max-w-md">
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

export default Login;
