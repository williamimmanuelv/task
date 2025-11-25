import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "./PropertyCarousel.css";
import "./MultiImage_top.css"

  const properties = [
  {
    id: 1,
    image: "lastgridimg/lastpart_img_1.jpg",
    title: "Agricultural Land"
  },
  {
    id: 2,
    image:"lastgridimg/lastpart_img_2.jpg",
    title: "House ",
  },
  {
    id: 3,
    image: "lastgridimg/lastpart_img_3.jpg",
    title: "Apartment",
  },
  {
    id: 4,
    image: "lastgridimg/lastpart_img_4.jpg",
    title: "Layout",
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
                {/* <button className="fav">♡</button> */}
              </div>
              <div className="content">
                <h3 className="h1">{item.title}</h3>
                <p className="sub">10 -20 % OFF</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="arrow right swiper-button-next">›</button>
    </div>
  );
}