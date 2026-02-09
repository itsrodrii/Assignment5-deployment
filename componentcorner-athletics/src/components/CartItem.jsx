import './CartItem.css';

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-img" />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p><strong>${item.price}</strong></p>
        <div className="cart-item-controls">
          <button className="hero-btn remove" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
