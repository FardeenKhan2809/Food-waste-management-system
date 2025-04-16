import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedCard = styled(Card)`
  opacity: 0;
  animation: ${fadeInAnimation} 1s ease-in-out forwards;
  animation-delay: 0.5s; /* Adjust the delay as needed */
`;

export function CommonProfileCard() {
  const { ref, inView } = useInView({ threshold: 0.5 }); 

  return (
    <AnimatedCard
      ref={ref}
      className="w-96 shadow-xl shadow-blue-gray-900/50"
      style={{ visibility: inView ? 'visible' : 'hidden' }}
    >
      <CardHeader floated={false} className="h-40">
        <img src="https://wallpapercave.com/wp/wp10400986.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="amber" className="mb-2">
          Help Us...
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          To collect more food waste...
        </Typography>
      </CardBody>
    </AnimatedCard>
  );
}

export function CommonProfileCard1() {
  const { ref, inView } = useInView({ threshold: 0.5 }); 

  return (
    <AnimatedCard
      ref={ref}
      className="w-96 shadow-xl shadow-blue-gray-900/50"
      style={{ visibility: inView ? 'visible' : 'hidden' }}
    >
      <CardHeader floated={false} className="h-40">
        <img src="https://wallpapercave.com/wp/wp2024213.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="amber" className="mb-2">
          Help Farmers...
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          To get slurry for free...
        </Typography>
      </CardBody>
    </AnimatedCard>
  );
}
