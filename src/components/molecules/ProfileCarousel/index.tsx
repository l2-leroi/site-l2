import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DivStyled, ArrowRightStyled, ArrowLeftStyled, Card } from './styled';

interface Card {
  alt: string;
  src: string;
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
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 400,
  swipeToSlide: true,
  nextArrow: <ArrowRightStyledFunction />,
  prevArrow: <ArrowLeftStyled />,
  className: 'Slider',

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

const Carousel = ({ cards }: Cards) => {
  return (
    <div>
      <DivStyled className="SliderContainer">
        <Slider {...settings}>
          {cards.map((c) => (
            <Card src={c.src} alt={c.alt} />
          ))}
        </Slider>
      </DivStyled>
    </div>
  );
};
export default Carousel;
