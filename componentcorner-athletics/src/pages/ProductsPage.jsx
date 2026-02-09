import ProductCard from '../components/ProductCard';

function ProductsPage({ products, cartItems, addToCart, removeFromCart }) {
  return (
    <section className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id} 
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
          inCart={cartItems.some(item => item.id === product.id)}
          addToCart={() => addToCart(product)}
          removeFromCart={() => removeFromCart(product.id)}
        />
      ))}
    </section>
  );
}

export default ProductsPage;
