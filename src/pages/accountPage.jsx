import React from 'react';
import { EDIT_POST_PAGE, NEW_POST_PAGE } from '..';

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
                            <a href={NEW_POST_PAGE}>Create new post</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                my posts
                <a href={EDIT_POST_PAGE}>Edit post</a>
            </div>
        </>
    );
}
