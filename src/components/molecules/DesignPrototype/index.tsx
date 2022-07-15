import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef, useState } from 'react';
import { event } from 'react-ga';
import {
  ContentStyled,
  ImageStyled,
  ImageStyledPrototype,
  ContentStyledPrototype,
} from './styled';

interface imagesPrototype {
  image: string;
  alt: string;
}
interface DesignPrototypeProps {
  width: number;
  height: number;
  src: string;
  alt: string;
  imagesPrototype: imagesPrototype[];
}

function DesignPrototype({
  width,
  height,
  src,
  alt,
  imagesPrototype,
}: DesignPrototypeProps) {
  // const [prototypeisShown, prototypesetIsShown] = useState(false);

  useEffect(() => {
    const p = document.querySelector('#prototype');
    const posicoes = p?.getBoundingClientRect();

    function unloadScrollBars() {
      console.log('Entrei no unloadScrollBars');
      document.documentElement.style.overflow = 'hidden';
      document.body.scroll = 'no'; // IE
    }
    function reloadScrollBars() {
      document.documentElement.style.overflow = 'auto';
      document.body.scroll = 'yes'; // IE
    }

    function teste() {
      const prototypeDiv = document.querySelector('#prototype');
      const prototypeDiv2 = document.getElementById('prototype');

      const topPrototype = prototypeDiv2.offsetTop;
      const heightPrototypeDiv = posicoes.bottom - posicoes.top; // altura da div
      const pageY = window.pageYOffset; // Y da página
      const aux = (window.innerHeight - heightPrototypeDiv) / 2;
      const aux5 = topPrototype - aux; // Div centralizada | o Y da página

      if (pageY > aux5) {
        prototypeDiv.scrollTop = pageY - aux5;
        console.log(`scrollTop = ${prototypeDiv.scrollTop}`);

        console.log('Entrei no if');
        console.log(`window.innerHeight = ${window.innerHeight}`);
        console.log(`heightPrototypeDiv = ${heightPrototypeDiv}`);
        console.log(`topPrototype = ${topPrototype}`);

        // window.scrollTo(0, aux2); // IE
        // unloadScrollBars();
      }
    }
    window.addEventListener('scroll', teste);

    // para desabilitar o scroll
    /* window.addEventListener('scroll', noscroll);
    function noscroll() {
      window.scrollTo(0, 300); // xy
    } */

    /*
    const line = useRef();
    const lineElement = line.current as HTMLElement;
    const distanceFromTop =
      window.innerHeight * 0.6 - lineElement.getBoundingClientRect().top; 
      console.log(`isso é um teste : ${distanceFromTop}`);
    */

    /* function animePrototype() {
       const scrollTopoffset = '#prototype'.offset().top - window.height();

      window.scroll(function () {
        if (window.scrollTop() > scrollTopoffset) {
          // rolagem chegou ao elemento
          alert('#dois apareceu!');
        }
      }); */
    /*
      window.addEventListener('scroll', () => {
        const windowTop = window.pageYOffset + window.innerHeight * 0.7;
        const centerscroll = (window.innerHeight - 700) / 2;
        console.log(`teste center: ${windowTop}`);
        console.log(`centerscroll: ${centerscroll}`);

        console.log(`window.pageYOffset : ${window.pageYOffset}`);
        console.log(`window.innerHeight: ${window.innerHeight}`); // altura
        // const centerscroll = (window.innerHeight - 700) / 2;
        //console.log(
         // `teste center: ${window.pageYOffset + window.innerHeight * 0.7}`,
        //); 
      }); 
    } 
    const divPrototy = document.getElementById('prototype');

    divPrototy?.addEventListener('wheel', function handleClick(event) {
      console.log('entrou');
      animePrototype();
    }); */
  });

  useEffect(() => {
    const divPrototy = document.getElementById('prototype');

    divPrototy?.addEventListener('wheel', function handleClick(event) {
      // console.log(`deltaY: ${event.deltaY}`);
      // console.log(`window.pageYOffset : ${window.pageYOffset}`);
      // console.log(`window.innerHeight: ${window.innerHeight}`);
      // console.log(event);
      // console.log(event.target);
      /*
      if (event.deltaY > 0) {
        event.target.scrollBy(300, 0);
        console.log('cima');
      } else {
        console.log('baixo');
        event.target.scrollBy(-300, 0);
      } */
      /* 
      console.log(event);
      console.log(event.target); */
    });
  });

  /* if (event.deltaY > 0) {
      console.log('cima');
    } else {
      console.log('baixo');
    } */

  /* useEffect(() => {
    console.log('teste 1');
    window.onload = function () {
      const prototypeteste = document.querySelector('prototype');
      prototypeteste.addEventListener('wheel', Click);
    };
    function Click() {
      prototypesetIsShown(true);
      console.log('teste');
    }

    // .addEventListener('wheel', (event) => {
    // console.log(event);
    // });
    // btn1.classList.add('classBtn1');
  }, []); */

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
