import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Review = () => {
    const [user] = useAuthState(auth);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email]);


    return (
        <div className="py-14">
            <h2 className="text-gray-500 text-4xl px-5 md:ml-6 md:mt-0 mt-2 text-center">
                Reviews and Ratings
            </h2>
            <hr />
            <br />
            <section className="text-gray-700 body-font">
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center '>
                    {
                        reviews.map(review => <div key={review._id} className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Name: {review.displayName}</h2>
                                <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Ratings: {review.Ratings}</h1>
                                <p className="leading-relaxed mb-3">Reviews: {review.Review}</p>

                            </div>
                        </div>

                        )}
                </div>
            </section>
        </div>
    );
};

export default Review;