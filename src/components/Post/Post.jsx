import PropTypes from 'prop-types';
import React from 'react';
import { getMiles } from '../../utils/distanceConversion';

export default function Post({ link, title, author, image, distance }) {
    const serverBaseURI = 'http://localhost:5000'; // set this to the value of express server

    return (
        <a href={link}>
            <div className="h-full w-full">
                <div className="relative w-full">
                    {image ? (
                        <img
                            className="object-cover mb-3 h-64 w-full rounded-xl 3xl:h-full 3xl:w-full"
                            src={`${serverBaseURI}/${image}`}
                            alt="post material"
                        />
                    ) : (
                        <img
                            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                            className="object-cover mb-3 h-64 w-full rounded-xl 3xl:h-full 3xl:w-full"
                            alt="image"
                        />
                    )}
                </div>
                <div>
                    <p className="capitalize text-lg font-semibold text-navy-700">{title}</p>
                    <p className="mt-1 text-sm text-gray-600">{author}</p>
                    <p className="mt-1 text-sm text-gray-600">{getMiles(distance)} miles away</p>
                </div>
            </div>
        </a>
    );
}

Post.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    distance: PropTypes.number,
    // location: PropTypes.string,
};
