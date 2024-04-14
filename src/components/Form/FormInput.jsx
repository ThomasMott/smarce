import React from 'react';
import PropTypes from 'prop-types';

export default function FormInput({
    label,
    type,
    name,
    id,
    placeholder,
    value,
    isRequired,
    isDisabled,
    onChange,
}) {
    return (
        <div>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
                {label} {isRequired && <span className="text-red-400">*</span>}
            </label>
            <input
                type={type}
                onChange={onChange}
                name={name}
                id={id}
                defaultValue={value}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required={isRequired}
                disabled={isDisabled}
            />
        </div>
    );
}

FormInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    isRequired: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
};
