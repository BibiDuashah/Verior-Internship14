import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white text-black p-4 rounded-xl shadow-md hover:scale-105 transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">Rs {product.price}</p>
      <button
        className="mt-2 w-full bg-accent text-white py-1 rounded"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
}