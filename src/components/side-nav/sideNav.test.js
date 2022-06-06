import { render, screen, fireEvent } from '@testing-library/react';
import SideNav from './sideNav';
import { MemoryRouter } from 'react-router-dom';


describe('Test side nav component', () => {
    test('it should has 4 menu', () => {
        render(
            <MemoryRouter>
                <SideNav />
            </MemoryRouter>
        );
        const menuList = screen.getAllByTestId('side-nav-link');
        expect(menuList.length).toBe(4)
    })

    test('site logo should exist', () => {
        render(
            <MemoryRouter>
                <SideNav />
            </MemoryRouter>
        );
        const siteLogo = screen.getByAltText('site-logo');
        expect(siteLogo).toBeInTheDocument()
    })

    test('close icon should exist', () => {
        render(
            <MemoryRouter>
                <SideNav />
            </MemoryRouter>
        );
        const closeIcon = screen.getByAltText('close-menu-btn');
        expect(closeIcon).toBeInTheDocument()
    })

    test('it should be go to indonesia news page', () => {
        render(
            <MemoryRouter>
                <SideNav />
            </MemoryRouter>
        );
        const indonesiaLink = screen.getAllByTestId('side-nav-link').find((menu) => menu.textContent === 'Indonesia')
        expect(indonesiaLink).toBeInTheDocument()
    })
})