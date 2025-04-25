import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import FavoriteProductList from '@/components/common/FavoriteProductList';
import ProductsList from '@/components/common/ProductsList';

const Favorite = () => {
  return (
    <div className='py-6 container min-h-[250px] md:min-h-[450px]'>
      <CustomBreadcrumb
        items={[
          { name: 'Главная', link: '/client/home' },
          { name: 'Избранные', link: '/client/favorite' },
        ]}
      />
      <div className='mb-16'>
        <FavoriteProductList title='Избранные товары' />
      </div>
    </div>
  );
};

export default Favorite;
