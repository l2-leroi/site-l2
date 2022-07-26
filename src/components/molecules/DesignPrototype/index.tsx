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
    const divPrototype = document.getElementById('prototype');

    document
      .getElementById('prototype')
      .addEventListener('scroll', (e) => PrototypeScroll(e));

    // mostra o y do prototype
    function PrototypeScroll(e) {
      console.log(`divPrototype = ${divPrototype.scrollTop}`);
      // console.log(`y = ${posicoes.pageYOffset} `);
    }

    function CenterWindow() {
      const heightPrototypeDiv = posicoes.bottom - posicoes.top; // altura da div
      const aux = (window.innerHeight - heightPrototypeDiv) / 2; // px onde deve começar a div
      const bottom_page = posicoes.bottom + aux;

      // document.getElementById('__next').style.height = `${bottom_page}px`;
      // document.getElementById('__next').style.overflow = 'hidden';

      /* console.log(document.getElementById('__next').offsetHeight);
      const pageY = window.pageYOffset; // Y da página
      console.log(`pageY= ${pageY}`);
      console.log(`window.innerWidth = ${window.innerWidth}`); 
      console.log(`O usuario está escrolando.`); */
    }

    function CenterWindow2() {
      /*
      const heightPrototypeDiv = posicoes.bottom - posicoes.top; // altura da div
      const aux = (window.innerHeight - heightPrototypeDiv) / 2; // px onde deve começar a div
      const bottom_page = posicoes.bottom + aux;
      const pageY = window.pageYOffset; // Y da página */
      // o scrollbar tem que ficar parar no bottom_page
      // $("html").scrollTop(bottom_page);

      const prototypeDiv2 = document.getElementById('prototype');
      const topPrototype = prototypeDiv2.offsetTop;
      const heightPrototypeDiv = posicoes.bottom - posicoes.top; // altura da div
      const pageY = window.pageYOffset; // Y da página
      const aux = (window.innerHeight - heightPrototypeDiv) / 2; // px onde deve começar a div
      const aux5 = topPrototype - aux; // Div centralizada | o Y da página

      console.log(`pageY= ${pageY}`);
      console.log(`aux = ${aux}`);
      console.log(`aux5 = ${aux5}`);
      const bottom_page = posicoes.bottom + aux;

      if (pageY > aux5) {
        $('html').scrollTop(bottom_page);
      }
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
