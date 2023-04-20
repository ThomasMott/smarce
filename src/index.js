import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

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
// import SavedPage from './pages/savedPage';
import Root from './routes/root';

/* define page routes */
export const ABOUT_PAGE = '/about';
export const ACCOUNT_PAGE = '/account';
export const EDIT_POST_PAGE = 'account/post/edit/1';
export const HELP_PAGE = '/help';
export const HOME_PAGE = '/';
export const NEW_POST_PAGE = 'account/post/new';
export const POST_PAGE = '/post/1';

/* set up page routes */
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
            <Route errorElement={<ErrorPage />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="help" element={<HelpPage />} />
                <Route path="account" element={<AccountPage />}>
                    <Route index element={<HomePage />} />
                    <Route path="post/new" element={<NewPostPage />} />
                    <Route path="post/edit/:id" element={<EditPostPage />} />
                </Route>
                <Route path="post/:id" element={<PostPage />} />
                {/* <Route path="saved" element={<SavedPage />} /> */}
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
