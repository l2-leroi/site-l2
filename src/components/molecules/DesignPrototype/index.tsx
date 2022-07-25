import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import { useWindowSize } from 'use-hooks';
import {
  ContentStyled,
  ImageStyledPrototype,
  ContentStyledPrototype,
} from './styled';

interface imagesPrototype {
  image: string;
  alt: string;
}
interface DesignPrototypeProps {
  // width: number;
  height: number;
  src: string;
  alt: string;
  imagesPrototype: imagesPrototype[];
}

function DesignPrototype({
  // width,
  height,
  src,
  alt,
  imagesPrototype,
}: DesignPrototypeProps) {
  // const [prototypeisShown, prototypesetIsShown] = useState(false);
  const { width_t } = useWindowSize();
  // console.log(`width? ${width}`);

  useEffect(() => {
    const p = document.querySelector('#prototype');
    const posicoes = p?.getBoundingClientRect();

    function CenterWindow() {
      const heightPrototypeDiv = posicoes.bottom - posicoes.top; // altura da div
      const aux = (window.innerHeight - heightPrototypeDiv) / 2; // px onde deve começar a div
      const bottom_page = posicoes.bottom + aux;

      document.getElementById('__next').style.height = `${bottom_page}px`;
      document.getElementById('__next').style.overflow = 'hidden';

      console.log(document.getElementById('__next').offsetHeight);
      const pageY = window.pageYOffset; // Y da página
      console.log(`pageY= ${pageY}`);
      console.log(`window.innerWidth = ${window.innerWidth}`);
    }
    window.addEventListener('scroll', CenterWindow);
  }, []); // width_t

  return (
    <ContentStyled id="prototype">
      <ContentStyledPrototype>
        {imagesPrototype.map((images) => (
          <ImageStyledPrototype src={images.image} />
        ))}
      </ContentStyledPrototype>

      {/* <ImageStyled width={width} height={height} src={src} alt={alt} /> */}
    </ContentStyled>
  );
}
export default DesignPrototype;
