import axios from 'axios';
import jwt_decode from 'jwt-decode';
import toast from 'react-hot-toast';
import setAuthToken from '../utils/setAuthToken';

import { SET_CURRENT_USER, USER_LOADING } from './types';

// Register User
export const registerUser = (userData) => () => {
    axios
        .post('/api/users/register', userData)
        .then(() => {
            window.location.replace('/?user=created');
        }) // re-direct to login on successful register
        .catch((err) => {
            toast(err.response.data.msg);
        });
};

// Login - get user token
export const loginUser = (userData) => (dispatch) => {
    axios
        .post('/api/users/login', userData)
        .then((res) => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            
            const decoded = jwt_decode(token);
            console.log('Login - Decoded User:', decoded); // Debug log
            
            dispatch(setCurrentUser(decoded));
            toast('Successfully logged in');
        })
        .catch((err) => {
            toast(err.response.data.msg);
        });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
    };
};

// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING,
    };
};

// Log user out
export const logoutUser = () => (dispatch) => {
    // Remove token from local storage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
    window.location.replace('/?user=logout');
};
