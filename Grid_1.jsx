import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./grid_1.css";
// import { FaRegHeart } from "react-icons/fa";
//                 <button className="fav"><FaRegHeart size={10}/></button>

import { FaLocationPin } from "react-icons/fa6";
import { FaRulerCombined } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const properties = [
  {
    id: 1,
    image: "img.jpg",
    title: "Agricultural Land",
    place: "Arjuna Agriland",
    size: "66 Cent",
    location: "Tambaram",
    price: "₹ 0.00"
  },
  {
    id: 2,
    image: "img.jpg",
    title: "Anjut Residential land",
    place: "Udayarpalayam",
    size: "865 Sqft",
    location: "Udayarpalayam",
    price: "₹ 1,111,500.00"
  },
  {
    id: 3,
    image: "img.jpg",
    title: "Serviced Apartments",
    place: "Janav apartments",
    size: "23 Sqft",
    location: "Ambattur",
    price: "₹ 4,098.00"
  },
  {
    id: 4,
    image: "img.jpg",
    title: "Serviced Apartments",
    place: "Janav apartments",
    size: "23 Sqft",
    location: "Ambattur",
    price: "₹ 4,098.00"
  }
];

export default function Grid_1({ sliderId }) {

  // Unique button classes for this instance
  const prevClass = `g1-prev-${sliderId}`;
  const nextClass = `g1-next-${sliderId}`;

  return (
    <div className="carousel-wrapper">

      {/* Unique prev button */}
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
              <div className="imgBox">
                <img src={item.image} alt={item.title} />
                <button className="fav">♡</button>
              </div>

              <div className="content">
                <h3>{item.title}</h3>
                <p className="sub1">{item.place}</p>
                <p className="detail">
                  <FaRulerCombined size={12} /> {item.size}
                </p>
                <p className="detail">
                  <FaLocationPin size={12} /> {item.location}
                </p>
                <p className="price">{item.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Unique next button */}
      <button className={`arrow right ${nextClass}`}>
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}
