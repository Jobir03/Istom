

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CatalogIcon from "@/assets/icons/catalog-icon.svg";
import { AiOutlineArrowLeft } from "react-icons/ai"; 
import { BiChevronLeft } from "react-icons/bi"; 


const catalogData = [
  {
    id: 1,
    name: "Стоматологические материалы",
    count: 120,
    items: [
      { id: 101, name: "Адгезивы и бондинги", count: 20 },
      { id: 102, name: "Артикуляционные бумага, спрей", count: 15 },
      { id: 103, name: "Воски и гипсы стоматологические", count: 18 },
      { id: 104, name: "Временные пломбы", count: 7 },
      { id: 105, name: "Гемостатические препараты", count: 24 },
      { id: 106, name: "Девитализация пульпы", count: 12 },
      { id: 107, name: "Жидкости для смягчения (протезы, небные)", count: 8 },
      { id: 108, name: "Кламмы", count: 10 },
      { id: 109, name: "Лечебные препараты", count: 20 },
      { id: 110, name: "Материалы для анестезии", count: 12 },
      { id: 111, name: "Матрицы", count: 15 }
    ]
  },
  {
    id: 2,
    name: "Стоматологическое оборудование",
    count: 85,
    items: [
      { id: 201, name: "Стоматологические установки", count: 15 },
      { id: 202, name: "Компрессоры", count: 8 },
      { id: 203, name: "Стерилизационное оборудование", count: 12 }
    ]
  },
  {
    id: 3,
    name: "Стоматологические инструменты",
    count: 95,
    items: [
      { id: 301, name: "Боры и фрезы", count: 35 },
      { id: 302, name: "Зеркала", count: 10 },
      { id: 303, name: "Зонды и пинцеты", count: 15 }
    ]
  },
  {
    id: 4,
    name: "Зуботехнические материалы",
    count: 65,
    items: []
  },
  {
    id: 5,
    name: "Расходные материалы",
    count: 110,
    items: []
  },
  {
    id: 6,
    name: "Анестезия",
    count: 25,
    items: []
  },
  {
    id: 7,
    name: "Ортодонтия",
    count: 70,
    items: []
  }
];

// CatalogModal component for desktop
const CatalogModal = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Find the selected category data
  const categoryData = catalogData.find(cat => cat.id === selectedCategory);

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg flex w-full max-w-4xl">
        {/* Left panel - Main categories */}
        <div className="w-1/3 border-r p-4 max-h-[600px] overflow-y-auto">
          <h3 className="text-lg font-bold mb-4 font-cygre">Каталог</h3>
          
          <div className="space-y-2">
            {catalogData.map(category => (
              <div 
                key={category.id}
                className={`flex items-center justify-between p-2 rounded cursor-pointer ${
                  selectedCategory === category.id ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="font-aeonic">{category.name}</span>
                <span className="text-gray-400 font-cygre text-sm">({category.count})</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right panel - Subcategories */}
        <div className="w-2/3 p-4 max-h-[600px] overflow-y-auto">
          {categoryData ? (
            <>
              <h3 className="text-lg font-bold mb-4 font-cygre">{categoryData.name}</h3>
              {categoryData.items.length > 0 ? (
                <div className="space-y-2">
                  {categoryData.items.map(item => (
                    <Link 
                      href={`/catalog/${categoryData.id}/${item.id}`} 
                      key={item.id}
                      className="flex items-center justify-between p-2 rounded hover:bg-gray-50"
                      onClick={onClose}
                    >
                      <span className="font-cygre">{item.name}</span>
                      <span className="text-gray-400 text-sm ">({item.count})</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 font-cygre">Нет доступных подкатегорий</p>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 font-cygre">Выберите категорию из списка слева</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// CatalogButton component that opens the catalog modal
const CatalogButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button 
        variant="ghost" 
        className="bg-[#FFB224] text-white flex items-center space-x-2 h-[60px] font-normal rounded-[12px] px-8"
        onClick={() => setIsModalOpen(true)}
      >
        <Image src={CatalogIcon} alt="catalog icon" priority />
        <span className="font-cygre text-base">Каталог</span>
      </Button>
      
      <CatalogModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

// Mobile catalog component with nested navigation
const MobileCatalogNavigation = ({setActiveSection}) => {
  const [currentLevel, setCurrentLevel] = useState('main');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const goToCategory = (category) => {
    setSelectedCategory(category);
    setCurrentLevel('category');
  };

  const goBack = () => {
    if (currentLevel === 'category') {
      setCurrentLevel('main');
      setSelectedCategory(null);
    }
  };

  return (
    <div className="bg-white h-full">
      {currentLevel === 'main' ? (
        <>
         
          <div className="flex items-center justify-between">
          <h3 className="font-bold font-cygre text-lg mb-4">Каталог</h3>
           <BiChevronLeft className="text-2xl text-gray-400 mr-2" onClick={() => setActiveSection(null)} />
          </div>
         
          <div className="space-y-2">
            {catalogData.map(category => (
              <div 
                key={category.id}
                className="flex font-cygre items-center text-gray-500 justify-between p-3 border-b"
                onClick={() => goToCategory(category)}
              >
                <span className="font-medium font-cygre">{category.name}</span>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center mb-4">
            <button onClick={goBack} className="mr-2 p-1">
              <ChevronRight size={20} className="transform rotate-180" />
            </button>
            <h3 className="font-bold font-cygre text-lg">{selectedCategory?.name}</h3>
          </div>
          <div className="space-y-2">
            {selectedCategory?.items.map(item => (
              <Link 
                href="#"
                key={item.id}
                className="flex items-center justify-between p-3 border-b"
              >
                <span>{item.name}</span>
                <span className="text-gray-400 font-cygre text-sm">({item.count})</span>
              </Link>
            ))}
            {selectedCategory?.items.length === 0 && (
              <p className="text-gray-500 font-cygre p-3">Нет доступных подкатегорий</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export { CatalogButton, MobileCatalogNavigation };