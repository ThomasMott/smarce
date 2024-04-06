import React from 'react';
import { ABOUT_PAGE, HOME_PAGE } from '../..';
import logo from '../../assets/logo.svg';
import LoginModal from '../Modal/LoginModal';
import Modal from '../Modal/Modal';
import DropMenu from './DropMenu';
import PostModal from '../Modal/NewPostModal';
import { useSelector } from 'react-redux';
import Search from '../Search/Search';

export default function Nav() {
    const auth = useSelector((state) => state.auth);

    return (
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="flex items-center justify-between mx-8 p-4">
                <div className="w-14">
                    <a href={HOME_PAGE} className="flex items-center">
                        <img className="w-6" src={logo} alt="logo" />
                    </a>
                </div>
                <div className="items-center justify-between w-full flex w-auto" id="navbar-sticky">
                    <ul className="flex">
                        <li className="mx-4">
                            <a href={HOME_PAGE}>Home</a>
                        </li>
                        <li>
                            <a href={ABOUT_PAGE}>About</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <Search />
                </div>
                <div className="flex w-full flex-row-reverse">
                    {auth.isAuthenticated ? (
                        <>
                            <DropMenu />
                            <Modal
                                button="Add post"
                                title="New Post"
                                size="2xl"
                                content={<PostModal />}
                            />
                        </>
                    ) : (
                        <Modal button="Login" size="md" content={<LoginModal />} />
                    )}
                </div>
            </div>
        </nav>
    );
}
