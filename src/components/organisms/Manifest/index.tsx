import React from 'react';
import { t } from 'i18next';
import {
  ContainerStyledManifest,
  GroupStyled,
  TitleStyled,
  SubTitleStyled,
  ParagraphStyled,
  ImageStyled,
  AuxDiv,
} from './styled';
import { Typography } from '../../../styles/typography';
import { StyledScrollCircle } from '../OurCareersPage/styled';

export default function Manifest() {
  return (
    <ContainerStyledManifest>
      <div className="scrollCircleDiv">
        <div>
          <StyledScrollCircle
            isWhiteImage={false}
            blackImage={`${t('images.spinnerBlack')}`}
            whiteImage={`${t('images.spinnerWhite')}`}
          />
        </div>
      </div>

      <GroupStyled>
        <AuxDiv>
          <TitleStyled>
            <Typography
              tag="h1"
              fontFamily="font1"
              fontWeight="weight3"
              size="medium"
              lineHeight="line90"
            >
              {t('about.manifest.title')}
            </Typography>
          </TitleStyled>

          <ParagraphStyled>
            <Typography tag="p" fontWeight="weight1" lineHeight="line140">
              {t('about.manifest.paragraph.weLive')}
              <Typography tag="p" fontWeight="weight1" lineHeight="line140">
                {t('about.manifest.paragraph.TodayWeAre')}
              </Typography>
              <Typography tag="p" fontWeight="weight1" lineHeight="line140">
                {t('about.manifest.paragraph.WeAre')}
              </Typography>
              <Typography tag="p" fontWeight="weight1" lineHeight="line140">
                {t('about.manifest.paragraph.WeFollow')}
              </Typography>
            </Typography>
          </ParagraphStyled>

          <SubTitleStyled>
            <Typography
              tag="h2"
              size="small"
              letterSpacing="space1"
              fontWeight="weight2"
              lineHeight="line120"
            >
              {t('about.manifest.principleOneTitle')}
            </Typography>
          </SubTitleStyled>

          <ParagraphStyled>
            <Typography tag="p">
              {t('about.manifest.principleOneParagraph')}
              <Typography tag="h3">
                <Typography tag="b">
                  {t('about.manifest.principleOneTag')}
                </Typography>
              </Typography>
            </Typography>
          </ParagraphStyled>

          <ImageStyled>
            <img src="/images/Manifest/manifest-image-01.png" alt="L2code" />
          </ImageStyled>

          <div className="line" />

          <SubTitleStyled>
            <Typography
              tag="h2"
              size="small"
              letterSpacing="space1"
              fontWeight="weight2"
              lineHeight="line120"
            >
              {t('about.manifest.principleTwoTitle')}
            </Typography>
          </SubTitleStyled>

          <ParagraphStyled>
            <Typography tag="p">
              {t('about.manifest.principleTwoParagraph')}
              <Typography tag="h3">
                <Typography tag="b">
                  {t('about.manifest.principleTwoTag')}
                </Typography>
              </Typography>
            </Typography>
          </ParagraphStyled>

          <ImageStyled>
            <img src="/images/Manifest/manifest-image-02.png" alt="L2code" />
          </ImageStyled>

          <div className="line" />

          <SubTitleStyled>
            <Typography
              tag="h2"
              size="small"
              letterSpacing="space1"
              fontWeight="weight2"
              lineHeight="line120"
            >
              {t('about.manifest.principleThreeTitle')}
            </Typography>
          </SubTitleStyled>

          <ParagraphStyled>
            <Typography tag="p">
              {t('about.manifest.principleThreeParagraph')}
              <Typography tag="h3">
                <Typography tag="b">
                  {t('about.manifest.principleThreeTag')}
                </Typography>
              </Typography>
            </Typography>
          </ParagraphStyled>

          <ImageStyled>
            <img src="/images/Manifest/manifest-image-03.png" alt="L2code" />
          </ImageStyled>

          <div className="line" />

          <SubTitleStyled>
            <Typography
              tag="h2"
              size="small"
              letterSpacing="space1"
              fontWeight="weight2"
              lineHeight="line120"
            >
              {t('about.manifest.principleFourTitle')}
            </Typography>
          </SubTitleStyled>

          <ParagraphStyled>
            <Typography tag="p">
              {t('about.manifest.principleFourParagraph')}
              <Typography tag="h3">
                <Typography tag="b">
                  {t('about.manifest.principleFourTag')}
                </Typography>
              </Typography>
            </Typography>
          </ParagraphStyled>

          <ImageStyled>
            <img src="/images/Manifest/manifest-image-04.png" alt="L2code" />
          </ImageStyled>

          <div className="line" />

          <SubTitleStyled>
            <Typography
              tag="h2"
              size="small"
              letterSpacing="space1"
              fontWeight="weight2"
              lineHeight="line120"
            >
              {t('about.manifest.principleFiveTitle')}
            </Typography>
          </SubTitleStyled>

          <ParagraphStyled>
            <Typography tag="p">
              {t('about.manifest.principleFiveParagraph')}
              <Typography tag="h3">
                <Typography tag="b">
                  {t('about.manifest.principleFiveTag')}
                </Typography>
              </Typography>
            </Typography>
          </ParagraphStyled>

          <ImageStyled>
            <img src="/images/Manifest/manifest-image-05.png" alt="L2code" />
          </ImageStyled>

          <div className="line" />

          <SubTitleStyled>
            <Typography
              tag="h2"
              size="small"
              letterSpacing="space1"
              fontWeight="weight2"
              lineHeight="line120"
            >
              {t('about.manifest.beginningSixTitle')}
            </Typography>
          </SubTitleStyled>

          <ParagraphStyled>
            <Typography tag="p">
              {t('about.manifest.beginningSixParagraph')}
              <Typography tag="h3">
                <Typography tag="b">
                  {t('about.manifest.beginningSixTag')}
                </Typography>
              </Typography>
            </Typography>
          </ParagraphStyled>

          <ImageStyled>
            <img src="/images/Manifest/manifest-image-06-01.png" alt="L2code" />
            <img src="/images/Manifest/manifest-image-06-02.png" alt="L2code" />
          </ImageStyled>

          <div className="line" />

          <SubTitleStyled>
            <Typography
              tag="h2"
              size="small"
              letterSpacing="space1"
              fontWeight="weight2"
              lineHeight="line120"
            >
              {t('about.manifest.principleSevenTitle')}
            </Typography>
          </SubTitleStyled>

          <ParagraphStyled>
            <Typography tag="p">
              {t('about.manifest.principleSevenParagraph')}
              <Typography tag="h3">
                <Typography tag="b">
                  {t('about.manifest.principleSevenTag')}
                </Typography>
              </Typography>
            </Typography>
          </ParagraphStyled>

          <ImageStyled>
            <img src="/images/Manifest/manifest-image-08.png" alt="L2code" />
          </ImageStyled>
          <div className="line" />

          <SubTitleStyled>
            <Typography
              tag="h2"
              size="small"
              letterSpacing="space1"
              fontWeight="weight2"
              lineHeight="line120"
            >
              {t('about.manifest.principleEightTitle')}
            </Typography>
          </SubTitleStyled>

          <ParagraphStyled>
            <Typography tag="p">
              {t('about.manifest.principleEightParagraph')}
              <Typography tag="h3">
                <Typography tag="b">
                  {t('about.manifest.principleEightTag')}
                </Typography>
              </Typography>
            </Typography>
          </ParagraphStyled>

          <ImageStyled>
            <img src="/images/Manifest/manifest-image-10.png" alt="L2code" />
          </ImageStyled>
          <div className="line" />

          <SubTitleStyled>
            <Typography
              tag="h2"
              size="small"
              letterSpacing="space1"
              fontWeight="weight2"
              lineHeight="line120"
            >
              {t('about.manifest.beginningNineTitle')}
            </Typography>
          </SubTitleStyled>

          <ParagraphStyled>
            <Typography tag="p">
              {t('about.manifest.beginningNineParagraph')}
              <Typography tag="h3">
                <Typography tag="b">
                  {t('about.manifest.beginningNineTag')}
                </Typography>
              </Typography>
            </Typography>
          </ParagraphStyled>

          <ImageStyled>
            <img src="/images/Manifest/manifest-image-11.png" alt="L2code" />
          </ImageStyled>
        </AuxDiv>
      </GroupStyled>
    </ContainerStyledManifest>
  );
}
