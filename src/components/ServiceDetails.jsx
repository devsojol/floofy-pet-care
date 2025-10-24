import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) =>
        setService(data.find((s) => s.serviceId === parseInt(id)))
      )
      .catch((err) => console.error("Error loading service:", err));
  }, [id]);

  // Handle booking form submission
  const handleBooking = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    toast.success(`Thank you, ${name}! Your booking was successful.`, {
      position: "top-center",
    });

    e.target.reset(); // clear form
  };

  if (!service)
    return <p className="text-center py-10">Loading service details...</p>;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-10 text-[#222]">
        {service.serviceName}
      </h2>

      {/* Card Layout */}
      <div className="flex items-center gap-10 bg-white shadow-xl rounded-2xl p-10">
        {/* Image */}
        <div>
          <img
            src={service.image}
            alt={service.serviceName}
            className="rounded-xl w-full h-[500px] object-cover shadow-md"
          />
          {/* Back to services button */}
          <button
            onClick={() => navigate("/services")}
            className="text-white bg-[#ff3600] border border-[#ff3600] py-3 w-1/2 rounded cursor-pointer mb-6 block mt-8"
          >
            ← Back to Services
          </button>
        </div>

        {/* Details */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#333]">
            Provided by:{" "}
            <span className="text-[#ff3600]">{service.providerName}</span>
          </h3>

          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Email:</span>{" "}
            {service.providerEmail}
          </p>

          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {service.category}
          </p>

          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Slots Available:</span>{" "}
            {service.slotsAvailable}
          </p>

          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Rating:</span>{" "}
            <span className="text-yellow-500">
              {"★".repeat(Math.round(service.rating))}
              {"☆".repeat(5 - Math.round(service.rating))}
            </span>{" "}
            ({service.rating.toFixed(1)})
          </p>

          <p className="text-gray-800 font-semibold text-xl mb-4">
            Price: <span className="text-[#ff3600]">${service.price}</span>
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            {service.description}
          </p>
          {/* Booking Form */}
          <div className="">
            <form
              onSubmit={handleBooking}
              className="bg-gray-50 p-6 rounded-xl shadow-inner"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#333]">
                Book This Service
              </h3>

              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-[#ff3600]/30"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-[#ff3600]/30"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="bg-[#ff3600] text-white px-6 py-2 rounded-lg w-full hover:bg-[#e02f00] transition-all"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
