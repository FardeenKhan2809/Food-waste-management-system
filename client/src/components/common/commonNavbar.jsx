import React from "react";
import { FaHome } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { CommonMenu, CommonMenu1, CommonMenu2 } from "./CommonMenu";
import fwms from "./Images/FWMS.jpeg";

 
export function CommonNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-1 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography className="pt-3 pl-4">
    <a href="/" className="flex items-center">
    <Button
    variant="text" 
    size="lg" 
    color="blue" 
    className="font-bold" 
    style={{ fontSize: '1.15rem', fontFamily: 'Arial, sans-serif' }}>
      Home
    </Button>

    </a>
      </Typography>
      
      <Typography className="pt-3">
    <CommonMenu/>
      </Typography>

      <Typography className="pt-3">
    <CommonMenu1/>
      </Typography>

      <Typography className="pt-3">
    <CommonMenu2/>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4" style={{ opacity: 0.9, backdropFilter: 'blur(50px)' }}>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
      <div className="flex items-center">
          <img src={fwms} alt="Logo" className="h-10 mr-4" />
          <Typography
            as="a"
            variant="h2"
            href="/"
            className="cursor-pointer py-.5 font-bold"
            color='green'
          >
            FWMS
          </Typography>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-">
          <Button variant="text" size="lg" className="hidden lg:inline-block">
            <a href="/login">
            <span>Sign-In</span>
            </a>
          </Button>
          <Button
            variant="gradient"
            size="lg"
            className="hidden lg:inline-block"
            color="light-green"
          ><a href="/donationform">
            <span >Donate Us</span></a>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Sign-In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="" color="light-green">
              <span>Donate Us</span>
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
