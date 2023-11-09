import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <p className="text-xl text-gray-500 mb-8">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Go back to home
            </Link>
        </div>
    );
};

export default Error;
