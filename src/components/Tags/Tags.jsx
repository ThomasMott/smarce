import React from 'react';
import Tag from './Tag';
import { tagList } from './TagList';

export default function Tags() {
    const onClick = (e) => {
        const tagVal = e.target.dataset.value;
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('t', tagVal);
        window.location.search = searchParams.toString();
    };

    return (
        <div className="my-6 flex gap-4">
            <a className="border-b-2 border-white hover:border-gray-400 hover:opacity-60" href="/">
                All
            </a>
            {tagList.map(function (data, index) {
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
