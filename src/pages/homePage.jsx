import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getPosts } from '../actions/postActions';
import { getUserParams } from '../actions/urlActions';
import Post from '../components/Post/Post';
import Skeleton from '../components/Skeleton/Skeleton';
// import { getPostcode } from '../actions/postcodeActions';
// import Search from '../components/Search/Search';

export default function HomePage() {
    const dispatch = useDispatch();
    const query = useQuery();

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const variable array to save the users location
    const [userLocation, setUserLocation] = useState(null);

    // define the function that finds the users geolocation
    const getUserLocation = () => {
        // if geolocation is supported by the users browser
        if (navigator.geolocation) {
            // get the current users location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // save the geolocation coordinates in two variables
                    const { latitude, longitude } = position.coords;
                    // update the value of userlocation variable
                    setUserLocation({ latitude, longitude });
                },
                // if there was an error getting the users location
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        }
        // if geolocation is not supported by the users browser
        else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    useEffect(() => {
        getUserLocation(); // this will fire only on first render
        var params = new URLSearchParams();

        if (query.get('l')) {
            params.append('l', query.get('l'));
        }
        dispatch(getPosts(params)).then((res) => {
            setPosts(res);
            setLoading(false);
        });
        getUserParams();
    }, []);

    console.log(userLocation);

    function useQuery() {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    // need location(l), tag(t), search(s)
    console.log(query.get('l'));

    // make big form for all this (above) search form, tags etc

    return (
        <main>
            category button
            <div className="grid gap-8 grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {/* filter by material type */}
                {loading || (!posts && <Skeleton number={6} />)}
                {posts &&
                    posts.map((post, index) => (
                        <Post
                            link={`/post/${post._id.toString()}`}
                            key={index}
                            title={post.title}
                            author={post.name}
                            location={post.location}
                        />
                    ))}
            </div>
        </main>
    );
}
