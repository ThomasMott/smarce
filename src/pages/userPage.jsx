import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserPosts } from '../actions/postActions';
import { getUser } from '../actions/userActions';
import Modal from '../components/Modal/Modal';
import PostModal from '../components/Modal/NewPostModal';
import Post from '../components/Post/Post';
import Skeleton from '../components/Skeleton/Skeleton';
import avatar from '../public/images/test.webp';

export default function UserPage() {
    const dispatch = useDispatch();
    const [users, setUsers] = useState({});
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const serverBaseURI = 'http://localhost:5000/images/'; // make into env var

    useEffect(() => {
        dispatch(getUser(id)).then((res) => setUsers(res));
        dispatch(getUserPosts(id)).then((res) => {
            setPosts(res);
            setLoading(false);
        });
    }, [dispatch, id]);

    const auth = useSelector((state) => state.auth);
    const user = auth.user;

    return (
        <section className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
                <div className="grid grid-column-2 gap-4 mx-4 mb-10 border-r pr-8 border-gray-300">
                {users && Object.keys(users).length > 0 ? (
                    <div>
                        <h1 className="text-2xl font-semibold mb-2">{users.name || 'No name provided'}</h1>
                        <p className='mb-2'>{users.email || 'No email provided'}</p>
                        {user.id === users._id && (
                            <div className="flex gap-4 mb-6">
                                <a 
                                    href={`/account/edit/${user.name}`}
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    Edit profile
                                </a>
                                <a 
                                    href="/saved-posts"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    View saved posts
                                </a>
                            </div>
                        )}
                        {users.image ? (
                            <img
                                className="object-cover h-32 w-32 rounded-full mb-4"
                                src={`${serverBaseURI}/${users.image}`}
                                alt="User profile"
                            />
                        ) : (
                            <img 
                                src={avatar} 
                                alt={`${users.name}'s profile`} 
                                className="h-32 w-32 rounded-full mb-4"
                            />
                        )}
                        {users.bio ? <p className="mb-4">{users.bio}</p> : <p>No bio available.</p>}
                        {users.links && users.links.length > 0 ? (
                            <div className="my-4">
                                <h3 className="font-semibold">Links:</h3>
                                <ul>
                                    {users.links.map((link, index) => (
                                        <li key={index}>
                                            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p>No links available.</p>
                        )}
                        {users.tags && users.tags.length > 0 ? (
                            <div className="mb-4">
                                <h3 className="font-semibold">Tags:</h3>
                                <p>{users.tags.join(', ')}</p>
                            </div>
                        ) : (
                            <p>No tags available.</p>
                        )}
                    </div>
                ) : (
                    <p className="text-gray-500">User not found or no data available.</p>
                )}
            </div>
                <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                        <h2 className="text-xl font-semibold mr-4">Posts</h2>
                        <Modal button="Add post" title="New Post" size="2xl" content={<PostModal />} />
                    </div>
                    <div className="grid gap-8 grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        {loading || (!posts && <Skeleton number={3} />)}
                        {posts &&
                            posts.map((post, index) => (
                                <Post
                                    link={`/post/${post._id.toString()}`}
                                    key={index}
                                    title={post.title}
                                    author={post.name}
                                    image={post.image}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
