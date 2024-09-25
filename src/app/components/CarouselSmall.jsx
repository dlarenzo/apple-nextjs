"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const CarouselSmall = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6.2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 5.2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 5.2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
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
      // dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="carousel-item">
        <img src="../../images/exercise_large.jpeg" alt="exercise" />
      </div>
      <div className="carousel-item">
        <img src="../../images/fitness_large.jpeg" alt="fitness" />
      </div>
      <div className="carousel-item">
        <img src="../../images/hello_kitty_large.jpeg" alt="hello kitty" />
      </div>
      <div className="carousel-item">
        <img src="../../images/NBA24k_large.jpeg" alt="video game" />
      </div>
      <div className="carousel-item">
        <img src="../../images/loot_large.jpeg" alt="loot" />
      </div>
      <div className="carousel-item">
        <img src="../../images/workout_large.jpg" alt="workout" />
      </div>
      <div className="carousel-item">
        <img src="../../images/alcapulco_large.jpeg" alt="alcapulco" />
      </div>
    </Carousel>
  );
};

export default CarouselSmall;
