import { CaseNumberStyled, CaseStyled, ContentStyled, ListStyled, InfoStyled, LinkStyled, TitleStyled, ButtonContentStyled, ImageStyled } from "./styled";
import Button from "../../atoms/Button";
import { colors } from "../../../styles/colors";
import { useEffect, useRef, useState } from "react";

interface Case { 
  number: string,
  title: string,
  info: string,
  image: string,
  alt: string,
  link: string,
  hover: string[],
}

interface CaseProps { 
  cases: Case[];
  linkBtn?: string;
}

function CaseList(props: CaseProps) {
  const interval = useRef(null);
  var currentImage = '';
  const [actualImage, setActualImage] = useState('');

  // anime scroll 
  useEffect(() => {
    const target = document.querySelectorAll<HTMLElement>('[data-anime]');

    function animeScroll() {
      const windowTop = window.pageYOffset + (window.innerHeight * 0.6);
      target.forEach((element) => {
        if(windowTop > element.offsetTop) {
          element.classList.add('animate');
        }
      })
    }

    animeScroll();

    if(target.length) {
      window.addEventListener('scroll', () => {
        animeScroll();
      })
    }
  }, [])

  // anime hover
  const initInterval = (images: string[]) => {
    interval.current = setInterval(() => {
      const index = (currentImage != '') ? images.indexOf(currentImage) : 0;    
      if(index == (images.length-1)) {
        currentImage = images[0];
        setActualImage(currentImage);
      }
      else { 
        currentImage = images[index+1];
        setActualImage(currentImage);
      }
    }, 150)
  };

  const cancelInterval = (image: string) => {
    clearInterval(interval.current);
    interval.current = null;
    setActualImage(image);
  };

  return (
    <ContentStyled>
      <ListStyled>
        {
          props.cases.map((itemCase) => (
            <CaseStyled key={itemCase.title} data-anime="animate">
              <CaseNumberStyled>Case {itemCase.number}</CaseNumberStyled>
              <TitleStyled>{itemCase.title}</TitleStyled>
              <InfoStyled>{itemCase.info}</InfoStyled>
              <LinkStyled
                onMouseEnter={() => {     
                  initInterval(itemCase.hover);              
                }}
                onMouseLeave={() => {
                  cancelInterval(itemCase.image); 
                }}
              > 
                <ImageStyled 
                  src={itemCase.image} 
                  alt={itemCase.alt} 
                  width={464} 
                  height={700} 
                />
              {
                itemCase.hover.map((imageHover => (  
                  <ImageStyled key={imageHover}
                    src={imageHover} 
                    alt={itemCase.alt} 
                    width={464} 
                    height={700} 
                    className={
                      ((actualImage == imageHover) ? "imageBlock" : "imageNone")
                    }
                  />
                ))) 
              }
              </LinkStyled>
            </CaseStyled>
          ))
        }
      </ListStyled>

      {
        props.linkBtn && 
          (
            <ButtonContentStyled>
              <Button linkBtn={props.linkBtn} borderColor={colors.green} />
            </ButtonContentStyled>
          )          
      }
    </ContentStyled>
  );
};

export default CaseList;