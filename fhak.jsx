import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./PropertyCarousel.css";

const properties = [
  const properties = [
  {
    id: 1,
    image: "image1.jpg",
    title: "Agricultural Land",
    place: "Arjuna Agriland",
    size: "66 Cent",
    location: "Tambaram",
    price: "₹ 0.00"
  },
  {
    id: 2,
    image: "image2.jpg",
    title: "Anjut Residential land",
    place: "Udayarpalayam",
    size: "865 Sqft",
    location: "Udayarpalayam",
    price: "₹ 1,111,500.00"
  },
  {
    id: 3,
    image: "image3.jpg",
    title: "Serviced Apartments",
    place: "Janav apartments",
    size: "23 Sqft",
    location: "Ambattur",
    price: "₹ 4,098.00"
  }
];
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
        spaceBetween={20}
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
                <p className="sub">{item.place}</p>
                <p className="detail">{item.size} · {item.location}</p>
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











.card {
  width: 100%;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.10);
}

.imgBox {
  position: relative;
  height: 200px;
}

.imgBox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fav {
  position: absolute;
  top: 12px;
  right: 12px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.content {
  padding: 16px;
}

.content h3 {
  font-size: 18px;
  margin: 0 0 4px;
  font-weight: 600;
}

.sub {
  font-size: 14px;
  color: #666;
  margin: 0 0 6px;
}

.detail {
  color: #666;
  font-size: 14px;
}

.price {
  margin-top: 8px;
  font-weight: bold;
  font-size: 16px;
}
.carousel-wrapper {
  position: relative;
  width: 100%;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background: white;
  font-size: 22px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.arrow.left {
  left: -20px;
}

.arrow.right {
  right: -20px;
}

.arrow:active {
  transform: translateY(-50%) scale(0.9);
}