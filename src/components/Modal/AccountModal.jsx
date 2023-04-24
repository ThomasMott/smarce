import React from 'react';
import FormInput from '../Form/FormInput';

export default function AccountModal() {
    return (
        <form className="pt-4 space-y-6" action="#">
            <FormInput
                label="Company email"
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                required
            />
        </form>
    );
}
