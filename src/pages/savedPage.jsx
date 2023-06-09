import React from 'react';
import Post from '../components/Post/Post';

export default function SavedPage() {
    return (
        <main>
            <div className="grid gap-8 grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                <Post title="Post Title" author="TMott inc" rating={5} />
                <Post title="Post Title" author="TMott inc" rating={5} />
            </div>
        </main>
    );
}
