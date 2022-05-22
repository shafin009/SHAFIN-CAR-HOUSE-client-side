import React from 'react';
import Extra from './Extra1.jpg'

const ExtraSection = () => {
    return (
        <div>
            <br />
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Extra} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Here are the best car tools you'll need to get started..</h1>
                        <p className="mb-8 leading-relaxed">Whether you're fixing an old car or you have a brand new model, with the right car tools, you can skip the auto shop and start doing your own car maintenance.You'll save time and money with your own car tools, and if something breaks, you'll have the confidence and know-how to fix it. But you can't just drag your basic around-the-house toolbox out to the garage; an auto mechanic's car tools differ from, say, a woodworker's.</p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraSection;