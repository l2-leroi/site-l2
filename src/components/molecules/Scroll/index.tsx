import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ElementScrollStyled, InfiniteScrollContainerStyled } from './styled';
import i18next from 'i18next';

/*
const element = document.getElementById('home')
element.innerText = "< Home >"
element.style.color = "#20BD9D"
*/

export default function Scroll() {
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

//   function createMarkup() {
//     for (let i = 0; i < baseItems.length; i++) {
//       const element = baseItems[i];
//       const url = baseUrl[i];

//       if (baseUrl[i] == './') {
//         console.log(baseItems[i]);
//         console.log('funcionando');
//       }
//     }
//   }
//  console.log(createMarkup());

  let baseItems = t('menu.ourEmail') == "our e-mail" ? baseItemsEN : baseItemsPT;
  console.log(baseItems);

  useEffect(() => {
    const urlLanguage = window.location.pathname;

    if(urlLanguage == '/en') {
      baseItems = baseItemsEN;
    }
    else { 
      baseItems = baseItemsPT;
    }
  })

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
