import React from 'react';
import i18next from 'i18next';
import {
  FooterStyled,
  ContentStyled,
  AsideStyled,
  CopyrightStyled,
  InfoStyled,
  IconStyled,
  ImageStyled,
  ContainerStyled,
  DivStyled,
  IdSpanStyled,
} from './styled';
import { HeartIcon } from '../../../assets/icons/heartIcon';
import ContactList from '../../molecules/ContactList/index';
import { Typography } from '../../../styles/typography';

function Footer() {
  const { t } = i18next;
  const contacts = [
    // obs: deixar comentado para não exibir a parte do whatsapp, pois está com o número do nery
    // {
    //   title: t('footer.ourWhatsapp'),
    //   contact: '+55 51 99693.9336',
    //   link: 'https://api.whatsapp.com/send?phone=5551996939336',
    // },
    {
      title: t('footer.ourEmail'),
      contact: 'contato@l2code.com.br',
      link: 'mailto:contato@l2code.com.br',
    },
    {
      title: t('footer.bePart'),
      contact: 'talentos@l2code.com.br',
      link: 'mailto:talentos@l2code.com.br',
    },
  ];

  return (
    // <LineAnimation backgroundColor={colors.purple} classe={'purpleLine'}>
    <FooterStyled className="footer">
      <IdSpanStyled id="contact" />
      <ContainerStyled className="containerstyled">
        <ContentStyled>
          <DivStyled>
            <Typography
              color="gray"
              tag="h2"
              size="medium"
              fontWeight="weight3"
              fontFamily="font1"
              lineHeight="line90"
            >
              {t('footer.letsTalk')}
            </Typography>
            <AsideStyled>
              <Typography
                color="gray"
                tag="p"
                size="xxsmall"
                letterSpacing="space1"
              >
                &lt;AND DANCE&gt;
              </Typography>
            </AsideStyled>
          </DivStyled>
          <ContactList contacts={contacts} />
        </ContentStyled>
        <CopyrightStyled>
          <InfoStyled>
            <Typography
              tag="p"
              size="xxsmall"
              letterSpacing="space1"
              color="gray"
            >
              {t('footer.weEmbrace')}
            </Typography>
            <Typography
              tag="p"
              size="xxsmall"
              letterSpacing="space1"
              color="gray"
            >
              {t('footer.weWork')}
            </Typography>
          </InfoStyled>
          <InfoStyled className="desktop">
            <ImageStyled src="/images/Logo-Small.svg" alt="L2 Code" />
          </InfoStyled>
          <InfoStyled className="align-end">
            <Typography
              tag="p"
              size="xxsmall"
              letterSpacing="space1"
              color="gray"
            >
              {t('footer.madeWith')}{' '}
              <IconStyled>
                {' '}
                <HeartIcon />{' '}
              </IconStyled>{' '}
              L2code
            </Typography>
            <Typography
              tag="p"
              size="xxsmall"
              letterSpacing="space1"
              color="gray"
            >
              {t('footer.copyright')}
            </Typography>
          </InfoStyled>
        </CopyrightStyled>
        <InfoStyled className="mobile">
          <ImageStyled src="/images/Logo-Small.svg" alt="L2 Code" />
        </InfoStyled>
      </ContainerStyled>
    </FooterStyled>
    // </LineAnimation>
  );
}

export default Footer;
