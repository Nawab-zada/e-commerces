import Image from 'next/image';
import React from 'react';

const FeaturesCard = () => {
  const features = [
    {
      title: "Using Good Quality Materials",
      description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit."
    },
    {
      title: "Using Good Quality Materials",
      description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit."
    },
    {
      title: "Using Good Quality Materials",
      description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit."
    },
    {
      title: "Using Good Quality Materials",
      description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-[50px] md:py-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left side - Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 place-items-center">
          {features.map((feature, index) => (
            <div key={index} className="relative group hover:-translate-y-2 transition-transform duration-300">
              {/* Background Number */}
              <span className="absolute -top-10 left-0 text-[80px] sm:text-[100px] font-bold text-gray-100 -z-10 group-hover:text-gray-200 transition-colors">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              
              {/* Content */}
              <div className="relative w-full sm:w-[300px] p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Image and Text */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="relative w-full md:w-auto">
            <Image 
              src="/image (4).webp" 
              alt="Feature" 
              width={300}
              height={250}
              className="object-cover w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          <div className="space-y-4 w-full md:w-[200px] flex flex-col justify-center items-center text-center md:text-left">
            <p className="text-gray-600 tracking-wider leading-relaxed text-sm sm:text-base">
              This piece is ethically crafted in our small family-owned workshop in 
              Peru with unmatched attention to detail and care. The Natural color is 
              the actual natural color of the fiber, undyed and 100% traceable.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              See All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;