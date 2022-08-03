import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

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
  const prototypeRef = useRef();
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prototypeType === 'mobile') {
      document.getElementById('ContentPrototype').classList.add('mobile');
    } else {
      document.getElementById('ContentPrototype').classList.add('desktop');
    }
    function scrollPrototype() {
      const container = containerRef?.current?.getBoundingClientRect();
      const containerTop = container.top + window.scrollY;
      const containerBottom = containerTop + container.height;

      const prototype = prototypeRef?.current?.getBoundingClientRect();
      const prototypeTop = prototype.top + window.scrollY;
      const prototypeBottom = prototypeTop + prototype.height;

      function disableScroll() {
        window.addEventListener('wheel', (e) => e.preventDefault(), {
          passive: false,
        });
      }

      function enableScroll() {
        window.removeEventListener('wheel', (e) => e.preventDefault(), {
          passive: false,
        });
        // window.removeEventListener('wheel', disableScroll, false);
      }

      if (window.pageYOffset < containerTop) {
        prototypeRef.current.scroll(0, 0);
        setIsVisible(false);

        /* disableScroll();
        setTimeout(() => {
          enableScroll();
        }, 2000); */
      } else if (window.pageYOffset > containerBottom) {
        const scrollY = containerBottom - containerTop;
        prototypeRef.current.scroll(0, scrollY);
        setIsVisible(true);

        /* disableScroll();
        setTimeout(() => {
          enableScroll();
        }, 2000); */
      } else {
        const scrollY = window.pageYOffset - containerTop;
        prototypeRef.current.scroll(0, scrollY);
        setIsVisible(true);
      }
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
                      duration: 1,
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
                    delay: 1,
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
