import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Caraousel from "../components/Caraousel";
import Text from "../components/Text";
import Agreement from "../components/Agreement";
import img1 from "../assets/sections/img1.png";
import img2 from "../assets/sections/img2.png";
import img3 from "../assets/sections/img3.png";
import Footer from "../components/Footer";
import {Button} from "react-bootstrap";

function Home() {
  const details = [
    {
      id: 1,
      title: "img1",
      src1: img1,
      content:
        "It is not so much for its beauty that the forest makes a claim upon men’s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit. —Robert Louis Stevenson",
    },
    {
      id: 2,
      title: "img2",
      src1: img2,
      content:
        "Some of nature’s most exquisite handiwork is on a miniature scale, as anyone knows who has applied a magnifying glass to a snowflake. —Rachel Carson",
    },
  ];
  return (
    <div>
      <Section details={details} />
      
      <Caraousel />
      </div>
  );
}

export default Home;
