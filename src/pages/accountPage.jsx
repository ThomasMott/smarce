import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserPosts } from '../actions/postActions';
import { getUser } from '../actions/userActions';
import AccountModal from '../components/Modal/AccountModal';
import Modal from '../components/Modal/Modal';
import PostModal from '../components/Modal/NewPostModal';
import Post from '../components/Post/Post';

export default function AccountPage() {
    const dispatch = useDispatch();
    const [users, setUsers] = useState({});
    const [posts, setPosts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getUser(id)).then((res) => setUsers(res));
        dispatch(getUserPosts(id)).then((res) => setPosts(res));
    }, []);

    const auth = useSelector((state) => state.auth);
    const user = auth.user.id;

    return (
        <section className="max-w-screen-lg mx-auto">
            <div className="grid grid-column-2 gap-4 mx-4 mb-10">
                <div>
                    <h1 className="text-2xl font-bold mb-6">{users.name}</h1>
                    <p>{users.email}</p>
                    {user === users.userId && (
                        <Modal
                            button="Edit details"
                            title="Edit details"
                            size="md"
                            content={<AccountModal />}
                        />
                    )}
                </div>
            </div>
            <div className="flex items-center mb-4">
                <h2 className="text-xl font-bold m-4">Posts</h2>
                <Modal button="Add post" title="New Post" size="2xl" content={<PostModal />} />
            </div>
            <div className="grid gap-8 grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {posts &&
                    posts.map((post, index) => (
                        <Post
                            link={`/post/${post._id.toString()}`}
                            key={index}
                            title={post.title}
                            author={post.name}
                            location={post.location}
                        />
                    ))}
            </div>
        </section>
    );
}
