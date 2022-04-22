import React from 'react';
import {
  SectionStyled,
  DivOurServicesStyled,
  DivButtonServicesStyled,
  HeadingStyled,
  ParagraphServicesStyled,
  ButtonServicesStyled,
  ScrollArrow,
} from './styles';
import seta from '../../../assets/images/seta.svg';
import OutSourcing from '../../atoms/letreiro';
import ScrollCircle from "../../atoms/ScrollCircle";

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

        <DivButtonServicesStyled>
          <ButtonServicesStyled>NOSSOS SERVIÇOS</ButtonServicesStyled>
          <img src={seta} alt="seta" />
        </DivButtonServicesStyled>
        
      </DivOurServicesStyled>
        <OutSourcing />
    </SectionStyled>
    
  );
}
