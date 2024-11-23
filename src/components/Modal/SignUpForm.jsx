import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import Button from '../Form/Button';
import FormInput from '../Form/FormInput';

function SignUpForm() {
    const dispatch = useDispatch();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        
        // Validate passwords match
        if (formData.password !== formData.password2) {
            console.error("Passwords don't match");
            return;
        }

        // Create registration data object
        const userData = {
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            password: formData.password,
            password2: formData.password2
        };

        try {
            await dispatch(registerUser(userData));
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <form className="pt-4 space-y-6" noValidate onSubmit={onSubmit}>
            <FormInput
                onChange={onChange}
                label="Company name"
                type="text"
                name="name"
                id="name"
                placeholder="Company Name"
                isRequired
                value={formData.name}
            />
            <FormInput
                onChange={onChange}
                label="Company email"
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                isRequired
                value={formData.email}
            />
            <FormInput
                onChange={onChange}
                label="Your Password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                isRequired
                value={formData.password}
            />
            <FormInput
                onChange={onChange}
                label="Confirm Password"
                type="password"
                name="password2"
                id="password2"
                placeholder="••••••••"
                isRequired
                value={formData.password2}
            />
            <Button label="Sign up" />
        </form>
    );
}

export default SignUpForm;
