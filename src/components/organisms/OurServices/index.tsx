import React from 'react';
import i18next from 'i18next';
import {
  SectionStyled,
  DivOurServicesStyled,
  HeadingStyled,
  ParagraphServicesStyled,
} from './styled';
import OutSourcing from '../../atoms/OutSourcing';

import Button from '../../atoms/Button';
import { colors } from '../../../styles/colors';

export default function OurServices() {
  const { t } = i18next;
  return (
    <SectionStyled>
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
