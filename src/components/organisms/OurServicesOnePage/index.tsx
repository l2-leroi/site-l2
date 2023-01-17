import React from 'react';
import i18next from 'i18next';
import {
  SectionOnePageStyled,
  ContentOnePageStyled,
  DivServicesStyled,
  DivServiceItemsStyled,
  TextContainer,
} from './styled';
import { Typography } from '../../../styles/typography';
import Button from '../../atoms/Button';
import { colors } from '../../../styles/colors';
import OutSourcing from '../../atoms/OutSourcing';

export default function OurServicesOnePage() {
  const { t } = i18next;
  const language = i18next.language.substring(0, 2);

  return (
    <SectionOnePageStyled id="services">
      <TextContainer>
        <OutSourcing color="dark_gray" texts="outSourcing.ourServices" />{' '}
      </TextContainer>
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
          <Button
            linkBtn={`/${language}/servicos`}
            text="NOSSOS SERVIÇOS"
            backgroundColor={`${colors.green}`}
            fill={`${colors.black}`}
            fontSize="large"
          />
          {/* if (router.pathname === '/') {
            router.push(`/${i18next.language.substring(0, 2)}`);
          } */}

          {/* <DivItemStyled>
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
          </DivItemStyled> */}
        </DivServiceItemsStyled>
        {/* <TextContainer>
          <OutSourcing color="dark_gray" texts="outSourcing.ourServices" />{' '}
        </TextContainer> */}
      </ContentOnePageStyled>
    </SectionOnePageStyled>
  );
}
