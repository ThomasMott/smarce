import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../actions/postActions';
import { getPostParams } from '../actions/urlActions';
import Button from '../components/Form/Button';
import Map from '../components/Map/Map';
import { timeSince } from '../utils/timeset';

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
            <div className="grid grid-cols-4 gap-6 pt-4">
                <div className="col-span-3">
                    {posts.image ? (
                        <img
                            className="object-cover h-full w-full rounded-lg"
                            src={`${serverBaseURI}/${posts.image}`}
                            alt="post material"
                        />
                    ) : (
                        <img
                            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                            className="opacity-60 object-cover h-full w-full rounded-lg"
                            alt="image"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-4">
                    <div className="mt-6">
                        <h2 className="font-semibold text-lg">About</h2>
                        <p>{posts.description}</p>
                    </div>
                    <hr />
                    <div className="mb-6 text-sm">
                        <p>Posted {timeSince(posts.date)}</p>
                    </div>
                </div>
            </div>
            <div className="mt-6 py-6 border-y border-gray-200">
                <h2 className="mb-4 font-semibold text-lg">Where to collect</h2>
                {posts?.location?.coordinates && <Map position={posts.location.coordinates} />}
                <p className="mt-4">{posts.pcode}</p>
            </div>
            <div className="py-6">
                <h2 className="mb-4 font-semibold text-lg">About company</h2>
                <div className="bg-neutral-100 p-6 rounded-2xl">
                    {/* make a user profile display component */}
                    <a href={`/account/${posts.name}`}>{posts.name}</a>
                    <p>{posts.email}</p>
                </div>
            </div>
        </div>
    );
}
