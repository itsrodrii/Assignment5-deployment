import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ id, name, description, price, image, inCart, addToCart, removeFromCart }) {
  return (
    <div className="product-card">
      {/* Link wraps image and name */}
      <Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={image} alt={name} className="product-image" />
        <h3 className="product-name">{name}</h3>
      </Link>

      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>

      {/* Button changes style and action based on inCart */}
      <button
        className={`hero-btn ${inCart ? 'remove' : ''}`}
        onClick={inCart ? () => removeFromCart(id) : () => addToCart(id)}
      >
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;
