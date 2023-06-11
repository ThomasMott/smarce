import React from 'react';
import { useSelector } from 'react-redux';

export default function AccountPage() {
    const auth = useSelector((state) => state.auth);

    return (
        <section className="max-w-screen-lg mx-auto">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="lg:mb-16 mb-8 ml-2">
                    <h1 className="mb-4 text-3xl font-semibold text-gray-900">Account</h1>
                    <p className="font-light text-gray-600 sm:text-lg">
                        Logged in as {auth.user.name},{' '}
                        <a
                            className="text-blue-500 hover:underline"
                            href={`/account/${auth.user.name}`}
                        >
                            view profile
                        </a>
                        .
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    <a href={`/account/${auth.user.name}`}>
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                            <h2 className="mb-2 text-lg font-semibold text-gray-900">
                                Personal info
                            </h2>
                            <p className="font-light text-gray-500">
                                Update and manage personal information
                            </p>
                        </article>
                    </a>
                    <a href="/help">
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                            <h2 className="mb-2 text-lg font-semibold text-gray-900">
                                Frequently asked questions
                            </h2>
                            <p className="font-light text-gray-500">
                                Check out the FAQ&apos;s for help and support
                            </p>
                        </article>
                    </a>
                </div>
            </div>
        </section>
    );
}
