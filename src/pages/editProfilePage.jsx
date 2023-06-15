import PropTypes from 'prop-types';
import React, { Component, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { logoutUser } from '../actions/authActions';
import { deleteUser, editUser, getUser } from '../actions/userActions';
import Button from '../components/Form/Button';
import FormInput from '../components/Form/FormInput';
import { store } from '../store';
import { deleteAllPosts } from '../actions/postActions';

function withMyHook(Component) {
    return function WrappedComponent(props) {
        const dispatch = useDispatch();
        const [users, setUsers] = useState({});
        const { id } = useParams();

        useEffect(() => {
            dispatch(getUser(id)).then((res) => setUsers(res));
        }, []);

        const auth = useSelector((state) => state.auth);
        const user = auth.user.id;

        return <Component {...props} users={users} user={user} />;
    };
}

class EditProfilePage extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onClick = () => {
        this.props.deleteUser(this.props.users._id.toString());
        this.props.deleteAllPosts(this.props.users._id.toString());
        store.dispatch(logoutUser());
    };

    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            user: this.props.user,
            ...(this.state.email && { email: this.state.email }),
            ...(this.state.password && { password: this.state.password }),
            ...(this.state.image && { image: this.state.image }),
        };
        this.props.editUser(this.props.users._id.toString(), userData);
    };

    render() {
        return (
            <section className="max-w-screen-lg mx-auto">
                <h1 className="text-xl font-semibold mb-2">Edit profile info</h1>
                <form className="pt-4 space-y-6" onSubmit={this.onSubmit}>
                    <FormInput
                        onChange={this.onChange}
                        label="Company email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="name@company.com"
                        value={this.props.users.email}
                    />
                    <FormInput
                        onChange={this.onChange}
                        label="New password"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                    />
                    <FormInput
                        onChange={this.onChange}
                        label="Confirm new password"
                        type="password"
                        name="password2"
                        id="password2"
                        placeholder="••••••••"
                    />
                    <div className="flex gap-4">
                        <Button label="Update profile" />
                        <button
                            onClick={this.onClick}
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
}

EditProfilePage.propTypes = {
    deleteUser: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
    deleteAllPosts: PropTypes.func.isRequired,
    errors: PropTypes.string,
    user: PropTypes.string,
    users: PropTypes.object,
};

const mapStateToProps = (state) => ({
    errors: state.errors,
});

export default connect(mapStateToProps, { getUser, editUser, deleteUser, deleteAllPosts })(
    withMyHook(EditProfilePage)
);
