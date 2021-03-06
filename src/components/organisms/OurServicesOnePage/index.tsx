import React from 'react';
import i18next from 'i18next';
import {
  SectionOnePageStyled,
  ContentOnePageStyled,
  DivServicesStyled,
  DivServiceItemsStyled,
  DivItemStyled,
  ImageStyled,
} from './styled';
import { Typography } from '../../../styles/typography';

export default function OurServicesOnePage() {
  const { t } = i18next;
  return (
    <SectionOnePageStyled id="services">
      <ContentOnePageStyled>
        <DivServicesStyled>
          <Typography
            color="gray"
            tag="h2"
            size="medium"
            fontWeight="weight3"
            fontFamily="font1"
            lineHeight="line90"
          >
            {t('services.ourServices')}
          </Typography>
          <Typography color="gray" tag="p">
            {t('services.weImprove')}
          </Typography>
        </DivServicesStyled>

        <DivServiceItemsStyled>
          <DivItemStyled>
            <Typography
              color="gray"
              tag="h3"
              fontWeight="weight3"
              size="small"
              lineHeight="line120"
              letterSpacing="space1"
            >
              {t('services.outsourcing')}
            </Typography>

            <Typography color="dark_gray" tag="p">
              {' '}
              {t('services.increase')}
            </Typography>
          </DivItemStyled>

          <DivItemStyled>
            <Typography
              color="gray"
              tag="h3"
              fontWeight="weight3"
              size="small"
              lineHeight="line120"
              letterSpacing="space1"
            >
              {t('services.startupService')}
            </Typography>

            <Typography color="dark_gray" tag="p">
              {t('services.uxuiTeam')}
            </Typography>
          </DivItemStyled>

          <DivItemStyled>
            <Typography
              color="gray"
              tag="h3"
              fontWeight="weight3"
              size="small"
              lineHeight="line120"
              letterSpacing="space1"
            >
              {t('services.ideation')}
            </Typography>

            <Typography color="dark_gray" tag="p">
              {t('services.coCreation')}
            </Typography>
          </DivItemStyled>

          <DivItemStyled>
            <Typography
              color="gray"
              tag="h3"
              fontWeight="weight3"
              size="small"
              lineHeight="line120"
              letterSpacing="space1"
            >
              {t('services.uxuiDesign')}
            </Typography>

            <Typography color="dark_gray" tag="p">
              {t('services.weDesign')}
            </Typography>
          </DivItemStyled>

          <DivItemStyled>
            <Typography
              color="gray"
              tag="h3"
              fontWeight="weight3"
              size="small"
              lineHeight="line120"
              letterSpacing="space1"
            >
              {t('services.consultingService')}
            </Typography>

            <Typography color="dark_gray" tag="p">
              {t('services.ourTechLead')}
            </Typography>
          </DivItemStyled>

          <DivItemStyled>
            <ImageStyled src="/images/RectangleL2.svg" alt="L2 Code" />
          </DivItemStyled>
        </DivServiceItemsStyled>
      </ContentOnePageStyled>
    </SectionOnePageStyled>
  );
}
