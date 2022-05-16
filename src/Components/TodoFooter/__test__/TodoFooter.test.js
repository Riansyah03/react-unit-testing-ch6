import { render, screen } from '@testing-library/react'

// import component yang di tes
import TodoFooter from '../TodoFooter'

//Tes component 
test( 'renders todo footer container', () => {
    // 1. RENDER COMPONENT
    render(<TodoFooter todoLength={5} />)
    // 2. SELECT DOM (ELEMENT YANG AKAN DITES)
    const containerElement = screen.getByTestId('todo-footer-container')
    // 3. EXPECTED RESULT
    expect(containerElement).toBeInTheDocument()
} )

// pengkelompokan
describe( 'todo length > 0', () => {
    // todo-footer-with-items dirender
    test('render "with-items" message', () => {
        render(<TodoFooter todoLength={5} />)
        const footerWithItemsElement = screen.getByTestId('todo-footer-with-items')
        expect(footerWithItemsElement).toBeInTheDocument()
    })
    // todo-footer-no-item TIDAK dirender
    test('render "with-no-item" message', () => {
        render(<TodoFooter todoLength={5} />)
        const footerWithNoItemElement = screen.queryByTestId('todo-footer-no-item')
        expect(footerWithNoItemElement).not.toBeInTheDocument()
    })

    describe('todo length == 1', () => {
        // Tes kalau props.todoLength == 1
        test('render "TASK" in singular', () => {
            render(<TodoFooter todoLength={1} />)
            const footerWithItemsElement = screen.getByTestId('todo-footer-with-items')
            expect(footerWithItemsElement).toHaveTextContent('You have 1 task')
        })
    })

    describe('todo length > 1', () => {
        // Tes kalau props.todoLength > 1
        test('render "TASK" in plural', () => {
            render(<TodoFooter todoLength={5} />)
            const footerWithItemsElement = screen.getByTestId('todo-footer-with-items')
            expect(footerWithItemsElement).toHaveTextContent('You have 5 tasks')
        })
    })
    
})


describe('todo length <=0', () => {
    // Tes kalau props.todoLength <= 0 : todo-footer-with-items (TIDAK dirender)
    test('not render with item message', () => {
        render(<TodoFooter todoLength={0} />)
        const footerWithItemsElement = screen.queryByTestId('todo-footer-with-items')
        expect(footerWithItemsElement).not.toBeInTheDocument()
    })

    // Tes kalau props.todoLength <= 0 : todo-footer-no-item (dirender)
    test('render with no item message', () => {
        render(<TodoFooter todoLength={0} />)
        const footerWithNoItemElement = screen.getByTestId('todo-footer-no-item')
        expect(footerWithNoItemElement).toBeInTheDocument()
    })
})