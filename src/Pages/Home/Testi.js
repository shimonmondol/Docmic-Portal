import React from 'react';
import Testimonial from '../../Images/Testimonial.PNG';

const Testi = () => {
    return (
        <div class="pb-12">
            <div class="bg-base-200 pb-6">
                <span class="text-blue-600">Testimonial</span>
                <h1 class="text-3xl font-bold">What they say?</h1>
            </div>
            <div class="card card-side shadow-xl">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Testimonial} class="max-w-sm rounded-lg shadow-xl" />
                    <div>
                        <h1>David James</h1>
                        <h1 class="font-bold">Patient</h1>
                        <p>simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Testi;