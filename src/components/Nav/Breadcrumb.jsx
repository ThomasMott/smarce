import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
    return (
        <nav className="flex items-center space-x-2 text-gray-700">
            {/* <Link to="/" className="hover:text-blue-500">Home</Link> */}
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {index !== 0 && <span className="mx-2">/</span>}
                    {item.link ? (
                        <Link to={item.link} className="hover:text-blue-500">
                            {item.label}
                        </Link>
                    ) : (
                        <span>{item.label}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

Breadcrumb.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            link: PropTypes.string
        })
    ).isRequired
};

export default Breadcrumb; 