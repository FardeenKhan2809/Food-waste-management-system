import About from "../Images/About.jpg";
import About2 from "../Images/foodwaste4.jpg";

export function AboutImage() {
    return (
      <img
        className="h-full w-full pt-12 pb-12 rounded-lg object-cover object-center  shadow-xl shadow-blue-gray-900/75"
        src={About}
        alt="nature image"
      />
    );
  }

  export function AboutImage2() {
    return (
      <img
        className="h-full w-full pt-12 pb-12 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/75"
        src={About2}
        alt="nature image"
      />
    );
  }