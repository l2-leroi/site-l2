import {ArrowSpinnerComponentStyled, ImageArrowSpinnerStyled} from './styled';

interface imageProps {
  image: boolean;
}

function ScrollCircle(props: imageProps) {
  return (
          <ArrowSpinnerComponentStyled>
            <ImageArrowSpinnerStyled
              src={props.image ?
                './images/Arrow-Spinner-White.svg' :
                './images/Arrow-Spinner.svg'
              
              }
              alt="Tem mais coisa aqui em baixo"
              className='animate'
            />
            <ImageArrowSpinnerStyled
              src={props.image ?
                './images/Arrow-White.svg' : 
                './images/Arrow.svg'
                
              }
              alt="Seta"
              className='absolute'
            />
          </ArrowSpinnerComponentStyled>
  );
};

export default ScrollCircle;