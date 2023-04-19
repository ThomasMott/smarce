import React from 'react';
import PropTypes from 'prop-types';

export default function Stats({ statOne, textOne, statTwo, textTwo, statThree, textThree }) {
    return (
        <section>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">{textOne}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                {statOne}
                            </dd>
                        </div>

                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">{textTwo}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                {statTwo}
                            </dd>
                        </div>

                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">{textThree}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                {statThree}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
}

Stats.propTypes = {
    statOne: PropTypes.string,
    textOne: PropTypes.string,
    statTwo: PropTypes.string,
    textTwo: PropTypes.string,
    statThree: PropTypes.string,
    textThree: PropTypes.string,
};
