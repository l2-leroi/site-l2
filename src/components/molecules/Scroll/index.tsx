import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ElementScrollStyled, InfiniteScrollContainerStyled } from './styled';
import i18next from 'i18next';

export interface ScrollProps {
  language: string;
}

const Scroll = (language: ScrollProps) => {
  const { t } = i18next

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

  let baseItems = t('menu.ourEmail') == "our e-mail" ? baseItemsEN : baseItemsPT;

  useEffect(() => {
    console.log('entrei');
    const urlLanguage = window.location.pathname;

    if(urlLanguage == '/en') {
      setItems([...baseItemsEN, ...baseItemsEN])
      baseItems = baseItemsEN;
    }
    else { 
      setItems([...baseItemsPT, ...baseItemsPT])
      baseItems = baseItemsPT;
    }
  });

  const [items, setItems] = useState([...baseItems, ...baseItems]);
  
  const fetchData = () => {
    setItems([...items, ...baseItems]);
  };

  // useEffect(() => {
  //   if(language.language == 'en') {
  //     setItems([...baseItemsEN, ...baseItemsEN])
  //   } else {
  //     setItems([...baseItemsPT, ...baseItemsPT])
  //   }
  // }, [language])

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