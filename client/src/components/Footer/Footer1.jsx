import { Typography } from "@material-tailwind/react";
 
function Footer1() {
  return (
    <footer className="w-full bg-white p-8">
        <hr className="my-8 border-blue-gray-50" />
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="https://th.bing.com/th/id/OIP.xSat7QR4fTvEmk49jYSNcwAAAA?w=236&h=162&c=7&r=0&o=5&pid=1.7" alt="logo-ct" className="w-35" />
         <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      
      
    </footer>
  );
}
export default Footer1;