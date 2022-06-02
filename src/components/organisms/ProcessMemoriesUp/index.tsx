import React from 'react';
import {
  SectionOnePageStyled,
  ContentOnePageStyled,
  DivServiceItemsStyled,
  DivItemStyled,
  HeadingItemStyled,
  ParagraphItemStyled,
  ImageStyled,
} from "./styled";
import i18next from 'i18next';
export default function ProcessPageMemoriesUp() {
  const {t} = i18next
  return (
    <SectionOnePageStyled id="services">
      <ContentOnePageStyled>
        <DivServiceItemsStyled>
            <DivItemStyled>
            <ImageStyled src="../images/process-memories-up.jpg" alt="L2 Code" />
            </DivItemStyled>
            <DivItemStyled>
              <HeadingItemStyled>{t('services.startupService')}</HeadingItemStyled>
              <ParagraphItemStyled>
                {t('services.uxuiTeam')}
              </ParagraphItemStyled>
            </DivItemStyled>
        </DivServiceItemsStyled>
      </ContentOnePageStyled>
    </SectionOnePageStyled>
  );
}
