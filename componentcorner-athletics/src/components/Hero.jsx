import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h2>Welcome to ComponentCorner</h2>
      <p>Discover amazing products built with React components</p>
      <Link to="/products">
        <button className="hero-btn">Shop Now</button>
      </Link>
    </section>
  );
}

export default Hero;
