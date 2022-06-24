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
} from './styled';
import { Typography } from '../../../styles/typography';
import Button from '../../atoms/Button';

interface PropsHeaderOurCareer {
  startDate: string; // Formato para data: 'dd/MM/yyyy'
  endDate: string; // Formato para data: 'dd/MM/yyyy'
  title: string;
  subTitle: string;
  text: string;
  textEnd: string;
  id: number;
}

export default function HeaderOurCareer({
  startDate, // Formato para data: 'dd/MM/yyyy'
  endDate, // Formato para data: 'dd/MM/yyyy'
  title,
  subTitle,
  text,
  textEnd,
  id,
}: PropsHeaderOurCareer) {
  const { t } = i18next;

  const today = new Date();

  const startDateParsed = parse(startDate, 'dd/MM/yyyy', today);
  const endDateParsed = parse(endDate, 'dd/MM/yyyy', today);

  const isStartDateBeforeThanNow = isBefore(startDateParsed, today);
  const isEndDateBeforeThanNow = isBefore(endDateParsed, today);

  return (
    <div>
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
          SEJA TRAINEE NA L2CODE
        </Typography>

        <Typography tag="h2" color="gray" fontFamily="font2">
          Aqui o trainee não faz café, faz a diferença. ● A cada 4 meses
          contratamos estudantes de graduação para iniciarem suas carreiras
          conosco.
        </Typography>

        <Typography tag="p" color="gray" fontFamily="font2" size="xxsmall">
          &lt;AOS TALENTOS&gt;
        </Typography>

        <LanguageStyled>
          <Typography
            tag="button"
            size="xxsmall"
            letterSpacing="space1"
            color="gray"
          >
            <Link href="/" locale="pt" scroll={false}>
              PT
            </Link>
          </Typography>
          <Typography
            tag="button"
            size="xxsmall"
            letterSpacing="space1"
            color="gray"
          >
            <Link href="/" locale="en" scroll={false}>
              EN
            </Link>
          </Typography>
        </LanguageStyled>

        <DivStyled>
          <DateStyled key={id}>
            <Div>
              <Typography
                tag="h1"
                color="gray"
                fontFamily="font2"
                size="xsmall"
              >
                {title}
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
                {subTitle}
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
                linkBtn={t('headerOurCareer.button')}
                text="QUERO ME CANDIDATAR"
              />
            )}
          </DivButton>
        </DivStyled>
        <Div>
          {isStartDateBeforeThanNow ? (
            <Typography tag="h2" color="gray" fontFamily="font2" size="xsmall">
              {textEnd}
            </Typography>
          ) : (
            <Typography tag="h2" color="gray" fontFamily="font2" size="xsmall">
              {text}
            </Typography>
          )}
        </Div>
      </ContainerStyled>
    </div>
  );
}
