import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from "../components/ProductCard";
import { CiShoppingCart } from "react-icons/ci";
import useSortedAndFilteredProducts from '../hooks/useSortedAndFilteredProducts';  // Import the custom hook
import ProductSectionHeader from '../components/ProductSectionHeader';
import { clearCart } from '../store/cartSlice';
import Header from '../components/Header';
import CheckoutModal from '../components/CheckoutModal';
import { useState } from 'react';
function Cart() {
    const [showModal,setShowModal] = useState(false)
    const dispatch = useDispatch();
    const { items, priceOrder, ratingOrder } = useSelector(state => state.cart);
    const { query } = useSelector(state => state.product);

    const sortedAndFilteredItems = useSortedAndFilteredProducts(
        items || [],
        query,
        priceOrder,
        ratingOrder
    );

    const totalPrice = sortedAndFilteredItems.reduce((total, item) => total + item.price, 0);



    function handleCleatCart() {
        dispatch(clearCart())
    }

    function toggleModal(){
        setShowModal(!showModal)
    }

    return (
        <>
         <Header/>
            <ProductSectionHeader showSearchBar={true} showFilter={false} showCategoriesPills={false} />
            <div className="bg-white">
                <div className="flex items-center justify-center mt-2">
                    <span className='text-black text-semibold text-2xl flex items-center'>
                        Cart <CiShoppingCart className="ml-2" />
                        <span className="ml-4">Total price {totalPrice} $</span>
                    </span>
                </div>
                <div className='text-center'>
                    <button onClick={handleCleatCart} className="ml-4 bg-black text-white px-2 mt-2 py-1 rounded-md">clear cart</button>
                </div>




                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {sortedAndFilteredItems.length > 0 ? (
                            sortedAndFilteredItems.map((item) => (
                                <ProductCard product={item} key={`${item.id}-${item.title}`} showDelCart={true} />
                            ))
                        ) : (
                            <div className='text-center'>No items in cart</div>
                        )}
                    </div>
                </div>
                {sortedAndFilteredItems.length > 0 &&
                <div className="flex justify-end mb-4 p-2">
                    <button className="bg-black text-white py-2 px-4 rounded" onClick={toggleModal}>
                        Checkout
                    </button>
                </div>
                }
            </div>
            { showModal &&  <CheckoutModal totalAmount={totalPrice} closeModal={toggleModal} />}
            
        </>
    );
}

export default Cart;
