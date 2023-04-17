import React from 'react';
import PropTypes from 'prop-types';

export default function FormInput({ label, type, name, id, placeholder, isRequired }) {
    return (
        <>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required={isRequired}
            />
        </>
    );
}

FormInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    isRequired: PropTypes.bool,
};
