import React, { useRef, useState} from 'react';
import {
  LineStyled,
  TextContainerStyled,
  LineContainerStyled, Sup, SpinningIconStyled,
} from './style'

import OutSourcing from '../../atoms/OutSourcing';
const Spinner = '/images/spinner.png';

const LineAnimation = ({ lineBg, secondaryBg, hasOutSourcing, hasSpinner, titleSpace}) => {
  const line = useRef();
  const text = useRef();
  const spinner = useRef();
  const container = useRef();

  const maxRadians = 17.76 * (Math.PI/180);
  let maxHeight = 0;
  const minHeightOutSourcing = 60;
  let maxHeightSpinner = 200;
  let resize = false;
  let wasAnimated = false;

  const calculateMaxHeight = (lineElement: HTMLElement) => {
    maxHeight = (Math.tan(maxRadians) * lineElement.getBoundingClientRect().width);
  }

  const lineMaxHeight = () => {
    const lineElement = line.current as HTMLElement;
    const containerElement = container.current as HTMLElement;
    calculateMaxHeight(lineElement);

    containerElement.style.height = maxHeight + "px";

    (window.innerWidth > 800)?
      containerElement.style.marginBottom = "-"+(titleSpace/2)+"px"
    :
      containerElement.style.marginBottom = null;
  }

  const verifySpinnerMaxHeight = (spinnerElement: HTMLElement) => {
    if (spinnerElement.getBoundingClientRect().height > maxHeightSpinner) {
      maxHeightSpinner = spinnerElement.getBoundingClientRect().height;
    }
  }

  const putSpinnerInCorrectPosition = (max?) => {
    const spinnerElement = spinner.current as HTMLElement;
    (max)? spinnerElement.style.top = (maxHeight - (maxHeightSpinner/3)) + "px" :
    spinnerElement.style.top = (maxHeight - (maxHeightSpinner * 1.15)) + "px";

    if(window.innerWidth < 400){
      spinnerElement.style.top = (maxHeight - (maxHeightSpinner/3)) + "px";
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

  const resetAll = () => {
    const textElement = text.current as HTMLElement;
    const lineElement = line.current as HTMLElement;
    const containerElement = container.current as HTMLElement;

    lineElement.style.height = "0px";

    if(window.innerWidth > 800)
        containerElement.style.marginBottom = "0px";

    if(hasOutSourcing){
      textElement.style.top = null;
      textElement.style.transform = `rotate(0deg)`;
    }

    if(hasSpinner){
      putSpinnerInCorrectPosition(true);
    }

    wasAnimated = false;
  }

  const scroll = () => {
    const lineElement = line.current as HTMLElement;
    window.scrollBy({
      top: (lineElement.getBoundingClientRect().top + (maxHeight - (titleSpace/2)) - 200 ),
      left: 0,
      behavior: 'smooth'
    });
  }

  const animateLine = () => {
    const textElement = text.current as HTMLElement;
    const lineElement = line.current as HTMLElement;
    const spinnerElement = spinner.current as HTMLElement;
    const containerElement = container.current as HTMLElement;

    calculateMaxHeight(lineElement);

    if(resize){
      lineMaxHeight();
    }

    if (hasSpinner) {
      verifySpinnerMaxHeight(spinnerElement);
    }

    const width = lineElement.getBoundingClientRect().width;
    const distanceFromTop = window.innerHeight * 0.8 - lineElement.getBoundingClientRect().top;
    
    const tangent = maxHeight / width;
    const arcTangent = Math.atan(tangent);
    const degrees = arcTangent * (180 / Math.PI);

    if(distanceFromTop < 0 && wasAnimated === true){
      resetAll();
    }

    if((distanceFromTop > 0 && wasAnimated === false) ||(resize && wasAnimated)){
      disableScroll();

      lineElement.style.transition = "height 0.5s ease";
      lineElement.style.height = maxHeight + "px";
      
      if(window.innerWidth > 800)
        setTimeout(()=> {containerElement.style.marginBottom = "-100px"}, 50)

      if(hasOutSourcing){
        textElement.style.top = (- (minHeightOutSourcing) + maxHeight / 2) + "px";
        textElement.style.transform = `rotate(${degrees}deg)`;
      }

      if (hasSpinner) {
        spinnerElement.style.top = (maxHeight + (titleSpace/2)) - (maxHeightSpinner * 0.3) + 'px';

        if(innerWidth < 414){
          spinnerElement.style.top = (maxHeight + maxHeightSpinner * 0.1) + "px";
        }
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

      requestAnimationFrame(animateLine);
  }

  React.useEffect(() => {

    requestAnimationFrame(animateLine);

    lineMaxHeight();

    if(hasSpinner)
      putSpinnerInCorrectPosition();

    window.addEventListener("resize", () => {
      resize = true
      requestAnimationFrame(animateLine);
    });
  }, []);

  return (
    <LineContainerStyled
      style={{ backgroundColor: secondaryBg, borderColor: lineBg }}
      ref={container}
    >
      {hasSpinner ? (
        <SpinningIconStyled className="spinner" ref={spinner}>
          <img src={Spinner} alt="L2 Code"/>
        </SpinningIconStyled>
      ) : null}

      {hasOutSourcing ? (
        <TextContainerStyled
          ref={text}
          style={{ backgroundColor: secondaryBg }}
        >
          <OutSourcing color="black_1" texts="outSourcing.ourClients" />
        </TextContainerStyled>
      ) : null}

        <LineStyled ref={line} style={{ backgroundColor: lineBg }} />
        
        <Sup style={{ backgroundColor: lineBg }} />
      </LineContainerStyled>
  )
}
export default LineAnimation;
