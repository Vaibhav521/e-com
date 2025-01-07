import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import ProductCard from '../components/ProductCard';
import SkeletonProductCard from './SkeletonProductCard';
import useSortedAndFilteredProducts from '../hooks/useSortedAndFilteredProducts';  // Import the custom hook

const ProductList = () => {
    const dispatch = useDispatch();
    const { products, query, loading, error, priceOrder, ratingOrder } = useSelector(
        (state) => state.product
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const sortedAndFilteredProducts = useSortedAndFilteredProducts(
        products,
        query,
        priceOrder,
        ratingOrder
    );

    if (loading) return <SkeletonProductCard times={6} />;
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {sortedAndFilteredProducts.length > 0  ? (
                            sortedAndFilteredProducts.map((product) => (
                                <ProductCard product={product} key={`${product.id}-${product.title}`} showDelCart={false} />
                            ))
                        ) : (
                            <div>No products found</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
