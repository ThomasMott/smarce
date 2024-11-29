import axios from 'axios';
import toast from 'react-hot-toast';
import setAuthToken from '../utils/setAuthToken';

// Public routes remain unchanged
export const getPosts = (params) => () => {
    return axios
        .get('/api/posts/', { params: params })
        .then((res) => {
            const posts = res.data.posts;
            return posts;
        })
        .catch((err) => {
            toast(err.response.data.msg);
        });
};

// Protected routes need token
export const newPost = (postData, config) => () => {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token);

    return axios
        .post('/api/posts/new', postData, config)
        .then(() => {
            window.location.replace('/?post=new');
        })
        .catch((err) => {
            if (err.response.status === 401) {
                toast('Please log in to create posts');
            } else {
                toast(err.response.data.msg || 'Error creating post');
            }
        });
};

export const editPost = (id, postData, config) => () => {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token);

    return axios
        .put(`/api/posts/edit/${id}`, postData, config)
        .then(() => {
            window.location.replace(`/post/${id}?post=updated`);
        })
        .catch((err) => {
            if (err.response.status === 401) {
                toast('Please log in to edit posts');
            } else {
                toast(err.response.data.msg || 'Error updating post');
            }
        });
};

export const deletePost = (id) => () => {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token);

    return axios
        .delete(`/api/posts/delete/${id}`)
        .then(() => {
            window.location.replace('/?post=deleted');
        })
        .catch((err) => {
            if (err.response.status === 401) {
                toast('Please log in to delete posts');
            } else {
                toast(err.response.data.msg || 'Error deleting post');
            }
        });
};

export const deleteAllPosts = (id) => () => {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token);

    return axios
        .delete(`/api/posts/delete/all/${id}`)
        .catch((err) => {
            if (err.response.status === 401) {
                toast('Please log in to delete posts');
            } else {
                toast(err.response.data.msg || 'Error deleting posts');
            }
        });
};

// Public routes remain unchanged
export const getPost = (id) => () => {
    return axios.get(`/api/posts/${id}`)
        .then((res) => {
            const posts = res.data.posts;
            return posts;
        })
        .catch((err) => {
            toast(err.response.data.msg);
        });
};

export const getUserPosts = (id) => () => {
    return axios.get(`/api/posts/user/${id}`)
        .then((res) => {
            const posts = res.data.posts;
            return posts;
        })
        .catch((err) => {
            toast(err.response.data.msg);
        });
};
