import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';

const mockProduct = {
  id: 1,
  name: 'Gaming Chair',
  description: 'Comfortable chair for gamers',
  price: 150,
  image: 'chair.jpg',
  inCart: false,
};

describe('ProductCard', () => {
  it('renders ProductCard with name, price, and Add to Cart button', () => {
    const addToCart = vi.fn();
    render(
      <MemoryRouter>
        <ProductCard {...mockProduct} addToCart={addToCart} removeFromCart={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  it('renders Remove from Cart button when inCart is true', () => {
    const removeFromCart = vi.fn();
    render(
      <MemoryRouter>
        <ProductCard {...mockProduct} inCart={true} addToCart={() => {}} removeFromCart={removeFromCart} />
      </MemoryRouter>
    );

    expect(screen.getByRole('button', { name: /remove from cart/i })).toBeInTheDocument();
  });

  it('calls addToCart when Add to Cart is clicked', () => {
    const addToCart = vi.fn();
    render(
      <MemoryRouter>
        <ProductCard {...mockProduct} addToCart={addToCart} removeFromCart={() => {}} />
      </MemoryRouter>
    );

    const addButton = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addButton);
    expect(addToCart).toHaveBeenCalled();
  });

  it('calls removeFromCart when Remove from Cart is clicked', () => {
    const removeFromCart = vi.fn();
    render(
      <MemoryRouter>
        <ProductCard {...mockProduct} inCart={true} addToCart={() => {}} removeFromCart={removeFromCart} />
      </MemoryRouter>
    );

    const removeButton = screen.getByRole('button', { name: /remove from cart/i });
    fireEvent.click(removeButton);
    expect(removeFromCart).toHaveBeenCalled();
  });
});
