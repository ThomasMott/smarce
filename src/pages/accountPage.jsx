import React from 'react';
import AccountModal from '../components/Modal/AccountModal';
import Modal from '../components/Modal/Modal';
import PostModal from '../components/Modal/NewPostModal';
import Post from '../components/Post/Post';

export default function AccountPage() {
    return (
        <section className="max-w-screen-lg mx-auto">
            <div className="grid grid-column-2 gap-4 mx-4 mb-10">
                <div>
                    <h1 className="text-2xl font-bold mb-6">My Account</h1>
                    <p>details</p>
                    <Modal
                        button="Edit details"
                        title="Edit details"
                        size="md"
                        content={<AccountModal />}
                    />
                </div>
            </div>
            <div className="flex items-center mb-4">
                <h2 className="text-xl font-bold m-4">My Posts</h2>
                <Modal button="Add post" title="New Post" size="2xl" content={<PostModal />} />
            </div>
            <div className="grid gap-8 grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <Post title="Post Title" author="TMott inc" rating={5} edit />
                <Post title="Post Title" author="TMott inc" rating={5} edit />
                <Post title="Post Title" author="TMott inc" rating={5} edit />
            </div>
        </section>
    );
}
