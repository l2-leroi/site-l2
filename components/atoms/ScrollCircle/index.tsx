import {ArrowSpinnerComponentStyled, ImageArrowSpinnerStyled} from './styled';

interface imageProps {
  image: boolean;
}

function ScrollCircle(props: imageProps) {
  return (
          <ArrowSpinnerComponentStyled>
            <ImageArrowSpinnerStyled
              src={props.image ?
                './images/Arrow-Spinner-White.png' :
                './images/Arrow-Spinner.png'
              
              }
              alt="Tem mais coisa aqui em baixo"
              className='animate'
            />
            <ImageArrowSpinnerStyled
              src={props.image ?
                './images/Arrow-White.png' : 
                './images/Arrow.png'
                
              }
              alt="Seta"
              className='absolute'
            />
          </ArrowSpinnerComponentStyled>
  );
};

export default ScrollCircle;