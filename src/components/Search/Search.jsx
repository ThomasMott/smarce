import React from 'react';

export default function Search() {
    return (
        <form action="/" method="get" className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
                Search
            </label>
            <input
                type="text"
                id="l"
                name="l"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                placeholder="Search postcode"
                required
            />
            <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-green-600 rounded-3xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>
    );
}
