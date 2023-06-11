import PropTypes from 'prop-types';
import React from 'react';

export default function Post({ link, title, author, location }) {
    return (
        <a href={link}>
            <div className="h-full w-full">
                <div className="relative w-full">
                    <img
                        src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                        className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                        alt="image"
                    />
                </div>
                <div className="flex items-center justify-between px-1 md:items-start">
                    <div>
                        <p className="text-lg font-semibold text-navy-700">{title}</p>
                        <p className="mt-1 text-sm font-medium text-gray-600">{author}</p>
                    </div>
                    <div className="flex flex-row-reverse md:mt-2 lg:mt-0">{location}</div>
                </div>
            </div>
        </a>
    );
}

Post.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    location: PropTypes.string,
};
