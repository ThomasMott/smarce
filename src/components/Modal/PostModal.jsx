import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import { newPost } from '../../actions/postActions';
import Button from '../Form/Button';
import FormInput from '../Form/FormInput';

function withMyHook(Component) {
    return function WrappedComponent(props) {
        const auth = useSelector((state) => state.auth);
        const user = auth.user.id;
        return <Component {...props} user={user} />;
    };
}

class PostModal extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            title: '',
            description: '',
            image: '',
            location: '',
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const postData = {
            name: this.state.name,
            email: this.state.email,
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            location: this.state.location,
            user: this.props.user,
        };
        this.props.newPost(postData);
    };

    render() {
        return (
            <form className="pt-4 space-y-6" onSubmit={this.onSubmit}>
                <FormInput
                    onChange={this.onChange}
                    label="Post title"
                    type="text"
                    name="title"
                    id="title"
                    placeholder="What are you looking to get rid of?"
                    isRequired
                />
                <FormInput
                    onChange={this.onChange}
                    label="Post description"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email@example.com"
                    isRequired
                />
                <FormInput
                    onChange={this.onChange}
                    label="Post description"
                    type="text"
                    name="description"
                    id="description"
                    placeholder="A short description of what you have"
                    isRequired
                />
                <FormInput
                    onChange={this.onChange}
                    label="Location"
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Where can it be delivered / collected"
                    isRequired
                />
                <Button label="Add new product" />
            </form>
        );
    }
}

PostModal.propTypes = {
    newPost: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.string,
};

const mapStateToProps = (state) => ({
    errors: state.errors,
});

export default connect(mapStateToProps, { newPost })(withMyHook(PostModal));
