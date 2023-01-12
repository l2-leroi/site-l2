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
      name: 'Luna',
      city: 'Madame arteira',
    },
    {
      images: ['Sofia.png'],
      folder: 'pets',
      name: 'Sofia',
      city: 'Sorriso resplandecente',
    },
    {
      images: ['Laica.png'],
      folder: 'pets',
      name: 'Laica',
      city: 'Muito nenê',
    },
    {
      images: ['Tom_Bud.png'],
      folder: 'pets',
      name: 'Bruna',
      city: 'Estão sempre a mimir',
    },
    {
      images: ['Batman.png'],
      folder: 'pets',
      name: 'Batman',
      city: 'Vigilante da madrugada',
    },
    {
      images: ['Cheddar.png'],
      folder: 'pets',
      name: 'Cheddar',
      city: 'Ligado no 220V',
    },
    {
      images: ['Oliver.png'],
      folder: 'pets',
      name: 'Oliver',
      city: 'O preguiçoso',
    },
    {
      images: ['Jaspion.png'],
      folder: 'pets',
      name: 'Jaspion',
      city: 'O caçador',
    },
    {
      images: ['Pretinha_Gil.png'],
      folder: 'pets',
      name: 'Pretinha Gil',
      city: 'Ama um pregador',
    },
    {
      images: ['Emy_Duncan.png'],
      folder: 'pets',
      name: 'Emy Duncan',
      city: 'É a cachorrinha chupando manga',
    },
    {
      images: ['Azir_Akali_Kayo_Evelynn.png'],
      folder: 'pets',
      name: 'Azir, Akali, KAY/O e Evelynn',
      city: 'Sorriem e acenem, rapazes',
    },
    {
      images: ['Cacau.png'],
      folder: 'pets',
      name: 'Cacau',
      city: 'A fofinha',
    },
    {
      images: ['Pretinho.png'],
      folder: 'pets',
      name: 'Pretinho',
      city: 'Ama uma bagunça',
    },
    {
      images: ['Tofu.png'],
      folder: 'pets',
      name: 'Tofu',
      city: 'O mimadinho',
    },
    {
      images: ['Feijao.png'],
      folder: 'pets',
      name: 'Feijão',
      city: 'Adora roer um fio',
    },
    {
      images: ['Gata.png'],
      folder: 'pets',
      name: 'Gata',
      city: 'Adora dormir em cima do computador e desligar ele 😅',
    },
    {
      images: ['Petit.png'],
      folder: 'pets',
      name: 'Petit',
      city: 'Caça rato',
    },
    {
      images: ['Rebeca.png'],
      folder: 'pets',
      name: 'Rebeca',
      city: 'Ciumenta que dói',
    },
    {
      images: ['Boby.png'],
      folder: 'pets',
      name: 'Boby',
      city: 'Completamente maluco',
    },
    {
      images: ['Nick.png'],
      folder: 'pets',
      name: 'Nick',
      city: 'O dorminhoco',
    },
    {
      images: ['Charlotte.png'],
      folder: 'pets',
      name: 'Charlotte',
      city: 'Uma lady',
    },
    {
      images: ['Apolo.png'],
      folder: 'pets',
      name: 'Apolo',
      city: 'Sempre gerando encrenca',
    },
    {
      images: ['Alice.png'],
      folder: 'pets',
      name: 'Alice',
      city: 'Adora ficar na volta de quem está trabalhando',
    },
    {
      images: ['Peri.png'],
      folder: 'pets',
      name: 'Peri',
      city: 'O escandaloso',
    },
  ];
  React.useEffect(() => {
    const petsSort = petsArray.sort((x, y) => {
      const a = x.name.toUpperCase();
      const b = y.name.toUpperCase();
      return a == b ? 0 : a > b ? 1 : -1;
    });
    setPets(petsSort);
  }, []);
  return (
    <PeopleMosaicSection>
      <PeopleCardList
        title="pets"
        people={pets}
        index={pets.length - 1}
        arrayLength={pets.length}
        bgColor={colors.gray}
        fontColor={colors.black}
      />
    </PeopleMosaicSection>
  );
}
