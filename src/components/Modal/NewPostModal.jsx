import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newPost } from '../../actions/postActions';
import { validatePostTitle, validatePostDescription, validateImageSize, validateLocation } from '../../utils/validationUtils';
import Button from '../Form/Button';
import FormInput from '../Form/FormInput';

const NewPostModal = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,
        location: '',
        category: '',
    });
    const [errors, setErrors] = useState({});
    const { user } = useSelector((state) => state.auth);

    const onChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const onChangeImage = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
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

        const locationError = validateLocation(formData.location);
        if (locationError) newErrors.location = locationError;

        // If there are errors, set them and prevent submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Trim whitespace from location before sending
        const postData = new FormData();
        // Required user data
        postData.append('user', user.id);
        postData.append('name', user.name);
        postData.append('email', user.email);
        // Post data
        postData.append('title', formData.title);
        postData.append('description', formData.description);
        postData.append('image', formData.image);
        postData.append('location', formData.location.trim()); // Trim whitespace
        postData.append('category', formData.category); // Include category

        dispatch(newPost(postData));
    };

    return (
        <form onSubmit={onSubmit}>
            <FormInput
                onChange={onChange}
                label="Post title"
                type="text"
                name="title"
                id="title"
                placeholder="What are you looking to get rid of?"
                value={formData.title}
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
                value={formData.description}
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
            <FormInput
                onChange={onChange}
                label="Location"
                type="text"
                name="location"
                id="location"
                placeholder="Enter your location"
                value={formData.location}
                isRequired
            />
            {errors.location && <p className="text-red-500">{errors.location}</p>}
            <div>
                <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">
                    Category
                </label>
                <select
                    onChange={onChange}
                    name="category"
                    id="category"
                    value={formData.category}
                    className="bg-gray-50 border border-gray-300 mt-1 block w-full pl-3 py-2 text-base border-gray-300 sm:text-sm rounded-md"
                    required
                >
                    <option value="" disabled>Select Material</option>
                    <option value="metal">Metal</option>
                    <option value="wood">Wood</option>
                    <option value="glass">Glass</option>
                    <option value="textiles">Textiles</option>
                    <option value="ceramics">Ceramics</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="flex gap-4">
                <Button label="Add new post" type="submit" />
            </div>
        </form>
    );
};

export default NewPostModal;
