import {
  LineStyled,
  TextContainerStyled,
  LineContainerStyled, Sup, SpinningIconStyled
} from './style'

import React, { useRef, useState } from 'react';
import OutSourcing from '../../atoms/OutSourcing';
const Spinner = '/images/OurCustomers/enfeite-giratorio.svg';

const LineAnimation = ({ lineBg, secondaryBg, hasOutSourcing, hasSpinner, spaceForSpinner }) => {
  const line = useRef();
  const text = useRef();
  const spinner = useRef();

  const maxRadians = 17.76 * (Math.PI/180);
  let maxHeight = 0;
  let minHeightOutSourcing = 60;
  let maxHeightSpinner = 200;
  let resize = false;
  let wasAnimated = false;

  const calculateMaxHeight = (lineElement: HTMLElement) => {
    maxHeight = (Math.tan(maxRadians) * lineElement.getBoundingClientRect().width);
  }

  const verifySpinnerMaxHeight = (spinnerElement: HTMLElement) => {
    if (spinnerElement.getBoundingClientRect().height > maxHeightSpinner) {
      maxHeightSpinner = spinnerElement.getBoundingClientRect().height;
    }
  }


  const animateLine = () => {
    const textElement = text.current as HTMLElement;
    const lineElement = line.current as HTMLElement;
    const spinnerElement = spinner.current as HTMLElement;

    calculateMaxHeight(lineElement);
    if (hasSpinner) {
      verifySpinnerMaxHeight(spinnerElement);
    }


    const width = lineElement.getBoundingClientRect().width;

    let distanceFromTop = window.innerHeight * 0.6 - lineElement.getBoundingClientRect().top;

    const tangent = maxHeight / width;
    const arcTangent = Math.atan(tangent);
    const degrees = arcTangent * (180 / Math.PI);

    if((distanceFromTop > 0 && wasAnimated === false) ||(resize && wasAnimated)){

      // Desabilita o scroll
      document.body.style.height = "100%"
      document.body.style.overflow = "hidden";

      lineElement.style.transition = "height 0.5s ease";
      lineElement.style.height = maxHeight + "px";

      const scroll = () => {
        window.scrollBy({
        top: (window.innerHeight - (lineElement.getBoundingClientRect().top) + maxHeight/1.5),
        left: 0,
        behavior: 'smooth'
      });
      }


      if(hasOutSourcing){
        textElement.style.top = (- (minHeightOutSourcing) + maxHeight / 2) + "px";
        textElement.style.transform = `rotate(${degrees}deg)`;
      }

      if (hasSpinner) {
        spinnerElement.style.top = (maxHeight + spaceForSpinner) - (maxHeightSpinner * 0.2) + 'px';
      }
      wasAnimated = true;

      console.log(resize)

      if(resize){
        resize = false;
        console.log("resize", resize)
      }

      const enableScroll = () => {
        document.body.style.height = "auto";
        document.body.style.overflow = "visible";
      }

      if(!resize){
        setTimeout(scroll, 500)
        setTimeout(enableScroll, 1000)
      }

      
    }

    // Animação antiga
    // if(wasAnimated === false){
    //   
    // }

    // if (degrees >= 0 && degrees <= 17.76 && distanceFromTop <= maxHeight) {

    //   if (distanceFromTop >= 0 && hasOutSourcing) {
    //     textElement.style.top = (- (minHeightOutSourcing) + distanceFromTop / 2) + "px";
    //   }

    //   if (hasSpinner) {
    //     const sum = (maxHeightSpinner / 2.5) + (spaceForSpinner + maxHeight);

    //     if (!(distanceFromTop * 0.8 > sum)) {
    //       spinnerElement.style.top = (distanceFromTop * 1.2 - (maxHeightSpinner / 2.5)) + 'px';
    //     }
    //   }

    //   lineElement.style.height = (distanceFromTop) + "px";
    //   if (hasOutSourcing) {
    //     textElement.style.transform = `rotate(${degrees}deg)`;
    //   }

    // }
    requestAnimationFrame(animateLine);
    
  }

  const putTextInTheCorrectTop = () => {
    const textElement = text.current as HTMLElement;
    textElement.style.top = -(minHeightOutSourcing) + "px";
  }

  const putSpinnerInTheCorrectTop = () => {
    const spinnerElement = spinner.current as HTMLElement;
    spinnerElement.style.top = -(maxHeightSpinner) + "px";
  }

  React.useEffect(() => {
    if (hasOutSourcing) {
      putTextInTheCorrectTop();
    }

    requestAnimationFrame(animateLine)

    if (hasSpinner) {
      putSpinnerInTheCorrectTop();
    }

    window.addEventListener("resize", () => resize = true);
  }, []);

  return (
    <>
      <LineContainerStyled style={{ backgroundColor: secondaryBg, borderColor: lineBg }}>

        {(hasSpinner) ? (
          <SpinningIconStyled className="spinner" ref={spinner}>
            <img src={Spinner} alt="L2 Code" />
          </SpinningIconStyled>) : null}

        {(hasOutSourcing) ? (<TextContainerStyled ref={text} style={{ backgroundColor: secondaryBg }}>
          <OutSourcing color={"black_1"} texts={"outSourcing.ourCustomers"} />
        </TextContainerStyled>) : null}

        <LineStyled ref={line} style={{ backgroundColor: lineBg }} />
        <Sup style={{ backgroundColor: lineBg }} />
      </LineContainerStyled>

    </>
  )
}
export default LineAnimation