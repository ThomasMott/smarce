import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { logoutUser } from '../actions/authActions';
import { deleteUser, editUser, getUser } from '../actions/userActions';
import { deleteAllPosts } from '../actions/postActions';
import Button from '../components/Form/Button';
import FormInput from '../components/Form/FormInput';
import { store } from '../store';

function EditProfilePage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const auth = useSelector((state) => state.auth);
    const [users, setUsers] = useState({});
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: ''
    });

    useEffect(() => {
        dispatch(getUser(id)).then((res) => {
            setUsers(res);
            setFormData(prevState => ({
                ...prevState,
                email: res.email || ''
            }));
        });
    }, [dispatch, id]);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const onClick = () => {
        dispatch(deleteUser(users._id.toString()));
        dispatch(deleteAllPosts(users._id.toString()));
        store.dispatch(logoutUser());
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            user: auth.user.id,
            email: formData.email,
            password: formData.password
        };
        dispatch(editUser(users._id.toString(), userData));
    };

    return (
        <section className="max-w-screen-lg mx-auto">
            <h1 className="text-xl font-semibold mb-2">Edit profile info</h1>
            <form className="pt-4 space-y-6" onSubmit={onSubmit}>
                <FormInput
                    onChange={onChange}
                    label="Company email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    value={formData.email}
                />
                <FormInput
                    onChange={onChange}
                    label="New password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                />
                <FormInput
                    onChange={onChange}
                    label="Confirm new password"
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder="••••••••"
                />
                <div className="flex gap-4">
                    <Button label="Update profile" />
                    <button
                        onClick={onClick}
                        type="button"
                        className="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                    >
                        Delete account
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
