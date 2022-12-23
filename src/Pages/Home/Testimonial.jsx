import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonial1 from "../../Assets/testimonial1.jpg";

const Testimonial = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="uppercase text-3xl font-semibold text-center">
          Our
          <span className="text-emerald-500"> Student's Say</span>
        </h1>
        <hr className="w-96 border-gray-400 mt-5" />
        <hr className="w-80 mt-3 border-gray-400" />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" flex flex-col items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 p-5 rounded  border-l-4 border-emerald-500">
            <img className="rounded-full h-20 w-20" src={testimonial1} alt="" />
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              libero molestiae, porro officiis dignissimos quasi!
            </p>
            <h2 className="text-xl text-emerald-500 font-medium">David</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 p-5 rounded  border-l-4 border-emerald-500">
            <img className="rounded-full h-20 w-20" src={testimonial1} alt="" />
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              libero molestiae, porro officiis dignissimos quasi!
            </p>
            <h2 className="text-xl text-emerald-500 font-medium">David</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 p-5 rounded  border-l-4 border-emerald-500">
            <img className="rounded-full h-20 w-20" src={testimonial1} alt="" />
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              libero molestiae, porro officiis dignissimos quasi!
            </p>
            <h2 className="text-xl text-emerald-500 font-medium">David</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 p-5 rounded  border-l-4 border-emerald-500">
            <img className="rounded-full h-20 w-20" src={testimonial1} alt="" />
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              libero molestiae, porro officiis dignissimos quasi!
            </p>
            <h2 className="text-xl text-emerald-500 font-medium">David</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 p-5 rounded  border-l-4 border-emerald-500">
            <img className="rounded-full h-20 w-20" src={testimonial1} alt="" />
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              libero molestiae, porro officiis dignissimos quasi!
            </p>
            <h2 className="text-xl text-emerald-500 font-medium">David</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 p-5 rounded  border-l-4 border-emerald-500">
            <img className="rounded-full h-20 w-20" src={testimonial1} alt="" />
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              libero molestiae, porro officiis dignissimos quasi!
            </p>
            <h2 className="text-xl text-emerald-500 font-medium">David</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
