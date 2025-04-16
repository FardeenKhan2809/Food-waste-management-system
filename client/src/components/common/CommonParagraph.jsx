import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';
import { Button, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedParagraph = styled.div`
  opacity: 0;
  animation: ${fadeInAnimation} 1s ease-in-out forwards;
  animation-delay: 0.5s; /* Adjust the delay as needed */
`;

export function CommonParagraph() {
  const { ref, inView } = useInView({ threshold: 0.4 });

  return (
    <AnimatedParagraph
      ref={ref}
      className="mt-12"
      style={{
        visibility: inView ? 'visible' : 'hidden',
        animationPlayState: inView ? 'running' : 'paused'
      }}
    >
      <>
      <Typography variant="h2" color="amber" style={{ fontStyle: 'italic' }}>About Us</Typography>
        
        <Typography variant="lead" className="mt-6 ml-8 mr-8 mb-12 item-center" style={{ textAlign: 'justify-center' }}>
          Food Waste Management System's scope is defined by a collaborative network involving hotels ensuring the systematic collection of leftover food. Managed by the trust, dedicated volunteers enhance outreach, making the process both broad and efficient. The system's core lies in advanced operations at the bio-gas plant, converting collected food waste into nutrient-rich slurry, thus fostering sustainable agricultural practices.<br/><br/>
          An important aspect of the scope includes maintaining a comprehensive farmer database, ensuring fair and equitable distribution of the nutrient-dense slurry. Adhering to a structured schedule, farmers receive slurry at regular intervals, precisely every 20 days. Additionally, the system prioritizes continuous improvement initiatives, integrating technological advancements and refining processes to ensure sustained efficiency and a positive impact on local agriculture.
        </Typography>

        <Link to="/aboutus">
          <Button color="light-green" className="mb-12">Know more</Button>
        </Link>
      </>
    </AnimatedParagraph>
  );
}
