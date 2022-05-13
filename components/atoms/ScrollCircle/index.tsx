import {ArrowSpinnerComponentStyled, ImageArrowSpinnerStyled} from './styled';

interface imageProps {
  isWhiteImage: boolean;
  blackImage: string;
  whiteImage: string;
  alt: string;
}

function ScrollCircle(props: imageProps) {
  return (
          <ArrowSpinnerComponentStyled>
            <ImageArrowSpinnerStyled
              src={props.isWhiteImage ?
                props.whiteImage :
                props.blackImage
              
              }
              alt="Tem mais coisa aqui em baixo"
              className='animate'
            />
            <ImageArrowSpinnerStyled
              src={props.isWhiteImage ?
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