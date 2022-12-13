import React from 'react';
import i18next, { t } from 'i18next';
import { Typography } from '../../../styles/typography';
import InternalPageHeader from '../../molecules/InternalPageHeader';
import { DivStyled, SectionStyled } from './styled';

export default function PeoplePage() {
  const deaderProps = {
    title: t('people.ourTalents'),
    text: t('people.weWork'),
    sideTag: t('people.whoWeAre'),
    pageName: t('people.pageName'),
  };
  return (
    <>
      <InternalPageHeader internalHeader={deaderProps} />

      <SectionStyled>
        <DivStyled>
          <Typography
            tag="h2"
            color="gray"
            size="small"
            fontWeight="weight2"
            fontFamily="font2"
            lineHeight="line120"
          >
            {t('people.nobodyInnovatesAlone')}
          </Typography>

          <Typography
            color="gray"
            size="xsmall"
            fontWeight="weight1"
            fontFamily="font2"
            lineHeight="line140"
          >
            {t('people.togetherWeMakeMagic')}
          </Typography>
        </DivStyled>
      </SectionStyled>
    </>
  );
}
