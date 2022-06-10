import { ArrowSpinnerComponentStyled, ImageArrowSpinnerStyled } from './styled';
import i18next from "i18next";
interface imageProps {
  isWhiteImage: boolean;
  blackImage: string;
  whiteImage: string;
  alt: string;
}

function ScrollCircle(props: imageProps) {
  const { t } = i18next
  return (
    <ArrowSpinnerComponentStyled>
      <ImageArrowSpinnerStyled
        src={props.isWhiteImage ?
          props.whiteImage :
          props.blackImage

        }
        alt={t('images.alt.thereIsMore')}
        className='animate'
      />
      <ImageArrowSpinnerStyled
        src={props.isWhiteImage ?
          '/images/Arrow-White.svg' :
          '/images/Arrow.svg'

        }
        alt="Seta"
        className='absolute'
      />
    </ArrowSpinnerComponentStyled>
  );
};

export default ScrollCircle;