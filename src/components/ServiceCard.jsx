import React from "react";

const ServiceCard = ({ service }) => {
  console.log(service);

  const { serviceName, image, rating, price } = service;
  console.log(image);
  

  return (
    <div>
      <div
        key={service.serviceId}
        className="bg-white rounded-lg py-4 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={image}
          alt={serviceName}
          className="w-full h-86 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{serviceName}</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400 mr-2">
              {"★".repeat(Math.round(rating))}
              {"☆".repeat(5 - Math.round(rating))}
            </span>
            <span className="text-gray-600">{rating.toFixed(1)}</span>
          </div>
          <p className="text-gray-800 font-semibold mb-4">${price}</p>
          <button className="bg-[#ff3600] text-white px-4 py-2 rounded-lg w-full hover:bg-[#e02f00] transition-colors cursor-pointer">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
