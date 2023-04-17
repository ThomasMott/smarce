import React from 'react';
import LoginModal from '../Modal/LoginModal';
import Modal from '../Modal/Modal';
import DropMenu from './DropMenu';

export default function Nav() {
    return (
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="flex flex-wrap items-center justify-between mx-8 p-4">
                <a href="/" className="flex items-center">
                    <span className="self-center whitespace-nowrap">logo</span>
                </a>
                <div className="items-center justify-between w-full flex w-auto" id="navbar-sticky">
                    <ul className="flex">
                        <li className="mr-4">
                            <a href="/">Home</a>
                        </li>
                        {/* <li>
                            <a href="/saved">Saved</a>
                        </li> */}
                    </ul>
                </div>
                <div className="flex">
                    <a href="/about" className="mr-4">
                        Add post
                    </a>
                    <Modal button="Login" title="Log in or sign up" content={<LoginModal />} />
                    <DropMenu />
                </div>
            </div>
        </nav>
    );
}
