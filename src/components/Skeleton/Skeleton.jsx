import React from 'react';
import PropTypes from 'prop-types';

export default function Skeleton({ number }) {
    const beef = Array(number).fill(
        <div className="animate-pulse">
            <div className="rounded-xl w-full mb-3 h-48 bg-gray-200" />
            <div className="flex gap-4">
                <div className="rounded-lg w-full mb-3 h-4 bg-gray-200" />
                <div className="rounded-lg w-20 mb-3 h-4 bg-gray-200" />
            </div>
            <div className="rounded-lg w-20 h-4 bg-gray-200" />
        </div>
    );
    return beef;
}

Skeleton.propTypes = {
    number: PropTypes.number,
};
