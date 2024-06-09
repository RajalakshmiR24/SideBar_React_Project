import React from 'react';
import gift from '../../assets/image.png';
import Articles from '../Resources/Articles';
import Tutorials from '../Resources/Tutorials';
import Company from './Company';
import About from './About';

function Home() {
  return (
    <div className="bg-gray-100 flex flex-col items-center px-4">
      <main className="flex flex-col md:flex-row items-center mt-12 w-full max-w-6xl">
        <div className="flex flex-col items-start w-full md:w-1/2 p-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800">
            Reward <span className="text-teal-500">Share</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            A Platform for Sharing and Utilizing Unused Rewards from Daily Use Applications.
          </p>
          <p className="mt-4 text-justify text-base md:text-lg text-gray-700">
            In today's digital world, users often let rewards from apps like PhonePe, Google Pay, Paytm, Swiggy, and Zomato expire unused. Reward Share is a website where users can share their unused rewards with others. This platform works on a rotational system: User 1 shares rewards to unlock more for themselves, and User 2 collects and uses them. We ensure all shared rewards are valid.
          </p>
          <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transform transition-transform duration-200 ease-in-out hover:scale-105">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 p-5">
          <img src={gift} alt="Gift Box" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      </main>
      <section className="mt-12 w-full max-w-6xl">
        <Articles />
        <Tutorials />
      </section>
      <section className="mt-12 w-full max-w-6xl">
        <Company />
        <About />
      </section>
    </div>
  );
}

export default Home;
