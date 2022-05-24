import React from 'react';
import { SectionOutSourcingStyled, ParagraphOutSourcingStyled } from './styled';
import Marquee from 'react-fast-marquee';
import i18next from 'i18next';
export default function OutSourcing() {
  const {t} = i18next
  return (
    <SectionOutSourcingStyled>
      <Marquee gradientColor={[null,undefined,undefined]} direction='left' loop={0} speed={100}>
        <ParagraphOutSourcingStyled>
        ·  {t('outSourcing.outsourcing')} · 
        {t('outSourcing.ideation')} · 
        {t('outSourcing.design')} · 
        {t('outSourcing.startupService')} · 
        {t('outSourcing.consultingService')}  ·  
        {t('outSourcing.outsourcing')} · 
        {t('outSourcing.ideation')} · 
        {t('outSourcing.design')} · 
        {t('outSourcing.startupService')} · 
        {t('outSourcing.consultingService')}
        </ParagraphOutSourcingStyled>
      </Marquee> 
    </SectionOutSourcingStyled>
  );
}
