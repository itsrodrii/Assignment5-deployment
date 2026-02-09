import { Link } from 'react-router-dom';
import './Header.css';

function Header({ storeName, cartCount }) {
  return (
    <header className="app-header">
      <h1 className="logo">{storeName}</h1>

      <nav className="nav-menu">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/products">Products</Link>
        <Link className="nav-link" to="/cart">Cart</Link>
      </nav>

      {cartCount > 0 && (
        <Link to="/cart" style={{ marginLeft: '20px', textDecoration: 'none', color: 'inherit' }}>
          🛒 Items in Cart: <strong>{cartCount}</strong>
        </Link>
      )}
    </header>
  );
}

export default Header;
