import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Form/Button';

export default function Cta({ title, text, href }) {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                        {title}
                    </h2>
                    <p className=" text-center mb-8 font-light text-gray-500 sm:text-xl">{text}</p>
                    <div className="flex flex-col space-y-4 justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
                        <Button href={href} label="Get started" />
                    </div>
                </div>
            </div>
        </section>
    );
}

Cta.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    href: PropTypes.string,
};
