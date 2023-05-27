import React, { useEffect, useState } from 'react';
import Post from '../components/Post/Post';
import { getPosts } from '../actions/postActions';
import { useDispatch } from 'react-redux';

export default function HomePage() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        dispatch(getPosts()).then((res) => setPosts(res));
    }, []);

    return (
        <main>
            <div className="grid gap-8 grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {posts.map((post, index) => (
                    <Post
                        link={`/post/${post._id.toString()}`}
                        key={index}
                        title={post.name}
                        author="TMott inc"
                        rating={5}
                    />
                ))}
            </div>
        </main>
    );
}
