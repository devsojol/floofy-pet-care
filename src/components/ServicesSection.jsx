import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading services:", err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Popular Winter Care Services
      </h2>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => <ServiceCard key={service.serviceId} service={service} />
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
