import React from 'react';
const CallToAction = () => {
    return (
       <div>
         <div className="bg-gray-100 py-12 mt-2">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-5">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Limited time offer</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl antialiased">
                        Get 10% off your first purchase
                    </p>
                    <p className="mt-4 text-start max-w-3xl text-xl text-gray-500  mx-auto antialiased">
                        Sign up for our newsletter and receive a coupon code for 10% off your first purchase.
                    </p>
                    <div className="mt-6 max-w-lg mx-auto">
                        <form className="sm:flex">
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
                                placeholder="Enter your email"
                            />
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
       </div>
    );
};

export default CallToAction;
