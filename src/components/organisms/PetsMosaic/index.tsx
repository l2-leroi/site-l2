import React from 'react';
import { PeopleMosaicSection } from './styled';
import PeopleCardList from '../../molecules/PeopleCardList';
import { colors } from '../../../styles/colors';

export default function PetsMosaic() {
  const [pets, setPets] = React.useState([]);
  const petsArray = [
    {
      images: ['Luna.png'],
      folder: 'pets',
      firstName: 'Luna',
      city: 'Madame arteira',
    },
    {
      images: ['Sofia.png'],
      folder: 'pets',
      firstName: 'Sofia',
      city: 'Sorriso resplandecente',
    },
    {
      images: ['Laica.png'],
      folder: 'pets',
      firstName: 'Laica',
      city: 'Muito nenê',
    },
    {
      images: ['Tom_Bud.png'],
      folder: 'pets',
      firstName: 'Bruna',
      city: 'Estão sempre a mimir',
    },
    {
      images: ['Batman.png'],
      folder: 'pets',
      firstName: 'Batman',
      city: 'Vigilante da madrugada',
    },
    {
      images: ['Cheddar.png'],
      folder: 'pets',
      firstName: 'Cheddar',
      city: 'Ligado no 220V',
    },
    {
      images: ['Oliver.png'],
      folder: 'pets',
      firstName: 'Oliver',
      city: 'O preguiçoso',
    },
    {
      images: ['Jaspion.png'],
      folder: 'pets',
      firstName: 'Jaspion',
      city: 'O caçador',
    },
    {
      images: ['Azir_Akali_Kayo_Evelynn.png'],
      folder: 'pets',
      firstName: 'Azir, Akali, KAY/O e Evelynn',
      city: 'Sorriem e acenem, rapazes',
    },
    {
      images: ['Cacau.png'],
      folder: 'pets',
      firstName: 'Cacau',
      city: 'A fofinha',
    },
    {
      images: ['Pretinho.png'],
      folder: 'pets',
      firstName: 'Pretinho',
      city: 'Ama uma bagunça',
    },
    {
      images: ['Tofu.png'],
      folder: 'pets',
      firstName: 'Tofu',
      city: 'O mimadinho',
    },
    {
      images: ['Feijao.png'],
      folder: 'pets',
      firstName: 'Feijão',
      city: 'Adora roer um fio',
    },
    {
      images: ['Gata.png'],
      folder: 'pets',
      firstName: 'Gata',
      city: 'Adora dormir em cima do computador e desligar ele 😅',
    },
    {
      images: ['Petit.png'],
      folder: 'pets',
      firstName: 'Petit',
      city: 'Caça rato',
    },
    {
      images: ['Rebeca.png'],
      folder: 'pets',
      firstName: 'Rebeca',
      city: 'Ciumenta que dói',
    },
    {
      images: ['Boby.png'],
      folder: 'pets',
      firstName: 'Boby',
      city: 'Completamente maluco',
    },
    {
      images: ['Charlotte.png'],
      folder: 'pets',
      firstName: 'Charlotte',
      city: 'Uma lady',
    },
    {
      images: ['Apolo.png'],
      folder: 'pets',
      firstName: 'Apolo',
      city: 'Sempre gerando encrenca',
    },
    {
      images: ['Alice.png'],
      folder: 'pets',
      firstName: 'Alice',
      city: 'Adora ficar na volta de quem está trabalhando',
    },
    {
      images: ['Peri.png'],
      folder: 'pets',
      firstName: 'Peri',
      city: 'O escandaloso',
    },
  ];
  React.useEffect(() => {
    const petsSort = petsArray.sort((x, y) => {
      const a = x.firstName.toUpperCase();
      const b = y.firstName.toUpperCase();
      return a == b ? 0 : a > b ? 1 : -1;
    });
    setPets(petsSort);
  }, []);
  return (
    <PeopleMosaicSection>
      <PeopleCardList
        position="pets"
        people={pets}
        index={pets.length - 1}
        arrayLength={pets.length}
        bgColor={colors.gray}
        fontColor={colors.black}
      />
    </PeopleMosaicSection>
  );
}
