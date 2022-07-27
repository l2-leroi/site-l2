import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'use-hooks';
import {
  ContentStyled,
  ImageStyledPrototype,
  ContentStyledPrototype,
  ContainerImage,
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
  const prototypeRef = useRef();
  const containerRef = useRef();
  const [transformImageIsShown, transformImageSetIsShown] = useState(false);

  useEffect(() => {
    const images = document.getElementById('images');
    images.classList.add('transformImage');

    if (transformImageIsShown === false) {
      images.classList.remove('transformImage');
    }
  }, [transformImageIsShown]);

  useEffect(() => {
    function scrollPrototype() {
      const container = containerRef?.current?.getBoundingClientRect();

      const prototype = prototypeRef?.current?.getBoundingClientRect();
      const prototypeTop = prototype.top + window.scrollY;
      const prototypeBottom = prototypeTop + prototype.height;

      const containerTop = container.top + window.scrollY;
      const containerBottom = containerTop + container.height;

      /* const images = document.getElementById('images');
      images.classList.add('transformImage'); */

      if (window.pageYOffset < containerTop) {
        prototypeRef.current.scroll(0, 0);
      } else if (window.pageYOffset > containerBottom) {
        const scrollY = containerBottom - containerTop;
        prototypeRef.current.scroll(0, scrollY);
      } else {
        const scrollY = window.pageYOffset - containerTop;
        prototypeRef.current.scroll(0, scrollY);
      }

      // -----------------------------------------------------------

      if (prototypeBottom === containerBottom) {
        console.log('Fim');
        transformImageSetIsShown(true);
      } else {
        transformImageSetIsShown(false);
      }

      // console.log(`window = ${window.pageYOffset}`);
      // console.log(`prototypeBottom = ${prototypeBottom}`);
      // console.log(`containerBottom = ${containerBottom}`);
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
        <ContainerImage id="images">
          {imagesPrototype.map((images) => (
            <ImageStyledPrototype src={images.image} />
          ))}
        </ContainerImage>
      </ContentStyledPrototype>

      {/* <ImageStyled width={width} height={height} src={src} alt={alt} /> */}
    </ContentStyled>
  );
}
export default DesignPrototype;
