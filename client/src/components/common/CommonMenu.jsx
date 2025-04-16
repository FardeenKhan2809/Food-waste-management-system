import React from "react";
import { Link } from "react-router-dom";
import {  ChevronUpIcon } from "@heroicons/react/24/solid";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";

  function scrollToAboutParagraph3() {
    window.location.href = "/aboutUs";
    window.onload = function () {
        const aboutParagraph3 = document.getElementById("about-paragraph-3");
        if (aboutParagraph3) {
            aboutParagraph3.scrollIntoView({ behavior: "smooth" });
        }
    };
}

   
  export function CommonMenu() {
    
    return (
     <Menu
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <Button 
          variant="text" 
          color="blue" 
          size="lg" 
          className="font-bold" 
          style={{ fontSize: '1.10rem', fontFamily: 'Arial, sans-serif' }}>
            Who We Are
           </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem onClick={scrollToAboutParagraph3} className="font-bold">About DVT</MenuItem>
          <Link to={"/aboutUs#about-gallery"}>
          <MenuItem className="font-bold">DVT Gallery</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    );
  }


  export function CommonMenu1() {
    return (
     <Menu
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <Button 
          variant="text" 
          color="blue" 
          size="lg" 
          className="font-bold" 
          style={{ fontSize: '1.10rem', fontFamily: 'Arial, sans-serif' }}>
            What We Do
           </Button>
        </MenuHandler>
        <MenuList>
        <Link to={"/aboutUs"}>
        <MenuItem className="font-bold">Our Vision</MenuItem>
        </Link>
        <Link to={"/aboutUs#about-paragraph-2"}>
        <MenuItem className="font-bold">About FWMS</MenuItem>
        </Link>
        </MenuList>
      </Menu>
    );
  }



  export function CommonMenu2() {
    const [openMenu, setOpenMenu] = React.useState(false);
   
    return (
      <Menu>
        <MenuHandler>
          <Button 
          variant="text" 
          color="blue" 
          size="lg" 
          className="font-bold" 
          style={{ fontSize: '1.10rem', fontFamily: 'Arial, sans-serif'}}> 
          Get Involved
          </Button>
        </MenuHandler>
        <MenuList>
        <Link to={"/commonregistration"}>
        <MenuItem className="font-bold">Become Member</MenuItem>
        </Link>
          <Menu
            placement="right-start"
            open={openMenu}
            handler={setOpenMenu}
            allowHover
            offset={15}
          >
            <MenuHandler className="flex items-center justify-between">
            <MenuItem className="font-bold">
                Make Request
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList>
            <Link to={"/login"}>
            <MenuItem className="font-bold">Regular</MenuItem>
            </Link>
            <Link to={"/common/occasionalFWrequest"}>
            <MenuItem className="font-bold">Occasional</MenuItem>
            </Link>
            </MenuList>
          </Menu>
        </MenuList>
      </Menu>
    );
  }