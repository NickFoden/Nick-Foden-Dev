import React, { Component } from "react"
import Image from "./Image"
import Carousel from "nuka-carousel"
import githubIcon from "../images/github.png"
import graphqlIcon from "../images/graphqlImage.svg"
// import marina from "../images/marina.jpg";
import nodeImage from "../images/node-js.png"
import reactImage from "../images/react-logo.png"
import reduxImage from "../images/redux.png"
import jsImage from "../images/js.jpg"

class AppCarousel extends Component {
  render() {
    const carouselSettings = {
      autoplay: true,
      cellAlign: "center",
      wrapAround: true,
      withoutControls: true,
      // transitionMode: "fade",
      slidesToShow: 1,
      speed: 1000,
      width: "100%",
    }
    return (
      <Carousel {...carouselSettings}>
        <Image
          image={jsImage}
          altProp="Javascript"
          url="https://github.com/NickFoden?tab=repositories"
        />
        <Image
          image={nodeImage}
          altProp="node js"
          url="https://github.com/NickFoden?utf8=%E2%9C%93&tab=repositories&q=node&type=&language="
        />
        <Image
          image={reactImage}
          altProp="react js"
          url="https://github.com/NickFoden?utf8=%E2%9C%93&tab=repositories&q=react&type=&language="
        />
        <Image
          image={reduxImage}
          altProp="redux js"
          url="https://github.com/NickFoden?utf8=%E2%9C%93&tab=repositories&q=redux&type=&language="
        />
        <Image
          image={graphqlIcon}
          altProp="graphql"
          url="https://github.com/NickFoden?utf8=%E2%9C%93&tab=repositories&q=graphql&type=&language="
        />
        <Image
          image={githubIcon}
          altProp="github"
          url="https://github.com/NickFoden"
        />
      </Carousel>
    )
  }
}

export default AppCarousel
