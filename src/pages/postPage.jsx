import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { timeSince } from '../utils/timeset';
import { getPost } from '../actions/postActions';
import { getPostParams } from '../actions/urlActions';
import Button from '../components/Form/Button';

export default function PostPage() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState({});
    const { id } = useParams();
    const serverBaseURI = 'http://localhost:5000'; // set this to the value of express server

    useEffect(() => {
        dispatch(getPost(id)).then((res) => setPosts(res));
        getPostParams();
    }, []);

    const auth = useSelector((state) => state.auth);
    const user = auth.user.id;

    return (
        <div className="px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <div className="flex justify-between gap-3 items-center">
                <h1 className="capitalize text-xl font-semibold mb-2">{posts.title}</h1>
                {user === posts.userId && (
                    <Button href={`/account/post/edit/${id}`} label="Edit post" />
                )}
            </div>
            <p>{timeSince(posts.date)}</p>
            {/* <p className="mb-6">{posts.location}</p> */}
            <div className="grid grid-cols-4 gap-4 pt-4">
                {posts.image && (
                    <div className="col-span-3">
                        <img
                            className="object-cover h-full w-full rounded-lg"
                            src={`${serverBaseURI}/${posts.image}`}
                            alt="post material"
                        />
                    </div>
                )}
                <div className="flex flex-col gap-4">
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
                </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
                <p>{posts.description}</p>
            </div>
            <div className="mt-6 py-6 border-y border-gray-200">
                <h2 className="mb-4 font-semibold text-lg">Where to collect</h2>
                <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                    alt=""
                />
                {/* <h3 className="mt-4 font-semibold text-md">{posts.location}</h3> */}
            </div>
            <div className="py-6">
                <a href={`/account/${posts.name}`}>{posts.name}</a>
                <p>{posts.email}</p>
            </div>
        </div>
    );
}
