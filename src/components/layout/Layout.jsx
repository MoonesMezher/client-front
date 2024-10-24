import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { useLocation } from 'react-router-dom'

const Layout = ( { children } ) => {
    const { pathname } = useLocation();
    return (
        <>
            {(pathname !== "/login") && (pathname !== "/error") && <Header/>}
                <div className={`${(pathname.includes("mm-admin")? 'px-3':'p-0')}`}>
                    {children}
                </div>
            {(pathname !== "/login") && (pathname !== "/error") && <Footer/>}
        </>
    )
}

export default Layout

