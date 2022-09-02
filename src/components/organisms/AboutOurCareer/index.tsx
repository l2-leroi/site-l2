import i18next from 'i18next';
import { colors } from '../../../styles/colors';
import {
  ContainerStyled,
  DivImageStyled,
  DivTextStyled,
  SpinningIconStyled,
  SpinnerImage,
  MainContainer,
} from './styled';
import { Typography } from '../../../styles/typography';
import Button from '../../atoms/Button';

interface PropsImage {
  src: string;
  alt: string;
}
interface PropsAboutOurCareer {
  li: string[];
  traineeImage: PropsImage[];
}

export default function AboutOurCareer({
  li,
  traineeImage,
}: PropsAboutOurCareer) {
  const { t } = i18next;

  return (
    <MainContainer>
      <SpinningIconStyled>
        <SpinnerImage src="/images/spinner.png" />
      </SpinningIconStyled>
      <ContainerStyled className="aboutOurCareer">
        <DivImageStyled>
          {traineeImage.map((item) => (
            <img src={item.src} alt={item.alt} />
          ))}
          <Typography tag="p" color="gray" fontFamily="font2" size="xsmall">
            {t('headerOurCareer.lastClass')}
          </Typography>
        </DivImageStyled>

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

          <div className="button">
            <Button
              backgroundColor={`${colors.green}`}
              linkBtn="#"
              text={t('headerOurCareer.iWantToApply')}
            />
          </div>
        </DivTextStyled>
      </ContainerStyled>
    </MainContainer>
  );
}
