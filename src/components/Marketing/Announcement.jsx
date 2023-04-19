import React from 'react';
import PropTypes from 'prop-types';

export default function Announcement({ announcement, cta, href }) {
    return (
        <section className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {announcement}{' '}
                <a href={href} className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    {cta}
                </a>
                .
            </div>
        </section>
    );
}

Announcement.propTypes = {
    announcement: PropTypes.string,
    cta: PropTypes.string,
    href: PropTypes.string,
};
