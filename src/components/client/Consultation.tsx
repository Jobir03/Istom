"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { PostData } from "@/services.jsx/data";

const Consultation = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");

    const sendConsultation = (e: any) => {
        e.preventDefault();
        const data = {
            full_name: name,
            phone: phone,
            msg: msg,
        };
        PostData("api/v1/conf/site/consultations/", data).then((res) => {
            console.log(res);
        });
    };

    return (
        <section className="my-16">
            <h2 className="text-[24px] md:text-[32px] font-bold">
                Получить консультацию
            </h2>
            <div className="grid lg:grid-cols-12 gap-10">
                <div className=" lg:col-span-5">
                    <p className="text-[14px] md:text-[18px]">
                        Оставьте заявку и в ближайшее время мы с Вами свяжемся
                    </p>
                    <form
                        onSubmit={(e) => sendConsultation(e)}
                        action=""
                        className="mt-4"
                    >
                        <div className="">
                            <label
                                htmlFor="fullName"
                                className="text-[14px] md:text-[18px] text-[#00000080]"
                            >
                                Укажите ФИО{" "}
                                <span className="text-[#FF6565]">*</span>
                            </label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="fullName"
                                id="fullName"
                                className="w-full h-[57px] border border-[#00000080]  px-3 rounded-[5px]"
                            />
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="number"
                                className="text-[14px] md:text-[18px] text-[#00000080]"
                            >
                                Ваш номер{" "}
                                <span className="text-[#FF6565]">*</span>
                            </label>
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                                name="number"
                                id="number"
                                className="w-full h-[57px] border border-[#00000080]  px-3 rounded-[5px]"
                            />
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="запрос"
                                className="text-[14px] md:text-[18px] text-[#00000080]"
                            >
                                Ваш запрос
                            </label>
                            <textarea
                                onChange={(e) => setMsg(e.target.value)}
                                name="запрос"
                                rows={5}
                                cols={30}
                                id="запрос"
                                className="w-full  border border-[#00000080]  p-3 rounded-[5px] resize-none"
                            />
                        </div>
                        <Button className="text-[14px] md:text-[18px] mt-3 w-full font-normal hover:brightness-[0.95] px-6 h-[42px] md:h-[55px] rounded-[12px]">
                            Записаться на консультацию
                        </Button>
                        <p className="text-[10px] md:text-[14px] mt-2">
                            Продолжая, вы соглашаетесь с{" "}
                            <Link href="/" className="text-[#7288D7]">
                                политикой конфиденциальности
                            </Link>
                        </p>
                    </form>
                </div>
                <div className="lg:col-span-7 h-[360px] md:h-[500px] md:rounded-[20px] bg-slate-100 overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577343.9855391971!2d36.726189649844464!3d55.58025700121133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2s!4v1730584108392!5m2!1sen!2s"
                        style={{ border: "0", width: "100%", height: "100%" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Consultation;
