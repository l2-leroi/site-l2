import React from 'react';
import { SectionOutSourcingStyled, ParagraphOutSourcingStyled } from './styled';
import Marquee from 'react-fast-marquee';

export default function OutSourcing({text, color}) {
  return (
    <SectionOutSourcingStyled>
      <Marquee gradientColor={[null,undefined,undefined]} direction='left' loop={0} speed={100}>
        <ParagraphOutSourcingStyled style={{color: color}}>
          {text}
        </ParagraphOutSourcingStyled>
      </Marquee> 
    </SectionOutSourcingStyled>
  );
}
