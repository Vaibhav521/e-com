import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../store/productSlice';
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import SkeletonProductCard from '../components/SkeletonProductCard';
import Header from '../components/Header';
function ProductPage() {
    const dispatch = useDispatch();

    const { product, loading, error } = useSelector(state => state.product);
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id]);

    if (loading) {
        return <SkeletonProductCard times={1} />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>No product found</div>;
    }

    return (
        <>
            <Header />

            <div className="max-w-md mx-auto p-4">
                <ProductCard product={product} />
            </div>
        </>
    );
}

export default ProductPage;
