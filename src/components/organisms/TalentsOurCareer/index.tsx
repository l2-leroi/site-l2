import i18next from 'i18next';
import {
  ContainerStyled,
  ArrowSpinnerContainerStyled,
  DivTextStyled,
  DivText,
  DivImageStyled,
  DivTextParagraph,
  DivParagraph,
} from './styled';

import ScrollCircle from '../../atoms/ScrollCircle';
import { Typography } from '../../../styles/typography';
// import { ImageArrowSpinnerStyled } from '../../atoms/ScrollCircle/styled';

interface PropsImages {
  src: string;
  alt: string;
}
interface PropsTalentsOurCareer {
  talentsImages: PropsImages[];
}

export default function TalentsOurCareer({
  talentsImages,
}: PropsTalentsOurCareer) {
  const { t } = i18next;

  return (
    <ContainerStyled>
      <ArrowSpinnerContainerStyled className="anime">
        <ScrollCircle
          isWhiteImage={false}
          blackImage={`${t('images.blackSpinner')}`}
          whiteImage={`${t('images.whiteSpinner')}`}
        />
      </ArrowSpinnerContainerStyled>
      <DivTextStyled>
        <Typography
          tag="h1"
          size="small"
          lineHeight="line120"
          letterSpacing="space1"
          fontWeight="weight2"
          fontFamily="font2"
        >
          {t('TalentsOurCareer.weEmbrace')}
        </Typography>
        <Typography tag="p">{t('TalentsOurCareer.weAreConnected')}</Typography>
        <div className="line" />
      </DivTextStyled>
      <DivText>
        <Typography
          tag="h1"
          size="small"
          lineHeight="line120"
          letterSpacing="space1"
          fontWeight="weight2"
          fontFamily="font2"
        >
          {t('TalentsOurCareer.weLove')}
        </Typography>
        <Typography tag="p">{t('TalentsOurCareer.weCreate')}</Typography>
      </DivText>

      <DivImageStyled>
        {talentsImages.map((item) => (
          <img src={item.src} alt={item.alt} />
        ))}
      </DivImageStyled>
      <DivTextParagraph>
        <Typography tag="p">{t('TalentsOurCareer.enjoyToo')}</Typography>
        <div className="line" />
      </DivTextParagraph>
      <DivParagraph>
        <Typography
          tag="h1"
          color="black"
          size="small"
          lineHeight="line120"
          letterSpacing="space1"
          fontWeight="weight2"
          fontFamily="font2"
        >
          {t('TalentsOurCareer.weValue')}
        </Typography>
        <Typography tag="p">{t('TalentsOurCareer.empathize')}</Typography>
        <Typography tag="p" className="paragrafoCarrossel">
          {t('TalentsOurCareer.whatTheySay')}
        </Typography>
      </DivParagraph>

      {/* <ArrowSpinnerContainerStyled className="anime">
        <ScrollCircle
          isWhiteImage={false}
          blackImage={`${t('images.blackSpinner')}`}
          whiteImage={`${t('images.whiteSpinner')}`}
        />
      </ArrowSpinnerContainerStyled> */}
    </ContainerStyled>
  );
}
