import i18next from 'i18next';
import Link from 'next/link';
import { Typography } from '../../../styles/typography';
import {
  AsideStyled,
  AsideStyledbutton,
  DivStyled,
  LanguageStyled,
  MainDivStyled,
  ParagraphStyled,
  PhraseStyled,
  TitleStyled,
} from './styled';

interface Header {
  title: string;
  text: string;
  sideTag: string;
}

interface InternalPageHeaderProps {
  internalHeader: Header;
}

function InternalPageHeader(props: InternalPageHeaderProps) {
  const { t } = i18next;
  return (
    <>
      <MainDivStyled>
        <DivStyled>
          <TitleStyled>{props.internalHeader.title}</TitleStyled>
          <AsideStyled>
            <ParagraphStyled>
              &lt;{props.internalHeader.sideTag}&gt;
            </ParagraphStyled>
          </AsideStyled>
          <AsideStyledbutton>
            <LanguageStyled>
              <Typography
                tag="button"
                size="xxsmall"
                letterSpacing="space1"
                className="typography"
              >
                <Link href="/pt/cases" locale="pt" scroll={false}>
                  PT
                </Link>
              </Typography>
              <Typography
                tag="button"
                size="xxsmall"
                letterSpacing="space1"
                className="typography"
              >
                <Link href="/en/cases" locale="en" scroll={false}>
                  EN
                </Link>
              </Typography>
            </LanguageStyled>
          </AsideStyledbutton>
        </DivStyled>
      </MainDivStyled>
      <PhraseStyled>{props.internalHeader.text}</PhraseStyled>
    </>
  );
}

export default InternalPageHeader;
