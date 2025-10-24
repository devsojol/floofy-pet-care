import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const feedbacks = [
  {
    id: 1,
    name: "Sadia Rahman",
    image: "https://i.ibb.co.com/Cgfhyqx/Pet-Care-Options.jpg",
    rating: 5,
    review:
      "WarmPaws took such good care of my cat during winter! Their grooming and cozy clothes made my kitty so comfy!",
  },
  {
    id: 2,
    name: "Khandaker Sojol",
    image: "https://i.ibb.co.com/BHs9WVtF/1720080079265.jpg",
    rating: 4,
    review:
      "The pet jackets were awesome! My dog loved them. The delivery and service were both very quick and friendly.",
  },
  {
    id: 3,
    name: "Anika Chowdhury",
    image: "https://i.ibb.co.com/wN4mVRZ3/cat-lady-photos-20-2.jpg",
    rating: 5,
    review:
      "Loved their expert advice! Thanks to WarmPaws, my puppy stayed healthy and warm throughout the winter.",
  },
  {
    id: 4,
    name: "Farhan Kabir",
    image: "https://i.ibb.co.com/8Lp8xwbK/user-testing-review-1200x750.png",
    rating: 4,
    review:
      "Their paw balm worked like magic! No more dry paws for my little buddy. Highly recommend!",
  },
];

const FeedBack = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#f96d65]">
        Real stories from clients who trust our veterinary <br /> clinic with
        their pets
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {feedbacks.map((fb) => (
          <SwiperSlide key={fb.id}>
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300 text-center">
              <img
                src={fb.image}
                alt={fb.name}
                className="w-20 h-20 rounded-full mx-auto object-cover mb-4 border-4 border-[#f96d65]"
              />
              <h3 className="text-xl font-semibold">{fb.name}</h3>
              <p className="text-gray-600  my-3">{fb.review}</p>
              <div className="flex justify-center text-yellow-400 text-xl">
                {"★".repeat(fb.rating)}
                {"☆".repeat(5 - fb.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedBack;
