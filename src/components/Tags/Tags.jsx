import React from 'react';
import Tag from './Tag';

export default function Tags() {
    const tagsList = [
        {
            name: 'metal',
            value: 'metal',
        },
        {
            name: 'wood',
            value: 'wood',
        },
    ];

    const onClick = (e) => {
        const tagVal = e.target.dataset.value;
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('t', tagVal);
        window.location.search = searchParams.toString();
    };

    return (
        <div className="my-6 flex gap-4">
            {tagsList.map(function (data, index) {
                return (
                    <Tag
                        key={`${data.value}-${index}`}
                        name={data.name}
                        value={data.value}
                        onClick={onClick}
                    />
                );
            })}
        </div>
    );
}
