"use client";

import CustomBreadcrumb from "@/components/common/CustomBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RootState } from "@/store/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  street: string;
  house: string;
  apartment: string;
  comment: string;
}

const Checkout = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    street: "",
    house: "",
    apartment: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleOrder = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
  };
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <div className="py-6 container min-h-[250px] md:min-h-[450px]">
      <CustomBreadcrumb
        items={[
          { name: "Главная", link: "/" },
          { name: "Корзина", link: "/cart" },
          { name: "Оформление заказа", link: "/checkout" },
        ]}
      />
      <h1 className="text-[25px] md:text-[30px] font-bold font-cygre mt-4 mb-5 md:mb-10">
        Оформление заказа
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-7 md:gap-28">
        <div className="form flex-1">
          <form onSubmit={handleOrder}>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-6">
              <div className="col-span-6 space-y-1">
                <Label
                  htmlFor="name"
                  className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
                >
                  ФИО<span className="text-[#FFB224]">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите ваше ФИО"
                  className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
                />
              </div>
              <div className="col-span-6 space-y-1">
                <Label
                  htmlFor="email"
                  className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
                >
                  Электронная почта<span className="text-[#FFB224]">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Введите ваш E-mail"
                  className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
                />
              </div>
              <div className="col-span-6 space-y-1">
                <Label
                  htmlFor="phone"
                  className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
                >
                  Телефон<span className="text-[#FFB224]">*</span>
                </Label>
                <Input
                  type="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
                />
              </div>
              <div className="col-span-6 space-y-1">
                <Label
                  htmlFor="text"
                  className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
                >
                  Город<span className="text-[#FFB224]">*</span>
                </Label>
                <Input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Ваш город"
                  className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
                />
              </div>
              <div className="col-span-6 space-y-1">
                <Label
                  htmlFor="email"
                  className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
                >
                  Улица<span className="text-[#FFB224]">*</span>
                </Label>
                <Input
                  type="text"
                  id="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="Улица"
                  className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
                />
              </div>
              <div className="col-span-6 grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <Label
                    htmlFor="text"
                    className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
                  >
                    Дом<span className="text-[#FFB224]">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="house"
                    value={formData.house}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
                  />
                </div>
                <div className="space-y-1">
                  <Label
                    htmlFor="text"
                    className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
                  >
                    Квартира<span className="text-[#FFB224]">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <Label
                htmlFor="text"
                className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
              >
                Комментарий к заказу
              </Label>
              <Textarea
                rows={5}
                id="comment"
                value={formData.comment}
                onChange={handleChange}
                className="bg-[#F8F8F8] p-4 border-none font-aeonic rounded-[3px] text-base placeholder:text-[#A7A7B2]"
                placeholder="Оставьте ваш коментарий"
              />
            </div>
          </form>
        </div>
        <div>
          <Card className="w-full md:w-[450px] mx-auto border-none bg-[#F6F6F6]">
            <CardContent className="pt-8 font-cygre">
              <h2 className="text-[25px] font-bold">Ваш заказ</h2>
              <table className="w-full border-collapse">
                <thead className="font-aeonic text-[#A7A7B2]">
                  <tr className="border-b text-xs md:text-sm">
                    <th className="text-left py-4 md:py-6 uppercase font-normal w-[40%] ">
                      Наименование товара
                    </th>
                    <th className="text-center py-4 font-normal uppercase md:py-6 w-[20%]">
                      Кол-во
                    </th>
                    <th className="text-right py-4 md:py-6 font-normal w-[25%]">
                      ЦЕНА
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item?.id} className="border-b text-sm">
                      <td className="text-left py-4 md:py-6 font-normal text-sm md:text-base w-auto">
                        {item?.name}
                      </td>
                      <td className="text-center py-4 md:py-6 text-sm md:text-base">
                        x{item?.quantity}
                      </td>
                      <td
                        align="right"
                        className="text-end py-4 md:py-6 font-bold text-[18px] md:text-[20px]"
                      >
                        {item?.price * item?.quantity} ₽
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="font-bold text-base md:text-[20px] uppercase">
                  Итого:
                </span>
                <span className="font-bold text-[18px] md:text-[25px]">
                  {totalPrice} ₽
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                className="w-full text-xs md:text-sm h-[70] md:h-[80px] bg-black hover:bg-black/90 md:rounded-xl font-aeonic font-bold"
                size="lg"
              >
                Оформить заказ
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

