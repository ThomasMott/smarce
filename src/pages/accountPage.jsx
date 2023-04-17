import React from 'react';

export default function AccountPage() {
    return (
        <>
            <div className="grid grid-column-2 gap-4">
                <div>
                    <h1>Account page</h1>
                    <div>Edit Account</div>
                    details
                    <ul>
                        <li>
                            <a href="/account/post/new">Create new post</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                my posts
                <a href="/account/post/edit/1">Edit post</a>
            </div>
        </>
    );
}
