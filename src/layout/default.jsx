import React, { useState } from 'react';
import { Footer, Header, SideNav } from '../components';

export const Default = ({children}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const handleSideBarToggle = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }

    return (
        <div className="bg-gray-900 text-gray-200 h-full min-h-screen relative">
            {
                isSideBarOpen && <SideNav onSidebarToogle={handleSideBarToggle}/>
            }
            <Header onSidebarToogle={handleSideBarToggle} />
            <div className="w-full md:w-10/12 xl:w-9/12 mx-auto pt-5 pb-40 tracking-wide">
            {children}
            </div>
            <Footer/>
        </div>
    )
}
