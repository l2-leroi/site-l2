import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import Link from 'next/link';
import { InfiniteScrollContainerStyled } from './styled';
import { Typography } from '../../../styles/typography';

export interface ScrollProps {
  closeMenu: (value: boolean) => void;
}

function Scroll({ closeMenu }: ScrollProps) {
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
    '',
    '/about',
    '/cases',
    '/services',
    '/people',
    '/career',
    '/contact',
  ];

  const language = i18next.language.substring(0, 2);
  let baseItems = language === 'en' ? baseItemsEN : baseItemsPT;
  const [items, setItems] = useState([...baseItems, ...baseItems]);
  const router = useRouter();
  const initialPage = router.asPath.substring(3);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const fetchData = () => {
    setItems([...items, ...baseItems]);
  };

  useEffect(() => {
    if (language === 'en') {
      setItems([...baseItemsEN, ...baseItemsEN]);
      baseItems = baseItemsEN;
    } else {
      setItems([...baseItemsPT, ...baseItemsPT]);
      baseItems = baseItemsPT;
    }
  }, [language]);

  useEffect(() => {
    setCurrentPage(router.asPath.substring(3));
  }, [router.asPath]);

  return (
    <InfiniteScrollContainerStyled
      dataLength={items.length}
      next={fetchData}
      hasMore
      loader={null}
      height="100vh"
    >
      {items.map((item) => (
        <Typography
          tag="div"
          fontWeight="weight3"
          lineHeight="line100"
          letterSpacing="space3"
          fontFamily="font1"
          color={
            currentPage === `${baseUrl[items.indexOf(item)]}` ? 'green' : 'gray'
          }
          onClick={() => closeMenu(true)}
        >
          <Link
            key={`${item}-${uuid()}`}
            href={`/${language + baseUrl[items.indexOf(item)]}`}
          >
            {currentPage === `${baseUrl[items.indexOf(item)]}`
              ? `< ${item} >`
              : `${item}`}
          </Link>
        </Typography>
      ))}
    </InfiniteScrollContainerStyled>
  );
}

export default Scroll;
