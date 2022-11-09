import React, { useRef } from 'react';
import { LineBg, LineContainerStyled, Sup } from './style';

// import OutSourcing from '../OutSourcing';

interface NewLineAnimationProps {
  bottomBgColor: string;
  topBgColor: string;
  // hasOutSourcing?: boolean;
  children?: React.ReactNode;
}

const NewLineAnimation = ({
  bottomBgColor,
  topBgColor,
  // hasOutSourcing,
  children,
}: NewLineAnimationProps) => {
  // const text = useRef();
  const container = useRef();

  const maxRadians = 17.76 * (Math.PI / 180);
  let maxHeight = 0;

  const calculateMaxHeight = () => {
    const containerElement = container.current as HTMLElement;
    maxHeight =
      Math.tan(maxRadians) * containerElement.getBoundingClientRect().width;
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
    // const textElement = text.current as HTMLElement;
    // if (hasOutSourcing) {
    //   textElement.style.top = null;
    //   textElement.style.transform = `rotate(0deg)`;
    // }
  };

  const animateLine = (resize) => {
    calculateMaxHeight();

    // const textElement = text.current as HTMLElement;
    const containerElement = container.current as HTMLElement;
    if (!containerElement) return;
    containerElement.style.paddingTop = `${maxHeight}px`;

    const screen = innerWidth > 800 ? 0.2 : 0.6;

    const distanceFromTop =
      window.innerHeight * screen -
      containerElement.getBoundingClientRect().top +
      maxHeight / 2;
    if (distanceFromTop < 0) {
      resetAll();
    }
    if (distanceFromTop > 0) {
      // if (hasOutSourcing) {
      //   textElement.style.bottom = null;

      //   if (resize) {
      //     textElement.style.transition = 'transform 0.5s ease';
      //   } else {
      //     textElement.style.transition = 'all 0.5s ease';
      //   }

      //   textElement.style.top = `calc(${maxHeight / 2}px - 7em)`;
      //   textElement.style.transform = `rotate(17.76deg)`;
      // }
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
    <LineBg topBgColor={topBgColor}>
      <LineContainerStyled
        topBgColor={topBgColor}
        bottomBgColor={bottomBgColor}
        ref={container}
      >
        {/* {hasOutSourcing && (
          <TextContainerStyled ref={text}>
            <OutSourcing color="black_1" texts="outSourcing.ourClients" />
          </TextContainerStyled>
        )} */}

        <Sup bottomBgColor={bottomBgColor} />
        {children}
      </LineContainerStyled>
    </LineBg>
  );
};
export default NewLineAnimation;
