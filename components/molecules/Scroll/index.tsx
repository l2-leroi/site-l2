import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ElementScroll, InfiniteScrollContainer } from './styles';
import Link from 'next/link';

/*
const element = document.getElementById('home')
element.innerText = "< Home >"
element.style.color = "#20BD9D"
*/

export default function Scroll() {
  const baseItems = [
    '< Home >',
    'Sobre',
    'Cases',
    'Serviços',
    'Pessoas',
    'Carreira',
    'Contato',
  ];

  const baseUrl = [
    './',
    './about',
    './cases',
    './services',
    './pessoas',
    './carreira',
    './contato',
  ];
  baseItems[0]
  function createMarkup() {
    for (let i = 0; i < baseItems.length; i++) {
      const element = baseItems[i];
      const url = baseUrl[i];

      if (baseUrl[i] == './') {
        console.log(baseItems[i]);
        console.log('funcionando');
      }
    }
  }
  console.log(createMarkup());

  const [items, setItems] = useState([...baseItems, ...baseItems]);

  const fetchData = () => {
    setItems([...items, ...baseItems]);
  };

  return (
    <InfiniteScrollContainer
      dataLength={items.length}
      next={fetchData}
      hasMore={true}
      loader={null}
      height="100vh"
    >
      {items.map((item) => {
        return <ElementScroll key={`${item}-${uuid()}`}>{item}</ElementScroll>;
      })}
    </InfiniteScrollContainer>
  );
}
