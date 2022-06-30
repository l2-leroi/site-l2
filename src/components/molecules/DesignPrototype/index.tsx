import { ContentStyled, ImageStyled } from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface DesignPrototypeProps {
  width: number;
  height: number;
  src: string;
  alt: string;
}

function DesignPrototype({ width, height, src, alt }: DesignPrototypeProps) {
  return (
    <ContentStyled>
      <ImageStyled width={width} height={height} src={src} alt={alt} />
    </ContentStyled>
  );
}
export default DesignPrototype;
