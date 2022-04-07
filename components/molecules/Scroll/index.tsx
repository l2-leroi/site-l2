import React, { Component } from 'react';
import Slider from 'react-slick';
import { ContainerScroll, DivElement, ElementScroll } from './styles';

/*beforeChange: function(currentSlide, nextSlide) {
  console.log("before change", currentSlide, nextSlide);
},
afterChange: function(currentSlide) {
  console.log("after change", currentSlide);
}*/

interface Item {
  title: string;
  link: string;
}

interface ItemsProps {
  elements: Item[];
}


function Scroll(props: ItemsProps) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: true,
    speed: 400,
  };

  return (
    <ContainerScroll>
      <Slider {...settings}>
        {props.elements.map((e) => (
          <DivElement>
            <ElementScroll href={e.link}>{e.title}</ElementScroll>
          </DivElement>
        ))}

        {props.elements.map((e) => (
          <DivElement>
            <ElementScroll href={e.link}>{e.title}</ElementScroll>
          </DivElement>
        ))}
      </Slider>
    </ContainerScroll>
  );
}

export default Scroll;
