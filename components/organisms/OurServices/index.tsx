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
//translation
import { useTranslations } from 'next-intl'

export default function OurServices() {
   //translation
   const t= useTranslations('services');
   const images= useTranslations('images')
  return (
    <SectionStyled>
      <ScrollArrow className="SpinnerCircle2">
        <ScrollCircle isWhiteImage={false} 
        blackImage={`${images('spinner')}`}
         whiteImage={`${images('whiteSpinner')}`}alt={"Tem mais coisa aqui em baixo"}/>
      </ScrollArrow>

      <DivOurServicesStyled>
        <HeadingStyled>{t('ourServices')}</HeadingStyled>
        <ParagraphServicesStyled>{t('weImprove')}
        </ParagraphServicesStyled>
        <Button linkBtn="#" backgroundColor={`${colors.green}`} text="VEJA NOSSOS SERVIÇOS"></Button>  
      </DivOurServicesStyled>
      <OutSourcing /> 
    </SectionStyled>
    
  );
}
