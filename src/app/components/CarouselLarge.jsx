"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const CarouselLarge = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all 1s"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="carousel-item">
        {/* <img src="../../images/dark_matter_large.jpeg" alt="alcapulco" /> */}
        <Image
          src="/images/dark_matter_large.jpeg"
          alt="alcapulco"
          width={900}
          height={900}
        />
      </div>
      <div className="carousel-item">
        {/* <img src="../../images/friday_baseball_large.jpeg" alt="alcapulco" /> */}
        <Image
          src="/images/friday_baseball_large.jpeg"
          alt="baseball"
          width={900}
          height={900}
        />
      </div>
      <div className="carousel-item">
        <img src="../../images/alcapulco_large.jpeg" alt="alcapulco" />
      </div>
      <div className="carousel-item">
        <img src="../../images/instigators_large.jpg" alt="alcapulco" />
      </div>
      <div className="carousel-item">
        <img src="../../images/loot_large.jpeg" alt="alcapulco" />
      </div>
      <div className="carousel-item">
        <img src="../../images/cowboy_cartel_large.jpg" alt="alcapulco" />
      </div>
      <div className="carousel-item">
        <img src="../../images/alcapulco_large.jpeg" alt="alcapulco" />
      </div>
      {/* <div className="carousel-item">
        <img src="../../images/alcapulco_large.jpeg" alt="alcapulco" />
      </div> */}
    </Carousel>
  );
};

export default CarouselLarge;
