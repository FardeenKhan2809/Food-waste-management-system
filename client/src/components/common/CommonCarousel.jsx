import React from 'react';
import { Carousel, Typography } from '@material-tailwind/react';
import foodwaste from './Images/Foodwaste.jpg';
import farmer2 from './Images/farmer2.jpg';
import Slurry from './Images/slurry2.jpg';
import styled, { keyframes } from 'styled-components';

const slideInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedSlide = styled.div`
  opacity: 0;
  animation: ${slideInAnimation} 2.0s ease forwards;
`;

export function CommonCarousel() {
  return (
    <Carousel autoplay interval={2000} className="rounded-xl">
      <AnimatedSlide className="relative h-100">
        <img
          src={foodwaste}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Give Your Food Waste To Us...
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              We collect food waste from various Hotels, Hostels,
              Restaurants and Wedding venues. You can give your food waste to us
              to help our farmers.
            </Typography>
          </div>
        </div>
      </AnimatedSlide>
      <AnimatedSlide className="relative h-100">
        <img
          src={Slurry}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              We Will Convert It To Slurry...
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Our transporters and volunteers will deliver the food waste to
              Biogas plant. They will collect the waste from each place. And
              the biogas will convert the food waste into slurry.
            </Typography>
          </div>
        </div>
      </AnimatedSlide>
      <AnimatedSlide className="relative h-100">
        <img
          src={farmer2}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
          <div className="w-3/4 pl-12 pb-20 md:w-2/4 md:pl-20 md:pb-30 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              And Provide It To Farmers For Free...
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Farmers will get slurry once in 15 days. And I will
              be free of cost. So register yourself and get free
              slurry. Our goal is to help farmers.
            </Typography>
          </div>
        </div>
      </AnimatedSlide>
    </Carousel>
  );
}
