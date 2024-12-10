import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deletePost, editPost, getPost } from '../actions/postActions';
import Button from '../components/Form/Button';
import FormInput from '../components/Form/FormInput';
import { validatePostTitle, validateImageSize, validatePostDescription } from '../utils/validationUtils';

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
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getPost(id)).then((res) => setPosts(res));
    }, [dispatch, id]);

    const onChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const onChangeImage = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
    };

    const onClick = () => {
        dispatch(deletePost(posts._id.toString()));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validate fields
        const titleError = validatePostTitle(formData.title);
        if (titleError) newErrors.title = titleError;

        const descriptionError = validatePostDescription(formData.description);
        if (descriptionError) newErrors.description = descriptionError;

        const imageError = validateImageSize(formData.image);
        if (imageError) newErrors.image = imageError;

        // If there are errors, set them and prevent submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

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
                {errors.title && <p className="text-red-500">{errors.title}</p>}
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
                {errors.description && <p className="text-red-500">{errors.description}</p>}
                <input
                    type="file"
                    id="image"
                    accept=".png, .jpg, .jpeg"
                    name="image"
                    onChange={onChangeImage}
                />
                {errors.image && <p className="text-red-500">{errors.image}</p>}
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
