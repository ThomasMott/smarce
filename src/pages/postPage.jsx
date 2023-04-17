import React from 'react';

export default function PostPage() {
    return (
        <div className="px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <h1 className="text-xl font-bold mb-2">Post Title</h1>
            <p className="mb-6">
                Rating &#xb7; <a>Location</a>
            </p>
            <div className="grid gap-4">
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                        alt=""
                    />
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <h2 className="mt-6 font-bold text-lg">Company Name</h2>
            <p>Here is the material description.</p>
            <div className="mt-6 py-6 border-y border-gray-200">
                <h2 className="mb-4 font-bold text-lg">Where to collect</h2>
                <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                    alt=""
                />
                <h3 className="mt-4 font-bold text-md">Location, location, location</h3>
            </div>
            <div className="py-6">
                <h2 className="mb-4 font-bold text-lg">Company Name</h2>
                <p className="mb-4">
                    Rating &#xb7; <a>Location</a>
                </p>
                <p>Company bio</p>
            </div>
        </div>
    );
}
