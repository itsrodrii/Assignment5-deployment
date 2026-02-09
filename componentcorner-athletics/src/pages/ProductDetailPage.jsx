import { useParams } from 'react-router-dom';

function ProductDetailPage({ products, addToCart, cartItems, removeFromCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p style={{ textAlign: 'center', marginTop: '40px' }}>Product not found.</p>;
  }

  const inCart = cartItems?.some(item => item.id === product.id);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: '400px', marginBottom: '20px' }} />
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <button
        className={`hero-btn ${inCart ? 'remove' : ''}`}
        onClick={inCart ? () => removeFromCart(product.id) : () => addToCart(product)}
      >
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductDetailPage;
