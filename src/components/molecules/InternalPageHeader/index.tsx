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
            <TitleStyled>
              <Typography
                tag="h1"
                size="large"
                letterSpacing="space2"
                className="typography"
                lineHeight="line90"
                fontWeight="weight3"
                color="gray"
              >
                {props.internalHeader.title}
              </Typography>
            </TitleStyled>
            <AsideStyled>
              <ParagraphStyled>
                <Typography
                  tag="p"
                  size="xxsmall"
                  letterSpacing="space1"
                  className="typography"
                  lineHeight="line140"
                  fontWeight="weight1"
                  color="gray"
                >
                  &lt;{props.internalHeader.sideTag}&gt;
                </Typography>
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
        <PhraseStyled>
          <Typography
            tag="h2"
            size="xsmall"
            letterSpacing="space2"
            className="typography"
            lineHeight="line140"
            fontWeight="weight1"
            color="gray"
          >
            {props.internalHeader.text}
          </Typography>
        </PhraseStyled>
      </ContentStyled>
    </ContainerStyled>
  );
}

export default InternalPageHeader;
