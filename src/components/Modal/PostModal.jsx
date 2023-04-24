import React from 'react';
import Button from '../Form/Button';
import FormInput from '../Form/FormInput';

export default function PostModal() {
    return (
        <form className="pt-4 space-y-6" action="#">
            <FormInput
                label="Post title"
                type="text"
                name="p-title"
                id="p-title"
                placeholder="What are you looking to get rid of?"
                required
            />
            <FormInput
                label="Post description"
                type="text"
                name="p-title"
                id="p-title"
                placeholder="name@company.com"
                required
            />
            <div>material selector</div>
            <div>location</div>
            <div>collection times</div>
            <div>enquiry email</div>
            <div>image upload</div>
            <Button label="Add new product" />
        </form>
    );
}
