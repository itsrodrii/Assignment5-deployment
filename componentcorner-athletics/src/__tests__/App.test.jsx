import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import App from '../App'

describe('App Component - Cart State & localStorage', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    localStorage.clear()
  })

  it('renders App without crashing', () => {
    render(<App />)

    expect(
      screen.getByText(/welcome to componentcorner/i)
    ).toBeInTheDocument()
  })

  it('loads cart data from localStorage on startup', () => {
    const mockCart = [
      { id: 1, name: 'Gaming Chair', price: 150 }
    ]

    localStorage.setItem('cart', JSON.stringify(mockCart))

    render(<App />)

    expect(screen.getByText(/items in cart/i)).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('saves cart to localStorage when cart changes', () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')

    render(<App />)

    expect(setItemSpy).toHaveBeenCalledWith(
      'cart',
      expect.any(String)
    )
  })
})
