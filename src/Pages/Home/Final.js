import React from 'react';
import Won from '../../Images/Won.PNG';

const Final = () => {
    return (
        <div class="bg-base-200">
                <div class="pb-6">
                    <span class="text-sky-500">Our Hospital Features</span>
                    <h1 class="text-3xl">Make An Appointment Easy And Fast Services  </h1>
                </div>
            
                <div class="card lg:card-side bg-base-200">
                <img src={Won} class="max-w-sm rounded-lg shadow-2xl" />
                
                <div>
                    <div class="card">
                        <div class="card-body">
                            <p class="card-title">24 Hours Doctor Support</p>
                            <p class="card-text">simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">Exclusive Supports</h6>
                            <p class="card-text">simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">Friendly Environment</h6>
                            <p class="card-text">simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">24 Hours Nurse Supports</h6>
                            <p class="card-text">simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's</p>
                        </div>
                    </div>
                </div>

            </div>   
            
                
            
        </div>
    );
};

export default Final;