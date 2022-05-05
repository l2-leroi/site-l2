import{
    Line
} from './style'

import React, { Children } from 'react';

interface Props{
  classe: String;
  children: React.ReactNode;
  backgroundColor: string;
}

const LineAnimation = ({children,classe,backgroundColor}) => {
    React.useEffect(()=> {
        window.addEventListener("scroll", handleScroll);
      });
    const handleScroll = () => {
        const blackLine = document.querySelector(`.${classe}`) as HTMLElement;
        
        const blackLineMovimento = ( window.innerHeight * 0.8 - blackLine.getBoundingClientRect().top )

        let inclination = 25;

        if((window.innerWidth > 600) && (window.innerWidth < 800)){
          inclination = 15;
        }else if(window.innerWidth <= 600){
          inclination = 10;
        }


        const movimento = inclination - ((blackLineMovimento-128)/10);
        const movimento2 = inclination + ((blackLineMovimento-128)/50);
        
        if((movimento > 0) && (movimento2 >= inclination) && (movimento2 < (inclination + 5))){
          blackLine.style.clipPath = `polygon(0 ${movimento}%, 100% ${movimento2}%, 100% 100%, 0% 100%)`
        }
        
      };
    return(
        <Line className={classe} bgColor={backgroundColor}>
            { children }
        </Line>
    )

}
export default LineAnimation