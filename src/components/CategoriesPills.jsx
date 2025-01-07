
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchCategories, setCategory } from '../store/productSlice';
import { useEffect } from 'react';

function CategoriesPills() {
    const dispatch = useDispatch();

    const { categories, selectedCategory, loading, error } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    function handleSelectCategory(category) {
        dispatch(setCategory(category))
        dispatch(fetchProducts())
    }

    return (
        <div className="flex justify-center overflow-x-auto space-x-2 pt-4">
            <span
                onClick={() => handleSelectCategory('')}
                className={`cursor-pointer inline-block px-3 py-1 text-sm font-medium   rounded-full ${selectedCategory === '' ? 'bg-black text-white' : 'bg-zinc-100 text-black'
                    }`}
            >
                All
            </span>
            {categories.map(category => (
                <span
                    onClick={() => handleSelectCategory(category)}
                    key={category}
                    className={`cursor-pointer inline-block px-4 py-1 text-base font-medium md:text-sm md:px-3 rounded-full ${selectedCategory === category ? 'bg-black text-white' : 'bg-zinc-100 text-black'
                        }`}
                >
                    {category}
                </span>
            ))}
        </div>
    )
}

export default CategoriesPills