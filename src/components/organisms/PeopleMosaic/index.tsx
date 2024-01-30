import React, { useState } from 'react';
import { PeopleMosaicSection } from './styled';
import PeopleCardList from '../../molecules/PeopleCardList';
import { colors } from '../../../styles/colors';
import { data } from './data';

export default function PeopleMosaic() {
  const [array, setArray] = useState([]);
  React.useEffect(() => {
    const peopleArray = data.map((item) => {
      const itemCopy = item;
      itemCopy.people = itemCopy.people.sort((x, y) => {
        const a = x.firstName.toUpperCase();
        const b = y.firstName.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
      });
      return itemCopy;
    });
    setArray(peopleArray);
  }, []);
  return (
    <PeopleMosaicSection>
      {array.map((item, key) => {
        return (
          <PeopleCardList
            position={item.position}
            people={item.people}
            key={key}
            index={key}
            arrayLength={array.length}
            bgColor={colors.black}
            fontColor={colors.gray}
          />
        );
      })}
    </PeopleMosaicSection>
  );
}
