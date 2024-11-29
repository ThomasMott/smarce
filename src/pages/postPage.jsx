import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../actions/postActions';
import { savePost, unsavePost, getSavedPosts } from '../actions/userActions';
import { getPostParams } from '../actions/urlActions';
import Button from '../components/Form/Button';
import Map from '../components/Map/Map';
import { timeSince } from '../utils/timeset';

export default function PostPage() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState({});
    const [isSaved, setIsSaved] = useState(false);
    const { id } = useParams();
    const serverBaseURI = 'http://localhost:5000';
    
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        console.log('Auth in useEffect:', auth);
        console.log('User in useEffect:', auth.user);
        
        dispatch(getPost(id)).then((res) => setPosts(res));
        getPostParams();
        
        if (auth.isAuthenticated && auth.user) {
            dispatch(getSavedPosts()).then((savedPosts) => {
                setIsSaved(savedPosts?.some(post => post._id === id));
            });
        }
    }, [dispatch, id, auth]);

    const handleSaveToggle = () => {
        if (isSaved) {
            dispatch(unsavePost(id)).then(() => setIsSaved(false));
        } else {
            dispatch(savePost(id)).then(() => setIsSaved(true));
        }
    };

    return (
        <div className="px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <div className="flex justify-between gap-3 items-center">
                <h1 className="capitalize text-xl font-semibold mb-2">{posts.title}</h1>
                <div className="flex gap-2">
                    {auth.isAuthenticated && auth.user && (
                        auth.user.id === posts.userId ? (
                            <Button href={`/account/post/edit/${id}`} label="Edit post" />
                        ) : (
                            <button
                                onClick={handleSaveToggle}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${
                                    isSaved 
                                        ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' 
                                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                                }`}
                            >
                                {isSaved ? 'Unsave' : 'Save Post'}
                            </button>
                        )
                    )}
                </div>
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
