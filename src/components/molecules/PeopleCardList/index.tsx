import React from 'react';
import Marquee from 'react-fast-marquee';
import i18next from 'i18next';
import { CardListContainer, InfoPeopleDiv, Separator, CardList } from './styled';
import { Typography } from '../../../styles/typography';
import PeopleCard from '../../atoms/PeopleCard';

export default function PeopleCardList({title, people, index, arrayLength}) {
  const { t } = i18next;
  return (
    <CardList>
      <InfoPeopleDiv>
        <Typography
          tag="h2"
          color="gray"
          size="small"
          fontWeight="weight2"
          fontFamily="font2"
          lineHeight="line120"
        >
          {t(`people.professions.${title}.title`)}
        </Typography>
        <Typography
          tag="p"
          color="gray"
          size="xsmall"
          fontWeight="weight1"
          fontFamily="font2"
          lineHeight="line140"
        >
          {t(`people.professions.${title}.subtitle`)}
        </Typography>
      </InfoPeopleDiv>
      <CardListContainer>
        {people.map((item, key) => {
          return (
            <PeopleCard images={item.images} name={item.name} city={item.city} key={key} />
          );
        })}
      </CardListContainer>
      <Separator style={{display: index == (arrayLength -1)? 'none' : 'block'}}/>
    </CardList>
  );
}
