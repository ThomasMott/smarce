import React from 'react';
import Button from '../Form/Button';
import FormInput from '../Form/FormInput';

export default function SignUpForm() {
    return (
        <form className="pt-4 space-y-6" action="#">
            <FormInput
                label="Company name"
                type="text"
                name="name"
                id="name"
                placeholder="name@company.com"
                required
            />
            <FormInput
                label="Company email"
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                required
            />
            <FormInput
                label="Your Password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                isRequired
            />
            <FormInput
                label="Confirm Password"
                type="password"
                name="password2"
                id="password2"
                placeholder="••••••••"
                isRequired
            />
            <Button label="Sign up" />
        </form>
    );
}
