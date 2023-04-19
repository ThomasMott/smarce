import React from 'react';
import FormInput from '../Form/FormInput';
import Button from '../Form/Button';

export default function LoginModal() {
    return (
        <form className="pt-4 space-y-6" action="#">
            <div>
                <FormInput
                    label="Company email"
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                />
            </div>
            <div>
                <FormInput
                    label="Your Password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    isRequired
                />
            </div>
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
            <div className="text-sm font-medium text-gray-500">
                Not registered?{' '}
                <a href="#" className="text-blue-700 hover:underline">
                    Create account
                </a>
            </div>
        </form>
    );
}
