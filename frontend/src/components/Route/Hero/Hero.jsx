// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "../../../styles/styles";

// const Hero = () => {
//   return (
//     <div
//       className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
//       style={{
//         backgroundImage:
//           "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
//       }}
//     >
//       <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
//         <h1
//           className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
//         >
//           Best Collection for <br /> home Decoration
//         </h1>
//         <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
//           assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
//           quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
//           <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
//         </p>
//         <Link to="/products" className="inline-block">
//             <div className={`${styles.button} mt-5`}>
//                  <span className="text-[#fff] font-[Poppins] text-[18px]">
//                     Shop Now
//                  </span>
//             </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";

const Hero = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="relative"
        data-twe-carousel-init
        data-twe-ride="carousel"
      >
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-[40rem]">
          <Carousel>
            <img
              // src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              src="https://miro.medium.com/v2/resize:fit:1400/1*Otb3WoPYc28A4cbJr-0cSQ.jpeg"
              alt="..."
            />
            <img
              // src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              src="https://assets-global.website-files.com/5b5729421aca332c60585f78/62f41942e8da7967a4964400_ecommerce-product-pages.webp"
              alt="..."
            />
            <img
              // src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
              alt="..."
            />
            <img
              src="https://www.zilliondesigns.com/blog/wp-content/uploads/Ecommerce-Store-1-1280x720.jpg"
              alt="..."
            />
            <img
              src="https://b1853233.smushcdn.com/1853233/wp-content/uploads/2020/06/eCommerce-product-photography-hero-2-1.jpg?lossy=0&strip=0&webp=1"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Hero;
