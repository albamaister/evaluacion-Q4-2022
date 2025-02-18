import { render, screen } from '@testing-library/react'
import TopBar from './top-bar'

describe('Top Bar Component', () => {
  it('should render one input element', () => {
    render(
      <TopBar
        value=""
        handleChangeInput={() => {}}
        addGif={() => {}}
      />
    )
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('should render one button element', () => {
    render(
      <TopBar
        value=""
        handleChangeInput={() => {}}
        addGif={() => {}}
      />
    )
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
