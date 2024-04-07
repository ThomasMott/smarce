import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getPosts } from '../actions/postActions';
import { getUserParams } from '../actions/urlActions';
import Post from '../components/Post/Post';
import Skeleton from '../components/Skeleton/Skeleton';
import Tags from '../components/Tags/Tags';
// import Search from '../components/Search/Search';

export default function HomePage() {
    const dispatch = useDispatch();
    const query = useQuery();

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    // const variable array to save the users location

    // this will fire only on first render
    useEffect(() => {
        // get user data
        getUserParams();

        const myPromise = new Promise(function (myResolve, myReject) {
            // "Producing Code" (May take some time)
            let params = new URLSearchParams();

            //check for tags
            if (query.get('t')) {
                // if postcode then append to params
                params.append('t', query.get('t'));
            }

            // check if postcode supplied, if not attempt to use browser location
            if (query.get('p')) {
                // if postcode then append to params
                params.append('p', query.get('p'));
                myResolve(params);
            } else {
                // attempt browser location
                if (navigator.geolocation) {
                    // get the current users location
                    navigator.geolocation.getCurrentPosition(
                        (pos) => {
                            // append the geolocation coordinates to params
                            params.append('lat', pos.coords.latitude);
                            params.append('lon', pos.coords.longitude);
                            myResolve(params); // when successful
                            // update the value of userlocation variable
                        },
                        // if there was an error getting the users location
                        (error) => {
                            console.error('Error getting user location:', error);
                            myReject(); // when error
                        }
                    );
                }
                // if geolocation is not supported by the users browser
                else {
                    console.error('Geolocation is not supported by this browser.');
                }
            }
        });

        myPromise.then(
            function (value) {
                // get posts
                dispatch(getPosts(value)).then((res) => {
                    setPosts(res);
                    setLoading(false);
                });
            },
            function (error) {
                console.error(error);
            }
        );
    }, []);

    function useQuery() {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    return (
        <main>
            <Tags />
            <div className="grid gap-6 grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {loading && <Skeleton number={6} />}
                {posts &&
                    posts.map((post, index) => (
                        <Post
                            link={`/post/${post._id.toString()}`}
                            key={index}
                            title={post.title}
                            author={post.name}
                            location={post.location}
                            image={post.image}
                            distance={post.calcDistance}
                        />
                    ))}
            </div>
        </main>
    );
}
