import React from 'react';
import { SectionOutSourcingStyled, ParagraphOutSourcingStyled } from './styles';
import Marquee from 'react-fast-marquee';

export default function OutSourcing() {
  return (
    <SectionOutSourcingStyled>
      <Marquee gradientColor={[null,undefined,undefined]} direction='right' loop={0} speed={100}>
      <ParagraphOutSourcingStyled>
      ·  Outsourcing Consultivo · Ideação · Design · Atendimento à Start-up ·
        Consultora em TI  ·  Outsourcing Consultivo · Ideação · Design · Atendimento à Start-up · Consultora em TI
      </ParagraphOutSourcingStyled>
      </Marquee>
      
    </SectionOutSourcingStyled>
  );
}
