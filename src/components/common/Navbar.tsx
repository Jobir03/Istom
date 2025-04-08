"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Logo from "@/assets/images/Istom-logo.svg";
import CatalogIcon from "@/assets/icons/catalog-icon.svg";
import SearchIcon from "@/assets/icons/search.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";
import CartIcon from "@/assets/icons/cart-icon.svg";
import UserIcon from "@/assets/icons/user-icon.svg";
import MenuBars from "@/assets/icons/men-bars.svg";
import { AuthModal } from "./AuthModal";

import Cookies from "js-cookie";
import CatalogButton from "../client/CatalogModal";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="w-full bg-white md:px-2">
        <div className="container">
          <div className="border-b py-2 hidden md:block">
            <p className="text-[14px] font-normal font-aeonic text-[#A7A7B2]">
              Ваш город{" "}
              <span className=" text-[#FFB224] font-bold">
                &nbsp; Санкт-Петербург
              </span>
              , уточнить адрес
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between space-x-4">
            <Link
              href={localStorage.getItem("token") ? "/client/home" : "/"}
              className="max-w-[200px] md:max-w-[240px] w-full block"
            >
              <Image
                src={Logo}
                alt="Istom Logo"
                className="object-contain"
                priority
              />
            </Link>
            <Button variant={"link"} className="p-0 md:hidden">
              <Image src={MenuBars} alt="menu icon" />
            </Button>
            <div className="w-full space-x-4 items-center hidden md:flex">
              <CatalogButton />
              <div className="search relative flex-1">
                <input
                  type="text"
                  placeholder="Поиск по товару"
                  className="bg-[#F8F8F8] h-[60px] font-aeonic font-normal rounded-[12px] px-6 py-2 w-full placeholder:text-[14px]"
                />
                <Image
                  src={SearchIcon}
                  alt="search icon"
                  width={25}
                  height={25}
                  priority
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                />
              </div>
              <div className="flex items-center">
                <div className="flex space-x-4 text-[14px]">
                  <Link
                    href="/favorite"
                    className="flex flex-col space-y-1 font-normal items-center justify-between"
                  >
                    <Image
                      src={FavoriteIcon}
                      alt="favorite icon"
                      priority
                      width={25}
                      height={25}
                    />
                    <span className="font-aeonic">Избранное</span>
                  </Link>
                  <Link
                    href="/cart"
                    className="flex flex-col space-y-1 font-normal items-center justify-between"
                  >
                    <Image
                      src={CartIcon}
                      alt="cart icon"
                      priority
                      width={25}
                      height={25}
                    />
                    <span className="font-aeonic">Корзина</span>
                  </Link>
                  {Cookies.get("token") && (
                    <Link
                      href="/cabinet/partner/statistics"
                      className="flex flex-col space-y-1 font-normal items-center justify-center "
                    >
                      <Image
                        src={UserIcon}
                        alt="Istom Logo"
                        className="object-contain"
                        priority
                        width={25}
                        height={25}
                      />
                      <span>Кабинет</span>
                    </Link>
                  )}
                </div>
                <AuthModal />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
