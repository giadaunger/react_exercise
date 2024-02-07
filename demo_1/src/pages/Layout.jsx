import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="h-20 border-b bg-gray-50 flex">
                <div className="my-8">
                    <Link to="/" className="m-4 hover:underline">Home</Link>
                    <Link to="/about" className="m-4 hover:underline">About</Link>
                </div>
            </header>
            <Outlet></Outlet>
            <footer className="h-20 border-t bg-gray-50">Footer</footer>
        </div>
    )
}

export default Layout