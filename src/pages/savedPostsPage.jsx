import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSavedPosts } from '../actions/userActions';
import Post from '../components/Post/Post';

export default function SavedPostsPage() {
    const dispatch = useDispatch();
    const [savedPosts, setSavedPosts] = useState([]);
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (auth.isAuthenticated) {
            dispatch(getSavedPosts()).then((posts) => {
                setSavedPosts(posts || []);
            });
        }
    }, [dispatch, auth.isAuthenticated]);

    if (!auth.isAuthenticated) {
        return (
            <div className="px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
                <h1 className="text-xl font-semibold mb-4">Saved Posts</h1>
                <p>Please log in to view your saved posts.</p>
            </div>
        );
    }

    return (
        <div className="px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <h1 className="text-xl font-semibold mb-4">Saved Posts</h1>
            {savedPosts.length === 0 ? (
                <p>No saved posts yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {savedPosts.map((post) => (
                         <Post
                         link={`/post/${post._id.toString()}`}
                         key={post.id}
                         title={post.title}
                         author={post.name}
                         location={post.location}
                         image={post.image}
                         distance={post.calcDistance}
                     />
                    ))}
                </div>
            )}
        </div>
    );
} 