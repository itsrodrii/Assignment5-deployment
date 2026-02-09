import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

describe('HomePage', () => {
  it('renders main content', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText(/why shop with us\?/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /componentcorner is here to showcase how modern e-commerce websites work/i
      )
    ).toBeInTheDocument();
  });
});
