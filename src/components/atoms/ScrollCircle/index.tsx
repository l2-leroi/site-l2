import i18next from 'i18next';
import { ArrowSpinnerComponentStyled, ImageArrowSpinnerStyled } from './styled';

interface imageProps {
  isWhiteImage: boolean;
  blackImage: string;
  whiteImage: string;
}

function ScrollCircle({ isWhiteImage, blackImage, whiteImage }: imageProps) {
  const { t } = i18next;
  return (
    <ArrowSpinnerComponentStyled>
      <ImageArrowSpinnerStyled
        src={isWhiteImage ? whiteImage : blackImage}
        alt={t('images.alt.thereIsMore')}
        className="animate"
      />
      <ImageArrowSpinnerStyled
        src={isWhiteImage ? '/images/Arrow-White.svg' : '/images/Arrow.svg'}
        alt="Seta"
        className="absolute"
      />
    </ArrowSpinnerComponentStyled>
  );
}

export default ScrollCircle;
