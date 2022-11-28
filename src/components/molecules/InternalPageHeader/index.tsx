import Link from 'next/link';
import { Typography } from '../../../styles/typography';
import {
  AsideStyled,
  AsideStyledbutton,
  ContainerStyled,
  ContentStyled,
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
  pageName: string;
}

interface InternalPageHeaderProps {
  internalHeader: Header;
}

function InternalPageHeader(props: InternalPageHeaderProps) {
  const href_en = '/en/';
  const href_pt = '/pt/';

  return (
    <ContainerStyled>
      <ContentStyled>
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
                  <Link
                    href={href_pt + props.internalHeader.pageName}
                    locale="pt"
                    scroll={false}
                  >
                    PT
                  </Link>
                </Typography>
                <Typography
                  tag="button"
                  size="xxsmall"
                  letterSpacing="space1"
                  className="typography"
                >
                  <Link
                    href={href_en + props.internalHeader.pageName}
                    locale="en"
                    scroll={false}
                  >
                    EN
                  </Link>
                </Typography>
              </LanguageStyled>
            </AsideStyledbutton>
          </DivStyled>
        </MainDivStyled>
        <PhraseStyled>{props.internalHeader.text}</PhraseStyled>
      </ContentStyled>
    </ContainerStyled>
  );
}

export default InternalPageHeader;
