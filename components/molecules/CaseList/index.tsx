import { CaseNumberStyled, CaseStyled, ContentStyled, ListStyled, InfoStyled, LinkStyled, TitleStyled, ButtonContentStyled, ImageStyled } from "./styled";
import Button from "../../atoms/Button";
import { colors } from "../../../styles/colors";
import { useEffect } from "react";

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

    //animeScroll();

    if(target.length) {
      window.addEventListener('scroll', () => {
        animeScroll();
      })
    }

    // anime hover
    const cover = document.querySelector<HTMLElement>('.cover');
    cover.addEventListener('mouseover', () => {
        cover.classList.add('transparent');
    })
    cover.addEventListener('mouseout', () => {
      cover.classList.remove('transparent');
  })
  }, [])

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
                { 
                  c.hover.forEach((e) => {
                    <ImageStyled src={e} alt={c.alt} width={464} height={700} />
                  })
                }
                <ImageStyled src={c.image} alt={c.alt} width={464} height={700} className="cover"/>
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