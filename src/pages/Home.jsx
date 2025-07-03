import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      navigate('/menu'); // ✅ redirect to /menu
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 hover:text-yellow-500 transition-colors duration-300">
        Welcome to <span className="text-white">BurgerCo</span>
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
        Delicious fast food made with love. Browse our menu and order now!
      </p>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md flex">
  <input
    type="text"
    placeholder="Enter your name..."
    className="w-full px-4 py-3 rounded-l-full border border-yellow-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  <button
    type="submit"
    className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-r-full transition duration-300"
  >
    Go to Menu
  </button>
</form>

    </section>
  );
}
