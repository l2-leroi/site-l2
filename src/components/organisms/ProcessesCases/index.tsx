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
          {t('processesCases.processesCarriedOut')}
        </Typography>

        <Typography tag="p" color="gray" fontFamily="font2">
          {t('processesCases.weTread')}
        </Typography>

        <ul>
          <Typography tag="li" color="gray" fontFamily="font2">
            {t('processesCases.ideation')}
          </Typography>
          <Typography tag="li" color="gray" fontFamily="font2">
            {t('processesCases.wireframe')}
          </Typography>
          <Typography tag="li" color="gray" fontFamily="font2">
            {t('processesCases.conceptArt')}
          </Typography>
          <Typography tag="li" color="gray" fontFamily="font2">
            {t('processesCases.design')}
          </Typography>
          <Typography tag="li" color="gray" fontFamily="font2">
            {t('processesCases.navigablePrototype')}
          </Typography>
        </ul>
      </DivItemStyled>
    </SectionOnePageStyled>
  );
}
