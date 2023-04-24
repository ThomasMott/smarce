import { Tab } from '@headlessui/react';
import React from 'react';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';

export default function LoginModal() {
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
                    <LogInForm />
                </Tab.Panel>
                <Tab.Panel>
                    <SignUpForm />
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
}
