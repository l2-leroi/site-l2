import React, { useState } from 'react';

import { ContainerScroll, ElementScroll, DivElement } from './styles';

interface Elements {
  title: string;
  link: string;
}

interface ItemsProps {
  items: Elements[];
}

function createMarkup() {
  return { __html: '&lt;{i.title}&gt;' };
}

function Scroll(props: ItemsProps) {
  const [clones, setClones] = useState([]);
  return (
    <>
      <ContainerScroll>
        <DivElement>
          {props.items.map((i) => (
            <ElementScroll href={i.link}>{i.title}</ElementScroll>
          ))}
        </DivElement>
      </ContainerScroll>
    </>
  );
}

export default Scroll;
