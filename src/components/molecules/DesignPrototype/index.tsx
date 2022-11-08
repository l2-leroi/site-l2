import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

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
  widthImage: number;
  heightImage: number;
  prototypeType: string;
  imagesPrototype: imagesPrototype[];
}
function DesignPrototype({
  widthImage,
  heightImage,
  prototypeType,
  imagesPrototype,
}: DesignPrototypeProps) {
  const prototypeRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prototypeType === 'mobile') {
      document.getElementById('ContentPrototype').classList.add('mobile');
    } else {
      document.getElementById('ContentPrototype').classList.add('desktop');
    }

    function scrollPrototype() {
      const container = containerRef?.current?.getBoundingClientRect();
      const containerTop = parseInt(container?.top, 10) + window.scrollY;
      const containerBottom = containerTop + parseInt(container?.height, 10);

      if (window.pageYOffset < containerTop) {
        prototypeRef?.current.scroll(0, 0);
        setIsVisible(false);
      } else if (window.pageYOffset > containerBottom) {
        const scrollY = containerBottom - containerTop;
        prototypeRef.current.scroll(0, scrollY);
        setIsVisible(true);
      } else {
        const scrollY = window.pageYOffset - containerTop;
        prototypeRef.current?.scroll(0, scrollY);
        setIsVisible(true);
      }
    }
    window.addEventListener('scroll', scrollPrototype);
  }, []);

  return (
    <ContentStyled
      id="ContentStyled"
      style={{
        height: `${imagesPrototype.length * 100}vh`,
      }}
      ref={containerRef}
    >
      <ContentStyledPrototype
        id="ContentPrototype"
        ref={prototypeRef}
        heightImage={heightImage}
        widthImage={widthImage}
      >
        {imagesPrototype.map((images, index) => {
          if (index === 0) {
            return (
              <AnimatePresence>
                {isVisible && (
                  <ImageStyledPrototype
                    src={images.image}
                    initial={{
                      scaleY: 0,
                    }}
                    animate={{
                      scaleY: 1,
                    }}
                    exit={{
                      scaleY: 0,
                    }}
                    transition={{
                      duration: 0.5, // 1,
                    }}
                  />
                )}
              </AnimatePresence>
            );
          }
          return (
            <AnimatePresence>
              {isVisible && (
                <ImageStyledPrototype
                  src={images.image}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      delay: 0,
                      duration: 0,
                    },
                  }}
                  transition={{
                    delay: 0.5, // 1,
                    duration: 0,
                  }}
                />
              )}
            </AnimatePresence>
          );
        })}
      </ContentStyledPrototype>
    </ContentStyled>
  );
}
export default DesignPrototype;
