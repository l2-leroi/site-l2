import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef } from 'react';
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
  const prototypeRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const posicoes = prototypeRef?.current?.getBoundingClientRect();
    const container = containerRef?.current?.getBoundingClientRect();

    function scrollPrototype() {
      const heightPrototypeDiv = posicoes.bottom - posicoes.top; // altura da div

      if (
        window.pageYOffset > container.top &&
        window.pageYOffset < container.bottom
      ) {
        const scrollY = window.pageYOffset - posicoes.bottom;
        prototypeRef.current.scroll(0, scrollY);
      } else if (window.pageYOffset < container.top) {
        prototypeRef.current.scroll(0, 0);
      } else {
        const scrollY = posicoes.top - posicoes.bottom;
        prototypeRef.current.scroll(0, scrollY);
      }

      const aux = (window.innerHeight - heightPrototypeDiv) / 2; // px onde deve começar a div
      const bottom_page = posicoes.bottom + aux;

      console.log(`posicoes.top = ${container.top} `);
      console.log(`posicoes.bottom = ${container.bottom} `);
      console.log(`posicoes.bottom = ${container.bottom} `);

      // document.getElementById('__next').style.height = `${bottom_page}px`;
      // document.getElementById('__next').style.overflow = 'hidden';

      /* console.log(document.getElementById('__next').offsetHeight);
      const pageY = window.pageYOffset; // Y da página
      console.log(`pageY= ${pageY}`);
      console.log(`window.innerWidth = ${window.innerWidth}`); 
      console.log(`O usuario está escrolando.`); */
    }

    window.addEventListener('scroll', scrollPrototype);
  }, []); // width_t

  return (
    <ContentStyled
      id="prototype"
      style={{
        height: `${imagesPrototype.length * 100}vh`,
      }}
      ref={containerRef}
    >
      <ContentStyledPrototype ref={prototypeRef}>
        {imagesPrototype.map((images) => (
          <ImageStyledPrototype src={images.image} />
        ))}
      </ContentStyledPrototype>

      {/* <ImageStyled width={width} height={height} src={src} alt={alt} /> */}
    </ContentStyled>
  );
}
export default DesignPrototype;
