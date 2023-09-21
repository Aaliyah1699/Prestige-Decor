import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';

const FeaturedProducts = () => {
    return (
        <div className='pt-24 font-playFair'>
            <SectionTitle text='featured products' />
            <ProductsGrid />
        </div>
    );
};

export default FeaturedProducts;
