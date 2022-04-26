import React from 'react';
import {
  SectionStyled,
  DivOurServicesStyled,
  HeadingStyled,
  ParagraphServicesStyled,
  ScrollArrow,
} from "./styled";
import OutSourcing from '../../atoms/OutSourcing';
import ScrollCircle from "../../atoms/ScrollCircle";
import Button from '../../atoms/Button';

export default function OurServices() {
  return (
    <SectionStyled>
      <ScrollArrow className="SpinnerCircle2">
        <ScrollCircle image={null}/>
      </ScrollArrow>

      <DivOurServicesStyled>
        <HeadingStyled>NOSSOS SERVIÇOS</HeadingStyled>
        <ParagraphServicesStyled>
          Melhoramos a experiência dos produtos e serviços de nossos clientes,
          com foco em resultados para seus negócio.
        </ParagraphServicesStyled>
        <Button backgroundColor="green" linkBtn="#"></Button>  
      </DivOurServicesStyled>
      <OutSourcing /> 
    </SectionStyled>
    
  );
}
