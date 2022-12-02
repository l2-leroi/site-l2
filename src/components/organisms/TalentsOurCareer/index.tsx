import i18next from 'i18next';

import {
  ContainerStyled,
  DivImageStyled,
  DivMainTextStyled,
  ContainerMainStyled,
} from './styled';

import { Typography } from '../../../styles/typography';
import { StyledScrollCircle } from '../OurCareersPage/styled';
import Carousel from '../../molecules/Carousel';

const cards = [
  {
    comment: 'TalentsOurCareer.comment1',
    authorImg: '/images/OurCareer/comment-01.png',
    authorName: 'Renã ● Dev. FullStack',
    id: 1,
    author: true,
  },
  {
    comment: 'TalentsOurCareer.comment2',
    authorImg: '/images/OurCareer/comment-02.png',
    authorName: 'Bruna ● Dev. Trainee ',
    id: 2,
    author: true,
  },
  {
    comment: 'TalentsOurCareer.comment3',
    authorImg: '/images/OurCareer/comment-03.png',
    authorName: 'Guilherme ● Dev. backend',
    id: 3,
    author: true,
  },
  {
    comment: 'TalentsOurCareer.comment4',
    authorImg: '/images/OurCareer/comment-04.png',
    authorName: 'Ana Julia ● Frontend',
    id: 4,
    author: true,
  },
  {
    comment: 'TalentsOurCareer.comment5',
    authorImg: '/images/OurCareer/comment-05.png',
    authorName: 'Brenda ● Dev. Trainee ',
    id: 5,
    author: true,
  },
  {
    comment: 'TalentsOurCareer.comment6',
    authorImg: '/images/OurCareer/comment-06.png',
    authorName: 'Vanessa ● UX / UI Designer',
    id: 6,
    author: true,
  },
];

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
            dangerouslySetInnerHTML={{
              __html: t('TalentsOurCareer.weLove'),
            }}
          />
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
        <Carousel cards={cards} />
      </ContainerStyled>
    </ContainerMainStyled>
  );
}
