import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import hamburgerImage from "./Images/Hamburger.png";
import FarmerImage from "./Images/Farmer.png";
import memberImage from "./Images/Member.png";

const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedCard = styled(Card)`
  opacity: 0;
  animation: ${slideInFromBottom} 1.0s ease forwards;
`;

export function CommonService() {
  return (
    <AnimatedCard className="mt-6 w-96 shadow-xl shadow-blue-gray-900/50">
      <CardHeader color="green" className="relative h-70">
        <img
          src={hamburgerImage}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Want to send Food waste.. ?
        </Typography>
        <Typography>
          Any Hotel, Restaurant, Hostel, Wedding Venues, etc. can register themselves here. 
          Select "REGULAR" or "OCCASIONAL" on the basis of your daily food waste...
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button color="green" className="mr-2"><a href="/login"> Regular</a></Button>
        <Button color="green" className="ml-2"><a href="/common/occasionalFWrequest">Occasional</a></Button>
      </CardFooter>
    </AnimatedCard>
  );
}

export function CommonService1() {
  return (
    <AnimatedCard className="mt-6 w-96 shadow-xl shadow-blue-gray-900/50">
      <CardHeader color="cyan" className="relative h-70">
        <img
          src={FarmerImage}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Want free slurry.. ?
        </Typography>
        <Typography>
          If you want free slurry you can register yourself here.. We will provide 
          you free slurry in every 15 days... So just click on "CLICK HERE" and get 
          slurry for you...
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button color="cyan"><a href='/login'>Click here</a></Button>
      </CardFooter>
    </AnimatedCard>
  );
}

export function CommonService2() {
  return (
    <AnimatedCard className="mt-6 w-96 shadow-xl shadow-blue-gray-900/50">
      <CardHeader color="yellow" className="relative h-70">
        <img
          src={memberImage}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Want to become a member.. ?
        </Typography>
        <Typography>
          Become member of our NGO (DVT- Divyang Vikas Trust) and help our society... 
          Click on "CLICK HERE" and become our member by registering yourself... 
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button color="yellow" className="text-white"><a href="/login">Click here</a></Button>
      </CardFooter>
    </AnimatedCard>
  );
}
