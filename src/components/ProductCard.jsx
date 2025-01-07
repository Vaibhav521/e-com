import AddToCartBtn from "./AddToCartBtn";
import { useNavigate } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

function ProductCard({ product , showDelCart }) {
    const navigate = useNavigate();

    function goToProductDetails(id) {
        navigate(`/product/${id}`);

    }

    return (


        <article onClick={() => goToProductDetails(product.id)} className="group">
            <img src={product.image} alt={product.title} className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition duration-300 ease-in-out group-hover:scale-105 xl:aspect-[7/8]" />
            <h3 className="mt-4 text-sm text-gray-700 truncate transition duration-300 ease-in-out">{product.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
            <div className="flex items-center justify-between"> 
                
                <span className="text-left flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                        <CiStar key={i} className={i < product?.rating?.rate ? "text-black" : "text-gray-300"} />
                    ))}
                    <span className="ml-1">{product?.rating?.rate}</span>
                </span>

                <div className="text-right">
                    <AddToCartBtn product={product} type={showDelCart ? 'delete' : 'add'} />
                </div>
            </div>
        </article>

    );
}
export default ProductCard;



