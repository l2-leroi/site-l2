import { CaseNumberStyled, CaseStyled, ContentStyled, ListStyled, InfoStyled, LinkStyled, TitleStyled, ButtonContentStyled, ImageStyled } from "./styled";
import Button from "../../atoms/Button";
import { colors } from "../../../styles/colors";
import { useEffect, useLayoutEffect, useState } from "react";

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

  const [isHover, setIsHover] = useState(false);
  const [srcImage, setSrcImage] = useState("");
  const [images, setImages] = useState([]);

  function animeHover(isHover: boolean) {
    setIsHover(isHover);
    while(isHover) {
      for(let i = 0; i < images.length; i++) {
        setSrcImage(images[i]);
        console.log(srcImage);
      }
    }
  }  

  return (
    <ContentStyled>
      <ListStyled>
        {
          props.cases.map((c) => (
            <CaseStyled key={c.title} data-anime="animate">
              <CaseNumberStyled>Case {c.number}</CaseNumberStyled>
              <TitleStyled>{c.title}</TitleStyled>
              <InfoStyled>{c.info}</InfoStyled>
              <LinkStyled>     
                <ImageStyled 
                  src={isHover ? srcImage : c.image} 
                  alt={c.alt} 
                  width={464} 
                  height={700} 
                  onMouseEnter={() => {
                    setImages(c.hover);
                    animeHover(true);
                    console.log('entrada');
                  }}
                  onMouseLeave={() => {
                    animeHover(false); 
                    console.log('saida');
                  }}
                />
              </LinkStyled>
            </CaseStyled>
          ))
        }
      </ListStyled>

      {
        props.linkBtn && 
          (
            <ButtonContentStyled>
              <Button linkBtn={props.linkBtn} borderColor={`${colors.green}`} />
            </ButtonContentStyled>
          )          
      }
    </ContentStyled>
  );
};

export default CaseList;