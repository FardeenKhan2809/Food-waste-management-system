import { Typography } from "@material-tailwind/react";
import styled, { keyframes } from 'styled-components';
import { CommonService1Skeleton,CommonServiceSkeleton, CommonService2Skeleton } from "./CommonServiceSkeleton";

function Skeleton() {
  // Define a keyframe animation for fade-in effect with slide from bottom

  return (
    <div className="max-w-full animate-pulse mt-2 mb-1">
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-20 lg:w-100  bg-gray-300"
      >
        &nbsp;
      </Typography>
      
      <div className="flex justify-center items-center mt-4 lg:mt-4"> {/* Adjust the height here */}
  <div className="grid h-96 lg:h-128 w-100 lg:w-100 place-items-center rounded-lg bg-gray-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-16 w-16 text-gray-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
      />
    </svg>
  </div>
</div>
      <>
      <div className="mt-5 lg:mt-5"> {/* Adjust the height here */}
        {/* Skeleton for heading */}
        <div className="mt-4 lg:mt-4 flex justify-center">
        <div className="h-12 w-64 rounded bg-gray-300 mb-6"></div>
        </div>
        {/* Skeleton for paragraph */}
        <div className="h-7 w-full rounded bg-gray-300 mb-4 ml-auto px-4"></div>
  <div className="h-7 w-full rounded bg-gray-300 mb-4 px-4"></div>
  <div className="h-7 w-full rounded bg-gray-300 mb-4 px-4"></div>
  <div className="h-7 w-full rounded bg-gray-300 mb-4 px-4"></div>
  <div className="h-7 w-full rounded bg-gray-300 mb-4 mr-auto px-4"></div>
       
        <div className="mt-4 lg:mt-4 flex justify-center">
        <div className="h-12 w-64 rounded bg-gray-300 mb-6"></div>
        </div>
        </div>

        <div className="relative mt-2 h-96 w-full mb-12">
      <div className="h-full w-full rounded-xl bg-gray-300 animate-pulse"></div>
      <div className="absolute bottom-8 left-2/4 transform -translate-x-2/4 w-[calc(100%-4rem)]">
        <div className="rounded-xl border border-gray-300 bg-gray-200/75 py-4 px-6 shadow-lg">
          <div className="h-4 w-3/4 bg-gray-300 mb-2 animate-pulse"></div>
          <div className="h-3 w-1/2 bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
<CommonServiceSkeleton/>
<CommonService1Skeleton/>
<CommonService2Skeleton/>
</div>
<footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <div className="w-35 h-12 bg-gray-300"></div> {/* Placeholder for logo */}
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <div className="h-8 w-20 bg-gray-300"></div> {/* Placeholder for Home */}
          </li>
          <li>
            <div className="h-8 w-28 bg-gray-300"></div> {/* Placeholder for About Us */}
          </li>
          <li>
            <div className="h-8 w-28 bg-gray-300"></div> {/* Placeholder for Services */}
          </li>
          <li>
            <div className="h-8 w-28 bg-gray-300"></div> {/* Placeholder for Contact Us */}
          </li>
        </ul>
      </div>
    </footer>
      </>
    
</div>

    
  );
}

export default Skeleton;
