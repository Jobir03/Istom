'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ImagePlus, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import imagePlaceholder from '@/assets/icons/placeholder-img.png';
import Image from 'next/image';
import { createProduct } from '@/services.jsx/products';

const AddProduct = () => {
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    article: '',
    price: '',
    discountedPrice: '',
    country: '',
    brand: '',
    category: '',
    description: '',
    characteristics: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataToSend = {
      name: formData.name,
      old_price: formData.price,
      price: formData.discountedPrice,
      category_id: formData.category,
      description: formData.description,
      attr: formData.characteristics,
      sku: formData.article,
      images,
    };
    createProduct(dataToSend).then((res) => {
      setFormData({
        name: '',
        article: '',
        price: '',
        discountedPrice: '',
        country: '',
        brand: '',
        category: '',
        description: '',
        characteristics: '',
      });
      setImages([]);
    });
  };

  return (
    <div>
      <h2 className='text-[19px] md:text-[30px] font-bold  font-cygre'>
        Добавить товар
      </h2>
      <p className='text-base font-aeonic text-muted-foreground md:mb-6 mb-3'>
        Добавьте подробную информацию о вашем товаре!
      </p>
      <div className='w-full product-card p-6'>
        <h1 className='text-[22px] font-bold font-cygre mb-2'>
          Укажите данные для карточки товара
        </h1>

        <form onSubmit={(e) => handleSubmit(e)} className='space-y-6'>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='font-aeonic space-y-2'>
              <Label className='text-[#84818A]' htmlFor='name'>
                Укажите название товара
              </Label>
              <Input
                className='h-[65px] outline-0 border-0 bottom-0 bg-[#F8F8F8]'
                id='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Введите ваше имя'
              />
              <p className='text-xs text-muted-foreground'>
                *Длина заголовка не менее 6 символов
              </p>
            </div>

            <div className='font-aeonic space-y-2'>
              <Label className='text-[#84818A]' htmlFor='article'>
                Длина артикул товара
              </Label>
              <Input
                className='h-[65px] outline-0 border-0 bottom-0 bg-[#F8F8F8]'
                id='article'
                value={formData.article}
                onChange={handleChange}
                placeholder='Артикул'
              />
            </div>

            <div className='font-aeonic space-y-2'>
              <Label className='text-[#84818A]' htmlFor='price'>
                Цена без скидки
              </Label>
              <Input
                className='h-[65px] outline-0 border-0 bottom-0 bg-[#F8F8F8]'
                id='price'
                value={formData.price}
                onChange={handleChange}
                placeholder='500'
                type='number'
              />
            </div>

            <div className='font-aeonic space-y-2'>
              <Label className='text-[#84818A]' htmlFor='discounted-price'>
                Цена со скидкой
              </Label>
              <Input
                className='h-[65px] outline-0 border-0 bottom-0 bg-[#F8F8F8]'
                id='discountedPrice'
                value={formData.discountedPrice}
                onChange={handleChange}
                placeholder='500'
                type='number'
              />
            </div>

            <div className='font-aeonic space-y-2'>
              <Label className='text-[#84818A]' htmlFor='country'>
                Страна производитель
              </Label>
              <Select
                value={formData.country}
                onValueChange={(value) => handleSelectChange('country', value)}
              >
                <SelectTrigger className='h-[65px] bg-[#F8F8F8] border-0'>
                  <SelectValue placeholder='Германия' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='germany'>Германия</SelectItem>
                  <SelectItem value='france'>Франция</SelectItem>
                  <SelectItem value='italy'>Италия</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='font-aeonic space-y-2'>
              <Label className='text-[#84818A]' htmlFor='brand'>
                Фирма
              </Label>
              <Select
                value={formData.brand}
                onValueChange={(value) => handleSelectChange('brand', value)}
              >
                <SelectTrigger className='h-[65px] bg-[#F8F8F8] border-0'>
                  <SelectValue placeholder='Каво' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='kavo'>Каво</SelectItem>
                  <SelectItem value='other'>Другое</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className='font-aeonic space-y-2'>
            <Label className='text-[#84818A]' htmlFor='category'>
              Категория товара
            </Label>
            <Select
              value={formData.category}
              onValueChange={(value) => handleSelectChange('category', value)}
            >
              <SelectTrigger className='h-[65px] bg-[#F8F8F8] border-0'>
                <SelectValue placeholder='Стоматологические материалы' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1'>Стоматологические материалы</SelectItem>
                <SelectItem value='2'>Другое</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='font-aeonic space-y-2'>
            <Label className='text-[#84818A]' htmlFor='description'>
              Введите описание товара
            </Label>
            <Textarea
              id='description'
              value={formData.description}
              onChange={handleChange}
              className='min-h-[150px] border-0 bg-[#F8F8F8]'
            />
          </div>

          <div className='font-aeonic space-y-2'>
            <Label className='text-[#84818A]' htmlFor='characteristics'>
              Укажите характеристики товара
            </Label>
            <Textarea
              id='characteristics'
              value={formData.characteristics}
              onChange={handleChange}
              className='min-h-[150px] border-0 bg-[#F8F8F8]'
            />
          </div>

          <div className='space-y-4'>
            <Label className='text-[#84818A] font-aeonic'>
              Добавьте фото товара
            </Label>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 h-[200px]'>
              {images.map((image, index) => (
                <div
                  key={index}
                  className='relative h-full rounded-sm bg-[#F8F8F8] flex items-center justify-center'
                >
                  <Image
                    width={100}
                    height={100}
                    src={image}
                    alt={`product-${index}`}
                    className='object-cover'
                  />
                  <button
                    type='button'
                    className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-1'
                    onClick={() => removeImage(index)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <label className='h-full rounded-sm bg-[#F8F8F8] flex items-center justify-center cursor-pointer transition-colors'>
                <input
                  type='file'
                  accept='image/*'
                  multiple
                  onChange={handleImageChange}
                  className='hidden'
                />
                <Image
                  src={imagePlaceholder}
                  width={50}
                  height={50}
                  alt='placeholder'
                />
              </label>
            </div>
          </div>

          <div className='flex gap-2'>
            <Button
              className={` relative font-aeonic text-[15px] !font-semibold hover:brightness-[0.95] px-6 h-[60px] w-[270px] rounded-[8px]`}
            >
              Опубликовать
            </Button>
            <Button
              className={` relative font-aeonic text-[15px] bg-[#111318] hover:bg-[#111318] !font-semibold hover:brightness-[0.95] px-6 h-[60px] w-[150px] rounded-[8px]`}
            >
              Сбросить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
