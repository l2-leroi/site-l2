import i18next from 'i18next';
import { ArrowSpinnerComponentStyled, ImageArrowSpinnerStyled } from './styled';

interface imageProps {
  isWhiteImage: boolean;
  blackImage: string;
  whiteImage: string;
  hidden?: boolean;
}

function ScrollCircle(props: imageProps) {
  const { t } = i18next;
  return (
    <ArrowSpinnerComponentStyled
      style={{ visibility: props.hidden ? 'hidden' : 'visible' }}
    >
      <ImageArrowSpinnerStyled
        src={props.isWhiteImage ? props.whiteImage : props.blackImage}
        alt={t('images.alt.thereIsMore')}
        className="animate"
      />
      <ImageArrowSpinnerStyled
        src={
          props.isWhiteImage ? '/images/Arrow-White.svg' : '/images/Arrow.svg'
        }
        alt="Seta"
        className="absolute"
      />
    </ArrowSpinnerComponentStyled>
  );
}

export default ScrollCircle;
