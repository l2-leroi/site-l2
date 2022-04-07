import React, { Component } from 'react';
import Slider from 'react-slick';
import { ContainerScroll, DivElement, ElementScroll } from './styles';

/*beforeChange: function(currentSlide, nextSlide) {
  console.log("before change", currentSlide, nextSlide);
},
afterChange: function(currentSlide) {
  console.log("after change", currentSlide);
}*/

function createMarkup() {
  return { __html: '&lt; Home &gt;' };
}

export default class VerticalSwipeToSlide extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      arrows:false,
    };

    return (
      <ContainerScroll>
        <Slider {...settings}>
          <DivElement>
            <ElementScroll className="home">&lt; Home &gt;</ElementScroll>
          </DivElement>
          <DivElement>
            <ElementScroll>Cases</ElementScroll>
          </DivElement>
          <DivElement>
            <ElementScroll>Serviços</ElementScroll>
          </DivElement>
          <DivElement>
            <ElementScroll>Contato</ElementScroll>
          </DivElement>

          <DivElement>
            <ElementScroll className="home">&lt; Home &gt;</ElementScroll>
          </DivElement>
          <DivElement>
            <ElementScroll>Cases</ElementScroll>
          </DivElement>
          <DivElement>
            <ElementScroll>Serviços</ElementScroll>
          </DivElement>
          <DivElement>
            <ElementScroll>Contato</ElementScroll>
          </DivElement>
        </Slider>
      </ContainerScroll>
    );
  }
}
