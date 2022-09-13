import React from 'react';
import Experience from '../../Images/Experience.PNG';

const Expert = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={Experience} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <span class="text-sky-500">16+ Years Experiences</span>
                    <h1 class="text-5xl">We Are Always ensure Best Medical Treatment For Your Health</h1>
                    <p class="py-6">simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik </p>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Expert;