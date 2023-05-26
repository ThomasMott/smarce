import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import Button from '../Form/Button';
import FormInput from '../Form/FormInput';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.loginUser(userData);
    };

    render() {
        return (
            <form className="pt-4 space-y-6" onSubmit={this.onSubmit}>
                <FormInput
                    onChange={this.onChange}
                    label="Company email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    isRequired
                />
                <FormInput
                    onChange={this.onChange}
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
                        <label
                            htmlFor="remember"
                            className="ml-2 text-sm font-medium text-gray-900"
                        >
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
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
