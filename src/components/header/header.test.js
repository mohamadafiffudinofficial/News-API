import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Header from "./header"



describe('Test header component', () => {
    test('it should has 4 menu link', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )

        const menuList = screen.getAllByTestId('header-nav-link');
        expect(menuList).toHaveLength(4);
    })

    test('it should has programing link', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )

        const programingLink = screen.getAllByTestId('header-nav-link').find((menu) => menu.textContent === 'Programing');
        expect(programingLink).toBeInTheDocument()
    })

    test('it should has search input', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )

        const inputFieldSearch = screen.getByTestId('input-search')
        expect(inputFieldSearch).toBeInTheDocument()
        expect(inputFieldSearch.getAttribute('placeholder')).toEqual('Cari berita')
    })

    test('input search should has input value', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )

        const inputFieldSearch = screen.getByTestId('input-search')
        fireEvent.change(inputFieldSearch, { target: { value: 'react 18 release note' } })

        expect(inputFieldSearch.value).toBe('react 18 release note')
    })

    test('it should has button submit for search news input', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )

        const buttonSubmit = screen.getByTestId('search-button-submit');
        expect(buttonSubmit.textContent).toBe('Search')
        expect(buttonSubmit).toBeInTheDocument()
    })

})