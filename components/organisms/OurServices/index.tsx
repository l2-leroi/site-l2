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
import { useTranslations } from 'next-intl'

export default function OurServices() {
   const t= useTranslations('services');
   const tImages= useTranslations('images')
  return (
    <SectionStyled>
      <ScrollArrow className="SpinnerCircle2">
        <ScrollCircle isWhiteImage={false} 
        blackImage={`${tImages('spinner')}`}
         whiteImage={`${tImages('whiteSpinner')}`}alt={`${t('alt.thereIsMore')}`}/>
      </ScrollArrow>

      <DivOurServicesStyled>
        <HeadingStyled>{t('ourServices')}</HeadingStyled>
        <ParagraphServicesStyled>{t('weImprove')}
        </ParagraphServicesStyled>
        <Button linkBtn="#" backgroundColor={`${colors.green}`} text={`${t('text.seeOurServices')}`}></Button>  
      </DivOurServicesStyled>
      <OutSourcing /> 
    </SectionStyled>
    
  );
}
