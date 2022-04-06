import React, { Component } from "react";
import Slider from "react-slick";
import { ContainerScroll, DivElement, ElementScroll } from "./styles";


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
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
      
    };
     
      return (
      <ContainerScroll>
        
        <Slider {...settings}>
        <DivElement>
            <ElementScroll>Home</ElementScroll>
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
            <ElementScroll>Home</ElementScroll>
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
