import { render, fireEvent, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App component', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /vite \+ react/i })).toBeInTheDocument()
  })

  it('increments counter on click', () => {
    render(<App />)
    const btn = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(btn)
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })
})