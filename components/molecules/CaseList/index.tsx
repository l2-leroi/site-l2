import Image from "next/image";
import { ButtonStyled, CaseNumberStyled, CaseStyled, ContentStyled, ListStyled, InfoStyled, LinkStyled, TitleStyled, ButtonContentStyled } from "./styled";
import { ArrowIcon } from "../../../assets/icons/arrowIcon";

interface Case { 
  number: string,
  title: string,
  info: string,
  image: string,
  alt: string,
  link: string,
}

interface CaseProps { 
  cases: Case[];
  linkBtn?: string;
}

function CaseList(props: CaseProps) {
  return (
    <ContentStyled>
      <ListStyled>
        {
          props.cases.map((c) => (
            <CaseStyled key={c.title}>
              <CaseNumberStyled>Case {c.number}</CaseNumberStyled>
              <TitleStyled>{c.title}</TitleStyled>
              <InfoStyled>{c.info}</InfoStyled>
              <LinkStyled href={c.link}>
                <Image src={c.image} alt={c.alt} />
              </LinkStyled>
            </CaseStyled>
          ))
        }
      </ListStyled>

      {
        props.linkBtn && 
          (
            <ButtonContentStyled>
              <LinkStyled href={props.linkBtn}>
                <ButtonStyled>VEJA TODOS OS CASES</ButtonStyled>  
                <ButtonStyled> <ArrowIcon /> </ButtonStyled>
              </LinkStyled>
            </ButtonContentStyled>
          )          
      }
    </ContentStyled>
  );
};

export default CaseList;