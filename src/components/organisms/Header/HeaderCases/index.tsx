import { Typography } from '../../../../styles/typography';
import {
  MainContentStyled,
  MainTextStyled,
  ContainerStyled,
  LanguageStyled,
  ImageStyled,
  DivItemStyled,
  SectionOnePageStyled,
  DivTextStyled,
  DivItemSTextStyled,
} from './styled';
import Link from 'next/link';
import i18next from 'i18next';

const HeaderCases = () => {
  const { t } = i18next;
  return (
    <>
      <ContainerStyled>
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
              {t('headerCases.case01')}
            </Typography>

            <Typography
              tag="h1"
              // size="xlarge"
              fontWeight="weight3"
              lineHeight="line100"
              letterSpacing="space2"
              color="gray"
              fontFamily="font1"
            >
              {t('headerCases.memoriesUp')}
            </Typography>

            <Typography tag="p" color="gray">
              {t('headerCases.design')}
            </Typography>

            <LanguageStyled>
              <Typography
                tag="button"
                size="xxsmall"
                letterSpacing="space1"
                color="gray"
              >
                <Link href="/pt/memories-up" locale="pt" scroll={false}>
                  PT
                </Link>
              </Typography>
              <Typography
                tag="button"
                size="xxsmall"
                letterSpacing="space1"
                color="gray"
              >
                <Link href="/en/memories-up" locale="en" scroll={false}>
                  EN
                </Link>
              </Typography>
            </LanguageStyled>
          </MainTextStyled>
        </MainContentStyled>

        <DivItemStyled>
          <ImageStyled
            src="../images/imagens-memories-up.jpg"
            alt="Imagens Memories Up"
          />
        </DivItemStyled>
      </ContainerStyled>

      <SectionOnePageStyled>
        <DivTextStyled>
          <DivItemSTextStyled>
            <Typography
              tag="h1"
              size="small"
              fontWeight="weight3"
              lineHeight="line120"
              color="gray"
              fontFamily="font1"
              letterSpacing="space1"
            >
              {t('headerCases.atTheBeginning')}
            </Typography>
            <Typography tag="p" color="gray" fontFamily="font2">
              {t('headerCases.ifTheService')}
            </Typography>
          </DivItemSTextStyled>
        </DivTextStyled>
      </SectionOnePageStyled>
    </>
  );
};

export default HeaderCases;
