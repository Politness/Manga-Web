import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../types/Categories';

export const Navbar = () => {
    const [showCategorys, setShowCategorys] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSearchField, setShowSearchField] = useState(false);
    // const [isShowLogin, setIsShowLogin] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [logged, setLogged] = useState(true); // Set this to 'false' for logged-out users

    const toggleMenuCategorys = () => {
        setShowCategorys((prevState) => !prevState);
    };

    const toggleMenu = () => {
        setShowMobileMenu((prevState) => !prevState);
    };

    const toggleSearchField = () => {
        setShowSearchField((prevState) => !prevState);
    };

    // const toggleLoginButton = () => {
    //     setIsShowLogin((prevState) => !prevState)
    // };

    const toggleUserMenu = () => {
        setShowUserMenu((prevState) => !prevState);
    };

    const handleLogout = () => {
        setLogged(false); // Log out the user and close the user menu
        setShowUserMenu(false); // Closes the user menu after clicking "Exit"
    };

    return (
        <>
            {/* Top Navbar */}
            <nav className={`bg-sky-700 text-white py-4 px-8 flex items-center justify-between z-index-0 ${showMobileMenu ? 'h-auto' : 'h-16'} relative`}>
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-2xl"
                    >
                        <svg xmlns="https://www.svgrepo.com/show/442866/book.svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>

                    </button>
                </div>
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/" className="flex flex-shrink-0 items-center bg-sky-700 text-white rounded-md px-3 py-1 hover:shadow-2xl hover:bg-sky-600 text-sm font-medium">
                        <svg xmlns="hhttps://www.svgrepo.com/show/442866/book.svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        <h1 className="text-center font-bold">
                            Solo Leveling
                        </h1>
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-stretch">
                    <a href="*" className="text-white hover:bg-sky-600 hover:text-white rounded-md px-3 py-3 text-sm font-medium">
                        <Link to={"/category/todos"}>Mangas</Link>
                    </a>
                    <a href="*" className="text-white hover:bg-sky-600 hover:text-white rounded-md px-3 py-3 text-sm font-medium">
                        Сommunity
                    </a>
                    <div className="relative mt-1">
                        <button
                            className="hover:bg-sky-600 text-white rounded-md px-3 py-2 text-sm font-medium inline-flex items-center"
                            onClick={toggleMenuCategorys}
                        >
                            Categories
                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        {showCategorys && (
                            <div
                                className="z-10 absolute mt-2 w-40 bg-sky-700 border border-gray-300 rounded-md shadow-lg"
                            >
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="categorysButton">
                                    {categories.map((category) => (
                                        <li key={category.id} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <Link to={`/category/${category.value}`}>{category.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                {/* Fixed div on the right in both aspects, [desktop, mobile] */}
                <div className="relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Search Icon and Field */}
                    <div className="relative bg-sky-700 rounded-lg flex items-center hover:bg-sky-600">
                        {showSearchField && (
                            <input
                                type="text"
                                placeholder="Pesquisar"
                                className="px-2 py-1 m-0 rounded hover:shadow-lg bg-sky-800"
                            />
                        )}
                        <button
                            onClick={toggleSearchField}
                            className="border-2 border-sky-700 text-white rounded-md px-3 py-2 text-sm font-medium hover:shadow-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                    {/* User Icon */}
                    <div className="relative ml-3">
                        {logged ? (
                            <button
                                className="border-b-4 border-sky-600 hover:bg-sky-600 text-white rounded-md px-3 py-2 text-sm font-medium"
                                onClick={toggleUserMenu}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                </svg>
                            </button>
                        ) : (
                            <Link to="/login">
                                <button
                                    className="hover:bg-sky-600 text-white rounded-md px-3 py-2 text-sm font-medium"
                                >
                                    Login
                                </button>
                            </Link>
                        )}

                        {/* Card Modal Popup to show the list of favorites, read, reading, etc. */}
                        {logged && showUserMenu && (
                            <div className="z-10 absolute right-0 mt-2 w-40 bg-sky-700 border border-gray-300 rounded-md shadow-lg">
                                <ul>
                                    <li className="px-4 py-2 text-sm hover:bg-gray-600">Favorites</li>
                                    <li className="px-4 py-2 text-sm hover:bg-gray-600">Read</li>
                                    <li className="px-4 py-2 text-sm hover:bg-gray-600">Reading</li>
                                    <li className="px-4 py-2 text-sm hover:bg-gray-600">
                                        <a href="/" onClick={handleLogout}>
                                            Exit
                                        </a>
                                    </li>
                                    <li className="px-4 py-2 text-sm hover:bg-gray-600">
                                            <Link to="/login">Login</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav >

            {/* Small Menu */}
            < div className={`bg-sky-700 text-white m-0 px-4 lg:hidden ${showMobileMenu ? 'block' : 'hidden'}`}>
                <div className="flex flex-col divide-y mb-0">
                    <button type="button" className="py-2 w-full text-left">
                        Manga
                    </button>
                    <button type="button" className="py-2 w-full text-left">
                        Categories
                    </button>
                    <button type="button" className="py-2 w-full text-left">
                        Community
                    </button>
                </div>
            </div >
        </>
    );
};

