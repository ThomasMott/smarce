import React from 'react';
import PropTypes from 'prop-types';

export default function Content({ imgSrc, imgAlt, title, text }) {
    return (
        <section className="mb-32 text-gray-800">
            <div className="block rounded-lg shadow-lg bg-white">
                <div className="flex flex-wrap items-center">
                    <div className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                        <img
                            src={imgSrc}
                            alt={imgAlt}
                            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        />
                    </div>
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                        <div className="px-6 py-12 md:px-12">
                            <h2 className="text-2xl font-semibold mb-4 text-green-600">{title}</h2>
                            <p className="text-gray-500 mb-6">{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Content.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
};
