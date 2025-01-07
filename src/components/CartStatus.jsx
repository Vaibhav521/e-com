import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from 'react-redux';  

function CartStatus() {
    const { items } = useSelector((state) => state.cart);

    return (
        <div className="fixed bottom-4 left-4 bg-black rounded-full p-2">
            <Link to="/cart" className="flex items-center text-white">
                <CiShoppingCart size={24} />
                <span className="ml-1">{items.length}</span>
            </Link>
        </div>
    );
}

export default CartStatus;
