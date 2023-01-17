/* eslint-disable no-plusplus */
import Slider from 'react-slick';
import i18next from 'i18next';
import { DivStyled, ArrowRightStyled, ArrowLeftStyled } from './styled';
import CardCarroussel from '../../atoms/CardCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Card {
  comment: string;
  authorImg: string;
  authorName: string;
  id: number;
  author: boolean;
}

interface Cards {
  cards: Card[];
}

function ArrowRightStyledFunction(props) {
  const { className, onClick } = props;

  return <ArrowRightStyled className={className} onClick={onClick} />;
}

const settings = {
  accessibility: true,
  infinite: true,
  centerMode: false, //
  variableWidth: true, //
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 400,
  nextArrow: <ArrowRightStyledFunction />,
  prevArrow: <ArrowLeftStyled />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

function FindBound() {
  const width = window.innerWidth;

  if (width <= 1024) {
    return 20;
  }

  if (width < 500) {
    return 5;
  }

  return 300;
}

function FindCard() {
  const card = document.getElementsByClassName('Card');
  const cardBound = FindBound();

  const firstCard = document.querySelector(`[data-index="0"]`);
  firstCard.classList.add('first-card');

  for (let i = 0; i < card.length; i++) {
    firstCard.classList.add('first-card');
    const cardLeft = card[i].getBoundingClientRect().left;
    if (cardLeft <= cardBound) {
      card[i].classList.add('card-fade');
    } else {
      card[i].classList.remove('card-fade');
    }
  }
}

const Carousel = ({ cards }: Cards) => {
  const { t } = i18next;
  return (
    <DivStyled className="SliderContainer">
      <Slider {...settings} afterChange={FindCard} onInit={FindCard}>
        {cards.map((c) => (
          <CardCarroussel
            className="Card"
            key={c.id}
            author={c.author}
            authorImg={c.authorImg}
            authorName={c.authorName}
            comment={t(c.comment)}
          />
        ))}
      </Slider>
    </DivStyled>
  );
};
export default Carousel;
