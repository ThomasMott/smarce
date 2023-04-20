import React from 'react';
import { useRouteError } from 'react-router-dom';
import { HELP_PAGE, HOME_PAGE } from '..';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Oops!
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for.
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                    {error.statusText || error.message}.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href={HOME_PAGE}
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Go back home
                    </a>
                    <a href={HELP_PAGE} className="text-sm font-semibold text-gray-900">
                        Get some help <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </main>
    );
}
