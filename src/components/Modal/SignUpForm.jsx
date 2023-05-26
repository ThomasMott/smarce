import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import Button from '../Form/Button';
import FormInput from '../Form/FormInput';
class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const newUserData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };
        // eslint-disable-next-line react/prop-types
        this.props.registerUser(newUserData, this.props.history);
    };

    render() {
        return (
            <form className="pt-4 space-y-6" noValidate onSubmit={this.onSubmit}>
                <FormInput
                    onChange={this.onChange}
                    label="Company name"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name@company.com"
                    isRequired
                />
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
                <FormInput
                    onChange={this.onChange}
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
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(Register);
