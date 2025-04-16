import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Drawer,
  Card,
} from "@material-tailwind/react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  PencilSquareIcon
} from "@heroicons/react/24/solid";
import {
  XMarkIcon,
} from "@heroicons/react/24/outline";
 
export function OthersSidebar() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
 
  const handleLogout = async () => {
    try {
      // Disable back navigation
      window.history.pushState(null, null, window.location.pathname);
      window.addEventListener('popstate', () => {
        window.history.pushState(null, null, window.location.pathname);
      });
  
      const response = await axios.post('http://localhost:5000/api/logout');
      if (response.status === 200) {
        localStorage.removeItem('token');

        // Redirect to login page after successful logout
        navigate('/');
        // Disable window.history.back() after logout
      window.history.pushState(null, null, window.location.pathname);
      } else {
        console.error('Logout failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      // Re-enable back navigation
      window.removeEventListener('popstate', () => {
        window.history.pushState(null, null, window.location.pathname);
      });
    }
  };
  


  return (
    <>
      <div style={{ justifyContent: "flex-end", display: "flex" }}> 
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <UserCircleIcon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} placement="right">
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="https://th.bing.com/th/id/OIP.xSat7QR4fTvEmk49jYSNcwAAAA?w=236&h=162&c=7&r=0&o=5&pid=1.7"
              alt="brand"
              className="h-full w-full"
            />
          </div>
          <List>
            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5"/>
              </ListItemPrefix>
              <a href="/profile">Profile</a>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <PencilSquareIcon className="h-5 w-5" />
              </ListItemPrefix>
              <a href="/editprofile">
              Edit Profile</a>
            </ListItem>
            <ListItem onClick={handleLogout}> 
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </Drawer>
      </div>
    </>
  );
}