import React from 'react';
import { SectionOutSourcingStyled } from './styled';
import Marquee from 'react-fast-marquee';
import i18next from 'i18next';
import { Typography } from '../../../styles/typography';
export default function OutSourcing() {
  const {t} = i18next
  return (
    <SectionOutSourcingStyled>
      <Marquee gradientColor={[null,undefined,undefined]} direction='left' loop={0} speed={100}>
        <Typography tag='p' color='dark_gray' size='small' lineHeight='line120' fontWeight='weight2' letterSpacing='space1'>·  {t('outSourcing.outsourcing')} · {t('outSourcing.ideation')} · {t('outSourcing.design')} · {t('outSourcing.startupService')} · {t('outSourcing.consultingService')}  ·  {t('outSourcing.outsourcing')} · {t('outSourcing.ideation')} · {t('outSourcing.design')} · {t('outSourcing.startupService')} · {t('outSourcing.consultingService')}</Typography>

      </Marquee> 
    </SectionOutSourcingStyled>
  );
}
