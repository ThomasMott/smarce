import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../actions/postActions';

export default function PostPage() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState({});
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id)).then((res) => setPosts(res));
    }, []);

    return (
        <div className="px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <h1 className="text-xl font-bold mb-2">{posts.title}</h1>
            <p>{posts.description}</p>
            <p className="mb-6">{posts.location}</p>
            <div className="grid gap-4">
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                        alt=""
                    />
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="mt-6 py-6 border-y border-gray-200">
                <h2 className="mb-4 font-bold text-lg">Where to collect</h2>
                <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                    alt=""
                />
                <h3 className="mt-4 font-bold text-md">{posts.location}</h3>
            </div>
            <div className="py-6">
                <h2 className="mb-4 font-bold text-lg">{posts.name}</h2>
                <p>{posts.email}</p>
            </div>
        </div>
    );
}
