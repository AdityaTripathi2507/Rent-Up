import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="Rent Up - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />

            <p>
              We at Rent up have proven ourselves in deliverig the best
              properties to people all around the world not only limited in
              local we are also delivering actively in all major parts of the
              country, .
            </p>
            <p>
              Our customers are not only limited for the higher class of peoples but also for the middle class people, as we believe that every person has got the right to own their own sweet home. The variety that we offer ranges for all class of people, be it your mansion or your sweet little home we got you all covered.
            </p>
            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
