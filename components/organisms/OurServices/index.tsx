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
  return (
    <SectionStyled>
      <ScrollArrow className="SpinnerCircle2">
        <ScrollCircle image={null}/>
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
