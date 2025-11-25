import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "./PropertyCarousel.css";
import "./MultiImage_1.css"
import { FaLocationPin } from "react-icons/fa6";
import { FaRulerCombined } from "react-icons/fa";

  const properties = [
  {
    id: 1,
    image: "lastgridimg/lastpart_img_1.jpg",
    title: "Agricultural Land",
    place: "Arjuna Agriland",
    size: "66 Cent",
    location: "Tambaram",
    price: "₹ 0.00"
  },
  {
    id: 2,
    image:"lastgridimg/lastpart_img_2.jpg",
    title: "Anjut Residential land",
    place: "Udayarpalayam",
    size: "865 Sqft",
    location: "Udayarpalayam",
    price: "₹ 1,111,500.00"
  },
  {
    id: 3,
    image: "lastgridimg/lastpart_img_3.jpg",
    title: "Serviced Apartments",
    place: "Janav apartments",
    size: "23 Sqft",
    location: "Ambattur",
    price: "₹ 4,098.00"
  },
  {
    id: 4,
    image: "lastgridimg/lastpart_img_4.jpg",
    title: "Serviced Apartments",
    place: "Janav apartments",
    size: "23 Sqft",
    location: "Ambattur",
    price: "₹ 4,098.00"
  }
];

export default function PropertyCarousel() {
  return (
    <div className="carousel-wrapper">
      <button className="arrow left swiper-button-prev">‹</button>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        spaceBetween={1}
        slidesPerView={1.2}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {properties.map(item => (
          <SwiperSlide key={item.id}>
            <div className="card">
              <div className="imgBox">
                <img src={item.image} alt={item.title} />
                <button className="fav">♡</button>
              </div>
              <div className="content">
                <h3>{item.title}</h3>
                <p className="sub1"> <FaLocationPin size={12}/> {item.place}</p>
                <p className="detail"><FaRulerCombined size={12}/>{item.size} · {item.location}</p>
                <p className="price">{item.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="arrow right swiper-button-next">›</button>
    </div>
  );
}