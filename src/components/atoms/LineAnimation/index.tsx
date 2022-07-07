import React, { useRef } from 'react';
import {
  LineStyled,
  TextContainerStyled,
  LineContainerStyled,
  Sup,
  SpinningIconStyled,
} from './style';

import OutSourcing from '../OutSourcing';

const Spinner = '/images/spinner.png';

const LineAnimation = ({ lineBg, secondaryBg, hasOutSourcing, hasSpinner }) => {
  const line = useRef();
  const text = useRef();
  const spinner = useRef();
  const container = useRef();

  const maxRadians = 17.76 * (Math.PI / 180);
  let maxHeight = 0;
  let maxHeightSpinner = 200;

  const calculateMaxHeight = () => {
    const lineElement = line.current as HTMLElement;
    maxHeight =
      Math.tan(maxRadians) * lineElement.getBoundingClientRect().width;
  };

  const verifySpinnerMaxHeight = (spinnerElement: HTMLElement) => {
    if (spinnerElement.getBoundingClientRect().height > maxHeightSpinner) {
      maxHeightSpinner = spinnerElement.getBoundingClientRect().height;
    }
  };

  const putSpinnerInCorrectPosition = (reset?) => {
    const spinnerElement = spinner.current as HTMLElement;

    verifySpinnerMaxHeight(spinnerElement);

    spinnerElement.style.bottom = `-${maxHeightSpinner * 0.5}px`;

    if (reset) {
      const spinnerHeight = +getComputedStyle(
        spinnerElement.children[0] as HTMLElement,
      )
        .getPropertyValue('height')
        .replace('px', '');

      spinnerElement.style.bottom = `-${spinnerHeight / 2 - 50}px`;
    }

    if (window.innerWidth < 400) {
      spinnerElement.style.bottom = `-${maxHeight - maxHeightSpinner / 3}px`;
    }
  };

  const resetAll = () => {
    calculateMaxHeight();

    const lineElement = line.current as HTMLElement;
    lineElement.style.clipPath = `polygon(
      0 -1px,
      100% -1px,
      100% calc(100% - 50px),
      0 calc(100% - 50px)
    )`;
    const textElement = text.current as HTMLElement;
    if (hasOutSourcing) {
      textElement.style.top = null;
      textElement.style.transform = `rotate(0deg)`;
    }
    if (hasSpinner) {
      putSpinnerInCorrectPosition(true);
    }
  };

  const animateLine = (resize) => {
    calculateMaxHeight();

    const textElement = text.current as HTMLElement;
    const lineElement = line.current as HTMLElement;
    const spinnerElement = spinner.current as HTMLElement;
    const containerElement = container.current as HTMLElement;
    containerElement.style.height = `${maxHeight}px`;

    if (hasSpinner) {
      putSpinnerInCorrectPosition(false);
      verifySpinnerMaxHeight(spinnerElement);
    }

    const distanceFromTop = containerElement.getBoundingClientRect().top;
    if (distanceFromTop > 250) {
      resetAll();
    }
    if (distanceFromTop < 250) {
      if (hasOutSourcing) {
        textElement.style.bottom = null;

        if (resize) {
          textElement.style.transition = 'transform 0.5s ease';
        } else {
          textElement.style.transition = 'all 0.5s ease';
        }

        textElement.style.top = `calc(${maxHeight / 2}px - 7em)`;
        textElement.style.transform = `rotate(17.76deg)`;
      }
      lineElement.style.clipPath = `polygon(
        0 -1px,
        100% -1px,
        100% 100%,
        0 0
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
    <LineContainerStyled
      lineBg={lineBg}
      secondaryBg={secondaryBg}
      ref={container}
    >
      {hasSpinner && (
        <SpinningIconStyled className="spinner" ref={spinner}>
          <img src={Spinner} alt="L2 Code" />
        </SpinningIconStyled>
      )}

      {hasOutSourcing && (
        <TextContainerStyled ref={text}>
          <OutSourcing color="black_1" texts="outSourcing.ourClients" />
        </TextContainerStyled>
      )}

      <LineStyled ref={line} secondaryBg={secondaryBg} />

      <Sup lineBg={lineBg} />
    </LineContainerStyled>
  );
};
export default LineAnimation;
