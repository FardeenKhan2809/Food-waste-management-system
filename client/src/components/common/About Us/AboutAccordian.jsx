import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function AboutAccordion() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} className="mt-6 pt-6"/>}>
        <AccordionHeader onClick={() => handleOpen(1)}>What is DVT(Divyang Vikas Trust)?</AccordionHeader>
        <AccordionBody >
          DVT (Divyang Vikas Trust) is a NGO based organization, which is engaged in helping 
          and empowering handicaps and disabled person. We organize various events, camps and 
          sports events for handicaps. Our goal is to support handicaps.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          What is Food Waste Management System?
        </AccordionHeader>
        <AccordionBody >
        The Food Waste Management System is an innovative project aimed at addressing the critical 
        issue of food waste in a sustainable and environmentally friendly manner. 
        This system focuses on creating a comprehensive solution that involves the 
        collaboration of hotels, bio gas plants, and farmers. 

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} className="mb-6 pb-6"/>}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          How Food Waste Management helps society?
        </AccordionHeader>
        <AccordionBody>
        Food Waste Management System's scope is defined by a collaborative network involving hotels 
        ensuring the systematic collection of leftover food. Managed by the trust, dedicated volunteers 
        enhance outreach, making the process both broad and efficient. The system's core lies in advanced 
        operations at the bio-gas plant, converting collected food waste into nutrient-rich slurry, thus 
        fostering sustainable agricultural practices.
        </AccordionBody>
      </Accordion>
    </>
  );
}