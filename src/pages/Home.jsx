import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// Import slick carousel CSS (add these to your index.css or App.css)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images individually
import image1 from '../assets/home/image1.jpg';
import image2 from '../assets/home/image2.jpg';
import image3 from '../assets/home/image3.jpg';
// Add more imports for each image you have

const Home = () => {
  // Create an array of imported images
  const images = [image1, image2, image3]; // Add all your imported images here
  
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto p-8 text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-sky-900 mb-4">
          Welcome to Lifestyle Tracker
        </h1>
        <p className="text-gray-700 text-lg mb-8">Track your lifestyle habits to reduce myopia risk.</p>
        
        {/* Carousel Container */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div>
          <Link 
            to="/form" 
            className="inline-block bg-sky-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-white hover:text-sky-600 hover:shadow-lg transition duration-300 ease-in-out border-2 border-sky-600"
          >
            Go to Lifestyle Form
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
