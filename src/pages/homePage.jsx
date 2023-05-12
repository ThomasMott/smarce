import React from 'react';
import Post from '../components/Post/Post';
import { useStore } from 'react-redux';

export default function HomePage() {
    const store = useStore();
    console.log(JSON.stringify(store));

    return (
        <main>
            <div className="grid gap-8 grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                <Post title="Post Title" author="TMott inc" rating={5} />
                <Post title="Post Title" author="TMott inc" rating={5} />
                <Post title="Post Title" author="TMott inc" rating={5} />
                <Post title="Post Title" author="TMott inc" rating={5} />
                <Post title="Post Title" author="TMott inc" rating={5} />
                <Post title="Post Title" author="TMott inc" rating={5} />
                <Post title="Post Title" author="TMott inc" rating={5} />
                <Post title="Post Title" author="TMott inc" rating={5} />
            </div>
        </main>
    );
}
