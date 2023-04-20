import PropTypes from 'prop-types';
import React from 'react';
import { NEW_POST_PAGE } from '../..';
import Button from '../Form/Button';
import Announcement from './Announcement';

export default function Hero({ title, text, href, moreHref }) {
    return (
        <section className="py-8 px-4 mx-auto max-w-2xl sm:py-16 lg:px-6">
            <Announcement
                announcement="Convinced to get started?"
                cta="Create a listing"
                href={NEW_POST_PAGE}
            />
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    {title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">{text}</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button href={href} label="Get started" />
                    <a href={moreHref} className="text-sm font-semibold leading-6 text-gray-900">
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

Hero.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    href: PropTypes.string,
    moreHref: PropTypes.string,
};
