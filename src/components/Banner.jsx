import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

import slide1 from "../assets/SLIDE_01.jpg";
import slide2 from "../assets/SLIDE_02.jpg";
import slide3 from "../assets/SLIDE_03.jpg";
import slide4 from "../assets/SLIDE_04.jpg";

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container mx-auto py-4">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative min-h-[70vh] rounded-lg overflow-hidden">
            <motion.div
              key={`slide1-${activeIndex}`}
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 5, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide1})` }}
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              {activeIndex === 0 && (
                <motion.h1
                  key={`text1-${activeIndex}`}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg text-center px-4"
                >
                  Welcome to <br /> floofy WarmPaws
                </motion.h1>
              )}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative min-h-[70vh] rounded-lg overflow-hidden">
            <motion.div
              key={`slide2-${activeIndex}`}
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 5, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide2})` }}
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              {activeIndex === 1 && (
                <motion.h1
                  key={`text2-${activeIndex}`}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg text-center px-4"
                >
                  Heated Boarding <br /> & Safety Checks
                </motion.h1>
              )}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative min-h-[70vh] rounded-lg overflow-hidden">
            <motion.div
              key={`slide3-${activeIndex}`}
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 5, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide3})` }}
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              {activeIndex === 2 && (
                <motion.h1
                  key={`text3-${activeIndex}`}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg text-center px-4"
                >
                  Keep Your <br /> Pets Warm & Happy!
                </motion.h1>
              )}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative min-h-[70vh] rounded-lg overflow-hidden">
            <motion.div
              key={`slide4-${activeIndex}`}
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 5, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide4})` }}
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              {activeIndex === 3 && (
                <motion.h1
                  key={`text4-${activeIndex}`}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg text-center px-4"
                >
                  Winter Care <br /> for Furry Friends
                </motion.h1>
              )}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;