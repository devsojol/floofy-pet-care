import React, { useEffect, useState } from "react";

const WinterCareTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/tips.json")
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((err) => console.error("Error loading tips:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto  py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Winter Care Tips for Pets
      </h2>
      {loading ? (
        <span className="loading loading-dots loading-xl text-center"></span>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WinterCareTips;
