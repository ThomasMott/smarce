import axios from 'axios';
import toast from 'react-hot-toast';

// Add Saved posts
// ~ .get(`/api/posts/${user}`);
// Add get by query
// ~ .get(`/api/posts?query=${query}`);

// Get all posts
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

// Get specific post
export const getPost = (id) => () => {
    return axios
        .get(`/api/posts/${id}`)
        .then((res) => {
            const posts = res.data.posts;
            return posts;
        })
        .catch((err) => {
            toast(err.response.data.msg);
        });
};

// Get user posts
export const getUserPosts = (id) => () => {
    return axios
        .get(`/api/posts/user/${id}`)
        .then((res) => {
            const posts = res.data.posts;
            return posts;
        })
        .catch((err) => {
            toast(err.response.data.msg);
        });
};

// New post
export const newPost = (postData, config) => () => {
    return axios
        .post('/api/posts/new', postData, config)
        .then(() => {
            window.location.replace('/?post=new');
        })
        .catch((err) => {
            toast(err.response.data.msg);
        });
};

// Edit post
export const editPost = (id, postData, config) => () => {
    return axios
        .put(`/api/posts/edit/${id}`, postData, config)
        .then(() => {
            window.location.replace(`/post/${id}?post=updated`);
        })
        .catch((err) => {
            toast(err.response.data.msg);
        });
};

// Delete post
export const deletePost = (id) => () => {
    return axios
        .delete(`/api/posts/delete/${id}`)
        .then(() => {
            window.location.replace('/?post=deleted');
        })
        .catch((err) => {
            toast(err.response.data.msg);
        });
};

// Delete all user posts (triggers when account deleted)
export const deleteAllPosts = (id) => () => {
    return axios.delete(`/api/posts/delete/all/${id}`).catch((err) => {
        toast(err.response.data.msg);
    });
};
