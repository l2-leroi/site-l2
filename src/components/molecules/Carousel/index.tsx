/* eslint-disable no-plusplus */
import Slider from 'react-slick';
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
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 400,
  swipeToSlide: true,
  nextArrow: <ArrowRightStyledFunction />,
  prevArrow: <ArrowLeftStyled />,
  className: 'Slider',
};

function FindCard() {
  const card = document.getElementsByClassName('Card');
  for (let i = 0; i < card.length; i++) {
    const cardLeft = card[i].getBoundingClientRect().left;
    if (cardLeft < 450) {
      card[i].classList.add('card-fade');
    } else {
      card[i].classList.remove('card-fade');
    }
  }
}

const Carousel = ({ cards }: Cards) => {
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
            comment={c.comment}
          />
        ))}
      </Slider>
    </DivStyled>
  );
};
export default Carousel;
