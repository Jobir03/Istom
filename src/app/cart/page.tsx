"use client";
import { CartItems } from "@/components/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import EmptyCartIcon from "@/assets/images/empty-cart.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { PostDataToken } from "@/services.jsx/data";
import CustomBreadcrumb from "@/components/common/CustomBreadcrumb";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  console.log(cart);

  const orderProductsList = cart.map((item) => ({
    product_id: item.id,
    quantity: item.quantity,
    total: item.price * item.quantity,
  }));

  const jsonData = {
    order_products_list: orderProductsList,
  };

  const handleOrder = () => {
    PostDataToken("api/v1/product/order-products/create/", jsonData)
      .then((res) => res)
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <section className="py-6">
      <div className="container min-h-[450px] md:min-h-[600px]">
        <CustomBreadcrumb
          items={[
            { name: "Главная", link: "/" },
            { name: "Корзина", link: "/cart" },
          ]}
        />
        <div className="flex gap-14 mt-4 h-full">
          <div className="flex-1">
            <h1 className="text-[25px] md:text-[30px] font-bold font-cygre mb-5 md:mb-10">
              Корзина
            </h1>
            {cart.length > 0 ? (
              <div className="">
                <table className="w-full border-collapse hidden lg:table">
                  <thead className="font-aeonic text-[#111318]">
                    <tr className="border-b text-[15px]">
                      <th className="text-left py-6 font-normal w-auto">
                        НАИМЕНОВАНИЕ ТОВАРA
                      </th>
                      <th className="text-center py-6 font-normal w-[15%]">
                        ЦЕНА
                      </th>
                      <th className="text-center py-6 font-normal w-[15%]">
                        КОЛ-ВО
                      </th>
                      <th className="text-center py-6 font-normal w-[15%]">
                        СУММА
                      </th>
                      <th className="w-[10%]"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cart.map((item, index) => (
                      <CartItems key={item.id} item={item} index={index} />
                    ))}
                  </tbody>
                </table>
                <div className="lg:hidden divide-y divide-gray-200">
                  {cart.map((item, index) => (
                    <CartItems key={item.id} item={item} index={index} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-[300px] font-aeonic md:h-[400px] text-center flex flex-col gap-1 justify-center items-center">
                <Image
                  src={EmptyCartIcon}
                  alt="Empty cart"
                  className="w-[80px] md:w-[180px] h-[80px] md:h-[180]"
                />
                <h3 className="text-[18px] md:text-[32px] text-[#D0D0D0]">
                  Ваша корзина пуста
                </h3>
                <p className="text-[14px] md:text-[18px]">
                  <Link href="/catalog" className="text-[#0077FF]">
                    Нажмите здесь
                  </Link>
                  , чтобы продолжить покупки
                </p>
              </div>
            )}
            <div className="flex items-center flex-col md:flex-row justify-between mt-12 p-4 md:p-7 md:h-[120px] bg-[#F6F6F6] rounded-[10px]">
              <div className="flex items-center mb-4 md:mb-0 justify-between gap-2 font-cygre md:max-w-[350px] w-full">
                <span className="font-bold uppercase text-[15px] md:text-[28px]">
                  Итого:
                </span>
                <span className="font-bold text-[18px] md:text-[25px]">
                  {totalPrice} ₽
                </span>
              </div>
              <Link href="/checkout">
                <Button className="bg-black w-full h-[60px] md:h-[80px] sm:w-[320px] text-xs md:text-sm font-bold md:rounded-lg hover:bg-black/90 text-white font-aeonic">
                  Оформить заказ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
