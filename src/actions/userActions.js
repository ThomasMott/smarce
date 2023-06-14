import axios from 'axios';
import toast from 'react-hot-toast';

// Get specific user
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

// Edit user
export const editUser = (id, userData) => () => {
    return axios
        .put(`/api/users/edit/${id}`, userData)
        .then(() => {
            window.location.replace('/?user=updated');
        })
        .catch((err) => {
            toast(err.response.data);
        });
};

// Delete user
export const deleteUser = (id) => () => {
    return axios
        .delete(`/api/users/delete/${id}`)
        .then(() => {
            window.location.replace('/?user=deleted');
        })
        .catch((err) => {
            toast(err.response.data);
        });
};
