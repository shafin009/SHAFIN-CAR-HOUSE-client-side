import React from 'react';
import code from './java.JPG'

const Blogs = () => {
    return (
        <div>
            <br />
            <div class="card text-center">
                <div class="card-header">
                    Question-1. How will you improve the performance of a React Application?
                </div>
                <div class="card-body">
                    <p class="card-text">
                        <li>1. Using Immutable Data Structures.</li>
                        <li>2. Function/Stateless Components and React.PureComponent.</li>
                        <li>3. Multiple Chunk Files.</li>
                        <li>4.Using Production Mode Flag in Webpack.</li>
                        <li>5.Dependency optimization.</li>
                        <li>6. Avoid Inline Function Definition in the Render Function.</li>
                    </p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-header">
                    Question-2. What are the different ways to manage a state in a React application?
                </div>
                <div class="card-body">
                    <p class="card-text">

                        There are four main types of state you need to properly manage in your React apps:

                        <li>1.Local state.</li>
                        <li>2.Global state.</li>
                        <li>3.Server state.</li>
                        <li>4.URL state.</li>
                    </p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-header">
                    Question-3. How does prototypical inheritance work?
                </div>
                <div class="card-body">
                    <p class="card-text">
                        আপনি যখন কোনো object-এর কোনো property or method access করার চেষ্টা করেন, তখন javascript প্রথমে object-এর উপরই অনুসন্ধান করবে, এবং যদি এটি না পাওয়া যায় তবে এটি object-এর [[Prototype]] অনুসন্ধান করবে। যদি object এবং এর [[[Prototype]] উভয়ের সাথে consulting করার পরেও কোন মিল পাওয়া যায় না, JavaScript link করা object-এর Prototype পরীক্ষা করবে এবং Prototype চেইনের শেষ না হওয়া পর্যন্ত অনুসন্ধান চালিয়ে যাবে। Prototype চেইনের শেষে Object.prototype থাকে। সমস্ত objects inherit-এর properties এবং methods-এর  উত্তরাধিকারী হয়। chain-এর শেষের বাইরে search করার যেকোন attempt-এর ফলাফল null.
                    </p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-header">
                    Question-4.Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`
                </div>
                <div class="card-body">
                    <p class="card-text">
                        One should never update the state directly because of the following reasons:

                        <li>1.আপনি যদি এটি সরাসরি update করেন, তাহলে setState() কে পরে Call করলে আপনার করা update-টি replace হয়ে যেতে পারে।</li>
                        <li>2.আপনি যখন সরাসরি state update করেন, তখন এটি এই state-কে immediately change করে না। পরিবর্তে, এটি একটি মুলতুবি অবস্থার রূপান্তর তৈরি করে এবং এই পদ্ধতিতে call করার পরে এটি access করা শুধুমাত্র present value return দেবে.</li>
                        <li>3.আপনি সমস্ত components জুড়ে state control হারাবেন.</li>

                    </p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-header">
                    Question-5. You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div class="card-body">
                    <p class="card-text">
                        The input field value will search a product by find method.
                        <figure className="px-10 pt-10">
                            <img src={code} alt="" className="rounded-xl" />
                        </figure>
                    </p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-header">
                    Question-6. What is a unit test? Why should write unit tests?
                </div>
                <div class="card-body">
                    <p class="card-text">
                        Computer Programming-এ, Unit Test হল একটি software testing method যার মাধ্যমে সোর্স কোডের পৃথক একক-সংশ্লিষ্ট control data, ব্যবহার পদ্ধতি এবং operating procedures-এর সাথে এক বা একাধিক Computer Programme মডিউলের সেট-সেগুলি use-এর জন্য উপযুক্ত কিনা তা নির্ধারণ করতে test করা হয়। unit test-গুলি সাধারণত software ডেভেলপারদের দ্বারা লিখিত এবং চালিত স্বয়ংক্রিয় testing হয় যাতে একটি application-এর একটি অংশ ("unit" নামে পরিচিত) তার design পূরণ করে এবং উদ্দেশ্য অনুযায়ী আচরণ করে। procedural programming-এ, একটি unit একটি সম্পূর্ণ module হতে পারে, কিন্তু এটি সাধারণত একটি পৃথক function।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;