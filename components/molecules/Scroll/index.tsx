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
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    console.log('ola');
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    verticalSwiping: true,
    swipeToSlide: true,
    vertical: true,
    speed: 400,
  };

  return (
    <ContainerScroll onChange={(handleScroll) => this.slider.slickPrev()}>
      <Slider {...settings}>
        {props.elements.map((e) => (
          <DivElement key={e.title}>
            <ElementScroll>{e.title}</ElementScroll>
          </DivElement>
        ))}

        {props.elements.map((e) => (
          <DivElement key={e.title}>
            <ElementScroll>{e.title}</ElementScroll>
          </DivElement>
        ))}
      </Slider>
    </ContainerScroll>
  );
}

export default Scroll;
