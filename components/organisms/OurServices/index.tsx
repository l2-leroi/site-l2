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
import { colors } from '../../../styles/colors';

export default function OurServices() {
  return (
    <SectionStyled>
      <ScrollArrow className="SpinnerCircle2">
        <ScrollCircle isWhiteImage={false} blackImage={"./images/Arrow-Spinner.svg"} whiteImage={"./images/Arrow-Spinner-White.svg"} alt={"Tem mais coisa aqui em baixo"}/>
      </ScrollArrow>

      <DivOurServicesStyled>
        <HeadingStyled>NOSSOS SERVIÇOS</HeadingStyled>
        <ParagraphServicesStyled>
          Melhoramos a experiência dos produtos e serviços de nossos clientes,
          com foco em resultados para seus negócio.
        </ParagraphServicesStyled>
        <Button linkBtn="#" backgroundColor={`${colors.green}`} text="VEJA NOSSOS SERVIÇOS"></Button>  
      </DivOurServicesStyled>
      <OutSourcing text="   ·  Outsourcing Consultivo · Ideação · Design · Atendimento à Start-up ·
            Consultora em TI  ·  Outsourcing Consultivo · Ideação · Design · Atendimento à Start-up · Consultora em TI" color={"#8e9195"}/> 
    </SectionStyled>
    
  );
}
