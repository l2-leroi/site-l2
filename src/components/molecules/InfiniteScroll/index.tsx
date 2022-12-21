import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import Link from 'next/link';
import { InfiniteScrollContainerStyled } from './styled';
import { Typography } from '../../../styles/typography';

export interface ScrollProps {
  closeMenu: () => void;
}

function InfiniteScroll({ closeMenu }: ScrollProps) {
  const menuRedirect = [
    {
      translate: 'home',
      url: '/',
    },
    {
      translate: 'about',
      url: '/sobre',
    },
    {
      translate: 'cases',
      url: '/nossos-cases',
    },
    {
      translate: 'services',
      url: '/servicos',
    },
    {
      translate: 'career',
      url: '/nossas-carreiras',
    },
    {
      translate: 'people',
      url: '/pessoas',
    },
  ];

  const language = i18next.language.substring(0, 2);
  const [items, setItems] = useState([...menuRedirect, ...menuRedirect]);
  const router = useRouter();
  const initialPage = router.asPath.substring(3);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const { t } = i18next;

  const fetchData = () => {
    setItems([...items, ...menuRedirect]);
  };

  useEffect(() => {
    if (router.asPath.substring(3) === '') {
      setCurrentPage('/');
    } else {
      setCurrentPage(router.asPath.substring(3));
    }
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
          color={currentPage === `${item.url}` ? 'green' : 'gray'}
          onClick={() => closeMenu()}
          key={`${item[language]}`}
        >
          <Link key={`${item}-${uuid()}`} href={`/${language + item.url}`}>
            {currentPage === `${item.url}`
              ? `<${t(`openMenu.${item.translate}`)}>`
              : t(`openMenu.${item.translate}`)}
          </Link>
        </Typography>
      ))}
    </InfiniteScrollContainerStyled>
  );
}

export default InfiniteScroll;
