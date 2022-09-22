import i18next from 'i18next';

import {
  ContainerStyled,
  DivImageStyled,
  DivMainTextStyled,
  ContainerMainStyled,
} from './styled';

import { Typography } from '../../../styles/typography';
import { StyledScrollCircle } from '../OurCareersPage/styled';

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
    <ContainerMainStyled>
      <div className="scrollCircleDiv">
        <StyledScrollCircle
          isWhiteImage={false}
          blackImage={`${t('headerOurCareer.blackSpinner')}`}
          whiteImage={`${t('headerOurCareer.whiteSpinner')}`}
        />
      </div>
      <ContainerStyled>
        <DivMainTextStyled>
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

          <Typography tag="p">
            {t('TalentsOurCareer.weAreConnected')}
          </Typography>

          <div className="line" />
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

          <DivImageStyled>
            {talentsImages.map((item) => (
              <img src={item.src} alt={item.alt} />
            ))}
          </DivImageStyled>

          <Typography tag="p">{t('TalentsOurCareer.enjoyToo')}</Typography>
          <div className="line" />
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
        </DivMainTextStyled>
      </ContainerStyled>
    </ContainerMainStyled>
  );
}
