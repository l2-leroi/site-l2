import { Typography } from '../../../../styles/typography';
import {
  MainContentStyled,
  MainTextStyled,
  ContainerStyled,
  LanguageStyled,
  LanguageItemStyled,
  Link,
  ImageStyled,
  DivItemStyled,
  HeadingItemStyled,
  ParagraphItemStyled,
  SectionOnePageStyled,
  DivTextStyled,
  DivItemStyledService,
} from './styled';
import i18next from 'i18next';
const { t } = i18next;

const HeaderCases = () => {
  return (
    <>
      <ContainerStyled>
        <MainContentStyled>
          <MainTextStyled>
            <Typography
              tag="h2"
              size="small"
              fontWeight="weight3"
              lineHeight="line120"
              color="gray"
              fontFamily="font1"
            >
              Case 01
            </Typography>

            <Typography
              tag="h1"
              // size="xxlarge"
              fontWeight="weight3"
              lineHeight="line100"
              letterSpacing="space2"
              color="gray"
              fontFamily="font1"
            >
              Memories up
            </Typography>

            <Typography tag="p" color="gray">
              Design de produto para start-up americana
            </Typography>

            <LanguageStyled>
              <LanguageItemStyled>
                <Link>PT</Link>
              </LanguageItemStyled>
              <LanguageItemStyled>
                <Link>EN</Link>
              </LanguageItemStyled>
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
          <DivItemStyledService>
            <HeadingItemStyled>
              {t('services.outsourcingMemoriesUp')}
            </HeadingItemStyled>
            <ParagraphItemStyled>
              {t('services.increaseMemoriesUp')}
            </ParagraphItemStyled>
          </DivItemStyledService>
        </DivTextStyled>
      </SectionOnePageStyled>
    </>
  );
};

export default HeaderCases;
