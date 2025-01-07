import { FiSearch } from "react-icons/fi";

import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setQuery } from "../store/productSlice";

function ProductSearchBar() {

    const dispatch = useDispatch();

    return (
        <div className="flex justify-center items-center py-4">
            <div className="relative">
                <input
                    onChange={(e) => dispatch(setQuery(e.target.value))}
                    type="text"
                    className="border-2 border-black rounded-full px-4 py-2 w-64 text-black"
                    placeholder="Search..."
                />
                <FiSearch className="absolute right-3 top-3 text-black" />
            </div>
        </div>
    );
}


export default ProductSearchBar