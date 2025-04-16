import UserNavbar from "./UserNavbar";
import { 
  AdminReportCard, 
  AdminReportCard1, 
  AdminReportCard2, 
  AdminReportCard3,
  AdminReportCard4,
  AdminReportCard5,
} from "../Admin/AdminReportCard";
import Footer1 from '../Footer/Footer1'
import Footer from '../Footer/Footer'
import { Typography } from "@material-tailwind/react";

function User()  {
  return (
    <>
    
       <UserNavbar/>
<div className='space'><br></br></div>
<Typography variant='h3' className="text-center mt-4">Reports</Typography>
       <div className='space'><br></br></div>
       <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
      <AdminReportCard3/>
      <AdminReportCard2/>
      <AdminReportCard4/>
      </div>
      <div className='space'><br></br></div>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
      <AdminReportCard5/>  
      <AdminReportCard/>
      <AdminReportCard1/>
      </div>
      <div className='space'><br></br></div>

<Footer1/>
<div className='space'><br></br></div>
<Footer/>
     
    
    </>
  );
};

export default User;
