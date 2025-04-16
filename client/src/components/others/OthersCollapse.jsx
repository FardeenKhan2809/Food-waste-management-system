import React, { useState, useEffect, useRef } from "react";
import {
  Collapse,
  Button,
  Card,
  CardBody,
} from "@material-tailwind/react";
import RegularFWRequest from "./RegularFWRequest/pages/RegularFWRequest";
import FarmerRequest from "./FarmerRequest";
import OMember from "./Member/pages/OMember";;

export function OthersCollapse() {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => setOpen((cur) => !cur);

  const handleClickInside = (e) => {
    e.preventDefault();
    e.target.focus({ preventScroll: true });
  };
  const handleSubmit = async (formData) => {
    // Handle form submission here, e.g., make API call
    console.log(formData);
  };

  return (
    <>
      <Button color="green" onClick={toggleOpen}>Food Waste Request</Button>
      <Collapse open={open}>
        <div>
          <Card className="my-4 mx-auto w-auto">
            <CardBody onClick={handleClickInside}>
                <RegularFWRequest onSubmit={handleSubmit} />
            </CardBody>
          </Card>
        </div>
      </Collapse>
    </>
  );
}

export function OthersCollapse1() {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
  
    const toggleOpen = () => setOpen((cur) => !cur);
  
    const handleClickInside = (e) => {
      e.preventDefault();
      e.target.focus({ preventScroll: true });
    };

   


    return (
      <>
        <Button color="green" onClick={toggleOpen}>Slurry Request</Button>
        <Collapse open={open}>
          <div style={{ overflow: 'hidden' }}>
            <Card className="my-4 mx-auto w-auto">
              <CardBody onClick={handleClickInside}>
                  <FarmerRequest />
              </CardBody>
            </Card>
          </div>
        </Collapse>
      </>
    );
  }

  export function OthersCollapse2() {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
  
    const toggleOpen = () => setOpen((cur) => !cur);
  
    const handleClickInside = (e) => {
      e.preventDefault();
      e.target.focus({ preventScroll: true });
    };
  
    return (
      <>
        <Button color="green" onClick={toggleOpen}>Become member</Button>
        <Collapse open={open}>
          <div>
            <Card className="my-4 mx-auto w-auto">
              <CardBody onClick={handleClickInside}>
                  <OMember />
              </CardBody>
            </Card>
          </div>
        </Collapse>
      </>
    );
  }
  