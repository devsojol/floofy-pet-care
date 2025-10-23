import React from "react";

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Collins",
    title: "DVM, PhD",
    specialization: "Veterinary Surgery",
    education: "Harvard Veterinary School",
    experience: "10 years",
    image: "https://i.ibb.co.com/nNXdp3Wf/veterinarian-check-ing-puppy-s-health-23-2148728396.jpg",
  },
  {
    id: 2,
    name: "Dr. James Anderson",
    title: "DVM",
    specialization: "Pet Nutrition",
    education: "Cornell University",
    experience: "8 years",
    image: "https://i.ibb.co.com/1f6vtKs1/Hero-image-mobile-consultation.webp",
  },
  {
    id: 3,
    name: "Dr. Emily Thompson",
    title: "DVM, MS",
    specialization: "Dermatology",
    education: "UC Davis",
    experience: "7 years",
    image: "https://i.ibb.co.com/LL3MjNw/what-s-the-cost-to-spay-a-dog.jpg",
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    title: "DVM",
    specialization: "Emergency & Critical Care",
    education: "Colorado State University",
    experience: "12 years",
    image: "https://i.ibb.co.com/b5dGfvVp/images-q-tbn-ANd9-Gc-R8-JFKD5-Pdl17ujd1-ZTq-PCYl-DLClx6-S-Tg-NS4e-Ezja0-k-Esh8-Iv7-Qmt-Vnx-ZGsn-Jw2.jpg",
  },
];

const ExpertVets = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Meet Our Expert Vets
      </h2>

      <div className="flex flex-col space-y-8">
        {experts.map((vet) => (
          <div
            key={vet.id}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-40 h-40 object-cover rounded-full border-2 border-gray-300"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">
                {vet.name}, {vet.title}
              </h3>
              <p className="text-gray-700 mt-1 font-medium">{vet.specialization}</p>
              <p className="text-gray-500 mt-1">{vet.education}</p>
              <p className="text-gray-500 mt-1">{vet.experience} experience</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertVets;
