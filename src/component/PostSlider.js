"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Pre from "@/assets/images/pre.svg";
import Next from "@/assets/images/next.svg";

export default function Slider(props) {
  return (
    <>
      <div style={{ maxWidth: "300px", overflow: "hidden" }}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={10}
          slidesPerView={1}
        >
          {props.posts &&
            props.posts.map((post, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="post_card">
                    <Image
                      src={post.image}
                      alt={post.title}
                      title={post.title}
                      className="img_fuild"
                      width={301}
                      height={165}
                    />
                    <div className="card_body">
                      <ul className="list">
                        <li className="category">{post.category}</li>
                        <li className="date">| {post.date}</li>
                      </ul>
                      <h3 className="title">{post.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>

        <div className="swiper_btn">
          <button className="swiper-button-prev">
            <Image src={Pre} alt="icon" width={16} height={16} /> Previous
          </button>
          <button className="swiper-button-next">
            Next
            <Image src={Next} alt="icon" width={16} height={16} />
          </button>
        </div>
      </div>
    </>
  );
}
