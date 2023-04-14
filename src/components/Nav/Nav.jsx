import React from 'react';

export default function Nav() {
    return (
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="flex flex-wrap items-center justify-between mx-8 p-4">
                <a href="/" className="flex items-center">
                    <span className="self-center whitespace-nowrap">logo</span>
                </a>
                <div
                    className="items-center justify-between w-full flex w-auto"
                    id="navbar-sticky"
                >
                    <ul className="flex">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/saved">Saved</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="/about">Add post</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/account">Account</a>
                            <a href="/login">Login</a>
                            <a href="/help">Help</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
