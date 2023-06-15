import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import { newPost } from '../../actions/postActions';
import Button from '../Form/Button';
import FormInput from '../Form/FormInput';

function withMyHook(Component) {
    return function WrappedComponent(props) {
        const auth = useSelector((state) => state.auth);
        const user = auth.user;

        return <Component {...props} user={user} />;
    };
}

class NewPostModal extends Component {
    constructor() {
        super();
        this.state = {
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

    onChangeImage = (e) => {
        this.setState({ [e.target.id]: e.target.files[0] });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const postData = new FormData();
        postData.append('user', this.props.user.id);
        postData.append('name', this.props.user.name);
        postData.append('email', this.state.email);
        postData.append('title', this.state.title);
        postData.append('description', this.state.description);
        postData.append('image', this.state.image);
        postData.append('location', this.state.location);

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };

        this.props.newPost(postData, config);
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
                    label="description"
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
                <input
                    type="file"
                    id="image"
                    accept=".png, .jpg, .jpeg"
                    name="image"
                    onChange={this.onChangeImage}
                />
                <Button label="Add new post" />
            </form>
        );
    }
}

NewPostModal.propTypes = {
    newPost: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    errors: state.errors,
});

export default connect(mapStateToProps, { newPost })(withMyHook(NewPostModal));