// 'use client';
// import React, { useState } from 'react';
// import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   city: string;
//   street: string;
//   house: string;
//   apartment: string;
//   comment: string;
// }

// const Checkout: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     phone: '',
//     city: '',
//     street: '',
//     house: '',
//     apartment: '',
//     comment: '',
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   return (
//     <div className='py-6 container min-h-[250px] md:min-h-[450px]'>
//       <CustomBreadcrumb
//         items={[
//           { name: 'Главная', link: '/home' },
//           { name: 'Корзина', link: '/cart' },
//           { name: 'Оформление заказа', link: '/checkout' },
//         ]}
//       />
//       <h1 className='text-[25px] md:text-[30px] font-bold font-cygre mt-4 mb-5 md:mb-10'>
//         Оформление заказа
//       </h1>
//       <div className='flex flex-col md:flex-row justify-between gap-7 md:gap-28'>
//         <div className='form flex-1'>
//           <form>
//             <div className='grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-6'>
//               <div className='col-span-6 space-y-1'>
//                 <Label htmlFor='name'>
//                   ФИО<span className='text-[#FFB224]'>*</span>
//                 </Label>
//                 <Input
//                   id='name'
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder='Введите ваше ФИО'
//                 />
//               </div>
//               <div className='col-span-6 space-y-1'>
//                 <Label htmlFor='email'>
//                   Электронная почта<span className='text-[#FFB224]'>*</span>
//                 </Label>
//                 <Input
//                   type='email'
//                   id='email'
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder='Введите ваш E-mail'
//                 />
//               </div>
//               <div className='col-span-6 space-y-1'>
//                 <Label htmlFor='phone'>
//                   Телефон<span className='text-[#FFB224]'>*</span>
//                 </Label>
//                 <Input
//                   id='phone'
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder='+7 (___) ___-__-__'
//                 />
//               </div>
//               <div className='col-span-6 space-y-1'>
//                 <Label htmlFor='city'>
//                   Город<span className='text-[#FFB224]'>*</span>
//                 </Label>
//                 <Input
//                   id='city'
//                   value={formData.city}
//                   onChange={handleChange}
//                   placeholder='Ваш город'
//                 />
//               </div>
//               <div className='col-span-6 space-y-1'>
//                 <Label htmlFor='street'>
//                   Улица<span className='text-[#FFB224]'>*</span>
//                 </Label>
//                 <Input
//                   id='street'
//                   value={formData.street}
//                   onChange={handleChange}
//                   placeholder='Улица'
//                 />
//               </div>
//               <div className='col-span-6 grid grid-cols-2 md:grid-cols-3 gap-6'>
//                 <div className='space-y-1'>
//                   <Label htmlFor='house'>
//                     Дом<span className='text-[#FFB224]'>*</span>
//                   </Label>
//                   <Input
//                     id='house'
//                     value={formData.house}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className='space-y-1'>
//                   <Label htmlFor='apartment'>
//                     Квартира<span className='text-[#FFB224]'>*</span>
//                   </Label>
//                   <Input
//                     id='apartment'
//                     value={formData.apartment}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className='mt-4 space-y-1'>
//               <Label htmlFor='comment'>Комментарий к заказу</Label>
//               <Textarea
//                 id='comment'
//                 value={formData.comment}
//                 onChange={handleChange}
//                 rows={5}
//                 placeholder='Оставьте ваш комментарий'
//               />
//             </div>
//           </form>
//         </div>
//         <div>
//           <Card className='w-full md:w-[450px] mx-auto border-none bg-[#F6F6F6]'>
//             <CardContent className='pt-8 font-cygre'>
//               <h2 className='text-[25px] font-bold'>Ваш заказ</h2>
//               <div className='flex justify-between items-center pt-4 border-t'>
//                 <span className='font-bold text-base md:text-[20px] uppercase'>
//                   Итого:
//                 </span>
//                 <span className='font-bold text-[18px] md:text-[25px]'>
//                   36 400 ₽
//                 </span>
//               </div>
//             </CardContent>
//             <CardFooter className='flex flex-col'>
//               <Button
//                 className='w-full text-xs md:text-sm h-[70px] md:h-[80px] bg-black hover:bg-black/90 md:rounded-xl font-aeonic font-bold'
//                 size='lg'
//               >
//                 Оформить заказ
//               </Button>
//             </CardFooter>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
