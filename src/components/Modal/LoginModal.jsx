import { Tab } from '@headlessui/react';
import React from 'react';
import SignUpForm from './SignUpForm';
import Login from './Login';
import { useSelector } from 'react-redux';

export default function LoginModal() {
    console.log(useSelector((state) => state.auth));

    return (
        <Tab.Group defaultIndex={1}>
            <Tab.List className="flex gap-4 mb-2">
                <Tab>
                    {({ selected }) => (
                        <p
                            className={
                                selected
                                    ? 'bg-gray-100 px-4 rounded-md py-2'
                                    : 'text-blue-700 hover:underline'
                            }
                        >
                            Login
                        </p>
                    )}
                </Tab>
                <Tab>
                    {({ selected }) => (
                        <p
                            className={
                                selected
                                    ? 'bg-gray-100 px-4 rounded-md py-2'
                                    : 'text-blue-700 hover:underline'
                            }
                        >
                            New account
                        </p>
                    )}
                </Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>
                    <Login />
                </Tab.Panel>
                <Tab.Panel>
                    <SignUpForm />
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
}
