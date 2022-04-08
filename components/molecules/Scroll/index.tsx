import React, { Component } from 'react';
import Slider from 'react-slick';
import { ContainerScroll, DivElement, ElementScroll } from './styles';


interface Item {
  title: string;
  link: string;
}

interface ItemsProps {
  elements: Item[];
}


function Scroll(props: ItemsProps) {


  
  React.useEffect(()=> {
    window.addEventListener("scroll", handleScroll);
  });
 
  const handleScroll = () => {
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    vertical: true,
    speed: 400,
     beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };



  return (
    <ContainerScroll onChange={handleScroll => this.slider.slickPrev()}>
      <Slider {...settings}>
        {props.elements.map((e) => (
          <DivElement>
            <ElementScroll>{e.title}</ElementScroll>
          </DivElement>
        ))}

        {props.elements.map((e) => (
          <DivElement>
            <ElementScroll>{e.title}</ElementScroll>
          </DivElement>
        ))}
      </Slider>
    </ContainerScroll>
  );
}

export default Scroll;
