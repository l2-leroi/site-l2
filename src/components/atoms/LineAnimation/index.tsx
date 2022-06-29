import React, { useRef, useState} from 'react';
import {
  LineStyled,
  TextContainerStyled,
  LineContainerStyled, Sup, SpinningIconStyled,
} from './style'

import OutSourcing from '../../atoms/OutSourcing';
const Spinner = '/images/spinner.png';

const LineAnimation = ({ lineBg, secondaryBg, hasOutSourcing, hasSpinner, spaceForSpinner}) => {
  const line = useRef();
  const text = useRef();
  const spinner = useRef();

  const maxRadians = 17.76 * (Math.PI/180);
  let maxHeight = 0;
  const minHeightOutSourcing = 60;
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

  const enableScroll = () => {
    document.body.style.height = "auto";
    document.body.style.overflow = "visible";
  }

  const disableScroll = () => {
    document.body.style.height = "100%"
    document.body.style.overflow = "hidden";
  }

  const scroll = () => {
    const lineElement = line.current as HTMLElement;
    window.scrollBy({
      top: (lineElement.getBoundingClientRect().top + maxHeight - 200 ),
      left: 0,
      behavior: 'smooth'
    });
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
    const distanceFromTop = window.innerHeight * 0.4 - lineElement.getBoundingClientRect().top;
    
    const tangent = maxHeight / width;
    const arcTangent = Math.atan(tangent);
    const degrees = arcTangent * (180 / Math.PI);

    if((distanceFromTop > 0 && wasAnimated === false) ||(resize && wasAnimated)){
      disableScroll();

      lineElement.style.transition = "height 0.5s ease";
      lineElement.style.height = maxHeight + "px";

      if(hasOutSourcing){
        textElement.style.top = (- (minHeightOutSourcing) + maxHeight / 2) + "px";
        textElement.style.transform = `rotate(${degrees}deg)`;
      }

      if (hasSpinner) {
        spinnerElement.style.top = (maxHeight + spaceForSpinner) - (maxHeightSpinner * 0.2) + 'px';
      }

      wasAnimated = true;

      if(resize){
        resize = false;
      } 

      if(!resize){
        setTimeout(scroll, 500)
        setTimeout(enableScroll, 1000)
      }
      
    }

    if(!wasAnimated){
      requestAnimationFrame(animateLine);
    }
  }



  const putTextInTheCorrectTop = () => {
    const textElement = text.current as HTMLElement;
    textElement.style.top = `${-minHeightOutSourcing}px`;
  };

  const putSpinnerInTheCorrectTop = () => {
    const spinnerElement = spinner.current as HTMLElement;
    spinnerElement.style.top = `${-maxHeightSpinner}px`;
  };

  React.useEffect(() => {
    if (hasOutSourcing) {
      putTextInTheCorrectTop();
    }

    requestAnimationFrame(animateLine);

    if (hasSpinner) {
      putSpinnerInTheCorrectTop();
    }

    window.addEventListener("resize", () => {
      resize = true
      requestAnimationFrame(animateLine);
    });
  }, []);

  return (
    <LineContainerStyled
      style={{ backgroundColor: secondaryBg, borderColor: lineBg }}
    >
      {hasSpinner ? (
        <SpinningIconStyled className="spinner" ref={spinner}>
          <img src={Spinner} alt="L2 Code" />
        </SpinningIconStyled>
      ) : null}

        {(hasOutSourcing) ? (<TextContainerStyled ref={text} style={{ backgroundColor: secondaryBg }}>
          <OutSourcing color={"black_1"} texts={"outSourcing.ourCustomers"} />
        </TextContainerStyled>) : null}

        <LineStyled ref={line} style={{ backgroundColor: lineBg }} />
        
        <Sup style={{ backgroundColor: lineBg }} />
      </LineContainerStyled>
  )
}
export default LineAnimation;
