import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../actions/postActions';
import Button from '../components/Form/Button';

export default function PostPage() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState({});
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id)).then((res) => setPosts(res));
    }, []);

    const auth = useSelector((state) => state.auth);
    const user = auth.user.id;

    return (
        <div className="px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <h1 className="text-xl font-semibold mb-2">{posts.title}</h1>
            <p>{posts.description}</p>
            {user === posts.userId && (
                <Button href={`/account/post/edit/${id}`} label="Edit post" />
            )}
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
                <h2 className="mb-4 font-semibold text-lg">Where to collect</h2>
                <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                    alt=""
                />
                <h3 className="mt-4 font-semibold text-md">{posts.location}</h3>
            </div>
            <div className="py-6">
                <a href={`/account/${posts.name}`}>{posts.name}</a>
                <p>{posts.email}</p>
            </div>
        </div>
    );
}
