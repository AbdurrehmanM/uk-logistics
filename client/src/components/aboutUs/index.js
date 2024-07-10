import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

const AboutUs = () => {
  return (
    <div className="slider">
      <Carousel autoPlay>
        <div>
          <img
            src="https://img.freepik.com/free-photo/serious-female-warehouse-employee-hardhat-standing-near-forklift-talking-mobile-phone-shelves-with-goods-background-copy-space-labor-communication-concept_74855-14264.jpg?t=st=1720601348~exp=1720604948~hmac=c4e2ece60a9ff27dc1e2918f460de247ade6c6f353843162d2c390a6748ec4c7&w=1380"
            alt="slider1"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/serious-female-warehouse-employee-hardhat-standing-near-forklift-talking-mobile-phone-shelves-with-goods-background-copy-space-labor-communication-concept_74855-14264.jpg?t=st=1720601348~exp=1720604948~hmac=c4e2ece60a9ff27dc1e2918f460de247ade6c6f353843162d2c390a6748ec4c7&w=1380"
            alt="slider1"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/serious-female-warehouse-employee-hardhat-standing-near-forklift-talking-mobile-phone-shelves-with-goods-background-copy-space-labor-communication-concept_74855-14264.jpg?t=st=1720601348~exp=1720604948~hmac=c4e2ece60a9ff27dc1e2918f460de247ade6c6f353843162d2c390a6748ec4c7&w=1380"
            alt="slider1"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default AboutUs;
