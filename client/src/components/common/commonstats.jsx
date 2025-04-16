import React from 'react';
import CountUp from 'react-countup';

const CommonStats = () => {
    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 shadow-lg">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 ">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Food Waste Management</h2>
                    <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">These are the stats of our food waste management system.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                    <div className="border border-gray-300 rounded-lg px-4 py-8 shadow-lg">
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                <CountUp end={20} duration={5} />
                            </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Total Members</p>
                        <p className="text-base mt-0.5 text-gray-500">Members with us</p>
                    </div>

                    <div className="border border-gray-300 rounded-lg px-4 py-8 shadow-lg">
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                <CountUp end={190} duration={5} />Kg
                            </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Total Food Waste Collected</p>
                        <p className="text-base mt-0.5 text-gray-500">Collecting food waste</p>
                    </div>

                    <div className="border border-gray-300 rounded-lg px-4 py-8 shadow-lg">
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                <CountUp end={187} duration={5} />Kg
                            </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Total Slurry Distributed</p>
                        <p className="text-base mt-0.5 text-gray-500">Helping farmers</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CommonStats;
