import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newPost } from '../../actions/postActions';
import Button from '../Form/Button';
import FormInput from '../Form/FormInput';

function NewPostModal() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    
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

    // Log user data first
    console.log('User data:', {
        id: user?.id,
        name: user?.name,
        email: user?.email
    });
    
    // Validate required user data
    if (!user?.id || !user?.name || !user?.email) {
        console.error('Required user data is missing', { user });
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

            // Log all form data entries
            console.log('Form Data Contents:');
            for (let [key, value] of postData.entries()) {
                console.log(`${key}: ${value}`);
            }

            console.log('Dispatching newPost action...');
            const result = await dispatch(newPost(postData));
            console.log('Dispatch result:', result);
            
            setFormData(initialState);
        } catch (error) {
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
            <FormInput
                onChange={onChange}
                label="Category"
                type="text"
                name="category"
                id="category"
                placeholder="wood"
                value={formData.category}
                isRequired
            />
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
