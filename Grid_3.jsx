import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./grid_3.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const properties = [
  { id: 1, image: "img.jpg", title: "Agricultural Land", offer: "10 - 20% off" },
  { id: 2, image: "img.jpg", title: "Residential Plot", offer: "10 - 20% off" },
  { id: 3, image: "img.jpg", title: "Serviced Apartment", offer: "10 - 20% off" },
  { id: 4, image: "img.jpg", title: "Beach View Land", offer: "10 - 20% off" },
];

export default function Grid_3({ sliderId }) {
  const prevClass = `prev-${sliderId}`;
  const nextClass = `next-${sliderId}`;

  return (
    <div className="carousel-wrapper">
      
      {/* Unique left arrow */}
      <button className={`arrow left ${prevClass}`}>
        <FaChevronLeft size={20} />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }}
        spaceBetween={12}
        slidesPerView={1.2}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {properties.map(item => (
          <SwiperSlide key={item.id}>
            <div className="card hoverLift">
              <div className="imgBox3">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="contentCenter">
                <h3>{item.title}</h3>
                <p className="offer">⚡{item.offer}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Unique right arrow */}
      <button className={`arrow right ${nextClass}`}>
        <FaChevronRight size={20} />
      </button>

    </div>
  );
}
