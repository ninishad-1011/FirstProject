import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Learn more about our mission, vision, and the team behind our success.
        </p>
      </div>

      {/* About Content */}
      <div className="md:flex md:space-x-10 items-center">
        {/* Image */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
            alt="About Us"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our mission is to provide high-quality products and services that empower our customers
            to achieve their goals. We value innovation, integrity, and customer satisfaction above all.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 mb-4">
            We aim to be a global leader in our industry by consistently delivering innovative solutions
            and fostering a culture of excellence and creativity.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-700">
            Our dedicated team of professionals brings a wealth of experience and expertise to ensure
            that every project we undertake meets the highest standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
