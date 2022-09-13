import React from 'react';
import Question from '../../Images/Quesion.PNG';

const Answer = () => {
    return (
        <div class="hero min-h-screen bg-base-200 pb-6">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={Question} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <span class="text-sky-500">FAQ Question</span>
                    <h1 class="text-3xl py-4">Get Your General Answer</h1>
                    <p class="py-2">Get Your Genaral Answer <span class="text-sky-500 pl-12"> +</span></p>
                    <p class="py-2">Will I always see my own doctor? <span class="text-sky-500 pl-12"> +</span></p>
                    <p class="py-2">What is my one Medical's care? <span class="text-sky-500 pl-12"> +</span></p>
                    <p class="py-2">What is evidence based medicine? <span class="text-sky-500 pl-12"> +</span></p>
                    <p class="py-2">What is the academic medical center? <span class="text-sky-500 pl-12"> +</span></p>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Answer;