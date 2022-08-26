import React from 'react';
import Marquee from 'react-fast-marquee';
import i18next from 'i18next';
import { SectionOutSourcingStyled } from './styled';
import { Typography } from '../../../styles/typography';

export default function OutSourcing({ texts, color }) {
  const { t } = i18next;
  return (
    <SectionOutSourcingStyled>
      <Marquee
        gradientColor={[null, undefined, undefined]}
        direction="left"
        loop={0}
        speed={100}
      >
        <Typography
          tag="p"
          color={color}
          size="small"
          lineHeight="line120"
          fontWeight="weight2"
          letterSpacing="space1"
        >
          {t(texts)} {t(texts)}
        </Typography>
      </Marquee>
    </SectionOutSourcingStyled>
  );
}
