import React from "react";
import { Button } from "../ui/button";

const Subscribe = () => {
  return (
    <div className="lg:h-[150px] lg:border-t flex items-center py-5">
      <form className="container flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8">
        <h3 className="text-[24px] font-bold mb-4 lg:mb-0">
          Подписаться на рассылку
        </h3>
        <input
          type="email"
          required
          placeholder="Email"
          className="flex-1 w-full  text-sm lg:w-auto min-h-[50px] border border-gray-300 px-3 rounded-[12px]"
        />
        <Button
          type="submit"
          className="text-[14px] max-w-[220px] w-full border font-bold hover:brightness-[0.95] px-6 h-[50px] rounded-[12px] bg-[#F4F4F4] hover:bg-[#F4F4F4] text-black"
        >
          Подписаться
        </Button>
      </form>
    </div>
  );
};

export default Subscribe;
