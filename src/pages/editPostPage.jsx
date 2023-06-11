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
        const user = auth.user.id;
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

    onSubmit = (e) => {
        e.preventDefault();
        const postData = {
            user: this.props.user,
            name: this.props.posts.name,
            ...(this.state.email && { email: this.state.email }),
            ...(this.state.title && { title: this.state.title }),
            ...(this.state.description && { description: this.state.description }),
            ...(this.state.image && { image: this.state.image }),
            ...(this.state.location && { location: this.state.location }),
        };
        this.props.editPost(this.props.posts._id.toString(), postData);
    };

    render() {
        return (
            <section className="max-w-screen-lg mx-auto">
                <h1 className="text-xl font-bold mb-2">Edit post</h1>
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
                    <FormInput
                        onChange={this.onChange}
                        label="Location"
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Where can it be delivered / collected"
                        value={this.props.posts.location}
                        isRequired
                    />
                    {/* images */}
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
