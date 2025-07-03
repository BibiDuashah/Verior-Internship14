import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cartSlice';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="mb-4">
                <div className="flex items-center justify-between">
                  <span>{item.name} × {item.quantity}</span>
                  <span>Rs {item.price * item.quantity}</span>
                  <button
                    className="bg-accent px-2 py-1 rounded text-white"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-xl font-bold">Total: Rs {total}</p>
            <button
              className="mt-2 px-4 py-2 bg-primary text-black rounded"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}