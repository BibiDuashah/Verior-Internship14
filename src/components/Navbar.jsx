import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cart = useSelector(state => state.cart);

  return (
    <nav className="bg-black text-white flex items-center justify-between px-6 py-4">
      <Link to="/" className="text-2xl font-bold text-primary">
        🍔 BurgerCo
      </Link>
      <div className="flex gap-4">
        <Link to="/">🏠Home</Link>
        <Link to="/menu">🍔Menu</Link>
        <Link to="/cart">🛒Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}