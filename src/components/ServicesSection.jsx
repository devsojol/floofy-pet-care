import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading services:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Popular Winter Care Services
      </h2>

      {loading ? (
       <span className="loading loading-dots loading-xl text-center "data-aos="fade-up"></span>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.serviceId} service={service} data-aos="zoom-in" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
