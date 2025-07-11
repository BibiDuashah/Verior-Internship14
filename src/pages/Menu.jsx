import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Menu() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}