import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './store';

import './index.css';

/* pages */
import AboutPage from './pages/aboutPage';
import AccountPage from './pages/accountPage';
import EditPostPage from './pages/editPostPage';
import ErrorPage from './pages/errorPage';
import HelpPage from './pages/helpPage';
import HomePage from './pages/homePage';
import NewPostPage from './pages/newPostPage';
import PostPage from './pages/postPage';
import UserPage from './pages/userPage';
import Root from './routes/root';

/* define page routes */
export const ABOUT_PAGE = '/about';
export const ACCOUNT_PAGE = '/account';
export const EDIT_POST_PAGE = 'account/post/edit/';
export const HELP_PAGE = '/help';
export const HOME_PAGE = '/';
export const NEW_POST_PAGE = 'account/post/new';
export const POST_PAGE = '/post/';

// Check for token to keep user logged in
// if (localStorage.jwtToken) {
//     // Set auth token header auth
//     const token = localStorage.jwtToken;
//     setAuthToken(token);
//     // Decode token and get user info and exp
//     const decoded = jwt_decode(token);
//     // Set user and isAuthenticated
//     store.dispatch(setCurrentUser(decoded)); // Check for expired token
//     const currentTime = Date.now() / 1000; // to get in milliseconds
//     if (decoded.exp < currentTime) {
//         // Logout user
//         store.dispatch(logoutUser()); // Redirect to login
//         window.location.href = './login';
//     }
// }

/* set up page routes */
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
            <Route errorElement={<ErrorPage />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="help" element={<HelpPage />} />
                <Route path="account">
                    <Route index element={<AccountPage />} />
                    <Route path=":id" element={<UserPage />} />
                    <Route path="post/new" element={<NewPostPage />} />
                    <Route path="post/edit/:id" element={<EditPostPage />} />
                </Route>
                <Route path="post/:id" element={<PostPage />} />
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
