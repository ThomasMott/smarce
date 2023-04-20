import React from 'react';
import { ABOUT_PAGE, HOME_PAGE } from '../..';
import logo from '../../assets/logo.svg';
import LoginModal from '../Modal/LoginModal';
import Modal from '../Modal/Modal';
import DropMenu from './DropMenu';

export default function Nav() {
    return (
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="flex flex-wrap items-center justify-between mx-8 p-4">
                <a href={HOME_PAGE} className="flex items-center">
                    <img className="w-6" src={logo} alt="logo" />
                </a>
                <div className="items-center justify-between w-full flex w-auto" id="navbar-sticky">
                    <ul className="flex">
                        <li className="mr-4">
                            <a href={HOME_PAGE}>Home</a>
                        </li>
                        <li>
                            <a href={ABOUT_PAGE}>About</a>
                        </li>
                    </ul>
                </div>
                <div className="flex">
                    <a href={ABOUT_PAGE} className="mr-4">
                        Add post
                    </a>
                    <Modal button="Login" title="Log in or sign up" content={<LoginModal />} />
                    <DropMenu />
                </div>
            </div>
        </nav>
    );
}
