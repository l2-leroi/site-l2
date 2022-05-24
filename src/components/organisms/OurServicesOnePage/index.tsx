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
import i18next from 'i18next';
export default function OurServicesOnePage() {
  const {t} = i18next
  return (
    <SectionOnePageStyled id="services">
      <ScrollArrow className="SpinnerCircle2">
        <ScrollCircle isWhiteImage={false} 
        blackImage={`${t('images.spinner')}`} 
        whiteImage={`${t('images.whiteSpinner')}`} 
        alt={`${t('images.alt.thereIsMore')}`}/>
      </ScrollArrow>
      
      <ContentOnePageStyled>
        <DivServicesStyled>
          <HeadingStyled>{t('services.ourServices')}</HeadingStyled>
          <ParagraphServicesStyled>
            {t('services.weImprove')}
          </ParagraphServicesStyled>
        </DivServicesStyled>

        <DivServiceItemsStyled>
            <DivItemStyled>
              <HeadingItemStyled>{t('services.outsourcing')}</HeadingItemStyled>
              <ParagraphItemStyled>
                {t('services.increase')}
              </ParagraphItemStyled>
            </DivItemStyled>
          
            <DivItemStyled>
              <HeadingItemStyled>{t('services.startupService')}</HeadingItemStyled>
              <ParagraphItemStyled>
                {t('services.uxuiTeam')}
              </ParagraphItemStyled>
            </DivItemStyled>

            <DivItemStyled>
              <HeadingItemStyled>{t('services.ideation')}</HeadingItemStyled>
              <ParagraphItemStyled>
                {t('services.coCreation')}
              </ParagraphItemStyled>
            </DivItemStyled>

            <DivItemStyled>
              <HeadingItemStyled>{t('services.uxuiDesign')}</HeadingItemStyled>
              <ParagraphItemStyled>
                {t('services.weDesign')}
              </ParagraphItemStyled>
            </DivItemStyled>

            <DivItemStyled>
              <HeadingItemStyled>{t('services.consultingService')}</HeadingItemStyled>
              <ParagraphItemStyled className='last-paragraph'>
                {t('services.ourTechLead')}
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
