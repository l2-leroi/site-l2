import {
  FooterStyled,
  ContentStyled,
  AsideStyled,
  ParagraphStyled,
  TitleStyled,
  CopyrightStyled,
  InfoStyled,
  PhraseStyled,
  IconStyled,
  ImageStyled,
  ContainerStyled,
  DivStyled,
} from "./styled";
import { HeartIcon } from '../../../assets/icons/heartIcon';
import ContactList from '../../molecules/ContactList/index'
import React from 'react';
import LineAnimation from '../../atoms/LineAnimation';
import { colors } from '../../../styles/colors';
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t= useTranslations('footer');
  const contacts = [
    {
      title: t('ourWhatsapp'),
      contact: '+55 51 99693.9336',
      link: 'https://api.whatsapp.com/send?phone=5551996939336',
    },
    {
      title: t('ourEmail'),
      contact: 'contato@l2code.com.br',
      link: 'mailto:contato@l2code.com.br',
    },
    {
      title: t('bePart'),
      contact: 'talentos@l2code.com.br',
      link: 'mailto:talentos@l2code.com.br',
    },
  ];

  return (
    <LineAnimation backgroundColor={colors.purple} classe={'purpleLine'}>
    <FooterStyled id="contact">
      <ContainerStyled>
        <ContentStyled>
          <DivStyled>
            <TitleStyled>{t('letsTalk')}</TitleStyled>
            <AsideStyled>
              <ParagraphStyled>&lt;AND DANCE&gt;</ParagraphStyled>
            </AsideStyled>
          </DivStyled>
          <ContactList contacts={contacts} />
        </ContentStyled>

          <CopyrightStyled>
            <InfoStyled>
              <PhraseStyled>{t('weEmbrace')}</PhraseStyled>
              <PhraseStyled>{t('remoteWork')}</PhraseStyled>
            </InfoStyled>

            <InfoStyled className="desktop">
                <ImageStyled src="./images/Logo-Small.svg" alt="L2 Code" />
            </InfoStyled>

            <InfoStyled className="align-end">
              <PhraseStyled>{t('madeWith')}<IconStyled> <HeartIcon/> </IconStyled> L2code</PhraseStyled>
              <PhraseStyled>{t('copyright')}</PhraseStyled>
            </InfoStyled>
          </CopyrightStyled>

          <InfoStyled className="mobile">
                <ImageStyled src="./images/Logo-Small.svg" alt="L2 Code" />
          </InfoStyled>
          
        </ContainerStyled>
    </FooterStyled>
    </LineAnimation>
  );
};

export default Footer;
