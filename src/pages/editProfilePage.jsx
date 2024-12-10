import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { logoutUser } from '../actions/authActions';
import { deleteAllPosts } from '../actions/postActions';
import { deleteUser, editUser, getUser } from '../actions/userActions';
import Button from '../components/Form/Button';
import FormInput from '../components/Form/FormInput';
import Breadcrumb from '../components/Nav/Breadcrumb';
import { store } from '../store';
import { validateBio, validateLinks, validateTags, validateImageSize } from '../utils/validationUtils';

function EditProfilePage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const auth = useSelector((state) => state.auth);
    const [users, setUsers] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        // password: '',
        // password2: '',
        bio: '',
        image: '',
        links: '',
        tags: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getUser(id)).then((res) => {
            setUsers(res);
            setFormData(prevState => ({
                ...prevState,
                name: res.name || '',
                email: res.email || '',
                bio: res.bio || '',
                image: res.image || '',
                links: res.links.join(', ') || '',
                tags: res.tags.join(', ') || ''
            }));
        });
    }, [dispatch, id]);

    const onChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const onChangeImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
        }
    };

    const onClick = () => {
        dispatch(deleteUser(users._id.toString()));
        dispatch(deleteAllPosts(users._id.toString()));
        store.dispatch(logoutUser());
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validate fields
        const bioError = validateBio(formData.bio);
        if (bioError) newErrors.bio = bioError;

        const linksError = validateLinks(formData.links);
        if (linksError) newErrors.links = linksError;

        const tagsError = validateTags(formData.tags);
        if (tagsError) newErrors.tags = tagsError;

        const imageError = validateImageSize(formData.image);
        if (imageError) newErrors.image = imageError;

        // If there are errors, set them and prevent submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const userData = new FormData();
        userData.append('user', auth.user.id);
        userData.append('name', formData.name);
        userData.append('email', formData.email);
        // userData.append('password', formData.password);
        userData.append('bio', formData.bio);
        userData.append('image', formData.image);
        userData.append('links', formData.links.split(',').map(link => link.trim()));
        userData.append('tags', formData.tags.split(',').map(tag => tag.trim()));

        dispatch(editUser(users._id.toString(), userData));
    };

    const breadcrumbItems = [
        { label: 'Account', link: '/account' },
        { label: 'Profile', link: `/account/${users.name}` },
        { label: 'Edit Profile' } // Current page, no link
    ];

    return (
        <section className="max-w-screen-lg mx-auto">
            <Breadcrumb items={breadcrumbItems} />
            <form className="mt-4 pt-4 space-y-6" onSubmit={onSubmit}>
                <FormInput
                    onChange={onChange}
                    label="Name"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                />
                <FormInput
                    onChange={onChange}
                    label="Company Email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    value={formData.email}
                />
                {/* <FormInput
                    onChange={onChange}
                    label="New Password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                />
                <FormInput
                    onChange={onChange}
                    label="Confirm New Password"
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder="••••••••"
                /> */}
                <FormInput
                    onChange={onChange}
                    label="Bio"
                    type="text"
                    name="bio"
                    id="bio"
                    placeholder="Tell us about yourself"
                    value={formData.bio}
                />
                {errors.bio && <p className="text-red-500">{errors.bio}</p>}
                <div>
                    <label htmlFor="image" className="block mb-2">Profile Image</label>
                    <input
                        type="file"
                        id="image"
                        accept=".png, .jpg, .jpeg"
                        name="image"
                        onChange={onChangeImage}
                        className="border rounded p-2"
                    />
                </div>
                {errors.image && <p className="text-red-500">{errors.image}</p>}
                <FormInput
                    onChange={onChange}
                    label="Links (comma separated)"
                    type="text"
                    name="links"
                    id="links"
                    placeholder="link1.com, link2.com"
                    value={formData.links}
                />
                {errors.links && <p className="text-red-500">{errors.links}</p>}
                <FormInput
                    onChange={onChange}
                    label="Tags (comma separated)"
                    type="text"
                    name="tags"
                    id="tags"
                    placeholder="tag1, tag2"
                    value={formData.tags}
                />
                {errors.tags && <p className="text-red-500">{errors.tags}</p>}
                <div className="flex gap-4">
                    <Button label="Update Profile" />
                    <button
                        onClick={onClick}
                        type="button"
                        className="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                    >
                        Delete Account
                    </button>
                </div>
            </form>
        </section>
    );
}

EditProfilePage.propTypes = {
    errors: PropTypes.string
};

export default EditProfilePage;
