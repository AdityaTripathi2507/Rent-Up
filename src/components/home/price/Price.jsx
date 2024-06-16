import React from "react";
import Heading from "../../common/Heading";
import "./price.css";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <>
      <section className="price padding">
        <div className="container">
          <Heading
            title="Select Your Package"
            subtitle="At very affordable price we offer to you your dream home, dont wait for too long as you may miss the opportunity to own your house"
          />
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Price;
