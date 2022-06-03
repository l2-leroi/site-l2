import React from 'react';
import ScrollCircle from "../../../atoms/ScrollCircle";
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
  ScrollArrow,
} from "./styled";
import i18next from 'i18next';
export default function OurChallengesMemoriesUp() {
  const {t} = i18next
  return (
    <SectionOnePageStyled id="services">
      {/* <ScrollArrow className="SpinnerCircle2">
        <ScrollCircle isWhiteImage={false} 
        blackImage={`${t('images.spinner')}`} 
        whiteImage={`${t('images.whiteSpinner')}`} 
        alt={`${t('images.alt.thereIsMore')}`}/>
      </ScrollArrow> */}

      
      <ContentOnePageStyled>
        <DivServiceItemsStyled>
            <DivItemStyled>
              <HeadingItemStyled>{t('services.outsourcingMemoriesUp')}</HeadingItemStyled>
              <ParagraphItemStyled>
                {t('services.increaseMemoriesUp')}
              </ParagraphItemStyled>
            </DivItemStyled>
        </DivServiceItemsStyled>
      </ContentOnePageStyled>
    </SectionOnePageStyled>
  );
}
