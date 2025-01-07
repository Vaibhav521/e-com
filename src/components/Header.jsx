import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";

function Header() {

    return (
        <div className='flex justify-between items-center p-2 sticky top-0 z-20 '>
            <Link to="/" className='text-2xl'>E-commerce</Link>
            <div className='flex-1'></div>
            <Link to="/cart" className='bg-black py-2 px-6 m-2 text-white rounded-xl flex items-center justify-end'>
                <span className='mr-2'>Cart</span>
                <IoIosArrowForward />
            </Link>
        </div>
    )
}

export default Header
