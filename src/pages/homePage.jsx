import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/postActions';
import { getPostParams, getUserParams } from '../actions/urlActions';
import Post from '../components/Post/Post';
import Skeleton from '../components/Skeleton/Skeleton';

export default function HomePage() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getPosts()).then((res) => {
            setPosts(res);
            setLoading(false);
        });
        getPostParams();
        getUserParams();
    }, []);

    return (
        <main>
            <div className="grid gap-8 grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {loading && <Skeleton number={6} />}
                {posts.map((post, index) => (
                    <Post
                        link={`/post/${post._id.toString()}`}
                        key={index}
                        title={post.title}
                        author={post.name}
                        location={post.location}
                    />
                ))}
            </div>
        </main>
    );
}
