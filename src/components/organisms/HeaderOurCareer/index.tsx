import i18next from 'i18next';
import { parse, isBefore } from 'date-fns';
import {
  ContainerStyled,
  DivStyled,
  DateStyled,
  Div,
  ValidDate,
  ExpireDate,
  DivButton,
  DivImageStyled,
  ArrowSpinnerContainerStyled,
  SpinningIconStyled,
  SpinnerImage,
  DivTextStyled,
  DivButtonStyled,
} from './styled';
import { Typography } from '../../../styles/typography';
import Button from '../../atoms/Button';
import ScrollCircle from '../../atoms/ScrollCircle';
import InternalPageHeader from '../../molecules/InternalPageHeader';
// import { ImageArrowSpinnerStyled } from '../../atoms/ScrollCircle/styled';

interface PropsHeaderOurCareer {
  startDate: string; // Formato para data: 'dd/MM/yyyy'
  endDate: string; // Formato para data: 'dd/MM/yyyy'
  id: number;
  li: string[];
}

export default function HeaderOurCareer({
  startDate, // Formato para data: 'dd/MM/yyyy'
  endDate, // Formato para data: 'dd/MM/yyyy'
  id,
  li,
}: PropsHeaderOurCareer) {
  const { t } = i18next;

  const today = new Date();

  const startDateParsed = parse(startDate, 'dd/MM/yyyy', today);
  const endDateParsed = parse(endDate, 'dd/MM/yyyy', today);

  const isStartDateBeforeThanNow = isBefore(startDateParsed, today);
  const isEndDateBeforeThanNow = isBefore(endDateParsed, today);

  const headerInternal = {
    title: t('headerOurCareer.beTrainee'),
    text: t('headerOurCareer.hereTheTrainee'),
    sideTag: t('headerOurCareer.toTheTalents'),
    pageName: t('headerOurCareer.pageName'),
  };
  return (
    <>
      <InternalPageHeader internalHeader={headerInternal} />
      <ContainerStyled>
        <DivStyled>
          <DateStyled key={id}>
            <Div>
              <Typography
                tag="h1"
                color="gray"
                fontFamily="font2"
                size="xsmall"
              >
                {t('headerOurCareer.registrationUntil')}
              </Typography>
              {isStartDateBeforeThanNow ? (
                <ExpireDate>{startDate}</ExpireDate>
              ) : (
                <ValidDate>{startDate}</ValidDate>
              )}
            </Div>
            <Div>
              <Typography
                tag="h1"
                color="gray"
                fontFamily="font2"
                size="xsmall"
              >
                {t('headerOurCareer.resultIn')}
              </Typography>
              {isEndDateBeforeThanNow ? (
                <ExpireDate>{endDate}</ExpireDate>
              ) : (
                <ValidDate>{endDate}</ValidDate>
              )}
            </Div>
          </DateStyled>
          <DivButton>
            {!isStartDateBeforeThanNow && (
              <Button
                backgroundColor="#20BD9D"
                linkBtn={t('forms')}
                text={t('headerOurCareer.iWantToApply')}
              />
            )}
          </DivButton>
        </DivStyled>
        <Div>
          {isStartDateBeforeThanNow ? (
            <Typography tag="h2" color="gray" fontFamily="font2" size="xsmall">
              {t('headerOurCareer.waitForTheResult')}
            </Typography>
          ) : (
            <Typography tag="h2" color="gray" fontFamily="font2" size="xsmall">
              {t('headerOurCareer.makeYourCandidacy')}
            </Typography>
          )}
        </Div>
        <SpinningIconStyled>
          <SpinnerImage src="/images/enfeite-giratorio.svg" />
        </SpinningIconStyled>
        <DivImageStyled>
          <img src="/images/trainee-image.jpg" alt="trainnes L2 Code" />
          <Typography tag="p" color="gray" fontFamily="font2" size="xsmall">
            {t('headerOurCareer.lastClass')}
          </Typography>
        </DivImageStyled>

        <ArrowSpinnerContainerStyled className="anime">
          <ScrollCircle
            isWhiteImage
            blackImage={`${t('images.spinner')}`}
            whiteImage={`${t('images.whiteSpinner')}`}
          />
          {/* <ImageArrowSpinnerStyled>
            <img src="/images/arrow-spinner.svg" alt="arrow spinner" />
          </ImageArrowSpinnerStyled> */}
        </ArrowSpinnerContainerStyled>

        <DivTextStyled>
          <Typography
            tag="h1"
            color="gray"
            fontFamily="font2"
            size="small"
            letterSpacing="space1"
            lineHeight="line120"
            fontWeight="weight2"
          >
            {t('headerOurCareer.aboutTheProgram')}
          </Typography>
          <Typography tag="p" color="gray" fontFamily="font2" size="xsmall">
            {t('headerOurCareer.youAreGoingTo')}
          </Typography>
          <Typography
            tag="h2"
            color="gray"
            fontFamily="font2"
            size="xsmall"
            fontWeight="weight2"
          >
            {t('headerOurCareer.requirements')}
          </Typography>
          <ul>
            {li.map((item) => (
              <Typography
                tag="li"
                color="gray"
                fontFamily="font2"
                size="xsmall"
                lineHeight="line140"
              >
                {t(item)}
              </Typography>
            ))}
          </ul>
          <DivButtonStyled>
            <Button
              backgroundColor="#20BD9D"
              linkBtn={t('forms')}
              text={t('headerOurCareer.iWantToApply')}
            />
          </DivButtonStyled>
        </DivTextStyled>
      </ContainerStyled>
    </>
  );
}
