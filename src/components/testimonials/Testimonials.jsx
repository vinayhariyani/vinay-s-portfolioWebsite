import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Parth Hariyani",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta rem quisquam commodi recusandae nihil doloribus. Mollitia enim praesentium aliquid fugiat fugit! Fuga voluptate illo beatae earum facere, veniam cum libero.",
  },
  {
    avatar: AVTR2,
    name: "Vivek Hariyani",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, temporibus.",
  },
  {
    avatar: AVTR3,
    name: "Devang Hariyani",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur nesciunt quis odio recusandae architecto aspernatur labore voluptatem necessitatibus quasi provident.",
  },
  {
    avatar: AVTR4,
    name: "Devbrat Hariyani",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, architecto. Asperiores sapiente voluptate neque commodi soluta quod earum nobis possimus explicabo voluptates. Aliquid porro velit quia numquam nesciunt ipsa earum consequuntur harum. Cum qui possimus quisquam omnis eos facere saepe.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
