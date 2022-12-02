import { useEffect, useRef, useState } from 'react';
import { colors } from '../../../styles/colors';

export const Lightning = () => {
  const ref = useRef(null);
  const [isCanvasEnabled, setCanvasEnabled] = useState(false);
  const [mouseAxis, setMouseAxis] = useState({ x: 0, y: 0 });
  const [currentHeight, setCurrentHeight] = useState(0);
  const footerMarginTop = 10;
  const labelMarginBottom = 19;
  const getLeftOf = (id) => document.getElementById(id)?.offsetLeft ?? 0;
  const getWidthOf = (id) => document.getElementById(id)?.offsetWidth ?? 0;
  const getTopOf = (id) =>
    document.getElementById(id).getBoundingClientRect().top + window.scrollY ??
    0;
  const windowWidth = window.innerWidth;
  const containerGutter = 56;
  const containerSize = 1500;
  function createLightning(mouseAxis) {
    let totalGap = containerGutter;

    if (windowWidth - containerGutter > containerSize) {
      totalGap = (windowWidth - 1500 + containerGutter / 2) / 2;
    }

    const talentPointX =
      getLeftOf('mailTalent') + getWidthOf('mailTalent') + totalGap;
    const talentPointY =
      getTopOf('mailTalent') + footerMarginTop + labelMarginBottom;

    const contactPointX =
      getLeftOf('mailContact') + getWidthOf('mailContact') + totalGap;

    const contactPointY =
      getTopOf('mailContact') + footerMarginTop + labelMarginBottom;

    let endPosition = { x: 0, y: 0 };

    if (mouseAxis.y <= contactPointY) {
      endPosition = { x: contactPointX, y: contactPointY };
    } else {
      endPosition = { x: talentPointX, y: talentPointY };
    }

    const sizeX = (mouseAxis.x - endPosition.x) ** 2;
    const sizeY = (mouseAxis.y - endPosition.y) ** 2;
    const size = Math.sqrt(sizeX + sizeY);

    const center = { x: mouseAxis.x, y: mouseAxis.y };
    const minSegmentHeight = 1;
    const roughness = 3;
    const maxDifference = size / 10;
    // The main segment's height
    let segmentHeight = center.y;
    let lightning = [];
    // The start and the end position of the lightning.
    lightning.push({
      x: endPosition.x,
      y: endPosition.y,
    });

    lightning.push({ x: center.x, y: center.y });

    // This is important so we don't change the global one.
    let currDiff = maxDifference;

    while (segmentHeight > minSegmentHeight) {
      // This uses the double buffering pattern
      const newSegments = [];
      for (let i = 0; i < lightning.length - 1; i++) {
        // The start and the end position of the current segment
        const start = lightning[i];
        const end = lightning[i + 1];
        // "midX" is the average X position of the segment
        const midX = (start.x + end.x) / 2;
        const newX = midX + (Math.random() * 2 - 1) * currDiff;

        const midY = (start.y + end.y) / 2;
        const newY = midY + (Math.random() * 2 - 1) * currDiff;
        // Add the start and the middle point to the new segment list
        // Because the end position is going to be added again in the next iteration
        // we don't need to add that here.
        newSegments.push(start, { x: newX, y: newY });
      }
      // Add the last point of the lightning to the segments.
      newSegments.push(lightning.pop());
      lightning = newSegments;

      currDiff /= roughness;
      segmentHeight /= 2;
    }
    return lightning;
  }

  const renderLightning = (mouseAxis) => {
    const ctx = ref?.current?.getContext('2d');
    ctx.clearRect(0, 0, ref?.current?.width, ref?.current?.height);

    ctx.lineWidth = 6;
    ctx.strokeStyle = colors.green;

    const lightning = createLightning(mouseAxis);

    ctx.beginPath();

    for (let i = 0; i < lightning.length; i++) {
      ctx.lineTo(lightning[i].x, lightning[i].y);
    }

    ctx.stroke();
  };

  const count = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count.current >= 25) {
        renderLightning(mouseAxis);
        count.current = 0;
      }

      count.current += 1;
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, [mouseAxis, ref]);

  useEffect(() => {
    const mouseOverFn = (el) => {
      const { pageX, pageY } = el;
      setMouseAxis({
        x: pageX,
        y: pageY,
      });

      const footerOffset =
        document.getElementById('footer').getBoundingClientRect().top +
        window.scrollY -
        200; // <<- MAGIC NUMBER
      if (pageY >= footerOffset) {
        setCanvasEnabled(true);
      } else {
        setCanvasEnabled(false);
      }
    };

    window.addEventListener('wheel', mouseOverFn);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', (el) => {
      if (document.body.offsetHeight !== ref.current.height) {
        ref.current.width = window.innerWidth;
        ref.current.height = document.body.offsetHeight;

        setCurrentHeight(document.body.offsetHeight);
      }

      const { pageX, pageY } = el;
      const footerOffset =
        document.getElementById('footer').getBoundingClientRect().top +
        window.scrollY -
        200; // <<- MAGIC NUMBER
      if (pageY >= footerOffset) {
        setCanvasEnabled(true);

        setMouseAxis({ x: pageX, y: pageY });
      } else {
        setCanvasEnabled(false);
      }
    });
  }, []);

  return (
    <canvas
      id="canvas"
      ref={ref}
      style={{
        zIndex: 998,
        position: 'absolute',
        top: 0,
        left: '0',
        width: '100%',
        height: currentHeight,
        opacity: isCanvasEnabled ? 1 : 0,
        visibility: isCanvasEnabled ? 'visible' : 'hidden',
      }}
    />
  );
};
