import React from 'react';
import i18next from 'i18next';
import {
  SectionStyled,
  DivOurServicesStyled,
  HeadingStyled,
  ParagraphServicesStyled,
  ScrollArrow,
} from './styled';
import OutSourcing from '../../atoms/OutSourcing';
import ScrollCircle from '../../atoms/ScrollCircle';
import Button from '../../atoms/Button';
import { colors } from '../../../styles/colors';

export default function OurServices() {
  const { t } = i18next;
  return (
    <SectionStyled>
      <ScrollArrow className="SpinnerCircle2">
        <ScrollCircle
          isWhiteImage={false}
          blackImage={`${t('images.spinner')}`}
          whiteImage={`${t('images.whiteSpinner')}`}
        />
      </ScrollArrow>

      <DivOurServicesStyled>
        <HeadingStyled>{t('services.ourServices')}</HeadingStyled>
        <ParagraphServicesStyled>
          {t('services.weImprove')}
        </ParagraphServicesStyled>
        <Button
          linkBtn="#"
          backgroundColor={`${colors.green}`}
          text={`${t('services.text.seeOurServices')}`}
        />
      </DivOurServicesStyled>
      <OutSourcing texts="outSourcing.ourServices" color="dark_gray" />
    </SectionStyled>
  );
}
