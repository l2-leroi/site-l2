import i18next from 'i18next';
import {
  ContainerStyled,
  ArrowSpinnerContainerStyled,
  DivMainTextStyled,
  DivImageStyled,
  ContainerMainStyled,
  ContainerStyledCarroussel,
} from './styled';
import Carroussel from '../../molecules/Carousel';
import ScrollCircle from '../../atoms/ScrollCircle';
import { Typography } from '../../../styles/typography';

export default function TalentsOurCareer() {
  const { t } = i18next;
  const cards = [
    {
      comment: `${t('TalentsOurCareer.comment1')}`,
      authorImg: '/images/OurCareer/comment-01.png',
      authorName: 'Renã ● Dev. FullStack',
      id: 1,
      author: true,
    },
    {
      comment: `${t('TalentsOurCareer.comment2')}`,
      authorImg: '/images/OurCareer/comment-02.png',
      authorName: 'Bruna ● Dev. Trainee ',
      id: 2,
      author: true,
    },
    {
      comment: `${t('TalentsOurCareer.comment3')}`,
      authorImg: '/images/OurCareer/comment-03.png',
      authorName: 'Guilherme ● Dev. backend',
      id: 3,
      author: true,
    },
    {
      comment: `${t('TalentsOurCareer.comment4')}`,
      authorImg: '/images/OurCareer/comment-04.png',
      authorName: 'Ana Julia ● Frontend',
      id: 4,
      author: true,
    },
    {
      comment: `${t('TalentsOurCareer.comment5')}`,
      authorImg: '/images/OurCareer/comment-05.png',
      authorName: 'Brenda ● Dev. Trainee ',
      id: 5,
      author: true,
    },
    {
      comment: `${t('TalentsOurCareer.comment6')}`,
      authorImg: '/images/OurCareer/comment-06.png',
      authorName: 'Vanessa ● UX / UI Designer',
      id: 6,
      author: true,
    },
  ];
  return (
    <ContainerMainStyled>
      <ContainerStyled>
        <ArrowSpinnerContainerStyled className="anime">
          <ScrollCircle
            isWhiteImage={false}
            blackImage={`${t('images.spinner')}`}
            whiteImage={`${t('images.whiteSpinner')}`}
          />
        </ArrowSpinnerContainerStyled>

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
            <img src="/images/OurCareer/talent-01.jpg" alt="talentos L2 Code" />
            <img src="/images/OurCareer/talent-02.jpg" alt="talentos L2 Code" />
            <img src="/images/OurCareer/talent-03.jpg" alt="talentos L2 Code" />
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
      <ContainerStyledCarroussel>
        <Carroussel cards={cards} />
      </ContainerStyledCarroussel>
      <ArrowSpinnerContainerStyled className="anime">
        <ScrollCircle
          isWhiteImage={false}
          blackImage={`${t('images.spinner')}`}
          whiteImage={`${t('images.whiteSpinner')}`}
        />
      </ArrowSpinnerContainerStyled>
    </ContainerMainStyled>
  );
}
