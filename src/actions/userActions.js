import axios from 'axios';
import { GET_ERRORS } from './types';

// Get specific user
export const getUser = (id) => (dispatch) => {
    return axios
        .get(`/api/users/${id}`)
        .then((res) => {
            const users = res.data.user;
            return users;
        })
        .catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
        });
};

// Edit user
export const editUser = (id, userData) => (dispatch) => {
    return axios
        .put(`/api/users/edit/${id}`, userData)
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

// Delete user
export const deleteUser = (id) => (dispatch) => {
    return axios
        .delete(`/api/users/delete/${id}`)
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
