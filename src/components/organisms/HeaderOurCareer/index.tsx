import i18next from 'i18next';
import { parse, isBefore } from 'date-fns';
import { colors } from '../../../styles/colors';
import {
  ContainerStyled,
  DivStyled,
  DateStyled,
  DivDate,
  DivStyledDate,
  StyledDate,
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
}

export default function HeaderOurCareer({
  startDate, // Formato para data: 'dd/MM/yyyy'
  endDate, // Formato para data: 'dd/MM/yyyy'
  id,
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
        <StyledDate>
          <DivStyledDate>
            <DateStyled key={id}>
              <DivDate>
                <Typography tag="h1" color="gray">
                  {t('headerOurCareer.registrationUntil')}
                </Typography>
                {isStartDateBeforeThanNow ? (
                  <Typography
                    tag="h2"
                    color="gray"
                    size="small"
                    fontWeight="weight3"
                    lineHeight="line120"
                    letterSpacing="space1"
                    className="font"
                  >
                    {startDate}
                  </Typography>
                ) : (
                  <Typography
                    tag="h2"
                    color="gray"
                    size="small"
                    fontWeight="weight3"
                    lineHeight="line120"
                    letterSpacing="space1"
                  >
                    {startDate}
                  </Typography>
                )}
              </DivDate>
              <DivDate>
                <Typography tag="h1" color="gray">
                  {t('headerOurCareer.resultIn')}
                </Typography>
                {isEndDateBeforeThanNow ? (
                  <Typography
                    tag="h2"
                    color="gray"
                    size="small"
                    fontWeight="weight3"
                    lineHeight="line120"
                    letterSpacing="space1"
                    className="font"
                  >
                    {endDate}
                  </Typography>
                ) : (
                  <Typography
                    tag="h2"
                    color="gray"
                    size="small"
                    fontWeight="weight3"
                    lineHeight="line120"
                    letterSpacing="space1"
                  >
                    {endDate}
                  </Typography>
                )}
              </DivDate>
            </DateStyled>
            <div className="button">
              {!isStartDateBeforeThanNow && (
                <Button
                  backgroundColor={`${colors.green}`}
                  linkBtn="#"
                  text={t('headerOurCareer.iWantToApply')}
                />
              )}
            </div>
          </DivStyledDate>
          {isStartDateBeforeThanNow ? (
            <Typography tag="p" color="gray" fontFamily="font2" size="xsmall">
              {t('headerOurCareer.waitForTheResult')}
            </Typography>
          ) : (
            <Typography tag="p" color="gray" fontFamily="font2" size="xsmall">
              {t('headerOurCareer.makeYourCandidacy')}
            </Typography>
          )}
        </StyledDate>
      </ContainerStyled>
    </>
  );
}
