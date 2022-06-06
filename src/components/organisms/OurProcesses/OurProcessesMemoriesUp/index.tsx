import React from 'react';
import {
  SectionOnePageStyled,
  ContentOnePageStyled,
  DivServiceItemsStyled,
  DivItemStyled,
  HeadingItemStyled,
  ParagraphItemStyled,
  ImageStyled,
} from './styled';
import i18next from 'i18next';
export default function OurProcessesMemoriesUp() {
  const { t } = i18next;

  return (
    <SectionOnePageStyled id="services">
      <ContentOnePageStyled>
        <DivServiceItemsStyled>
          <DivItemStyled>
            <ImageStyled
              src="../images/process-memories-up.jpg"
              alt="L2 Code"
            />
          </DivItemStyled>
          <DivItemStyled>
            <HeadingItemStyled>
              {t('services.startupServiceMemoriesUp')}
            </HeadingItemStyled>
            <ParagraphItemStyled>
              {t('services.uxuiTeamMemoriesUp')}
            </ParagraphItemStyled>
            <ul>
              <li>+ Ideação</li>
              <li>+ Wireframe</li>
              <li>+ Concept art</li>
              <li>+ Design</li>
              <li>+ Protótipo navegável</li>
            </ul>
          </DivItemStyled>
        </DivServiceItemsStyled>
      </ContentOnePageStyled>
    </SectionOnePageStyled>
  );
}
