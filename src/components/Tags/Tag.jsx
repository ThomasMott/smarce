import React from 'react';
import PropTypes from 'prop-types';

export default function Tag({ name, value, onClick }) {
    return (
        <button
            className="border-b-2 border-white hover:border-gray-400 hover:opacity-60"
            data-value={value}
            onClick={onClick}
        >
            {name}
        </button>
    );
}

Tag.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};
