import Link from 'next/link';
import i18next from 'i18next';
import { Typography } from '../../../styles/typography';
import {
  MainContentStyled,
  MainTextStyled,
  ContainerStyled,
  LanguageStyled,
  SectionOnePageStyled,
  DivTextStyled,
  DivItemSTextStyled,
  DivImageStyled,
  ContainerImageStyled,
  DivParagraph,
} from './styled';

interface HeaderCasesProps {
  backgroundImage: string;
  backgroundImageSmall: string;
  h1: string;
  h1Second: string;
  h2: string;
  p: string;
  pSecond: string;
  linkBtnPt: string;
  linkBtnEn: string;
}

export default function HeaderCases({
  backgroundImage,
  backgroundImageSmall,
  h1,
  h1Second,
  h2,
  p,
  pSecond,
  linkBtnPt,
  linkBtnEn,
}: HeaderCasesProps) {
  const { t } = i18next;
  return (
    <>
      <ContainerStyled bgImage={backgroundImage}>
        <MainContentStyled>
          <MainTextStyled>
            <Typography
              className="bannerText typography"
              tag="h2"
              size="small"
              fontWeight="weight3"
              lineHeight="line120"
              color="gray"
              fontFamily="font1"
            >
              {t(h2)}
            </Typography>

            <Typography
              tag="h1"
              size="xxlarge" // size="xlarge"
              fontWeight="weight3"
              lineHeight="line100"
              letterSpacing="space2"
              color="gray"
              fontFamily="font1"
            >
              {t(h1)}
            </Typography>

            <Typography tag="p" color="gray">
              {t(p)}
            </Typography>

            <LanguageStyled>
              <Typography
                tag="button"
                size="xxsmall"
                letterSpacing="space1"
                color="gray"
              >
                <Link href={linkBtnPt} locale="pt" scroll={false}>
                  PT
                </Link>
              </Typography>
              <Typography
                tag="button"
                size="xxsmall"
                letterSpacing="space1"
                color="gray"
              >
                <Link href={linkBtnEn} locale="en" scroll={false}>
                  EN
                </Link>
              </Typography>
            </LanguageStyled>
          </MainTextStyled>
        </MainContentStyled>

        {/* <DivItemStyled bgImageSmall={backgroundImageSmall} /> */}
      </ContainerStyled>

      <ContainerImageStyled>
        <DivImageStyled src={backgroundImageSmall} />
      </ContainerImageStyled>

      <SectionOnePageStyled>
        <DivTextStyled>
          <DivItemSTextStyled>
            <Typography
              tag="h1"
              size="medium"
              fontWeight="weight3"
              lineHeight="line90"
              color="gray"
              fontFamily="font1"
              letterSpacing="space2"
            >
              {t(h1Second)}
            </Typography>
            <DivParagraph>
              <Typography tag="p" color="gray" fontFamily="font2">
                {t(pSecond)}
              </Typography>
            </DivParagraph>
          </DivItemSTextStyled>
        </DivTextStyled>
      </SectionOnePageStyled>
    </>
  );
}
