import { 
    DivStyled,
    ArrowRightStyled,
    ArrowLeftStyled,
    FadeOutDiv
} from './styled';
import CardCarroussel from '../../atoms/card-carroussel';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Card{
    comment: string;
    authorImg: string;
    authorName: string;
    id: number;
    author: boolean;
}

interface Cards{
    cards : Card[];
}

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    swipeToSlide: true,
    nextArrow: <ArrowRightStyled />,
    prevArrow: <ArrowLeftStyled />
};



const Carroussel = ({cards} : Cards) =>{
    return(
        <DivStyled >
            <FadeOutDiv>
                
            </FadeOutDiv>
            <Slider {...settings} >
            {
                cards.map((c) =>(
                    <CardCarroussel key={c.id} author={c.author} authorImg={c.authorImg} authorName={c.authorName} comment={c.comment}/>
                ))
            }
            </Slider>
        </DivStyled>
    )
    
}
export default Carroussel