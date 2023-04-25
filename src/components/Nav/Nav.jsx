import React from 'react';
import { ABOUT_PAGE, HOME_PAGE } from '../..';
import logo from '../../assets/logo.svg';
import LoginModal from '../Modal/LoginModal';
import Modal from '../Modal/Modal';
import DropMenu from './DropMenu';
import PostModal from '../Modal/PostModal';

export default function Nav() {
    return (
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="flex flex-wrap items-center justify-between mx-8 p-4">
                <div className="w-60">
                    <a href={HOME_PAGE} className="flex items-center">
                        <img className="w-6" src={logo} alt="logo" />
                    </a>
                </div>
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
                <div className="flex w-60">
                    <Modal button="Add post" title="New Post" size="2xl" content={<PostModal />} />
                    <Modal button="Login" content={<LoginModal />} size="md" />
                    <DropMenu />
                </div>
            </div>
        </nav>
    );
}
