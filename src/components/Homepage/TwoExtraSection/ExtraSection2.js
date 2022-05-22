import React from 'react';
import Extra2 from './Extra2.jpg'
import card1 from './card1.jpg'
import card2 from './card2.jpg'
import card3 from './card3.jpg'


const ExtraSection2 = () => {
    return (
        <div>
            <br />
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={Extra2} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">For mechanics, car repair professionals as well as for anybody whose hobby is much more.
                        </h1>
                        <p class="mb-8 leading-relaxed">A good set of hand tools is a necessity for auto repair, but servicing many automotive systems requires special purpose tools. Some are as simple as an oil filter wrench or a jack and jack stands for raising and safely supporting the vehicle, but others, like scan tools and electronic testers, are much more complex and necessary for diagnosing computer controlled and electrical systems problems. But no matter what system or area of the vehicle you are working on, engine, transmission, brakes, or suspension, fuel, cooling, A/C or exhaust systems, we have all the tools you will need for a successful repair.</p>
                    </div>
                </div>
            </section>
            <br />
            <h1 className='text-center text-5xl font-serif underline text-stone-700'>Helpful Articles</h1>
            <br />
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={card1} alt="blog" />
                                <div class="p-6">

                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">EV Charging Equipment: What You Need to Know?</h1>
                                    <p class="leading-relaxed mb-3">For owners of EVs as well as those who aspire to own one, charging-related equipment you’ll need is important to be aware of. In this article, we’ll discuss home-based charging cords, adapters, charging stands, holsters, and more that make EV charging quicker, more efficient, and more convenient.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={card2} alt="blog" />
                                <div class="p-6">

                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Does CARiD Give Me Choices When Buying Repair Parts for My Car?</h1>
                                    <p class="leading-relaxed mb-3">A recent news story stated that the average age of vehicles on the road in the United States keeps climbing and has now reached 12 years. Much of this can be attributed to improved mechanicals, dependable electronics. The Covid shutdown which began in 2020 caused car manufacturers to temporarily shut their factories and cancel orders for microchips. Unexpectedly and for numerous reasons, consumer demand actually rose, and within months, new car demand far outstripped supply.</p>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={card3} alt="blog" />
                                <div class="p-6">

                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">My Idea of a Perfect Bare-Bones Economy Car</h1>
                                    <p class="leading-relaxed mb-3">Has this happened to you? You buy a lower-priced car intending to save money only to end up dropping paychecks into it later in the interest of upgrading things. I don’t mean spending money on necessary repairs - I’m talking about non-essential things that could be lived without..I’ll admit that’s happened to me a number of times, and it didn’t matter whether my money-saving vehicle purchase was used or new, winter beater or everyday driver, luxury ride or economy car.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ExtraSection2;