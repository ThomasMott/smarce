import PropTypes from 'prop-types';
import React, { Component, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deletePost, editPost, getPost } from '../actions/postActions';
import Button from '../components/Form/Button';
import FormInput from '../components/Form/FormInput';

function withMyHook(Component) {
    return function WrappedComponent(props) {
        const dispatch = useDispatch();
        const [posts, setPosts] = useState({});
        const { id } = useParams();

        useEffect(() => {
            dispatch(getPost(id)).then((res) => setPosts(res));
        }, []);

        const auth = useSelector((state) => state.auth);
        const user = auth.user;
        return <Component {...props} posts={posts} user={user} />;
    };
}

class EditPostModal extends Component {
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

    onClick = () => {
        this.props.deletePost(this.props.posts._id.toString());
    };

    onChangeImage = (e) => {
        this.setState({ [e.target.id]: e.target.files[0] });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const postData = new FormData();
        postData.append('user', this.props.user.id);
        postData.append('name', this.props.user.name);
        if (this.state.email) postData.append('email', this.state.email);
        if (this.state.title) postData.append('title', this.state.title);
        if (this.state.description) postData.append('description', this.state.description);
        if (this.state.image) postData.append('image', this.state.image);
        if (this.state.location) postData.append('location', this.state.location);

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };

        this.props.editPost(this.props.posts._id.toString(), postData, config);
    };

    render() {
        return (
            <section className="max-w-screen-lg mx-auto">
                <h1 className="text-xl font-semibold mb-2">Edit post</h1>
                <form className="pt-4 space-y-6" onSubmit={this.onSubmit}>
                    <FormInput
                        onChange={this.onChange}
                        label="Post title"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="What are you looking to get rid of?"
                        value={this.props.posts.title}
                        isRequired
                    />
                    <FormInput
                        onChange={this.onChange}
                        label="Post description"
                        type="text"
                        name="description"
                        id="description"
                        placeholder="A short description of what you have"
                        value={this.props.posts.description}
                        isRequired
                    />
                    <FormInput
                        onChange={this.onChange}
                        label="Contact email"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email@example.com"
                        value={this.props.posts.email}
                        isRequired
                    />
                    <input
                        type="file"
                        id="image"
                        accept=".png, .jpg, .jpeg"
                        name="image"
                        onChange={this.onChangeImage}
                    />
                    <div className="flex gap-4">
                        <Button label="Update post" />
                        <button
                            onClick={this.onClick}
                            type="button"
                            className="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                        >
                            Delete post
                        </button>
                    </div>
                </form>
            </section>
        );
    }
}

EditPostModal.propTypes = {
    deletePost: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired,
    errors: PropTypes.string,
    user: PropTypes.string,
    posts: PropTypes.object,
};

const mapStateToProps = (state) => ({
    errors: state.errors,
});

export default connect(mapStateToProps, { getPost, editPost, deletePost })(
    withMyHook(EditPostModal)
);
