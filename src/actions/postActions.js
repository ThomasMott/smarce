import axios from 'axios';
import { GET_ERRORS } from './types';

// Add Saved posts
// ~ .get(`/api/posts/${user}`);
// Add get by query
// ~ .get(`/api/posts?query=${query}`);

// Get all posts
export const getPosts = () => (dispatch) => {
    return axios
        .get('/api/posts/')
        .then((res) => {
            const posts = res.data.posts;
            return posts;
        })
        .catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
        });
};

// Get specific posts
export const getPost = (id) => (dispatch) => {
    return axios
        .get(`/api/posts/${id}`)
        .then((res) => {
            const posts = res.data.posts;
            return posts;
        })
        .catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
        });
};

// New post
export const newPost = (postData) => (dispatch) => {
    axios
        .post('/api/posts/new', postData)
        .then((res) => {
            return res;
        })
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};

// Edit post
export const editPost = (postData) => (dispatch) => {
    axios
        .post('/api/posts/edit/{id}', postData)
        .then((res) => {
            return res;
        })
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};

// Delete post
export const deletePost = (postData) => (dispatch) => {
    axios
        .post('/api/posts/delete/{id}', postData)
        .then((res) => {
            return res;
        })
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};
