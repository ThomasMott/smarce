import axios from 'axios';
import toast from 'react-hot-toast';

// Add Saved posts
// ~ .get(`/api/posts/${user}`);
// Add get by query
// ~ .get(`/api/posts?query=${query}`);

// Get all posts
export const getPosts = () => () => {
    return axios
        .get('/api/posts/')
        .then((res) => {
            const posts = res.data.posts;
            return posts;
        })
        .catch((err) => {
            toast(err.response.data);
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
            toast(err.response.data);
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
            toast(err.response.data);
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
            // toast(err.response.data);
            console.log(err.response.data);
        });
};

// Edit post
export const editPost = (id, postData) => () => {
    return axios
        .put(`/api/posts/edit/${id}`, postData)
        .then(() => {
            window.location.replace(`/post/${id}?post=updated`);
        })
        .catch((err) => {
            toast(err.response.data);
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
            toast(err.response.data);
        });
};

// Delete all user posts (triggers when account deleted)
export const deleteAllPosts = (id) => () => {
    return axios.delete(`/api/posts/delete/all/${id}`).catch((err) => {
        toast(err.response.data);
    });
};
