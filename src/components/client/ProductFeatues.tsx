import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const ProductFeatues = ({ item }: any) => {
  return (
    <div>
      <Tabs defaultValue="description" className="p-0">
        <TabsList className="bg-transparent p-0 justify-start overflow-auto w-full rounded-none text-[12px] md:text-base space-x-2 md:space-x-4 font-cygre ">
          <TabsTrigger
            value="description"
            className="data-[state=active]:border-none data-[state=active]:bg-black data-[state=active]:text-[#fff] h-[47px] md:h-[74px] bg-[#F6F6F6] w-[250px] rounded-t-[20px] font-bold text-[12px] md:text-base"
          >
            Описание
          </TabsTrigger>
          <TabsTrigger
            value="characteristics"
            className="data-[state=active]:border-none data-[state=active]:bg-black data-[state=active]:text-[#fff] h-[47px] md:h-[74px] bg-[#F6F6F6] w-[250px] rounded-t-[20px] font-bold text-[12px] md:text-base line-clamp-1 px-2"
          >
            Характеристики
          </TabsTrigger>
          <TabsTrigger
            value="rate"
            className="data-[state=active]:border-none data-[state=active]:bg-black data-[state=active]:text-[#fff] h-[47px] md:h-[74px] bg-[#F6F6F6] w-[250px] rounded-t-[20px] font-bold text-[12px] md:text-base"
          >
            Отзывы
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="description"
          className="product-card p-4 rounded-[10px] min-h-[200px] md:min-h-[226px] font-aeonic"
        >
          <div>
            <p className="text-[#A7A7B2] font-normal text-[13px] md:text-base">
              Турбинный, наконечник, EXPERTtorque, KAVO, LUX, E680, L, со,
              стандартной, головкой., Классическая, турбина, как, для,
              ортопедов,, так, и, для, терапевтов., Высококачественные,
              износостойкие, материалы, турбинных, наконечников, KaVo, Expert,
              обеспечивают:, Поддерживается, оптимальная, температура., При,
              распылении, спрея, из, 4, точек, выделяются, мелкие, капли, воды,,
              что, обеспечивает, охлаждение, инструмента, вплоть, до, самого,
              кончика, бора.., Идеальный, обзор., Подсветка, 25, 000, Lx, и,
              мощный, световод, EXPERTtorque, E680, L, обеспечивают, идеальное,
              освещение, зоны, лечения., Благодаря, уникальному, дизайну,
              роторной, группы, и, головки, турбины, удается, предотвратить,
              колебания, частоты, вращения, и, значительно, сократить, уровень,
              шума, (до, 62, дБ).., Позволяет, увеличить, сцепление,
              наконечника, с, рукой, стоматолога.., KaVo, надежно, фиксируют,
              бор, с, силой, удержания, до, 30, Н., Кнопочный, механизм,
              надежен, и, удобен, в, использовании., Турбинные, наконечники,
              EPERTtorque, совместимы, со, всеми, соединениями, системы, KaVo,
              MULTIflex,, а, значит,, может, быть, использованы, на, любой,
              стоматологической, установке, KaVo., Высокая, мощность, (до, 18,
              Вт), для, быстрого, и, эффективного, препарирования.,
              Оригинальные, керамические, подшипники, KaVo, гарантируют, срок,
              службы,
            </p>
          </div>
        </TabsContent>
        <TabsContent
          value="characteristics"
          className="product-card p-4 rounded-[10px] min-h-[150px] md:min-h-[226px]"
        >
          <div className="space-y-4 mt-5 max-w-[380px] w-full font-aeonic text-xs md:text-base">
            <div className="flex items-end justify-between">
              <span className="">Фирма</span>
              <div className="flex-grow mx-2 -translate-y-1 border-b border-dashed border-gray-300"></div>
              <span className="text-[#A7A7B2] ">Kavo</span>
            </div>
            <div className="flex items-end justify-between">
              <span className="">Страна</span>
              <div className="flex-grow mx-2 -translate-y-1 border-b border-dashed border-gray-300"></div>
              <span className="text-[#A7A7B2] ">Германия</span>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="rate"
          className="product-card p-4 rounded-[10px] min-h-[150px] md:min-h-[226px]"
        >
          <div className="">Rate</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductFeatues;
