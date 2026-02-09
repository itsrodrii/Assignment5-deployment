import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'  // ✅ import vi
import CartItem from '../CartItem'

describe('CartItem', () => {
  const mockRemove = vi.fn() // ✅ use vi.fn()
  const item = {
    id: 1,
    name: 'Test Product',
    description: 'Test description',
    price: 10,
    image: 'test.jpg'
  }

  it('renders item name, description, and price', () => {
    render(<CartItem item={item} removeFromCart={mockRemove} />)
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument()
    expect(screen.getByText(/Test description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$10/i)).toBeInTheDocument()
  })

  it('calls removeFromCart function when Remove button clicked', () => {
    render(<CartItem item={item} removeFromCart={mockRemove} />)
    fireEvent.click(screen.getByText(/Remove/i))
    expect(mockRemove).toHaveBeenCalledWith(1)
  })
})
