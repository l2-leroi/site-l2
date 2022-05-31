import{
    Line
} from './style'

import React, { useRef } from 'react';

interface Props{
  aboveElement: React.ReactNode;
  belowElement: React.ReactNode;
  supportDiv: React.ReactNode;
  children: React.ReactNode;
  backgroundColor: string;
}

const LineAnimation = ({aboveElement, belowElement, backgroundColor, children, supportDiv}) => {
  const line = useRef();

  const animateLine = () => {
    // const box = document.querySelector(".testebox") as HTMLElement;
    // const roxo = document.querySelector("#contact") as HTMLElement;
    // const customersContent = document.querySelector(".customersContent") as HTMLElement;
    // const teste4 = document.querySelector(".teste4") as HTMLElement;
    // const contentstyled = document.querySelector(".containerstyled") as HTMLElement;
    // const footer = document.querySelector(".footer") as HTMLElement;


    const lineElement = line.current as HTMLElement;

    const halfTopScroll =
      window.innerHeight * 0.6 - lineElement.getBoundingClientRect().top;

    const degrees = halfTopScroll/50;

    if(degrees > 0 && degrees <= 17.76){
      lineElement.style.transform = `skewY(${degrees}deg)`;

      const radians = degrees * (Math.PI/180)
      const x = Math.tan(radians) * (window.innerWidth) / 2;

      belowElement.style.paddingTop = x+"px";
      belowElement.style.marginTop = -x+"px";
      belowElement.style.transition = `0.2s linear all`;

      aboveElement.style.marginBottom = -x+"px";
      aboveElement.style.paddingBottom = x+"px";
      aboveElement.style.transition = `0.2s linear all`;

      supportDiv.style.top = -(x + 50)+"px";
      supportDiv.style.height = (x + 20)+"px";
      supportDiv.style.width = (window.innerWidth/2)+"px";
      supportDiv.style.transition = `0.2s linear all`;
      const marginContainer = +getComputedStyle(aboveElement).getPropertyValue('margin-right')
      .replace('px', '')
      const paddingContainer = +getComputedStyle(belowElement).getPropertyValue('padding-right')
      .replace('px', '')
      const sum = marginContainer + paddingContainer;
      supportDiv.style.right = `-${sum}px`
      lineElement.style.paddingTop = x+"px";
      lineElement.style.marginTop = -x+"px";
    }

    requestAnimationFrame(animateLine);
  }

  React.useEffect(() => {
    requestAnimationFrame(animateLine)
  },[]);

    return(
      <>
        <Line ref={line} bgColor={backgroundColor}>
          {children}
        </Line>
      </>
    )
}
export default LineAnimation