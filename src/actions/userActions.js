import axios from 'axios';
import toast from 'react-hot-toast';
import setAuthToken from '../utils/setAuthToken';

// Get specific user (remains public)
export const getUser = (id) => () => {
    return axios
        .get(`/api/users/${id}`)
        .then((res) => {
            const users = res.data.user;
            return users;
        })
        .catch((err) => {
            toast(err.response.data);
        });
};

// Edit user (protected)
export const editUser = (id, userData) => () => {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token);
    
    return axios
        .put(`/api/users/edit/${id}`, userData)
        .then(() => {
            window.location.replace('/?user=updated');
        })
        .catch((err) => {
            if (err.response.status === 401) {
                toast('Please log in to edit your profile');
            } else {
                toast(err.response.data.msg || 'Error updating profile');
            }
        });
};

// Delete user (protected)
export const deleteUser = (id) => () => {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token);

    return axios
        .delete(`/api/users/delete/${id}`)
        .then(() => {
            window.location.replace('/?user=deleted');
        })
        .catch((err) => {
            if (err.response.status === 401) {
                toast('Please log in to delete your account');
            } else {
                toast(err.response.data.msg || 'Error deleting account');
            }
        });
};

// Save post (new)
export const savePost = (postId) => () => {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token);

    return axios
        .post(`/api/users/save-post/${postId}`)
        .then((res) => {
            toast.success('Post saved successfully');
            return res.data.savedPosts;
        })
        .catch((err) => {
            if (err.response.status === 401) {
                toast('Please log in to save posts');
            } else {
                toast(err.response.data.msg || 'Error saving post');
            }
        });
};

// Unsave post (new)
export const unsavePost = (postId) => () => {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token);

    return axios
        .delete(`/api/users/unsave-post/${postId}`)
        .then((res) => {
            toast.success('Post removed from saved');
            return res.data.savedPosts;
        })
        .catch((err) => {
            if (err.response.status === 401) {
                toast('Please log in to unsave posts');
            } else {
                toast(err.response.data.msg || 'Error removing saved post');
            }
        });
};

// Get saved posts (new)
export const getSavedPosts = () => () => {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token);

    return axios
        .get(`/api/users/saved-posts`)
        .then((res) => {
            return res.data.savedPosts;
        })
        .catch((err) => {
            if (err.response.status === 401) {
                toast('Please log in to view saved posts');
            } else {
                toast(err.response.data.msg || 'Error fetching saved posts');
            }
            return [];
        });
};
