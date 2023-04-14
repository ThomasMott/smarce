import React from 'react';

export default function AccountPage() {
    return (
        <div>
            <h1>Account page</h1>
            <ul>
                <li>
                    <a href="/account/post/new">Create new post</a>
                </li>
                <li>
                    <a href="/account/post/edit/1">Edit post</a>
                </li>
            </ul>
        </div>
    );
}
