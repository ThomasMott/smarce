import React from 'react';
import { useRouteError } from 'react-router-dom';
import { HELP_PAGE, HOME_PAGE } from '..';
import Button from '../components/Form/Button';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base text-2xl font-semibold text-green-600">404</p>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Oops!
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for.
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                    {error.statusText || error.message}.
                </p>
                <div className="mt-8 flex items-center justify-center gap-x-6">
                    <Button href={HOME_PAGE} label="Go back home" />
                    <a href={HELP_PAGE} className="text-sm hover:underline">
                        Get some help <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </main>
    );
}
