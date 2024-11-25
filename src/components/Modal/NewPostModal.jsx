import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newPost } from '../../actions/postActions';
import Button from '../Form/Button';
import FormInput from '../Form/FormInput';

function NewPostModal() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    
    const categories = [
        'metal',
        'wood',
        'glass',
        'textiles',
        'ceramics',
        'other'
    ];
    
    const initialState = {
        title: '',
        description: '',
        location: '',
        category: 'wood',
        image: null
    };

    const [formData, setFormData] = useState(initialState);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const onChangeImage = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.files[0] });
    };
    
    // Validate required user data
    if (!user?.id || !user?.name || !user?.email) {
        return;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const postData = new FormData();
            
            // Required user data
            postData.append('user', user.id);
            postData.append('name', user.name);
            postData.append('email', user.email);
            
            // Required form data
            postData.append('title', formData.title);
            postData.append('description', formData.description);
            postData.append('location', formData.location);
            postData.append('category', formData.category);
            
            // Optional image
            if (formData.image) {
                postData.append('image', formData.image);
            }

            await dispatch(newPost(postData));
            setFormData(initialState);
        } catch (error) {
            // Keep error logging for production debugging
            console.error('Error creating post:', error);
        }
    };

    // Early return if user data is missing
    if (!user?.id || !user?.name || !user?.email) {
        return <div>Error: User data is incomplete. Please log in again.</div>;
    }

    return (
        <form className="pt-4 space-y-6" encType="multipart/form-data" onSubmit={onSubmit}>
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
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
            <FormInput
                onChange={onChange}
                label="Description"
                type="text"
                name="description"
                id="description"
                placeholder="A short description of what you have"
                value={formData.description}
                isRequired
            />
            <FormInput
                onChange={onChange}
                label="Location"
                type="text"
                name="location"
                id="location"
                placeholder="Enter your postcode"
                value={formData.location}
                isRequired
            />
            <input
                type="file"
                id="image"
                accept=".png, .jpg, .jpeg"
                name="image"
                onChange={onChangeImage}
            />
            <Button label="Add new post" type="submit" />
        </form>
    );
}

export default NewPostModal;
