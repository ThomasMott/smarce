import React from 'react';
import Button from '../Form/Button';
import FormInput from '../Form/FormInput';

export default function LogInForm() {
    return (
        <form className="pt-4 space-y-6" action="#">
            <FormInput
                label="Company email"
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                isRequired
            />
            <FormInput
                label="Your Password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                isRequired
            />
            <div className="flex justify-between">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            required
                        />
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">
                        Remember me
                    </label>
                </div>
                <a href="#" className="text-sm text-blue-700 hover:underline">
                    Lost Password?
                </a>
            </div>
            <Button label="Login to your account" />
        </form>
    );
}
