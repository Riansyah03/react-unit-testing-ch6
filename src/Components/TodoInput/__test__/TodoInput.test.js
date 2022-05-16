import { render, screen, fireEvent } from '@testing-library/react'

import TodoInput from '../TodoInput'

// mock function for testing
const mockSetTodoFnc = jest.fn()

// ketika input berubah valuenya
test('todo input field typed', () => {
    render(<TodoInput setTodo={mockSetTodoFnc} />)
    const inputElement = screen.getByTestId('todo-input-field')
    
    // menstimulasi event
    fireEvent.change(inputElement, {
        target: {
            value: 'Membeli sebuah mobil'
        }
    })
    expect(inputElement.value).toBe('Membeli sebuah mobil')
})

test('todo input button clicked', () => {
    render(<TodoInput setTodo={mockSetTodoFnc} />)
    const inputElement = screen.getByTestId('todo-input-field')
    const buttonElement = screen.getByTestId('todo-input-button')
    // ketik di field
    fireEvent.change(inputElement, {
        target: {
            value: 'Membeli sebuah mobil'
        }
    })
    // klik button
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBeFalsy()
})