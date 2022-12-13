import React from 'react';
import {
  CardContainer,
  ImagesContainer,
  ImageIcon,
  InfoContainer,
  ImageProtect,
} from './styled';
import { Typography } from '../../../styles/typography';

export default function PeopleCard({ images, name, city }) {
  const [actualImage, setActualImage] = React.useState('');
  let isMouseInside = false;
  let counterLoop = 0;
  const interval = React.useRef(null);

  const initInterval = () => {
    if (!isMouseInside) {
      interval.current = setInterval(changeImage, 300);
      isMouseInside = true;
    }
  };

  const changeImage = () => {
    counterLoop + 1 > images.length - 1
      ? (counterLoop = 0)
      : (counterLoop += 1);
    setActualImage(images[counterLoop]);
    if (!isMouseInside) {
      clearInterval(interval.current);
    }
  };

  const exitInterval = () => {
    setActualImage(images[0]);
    isMouseInside = false;
    clearInterval(interval.current);
  };

  const isMobile = {
    Android() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows() {
      return (
        navigator.userAgent.match(/IEMobile/i) ||
        navigator.userAgent.match(/WPDesktop/i)
      );
    },
    any() {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  React.useEffect(() => {
    setActualImage(images[0]);
  }, []);
  return (
    <CardContainer>
      <ImagesContainer>
        <ImageProtect
          onTouchStart={(event) => {
            event.preventDefault();
            initInterval();
          }}
          onMouseEnter={(event) => {
            event.preventDefault();
            if (!isMobile.any()) {
              initInterval();
            }
          }}
          onMouseLeave={exitInterval}
          onTouchEnd={exitInterval}
        />

        {images.map((image, key) => {
          return (
            <ImageIcon
              key={key}
              src={`/images/PeopleCard/${image}`}
              className={actualImage == image ? 'active' : ''}
              onTouchStart={(event) => {
                event.preventDefault();
              }}
              onSelect={(event) => {
                event.preventDefault();
              }}
            />
          );
        })}
      </ImagesContainer>
      <InfoContainer>
        <Typography
          color="gray"
          tag="h4"
          size="small"
          letterSpacing="space1"
          fontWeight="weight2"
        >
          {name}
        </Typography>
        <Typography
          color="gray"
          tag="span"
          size="xsmall"
          letterSpacing="space1"
        >
          {city}
        </Typography>
      </InfoContainer>
    </CardContainer>
  );
}
