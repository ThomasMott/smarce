import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deletePost, editPost, getPost } from '../actions/postActions';
import Button from '../components/Form/Button';
import FormInput from '../components/Form/FormInput';

function EditPostModal() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const auth = useSelector((state) => state.auth);
    const user = auth.user;
    const [posts, setPosts] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        description: '',
        image: '',
        location: '',
    });

    useEffect(() => {
        dispatch(getPost(id)).then((res) => setPosts(res));
    }, [dispatch, id]);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const onChangeImage = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.files[0] });
    };

    const onClick = () => {
        dispatch(deletePost(posts._id.toString()));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const postData = new FormData();
        postData.append('user', user.id);
        postData.append('name', user.name);
        postData.append('email', user.email);
        if (formData.title) postData.append('title', formData.title);
        if (formData.description) postData.append('description', formData.description);
        if (formData.image) postData.append('image', formData.image);
        if (formData.location) postData.append('location', formData.location);

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };

        dispatch(editPost(posts._id.toString(), postData, config));
    };

    return (
        <section className="max-w-screen-lg mx-auto">
            <h1 className="text-xl font-semibold mb-2">Edit post</h1>
            <form className="pt-4 space-y-6" onSubmit={onSubmit}>
                <FormInput
                    onChange={onChange}
                    label="Post title"
                    type="text"
                    name="title"
                    id="title"
                    placeholder="What are you looking to get rid of?"
                    value={posts.title}
                    isRequired
                />
                <FormInput
                    onChange={onChange}
                    label="Post description"
                    type="text"
                    name="description"
                    id="description"
                    placeholder="A short description of what you have"
                    value={posts.description}
                    isRequired
                />
                <input
                    type="file"
                    id="image"
                    accept=".png, .jpg, .jpeg"
                    name="image"
                    onChange={onChangeImage}
                />
                <div className="flex gap-4">
                    <Button label="Update post" />
                    <button
                        onClick={onClick}
                        type="button"
                        className="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                    >
                        Delete post
                    </button>
                </div>
            </form>
        </section>
    );
}

EditPostModal.propTypes = {
    errors: PropTypes.string,
};

const mapStateToProps = (state) => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(EditPostModal);
