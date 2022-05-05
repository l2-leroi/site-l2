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
        const movimento = 25 - ((blackLineMovimento-128)/10);
        const movimento2 = 25 + ((blackLineMovimento-128)/50);
        
        // console.log(movimento2)
        if((movimento > 0) && (movimento2 < 30)){
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