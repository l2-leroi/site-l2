import Link from 'next/link';
import i18next from 'i18next';
import { parse, isBefore } from 'date-fns';
import {
  ContainerStyled,
  LanguageStyled,
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

  return (
    <ContainerStyled>
      <Typography
        className="bannerText typography"
        tag="h1"
        size="large"
        fontWeight="weight3"
        lineHeight="line90"
        color="gray"
        fontFamily="font1"
        letterSpacing="space2"
      >
        {t('headerOurCareer.beTrainee')}
      </Typography>

      <Typography tag="h2" color="gray" fontFamily="font2">
        {t('headerOurCareer.hereTheTrainee')}
      </Typography>

      <Typography tag="p" color="gray" fontFamily="font2" size="xxsmall">
        &lt;{t('headerOurCareer.toTheTalents')}&gt;
      </Typography>

      <LanguageStyled>
        <Typography
          tag="button"
          size="xxsmall"
          letterSpacing="space1"
          color="gray"
        >
          <Link href="/pt/nossas-carreiras" locale="pt" scroll={false}>
            PT
          </Link>
        </Typography>
        <Typography
          tag="button"
          size="xxsmall"
          letterSpacing="space1"
          color="gray"
        >
          <Link href="/en/nossas-carreiras" locale="en" scroll={false}>
            EN
          </Link>
        </Typography>
      </LanguageStyled>

      <DivStyled>
        <DateStyled key={id}>
          <Div>
            <Typography tag="h1" color="gray" fontFamily="font2" size="xsmall">
              {t('headerOurCareer.registrationUntil')}
            </Typography>
            {isStartDateBeforeThanNow ? (
              <ExpireDate>{startDate}</ExpireDate>
            ) : (
              <ValidDate>{startDate}</ValidDate>
            )}
          </Div>
          <Div>
            <Typography tag="h1" color="gray" fontFamily="font2" size="xsmall">
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
          <Typography tag="p" color="gray" fontFamily="font2" size="xsmall">
            {t('headerOurCareer.waitForTheResult')}
          </Typography>
        ) : (
          <Typography tag="p" color="gray" fontFamily="font2" size="xsmall">
            {t('headerOurCareer.makeYourCandidacy')}
          </Typography>
        )}
      </Div>
      <SpinningIconStyled>
        <SpinnerImage src="/images/spinner.png" />
      </SpinningIconStyled>
      <DivImageStyled>
        <img src="/images/trainee-image.jpg" alt="trainnes L2 Code" />
        <Typography tag="p" color="gray" fontFamily="font2" size="xsmall">
          {t('headerOurCareer.lastClass')}
        </Typography>
      </DivImageStyled>
      <div>
        <ArrowSpinnerContainerStyled className="anime">
          <ScrollCircle
            isWhiteImage
            blackImage={`${t('images.blackSpinner')}`}
            whiteImage={`${t('images.WhiteSpinner')}`}
          />
        </ArrowSpinnerContainerStyled>
      </div>

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
  );
}
