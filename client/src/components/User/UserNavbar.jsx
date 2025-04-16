import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  UserGroupIcon,
  BuildingOffice2Icon,
  CurrencyRupeeIcon,
  UserPlusIcon,
  InboxArrowDownIcon,
  ArrowDownOnSquareIcon,
  UserIcon,
  TruckIcon,
  HandRaisedIcon,
  MapPinIcon,
  ClipboardDocumentListIcon,
 CheckCircleIcon,
 PlusCircleIcon
} from "@heroicons/react/24/solid";

import AgricultureIcon from '@mui/icons-material/Agriculture';


 
const navListMenuItems = [
  {
    title: "Bio-Waste",
    description: "Find the perfect solution for your needs.",
    icon: BuildingOffice2Icon,
    href:"/userviewbiogas",
    
  },
  {
    title: "Member",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    href:"/userviewmember",
  },
  {
    title: "Donation",
    description: "Reach out to us for assistance or inquiries",
    icon: CurrencyRupeeIcon,
    href:"/userviewdonation",
  },
  {
    title: "Registration",
    description: "Find the perfect solution for your needs.",
    icon: UserPlusIcon,
    href:"/userviewregistration",
  },
  {
    title: "Regular Food Waste",
    description: "Find the perfect solution for your needs.",
    icon: InboxArrowDownIcon,
    href:"/userviewregularFWRequest",
  },
  {
    title: "Occasional Food Waste Request",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: ArrowDownOnSquareIcon,
    href:"/userviewoccasionalFWrequest",
  },
  {
    title: "Stock",
    description: "Slurry and Food Waste Stock.",
    icon: ClipboardDocumentListIcon,
    href:"/userviewstock",
  },
  {
    title: "Slurry Request",
    description: "All Slurry Requests.",
    icon: PlusCircleIcon,
    href:"/userviewslurryrequest",
  },
  {
    title: "Slurry Distribution",
    description: "Distributed Slurry.",
    icon: CheckCircleIcon,
    href:"/userviewslurrydistributions",
  },
  {
    title: "Farmer",
    description: "Learn how we can help you achieve your goals.",
    icon: AgricultureIcon,
    href:"/userviewfarmer",
  },
  {
    title: "Transporter",
    description: "Find the perfect solution for your needs.",
    icon: TruckIcon,
    href:"/userviewtransporter",
  },
  {
    title: "Volunteers",
    description: "Explore limited-time deals and bundles",
    icon: HandRaisedIcon,
    href:"/userviewvolunteer",
  },
  {
    title: "Route",
    description: "Explore Routes And Collect Food",
    icon: MapPinIcon,
    href:"/userviewroute",
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, href }, key) => (
      <a href={href} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="top"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="h6" className="font-h6">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <strong>Master-Table</strong>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
      <Typography
        as="a"
        href="/userschedule"
        variant="h6"
        color="blue-gray"
        className="font-h6"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Request</ListItem>
        
      </Typography>
      <Typography
        as="a"
        href="/uschedule"
        variant="h6"
        color="blue-gray"
        className="font-h6"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Slurry</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="/schedulemain"
        variant="h6"
        color="blue-gray"
        className="font-h6"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Schedule
        </ListItem>
      </Typography>
    </List>
  );
}
 
function UserNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2" variant="gradient">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          color="brown"
        >
          Food Waste Management System
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
        <Button color="light-green" variant="gradient" size="sm">
            Donate Now
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button color="light-green" variant="gradient" size="sm" fullWidth>
            Donate Now
          </Button>
        </div>
      </Collapse>
    </Navbar>
    
  );
}

export default UserNavbar;