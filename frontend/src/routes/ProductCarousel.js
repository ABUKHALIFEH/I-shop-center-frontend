// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "tailwindcss/tailwind.css";

// function ProductCarousel({ images }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       <div className="relative">
//         {/* <div className="absolute top-0 left-0 z-10 p-2 bg-red-600 text-white rounded-br-lg">
//           41 VIEWED IN THE LAST 24 HOURS
//         </div> */}
//         <img
//           src={images[currentIndex].url}
//           alt={`Slide ${currentIndex + 1}`}
//           className="w-full h-auto"
//         />
//         <button
//           className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3  text-blue  "
//           onClick={prevSlide}
//         >
//           <FaChevronLeft />
//         </button>
//         <button
//           className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3  text-blue  "
//           onClick={nextSlide}
//         >
//           <FaChevronRight className="color-blue" />
//         </button>
//       </div>
//       <div className="flex justify-center space-x-4 mt-4">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image.url}
//             alt={`Thumbnail ${index + 1}`}
//             className={`w-20 h-20 object-cover cursor-pointer ${
//               index === currentIndex ? "border-2 border-gray-800" : "border"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductCarousel;

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "tailwindcss/tailwind.css";

function ProductCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        {/* <div className="absolute top-0 left-0 z-10 p-2 bg-red-600 text-white rounded-br-lg opacity-0">
          41 VIEWED IN THE LAST 24 HOURS
        </div> */}
        <img
          src={images[currentIndex].url}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto"
        />
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-960 text-white rounded-full shadow-lg"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-960 text-white rounded-full shadow-lg"
          onClick={nextSlide}
        >
          {/* <FaChevronRight /> */}
          <FaChevronRight />
        </button>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-20 object-cover cursor-pointer ${
              index === currentIndex ? "border-2 border-gray-800" : "border"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;
