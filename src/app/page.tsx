import { DarkCards, HomeCarousel, HomeCategory } from "@/components/client";
import ProductsList from "@/components/common/ProductsList";

export default function Home() {
  return (
    <section className="py-6 container">
      <HomeCarousel />
      <div className="mt-16">
        <ProductsList title="Специальные предложения!" />
      </div>
      <div className="mt-16">
        <HomeCategory />
      </div>
      <div className="py-16">
        <ProductsList title="Рекомендуем для вас" adsBanner />
      </div>
      <div className="md:my-16 ">
        <DarkCards />
      </div>
    </section>
  );
}
