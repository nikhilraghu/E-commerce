import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Button from "@mui/material/Button";
// import { mens_kurta } from "../../../Data/mens_kurta";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Create a ref for AliceCarousel

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      carouselRef.current.slidePrev(); // Use slidePrev method from AliceCarousel
    }
  };

  const slideNext = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
      carouselRef.current.slideNext(); // Use slideNext method from AliceCarousel
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="border">
        <div className="relative p-5 ">
          <AliceCarousel
            ref={carouselRef} // Attach the ref to AliceCarousel
            items={items}
            responsive={responsive}
            disableDotsControls
            disableButtonsControls
            onSlideChanged={syncActiveIndex}
            activeIndex={activeIndex}
            controlsStrategy="responsive"
          />

          {/* Conditionally render the Prev button */}
          {activeIndex > 0 && (
            <Button
              onClick={slidePrev}
              variant="contained"
              className="z-50 bg-white"
              sx={{
                position: "absolute",
                top: "8rem",
                left: "0rem",
                transform: "translateX(-50%) rotate(90deg)",
                bgcolor: "White",
              }}
              aria-label="prev"
            >
              <KeyboardArrowLeftIcon
                sx={{
                  transform: " rotate(-90deg)",
                  color: "black",
                }}
              />
            </Button>
          )}

          {/* Conditionally render the Next button */}
          {activeIndex < items.length - 5 && (
            <Button
              variant="contained"
              className="z-50 bg-white"
              onClick={slideNext}
              sx={{
                position: "absolute",
                top: "8rem",
                right: "0rem",
                transform: "translateX(50%) rotate(90deg)",
                bgcolor: "White",
              }}
              aria-label="next"
            >
              <KeyboardArrowLeftIcon
                sx={{
                  transform: " rotate(90deg)",
                  color: "black",
                }}
              />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
