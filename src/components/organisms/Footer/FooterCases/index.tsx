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
  import { HeartIcon } from '../../../../assets/icons/heartIcon';
  import ContactList from '../../../molecules/ContactList/index'
  import React from 'react';
  import LineAnimation from '../../../atoms/LineAnimation';
  import { colors } from '../../../../styles/colors';
  import i18next from "i18next";
  
  const FooterCases = () => {
    const {t} = i18next
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
      <LineAnimation backgroundColor={colors.purple} classe={'purpleLine'}>
      <FooterStyled id="contact">
        <ContainerStyled>
          <ContentStyled>
            <DivStyled>
              <TitleStyled>{t('footer.letsTalk')}</TitleStyled>
              <AsideStyled>
                <ParagraphStyled>&lt;AND DANCE&gt;</ParagraphStyled>
              </AsideStyled>
            </DivStyled>
            <ContactList contacts={contacts} />
          </ContentStyled>
  
            <CopyrightStyled>
              <InfoStyled>
                <PhraseStyled>{t('footer.weEmbrace')}</PhraseStyled>
                <PhraseStyled>{t('footer.weWork')}</PhraseStyled>
              </InfoStyled>
  
              <InfoStyled className="desktop">
                  <ImageStyled src="../images/Logo-Small.svg" alt="L2 Code" />
              </InfoStyled>
  
              <InfoStyled className="align-end">
                <PhraseStyled>{t('footer.madeWith')} <IconStyled> <HeartIcon/> </IconStyled> L2code</PhraseStyled>
                <PhraseStyled>{t('footer.copyright')}</PhraseStyled>
              </InfoStyled>
            </CopyrightStyled>
  
            <InfoStyled className="mobile">
                  <ImageStyled src="../images/Logo-Small.svg" alt="L2 Code" />
            </InfoStyled>
            
          </ContainerStyled>
      </FooterStyled>
      </LineAnimation>
    );
  };
  
  export default FooterCases;