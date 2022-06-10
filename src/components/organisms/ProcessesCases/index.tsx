import React from 'react';
import { SectionOnePageStyled, DivItemStyled, ImageStyled } from './styled';
import { Typography } from '../../../styles/typography';
import i18next from 'i18next';

export default function ProcessesCases() {
  const { t } = i18next;
  return (
    <SectionOnePageStyled>
      <ImageStyled src="../images/process-memories-up.jpg" alt="L2 Code" />

      <DivItemStyled>
        <Typography
          tag="h1"
          size="small"
          fontWeight="weight3"
          lineHeight="line120"
          color="gray"
          fontFamily="font1"
          letterSpacing="space1"
        >
          {t('processCases.processes carried out')}
        </Typography>

        <Typography tag="p" color="gray" fontFamily="font2">
          {t('processCases.weTread')}
        </Typography>

        <ul>
          <Typography tag="li" color="gray" fontFamily="font2">
            {t('processCases.ideation')}
          </Typography>
          <Typography tag="li" color="gray" fontFamily="font2">
            {t('processCases.wireframe')}
          </Typography>
          <Typography tag="li" color="gray" fontFamily="font2">
            {t('processCases.conceptArt')}
          </Typography>
          <Typography tag="li" color="gray" fontFamily="font2">
            {t('processCases.design')}
          </Typography>
          <Typography tag="li" color="gray" fontFamily="font2">
            {t('processCases.navigablePrototype')}
          </Typography>
        </ul>
      </DivItemStyled>
    </SectionOnePageStyled>
  );
}
