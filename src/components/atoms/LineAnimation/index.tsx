import React, { useRef } from 'react';
import {
  LineBg,
  LineContainerStyled,
  SpinningIconStyled,
  Sup,
  TextContainerStyled,
} from './style';

import OutSourcing from '../OutSourcing';

const Spinner = '/images/spinner.png';

interface LineAnimationProps {
  bottomBgColor: string;
  topBgColor: string;
  hasOutSourcing?: boolean;
  children?: React.ReactNode;
  hasSpinner?: boolean;
}

const LineAnimation = ({
  bottomBgColor,
  topBgColor,
  hasOutSourcing,
  children,
  hasSpinner,
}: LineAnimationProps) => {
  const spinner = useRef();
  const text = useRef();
  const container = useRef();

  const maxRadians = 17.76 * (Math.PI / 180);
  let maxHeight = 0;

  const calculateMaxHeight = () => {
    const containerElement = container.current as HTMLElement;
    maxHeight =
      Math.tan(maxRadians) * containerElement.getBoundingClientRect().width;
  };

  const putSpinnerInCorrectPosition = (reset?) => {
    const spinnerElement = spinner.current as HTMLElement;
    const containerElement = container.current as HTMLElement;
    const spinnerHeight = parseInt(
      getComputedStyle(
        spinnerElement.children[0] as HTMLElement,
      ).getPropertyValue('height'),
      10,
    );

    const maxSpinnerHeight =
      Math.tan(maxRadians) *
      (containerElement.getBoundingClientRect().width - spinnerHeight / 2);
    spinnerElement.style.top = `${
      maxSpinnerHeight - spinnerHeight / 2 + 100
    }px`;

    if (reset) {
      spinnerElement.style.top = `${maxHeight / 2 - spinnerHeight / 2 + 100}px`;
    }
  };
  const resetAll = () => {
    calculateMaxHeight();

    const containerElement = container.current as HTMLElement;
    containerElement.style.clipPath = `polygon(
      0 ${maxHeight / 2}px,
      100% ${maxHeight / 2}px,
      100% 100%,
      0 100%
    )`;
    const textElement = text.current as HTMLElement;
    if (hasOutSourcing) {
      textElement.style.top = `${maxHeight / 2}px`;
      textElement.style.transform = `rotate(0deg)`;
    }
    if (hasSpinner) {
      putSpinnerInCorrectPosition(true);
    }
  };
  const animateLine = (resize) => {
    calculateMaxHeight();

    const textElement = text.current as HTMLElement;
    const containerElement = container.current as HTMLElement;
    containerElement.style.paddingTop = `${maxHeight}px`;
    if (hasSpinner) {
      putSpinnerInCorrectPosition(false);
    }

    const screen = innerWidth > 800 ? 0.2 : 0.6;

    const distanceFromTop =
      window.innerHeight * screen -
      containerElement.getBoundingClientRect().top +
      maxHeight / 2;
    if (distanceFromTop < 0) {
      resetAll();
    }
    if (distanceFromTop > 0) {
      if (hasOutSourcing) {
        textElement.style.bottom = null;

        if (resize) {
          textElement.style.transition = 'transform 0.5s ease';
        } else {
          textElement.style.transition = 'all 0.5s ease';
        }

        textElement.style.top = `${maxHeight / 2}px`;
        textElement.style.transform = `rotate(17.76deg)`;
      }

      containerElement.style.clipPath = `polygon(
        0 0,
        100% ${maxHeight}px,
        100% 100%,
        0 100%
      )`;
    }
  };

  const onResize = () => {
    animateLine(true);
  };
  const onScroll = () => {
    animateLine(false);
  };

  React.useEffect(() => {
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      {hasSpinner && (
        <SpinningIconStyled className="spinner">
          <div>
            <div ref={spinner}>
              <img src={Spinner} alt="L2 Code" />
            </div>
          </div>
        </SpinningIconStyled>
      )}
      {hasOutSourcing && (
        <TextContainerStyled>
          <div>
            <div ref={text}>
              <OutSourcing color="black_1" texts="outSourcing.ourClients" />
            </div>
          </div>
        </TextContainerStyled>
      )}
      <LineBg topBgColor={topBgColor}>
        <LineContainerStyled
          topBgColor={topBgColor}
          bottomBgColor={bottomBgColor}
          ref={container}
        >
          <Sup bottomBgColor={bottomBgColor} />
          {children}
        </LineContainerStyled>
      </LineBg>
    </>
  );
};
export default LineAnimation;
