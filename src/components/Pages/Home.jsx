/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import gift from '../assets/image.png';
import journeyImg from '../assets/journey.png'; // replace with your actual image file
import foodImg from '../assets/food.png'; // replace with your actual image file
import shoppingImg from '../assets/shopping.png'; // replace with your actual image file

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4">
      <main className="flex flex-col md:flex-row items-center mt-12 w-full max-w-6xl">
        <div className="flex flex-col items-start w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-bold text-gray-800">
            Reward <span className="text-teal-500">Share</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A Platform for Sharing and Utilizing Unused Rewards from Daily Use Applications.
          </p>
          <p className="text-justify">
            In today's digital world, users often let rewards from apps like PhonePe, Google Pay, Paytm, Swiggy, and Zomato expire unused. I am starting Reward Share, a website where users can share their unused rewards with others. This platform works on a rotational system: 
            User 1 shares rewards to unlock more for themselves, and User 2 collects and uses them. We ensure all shared rewards are valid.
          </p>
          <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transform transition-transform duration-200 ease-in-out hover:scale-105">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src={gift} alt="Gift Box" className="max-w-full h-auto" />
        </div>
      </main>
      <section className="mt-12 w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            image={journeyImg} 
            category="For Journey" 
            description="Lorem Ipsum is simply dummy text of the printing." 
          />
          <Card 
            image={foodImg} 
            category="For Food" 
            description="Lorem Ipsum is simply dummy text of the printing." 
          />
          <Card 
            image={shoppingImg} 
            category="For Shopping" 
            description="Lorem Ipsum is simply dummy text of the printing." 
          />
        </div>
      </section>
    </div>
  );
}

function Card({ image, category, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt="Card image" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{category}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <button className="mt-4 px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Home;
