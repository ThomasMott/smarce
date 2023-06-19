import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ label, href, type, loading }) {
    if (href) {
        return (
            <a
                href={href}
                className={`${
                    loading && 'animate-pulse'
                } text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center`}
            >
                {loading ? 'loading...' : label}
            </a>
        );
    }

    return (
        <button
            type={type ? type : 'submit'}
            className={`${
                loading && 'animate-pulse'
            } text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center`}
        >
            {loading ? 'loading...' : label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    type: PropTypes.string,
    loading: PropTypes.bool,
};
