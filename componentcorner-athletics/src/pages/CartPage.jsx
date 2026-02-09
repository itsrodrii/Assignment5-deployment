import CartItem from '../components/CartItem';

function CartPage({ cartItems, removeFromCart }) {
  if (cartItems.length === 0) {
    return <p style={{ textAlign: 'center' }}>Your cart is empty.</p>;
  }

  return (
    <div>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}

export default CartPage;
