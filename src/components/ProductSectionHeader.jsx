
import CategoriesPills from './CategoriesPills';
import ProductSearchBar from './SearchBar';
import ProductFilter from './ProductFilter';
function ProductSectionHeader({ showSearchBar, showFilter, showCategoriesPills }) {
    return (

        <>
            <div className='sticky top-10 sm:top-0 z-10 bg-white border-b border-gray-200 sm:border-b-0'>
                {showCategoriesPills && <CategoriesPills />}
                <div className='flex flex-col sm:flex-row justify-center items-center gap-2 '>
                    {showSearchBar && <ProductSearchBar />}
                    {showFilter && <ProductFilter />}
                </div>
            </div>
        </>
    );
}

export default ProductSectionHeader;