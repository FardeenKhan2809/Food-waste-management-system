import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
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

export function CommonCard() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <AnimatedCard
      ref={ref}
      className="mt-6 w-96 shadow-xl shadow-blue-gray-900/50"
      style={{ visibility: inView ? 'visible' : 'hidden' }}
    >
      <CardBody>
        <Typography variant="h5" color="amber" className="mb-2">
          How do you want to help us today ?
        </Typography>
        <Typography className="flex justify-center">
          Your smallest contribution makes a 
          big difference to help someone. 
          We count on the generosity of people 
          like you to be able to create
          real change for agriculture sector!
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button color="light-green">Donate Us</Button>
      </CardFooter>
    </AnimatedCard>
  );
}
