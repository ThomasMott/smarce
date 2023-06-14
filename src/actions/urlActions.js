import toast from 'react-hot-toast';

// Get post info from url params
export const getPostParams = () => {
    let params = new URL(document.location).searchParams;
    let postParam = params.get('post');

    if (postParam) {
        switch (postParam) {
            case 'new':
                toast('Successfully created post');
                break;
            case 'deleted':
                toast('Successfully deleted post');
                break;
            case 'updated':
                toast('Successfully updated post');
                break;
            default:
                break;
        }
    }
};

// Get user info from url params
export const getUserParams = () => {
    let params = new URL(document.location).searchParams;
    let userParam = params.get('user');

    if (userParam) {
        switch (userParam) {
            case 'new':
                toast('Successfully created user');
                break;
            case 'deleted':
                toast('Successfully deleted user');
                break;
            case 'updated':
                toast('Successfully updated user');
                break;
            case 'logout':
                toast('Successfully logged out');
                break;
            default:
                break;
        }
    }
};
