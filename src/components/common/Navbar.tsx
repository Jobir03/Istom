"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/images/Istom-logo.svg";
import SearchIcon from "@/assets/icons/search.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";
import CartIcon from "@/assets/icons/cart-icon.svg";
import UserIcon from "@/assets/icons/user-icon.svg";
import MenuBars from "@/assets/icons/men-bars.svg";
import { AuthModal } from "./AuthModal";
import Cookies from "js-cookie";
import { CatalogButton, MobileCatalogNavigation } from "./CatalogNavigation";

const MobileMenu = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState(null);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transition duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white flex flex-col`}
      style={{ willChange: "transform" }}
    >
      <div className="py-3 px-4 text-sm">
        <p className="text-gray-500">
          Ваш город <span className="text-amber-400 font-medium">Санкт-Петербург</span>, уточнить адрес
        </p>
      </div>
      
      <div className="container">
        <div className="flex items-center justify-between py-4 border-b">
          <h2 className="text-2xl font-aeonic font-bold">
            {activeSection === 'catalog' ? 'Каталог' : 'Меню'}
          </h2>
          <button onClick={onClose} className="p-2">
            <X size={24} />
          </button>
        </div>

        <div className="relative my-4 ">
          <input
            type="text"
            placeholder="Поиск по товару"
            className="bg-gray-100 h-[53px] font-normal font-aeonic rounded py-3 px-4 w-full placeholder:text-[#A7A7B2]"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Image src={SearchIcon} alt="search" width={20} height={20} />
          </div>
        </div>

        {activeSection === 'catalog' ? (
          <div className="flex-1 pb-4">
          
            <MobileCatalogNavigation setActiveSection={setActiveSection}  />
          </div>
        ) : (
          <div className="flex-1">
            <div 
              className="flex items-center justify-between py-5 border-b cursor-pointer"
              onClick={() => setActiveSection('catalog')}
            >
              <span className="text-base font-cygre font-medium">Каталог</span>
              <span className="text-gray-400 text-4xl">›</span>
            </div>

            <Link href="/favorite" className="flex items-center justify-between py-5 border-b">
              <span className="text-base font-cygre font-medium">Избранное</span>
            </Link>

            <Link href="/cart" className="flex items-center justify-between py-5 border-b">
              <span className="text-base font-cygre font-medium">Корзина</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    // Safe check for browser environment before accessing localStorage
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem("token") || "");
    }
  }, []);

  return (
    <>
      <nav className="w-full bg-white md:px-2">
        <div className="container">
          <div className="border-b py-2 hidden md:block">
            <p className="text-[14px] font-normal font-aeonic text-[#A7A7B2]">
              Ваш город <span className=" text-[#FFB224] font-bold">&nbsp; Санкт-Петербург</span>, уточнить адрес
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between space-x-4">
            <Link href={token ? "/client/home" : "/"} className="max-w-[200px] md:max-w-[240px] w-full block">
              <Image src={Logo} alt="Istom Logo" className="object-contain" priority />
            </Link>
            <Button variant={"link"} className="p-0 md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
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
                  <Link href="/favorite" className="flex flex-col space-y-1 font-normal items-center justify-between">
                    <Image src={FavoriteIcon} alt="favorite icon" priority width={25} height={25} />
                    <span className="font-aeonic">Избранное</span>
                  </Link>
                  <Link href="/cart" className="flex flex-col space-y-1 font-normal items-center justify-between">
                    <Image src={CartIcon} alt="cart icon" priority width={25} height={25} />
                    <span className="font-aeonic">Корзина</span>
                  </Link>
                  {Cookies.get("token") && (
                    <Link
                      href="/cabinet/partner/statistics"
                      className="flex flex-col space-y-1 font-normal items-center justify-center"
                    >
                      <Image src={UserIcon} alt="Istom Logo" className="object-contain" priority width={25} height={25} />
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

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;