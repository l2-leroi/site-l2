import { t } from 'i18next';
import React from 'react';
import ScrollCircle from "../../atoms/ScrollCircle";
import {
  SectionOnePageStyled,
  ContentOnePageStyled,
  DivServicesStyled,
  HeadingStyled,
  ParagraphServicesStyled,
  DivServiceItemsStyled,
  DivItemStyled,
  HeadingItemStyled,
  ParagraphItemStyled,
  ImageStyled,
  ScrollArrow,
} from "./styled";
//translation
import { useTranslations } from 'next-intl'

export default function OurServicesOnePage() {
  //translation
  const t= useTranslations('services');
  const images= useTranslations('images')
  return (
    <SectionOnePageStyled id="services">
      <ScrollArrow className="SpinnerCircle2">
        <ScrollCircle isWhiteImage={false} blackImage={`${images('spinner')}`} whiteImage={`${images('whiteSpinner')}`} alt={`${t('alt.thereIsMore')}`}/>
      </ScrollArrow>
      
      <ContentOnePageStyled>
        <DivServicesStyled>
          <HeadingStyled>{t('ourServices')}</HeadingStyled>
          <ParagraphServicesStyled>
            {t('weImprove')}
          </ParagraphServicesStyled>
        </DivServicesStyled>

        <DivServiceItemsStyled>
            <DivItemStyled>
              <HeadingItemStyled>{t('outsourcing')}</HeadingItemStyled>
              <ParagraphItemStyled>
              {t('increase')}
              </ParagraphItemStyled>
            </DivItemStyled>
          
            <DivItemStyled>
              <HeadingItemStyled>{t('startupService')}</HeadingItemStyled>
              <ParagraphItemStyled>
              {t('uxuiTeam')}
              </ParagraphItemStyled>
            </DivItemStyled>

            <DivItemStyled>
              <HeadingItemStyled>{t('ideation')}</HeadingItemStyled>
              <ParagraphItemStyled>
              {t('co-creation')}
              </ParagraphItemStyled>
            </DivItemStyled>

            <DivItemStyled>
              <HeadingItemStyled>{t('uxuiDesign')}</HeadingItemStyled>
              <ParagraphItemStyled>
              {t('weDesign')}
              </ParagraphItemStyled>
            </DivItemStyled>

            <DivItemStyled>
              <HeadingItemStyled>{t('consultingService')}</HeadingItemStyled>
              <ParagraphItemStyled className='last-paragraph'>
              {t('ourTechLead')}
              </ParagraphItemStyled>
            </DivItemStyled>

            <DivItemStyled>
              <ImageStyled src="./images/RectangleL2.svg" alt="L2 Code" />
            </DivItemStyled>
        </DivServiceItemsStyled>
      </ContentOnePageStyled>
    </SectionOnePageStyled>
  );
}
