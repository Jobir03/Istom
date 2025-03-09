"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import ImageUploadIcon from "@/assets/icons/upload-icon.svg";
import { PostDataToken, PostDataTokenFormData } from "@/services.jsx/data";

const Products = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [inn, setInn] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [articul, setArticul] = useState("");
    const [character, setCharacter] = useState("");
    const [img, setImg] = useState<FileList | null>(null);

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    // Handle file selection
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setImg(files);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", title);
        formData.append("description", title);
        formData.append("vendor_code", title);
        if (img) {
            Array.from(img).forEach((file, index) => {
                formData.append(`uploaded_images[${index}]`, file);
                console.log(file);
                // Use a name format the backend expects
            });
        }
        PostDataTokenFormData(
            "api/v1/product/products/is/authen/",
            formData
        ).then((res) => {
            console.log(res);
        });
    };

    console.log(img);

    return (
        <div className=" mb-16">
            <h2 className="text-[24px] md:text-[36px] font-bold">
                Загрузить карточку товара
            </h2>
            <form
                action=""
                onSubmit={(e) => handleSubmit(e)}
                className="mt-4 max-w-[510px] space-y-3 w-full md:space-y-5"
            >
                <div className="">
                    <label
                        htmlFor="fullName"
                        className="text-[14px] md:text-[18px] text-[#00000080]"
                    >
                        Укажите ФИО: <span className="text-[#FF6565]">*</span>
                    </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="w-full h-[38px] md:h-[57px] mt-2 border border-[#00000050] rounded-[3px]  px-3 md:rounded-[5px]"
                    />
                </div>
                <div className="">
                    <label
                        htmlFor="password"
                        className="text-[14px] md:text-[18px] text-[#00000080]"
                    >
                        Электронная почта{" "}
                        <span className="text-[#FF6565]">*</span>
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="password"
                        id="password"
                        className="w-full h-[38px] md:h-[57px] border mt-2 border-[#00000050] rounded-[3px]  px-3 md:rounded-[5px]"
                    />
                    <span className="text-[14px] font-normal">
                        Является также логином для входа на сайт
                    </span>
                </div>
                <div className="">
                    <label
                        htmlFor="fullName"
                        className="text-[14px] md:text-[18px] text-[#00000080]"
                    >
                        Телефон: <span className="text-[#FF6565]">*</span>
                    </label>
                    <input
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="w-full h-[38px] md:h-[57px] mt-2 border border-[#00000050] rounded-[3px]  px-3 md:rounded-[5px]"
                    />
                </div>
                <div className="">
                    <label
                        htmlFor="fullName"
                        className="text-[14px] md:text-[18px] text-[#00000080]"
                    >
                        Укажите ИНН: <span className="text-[#FF6565]">*</span>
                    </label>
                    <input
                        onChange={(e) => setInn(e.target.value)}
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="w-full h-[38px] md:h-[57px] mt-2 border border-[#00000050] rounded-[3px]  px-3 md:rounded-[5px]"
                    />
                </div>
                <div className="">
                    <label
                        htmlFor="fullName"
                        className="text-[14px] md:text-[18px] text-[#00000080]"
                    >
                        Укажите заголовок товара:{" "}
                        <span className="text-[#FF6565]">*</span>
                    </label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="w-full h-[38px] md:h-[57px] mt-2 border border-[#00000050] rounded-[3px]  px-3 md:rounded-[5px]"
                    />
                    <span className="text-[14px] font-normal">
                        Длина заголовка не менее 6 символов
                    </span>
                </div>
                <div className="">
                    <label
                        htmlFor="fullName"
                        className="text-[14px] md:text-[18px] text-[#00000080]"
                    >
                        Укажите описание товара:{" "}
                        <span className="text-[#FF6565]">*</span>
                    </label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="w-full h-[38px] md:h-[57px] mt-2 border border-[#00000050] rounded-[3px]  px-3 md:rounded-[5px]"
                    />
                </div>
                <div className="">
                    <label
                        htmlFor="fullName"
                        className="text-[14px] md:text-[18px] text-[#00000080]"
                    >
                        Дайте артикул товару:
                        <span className="text-[#FF6565]">*</span>
                    </label>
                    <input
                        onChange={(e) => setArticul(e.target.value)}
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="w-full h-[38px] md:h-[57px] mt-2 border border-[#00000050] rounded-[3px]  px-3 md:rounded-[5px]"
                    />
                </div>
                <div className="">
                    <label
                        htmlFor="запрос"
                        className="text-[14px] md:text-[18px] text-[#00000080]"
                    >
                        Добавьте характеристики товара
                        <span className="text-[#FF6565]">*</span>
                    </label>
                    <textarea
                        onChange={(e) => setCharacter(e.target.value)}
                        name="запрос"
                        rows={5}
                        cols={30}
                        id="запрос"
                        className="w-full  border border-[#00000080]  p-3 rounded-[5px] resize-none"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <Image
                        onClick={handleIconClick}
                        src={ImageUploadIcon}
                        alt="upload image icon"
                        className="min-w-[42px] h-[42px] md:min-w-[68px] md:h-[68px] cursor-pointer"
                    />
                    <div className="text-[#00000080]">
                        <h4 className="text-[12px] md:text-[18px]">
                            Добавьте фото товара не более 10
                        </h4>
                        <p className="text-[10px] md:text-[14px]">
                            Добавьте фото товара не более 10
                        </p>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="image/*"
                            multiple
                            style={{ display: "none" }}
                        />
                    </div>
                </div>
                <Button className="text-[14px] md:text-[18px] mt-3 w-full font-normal hover:brightness-[0.95] px-6 h-[42px] md:h-[55px] rounded-[12px]">
                    Выложить
                </Button>
                <p className="text-[10px] md:text-[14px] mt-2 text  text-[#00000080]">
                    Продолжая, вы соглашаетесь с{" "}
                    <Link href="/" className="text-[#7288D7]">
                        политикой конфиденциальности
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Products;
