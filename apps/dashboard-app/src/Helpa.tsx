import React from 'react';

const Helps: React.FC = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar and Navbar should already be in the layout component */}
            <div className="flex-grow bg-gray-50 p-6">
                <h1 className="text-2xl font-semibold mb-4">Helps</h1>
                
                <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter email"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="problem">
                                Tell Us About Problem
                            </label>
                            <textarea
                                id="problem"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter details to visualize and showcase your product information efficiently"
                                rows={4}
                            />
                        </div>

                        <p className="text-sm text-gray-500">
                            Describe the issue you’re experiencing. Our team will review your message and respond as soon as possible to help resolve your concern.
                        </p>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Helps;
