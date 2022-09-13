import React from 'react';
import Checkup from '../../Images/Checkup.PNG'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={Checkup} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your <span class="text-sky-500">Health</span> Is Our Top <span class="text-violet-500">Priority</span></h1>
                    <p class="py-6">There are many variations of passages of Ipsum available, but the majority hae suffered. </p>
                    <button class="btn btn-primary">Meet Our Specialist</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;