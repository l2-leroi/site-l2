import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ElementScrollStyled, InfiniteScrollContainerStyled } from './styled';
import { useRouter } from 'next/router';

export interface ScrollProps {
  language: string;
}

const Scroll = () => {
  const baseItemsPT = [
    'Home',
    'Sobre',
    'Cases',
    'Serviços',
    'Pessoas',
    'Carreira',
    'Contato',
  ];
  
  const baseItemsEN = [
    'Home',
    'About',
    'Cases',
    'Services',
    'People',
    'Career',
    'Contact',
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

  const router = useRouter();
  let baseItems = router.asPath == "/en" ? baseItemsEN : baseItemsPT;

  useEffect(() => {
    if(router.asPath == '/en') {
      setItems([...baseItemsEN, ...baseItemsEN])
      baseItems = baseItemsEN;
    }
    else { 
      setItems([...baseItemsPT, ...baseItemsPT])
      baseItems = baseItemsPT;
    }
  },[router.asPath]);

  const [items, setItems] = useState([...baseItems, ...baseItems]);
  
  const fetchData = () => {
    setItems([...items, ...baseItems]);
  };

  return (
    <InfiniteScrollContainerStyled
      dataLength={items.length}
      next={fetchData}
      hasMore={true}
      loader={null}
      height="100vh"
    >
      {items.map((item) => (
        <ElementScrollStyled key={`${item}-${uuid()}`}>
          {item}
        </ElementScrollStyled>
      ))}
    </InfiniteScrollContainerStyled>
  );
}

export default Scroll;