import React from 'react';
import { PeopleMosaicSection } from './styled';
import PeopleCardList from '../../molecules/PeopleCardList';

export default function PeopleMosaic() {
  const array = [
    {
      title: 'developers',
      people: [
        {
          images: ['1.jpeg', '2.jpg'],
          folder: 'AnaJulia',
          name: 'Ana Julia',
          city: 'Guarantã do Norte',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg'],
          folder: 'AryaneSilva',
          name: 'Aryane',
          city: 'Juiz de Fora',
        },
        {
          images: ['1.png', '2.jpeg'],
          folder: 'BrendaNogueira',
          name: 'Brenda',
          city: 'Fortaleza',
        },
        {
          images: ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'],
          folder: 'BrunaPicoli',
          name: 'Bruna',
          city: 'Espírito Santo do Pinhal',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg'],
          folder: 'BrunoNaibert',
          name: 'Bruno',
          city: 'Porto Alegre',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
          folder: 'ClausRodrigues',
          name: 'Claus',
          city: 'Pelotas',
        },
        {
          images: ['1.jpg', '2.jpg'],
          folder: 'DiovaneLuis',
          name: 'Diovane',
          city: 'Rio Grande',
        },
        {
          images: ['1.jpg'],
          folder: 'EduardoSchmidt',
          name: 'Eduardo S.',
          city: 'Camaquã',
        },
        {
          images: ['1.jpg', '2.jpg'],
          folder: 'FelipePizzio',
          name: 'Felipe',
          city: 'Porto Alegre',
        },
        {
          images: ['1.jpeg', '2.jpeg', '3.jpeg'],
          folder: 'GabrieleLucas',
          name: 'Gabriele',
          city: 'Pelotas',
        },
        {
          images: ['1.jpeg', '2.JPG'],
          folder: 'GeovanniPacheco',
          name: 'Geovanni',
          city: 'São Paulo',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg'],
          folder: 'GuilhermeRamison',
          name: 'Guilherme',
          city: 'Pelotas',
        },
        {
          images: ['1.jpg', '2.jpg'],
          folder: 'GustavoLopes',
          name: 'Gustavo',
          city: 'Gravataí',
        },
        {
          images: ['1.jpg', '2.jpg'],
          folder: 'HeloiseKatharine',
          name: 'Heloise',
          city: 'Planaltina',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
          folder: 'IaraRodrigues',
          name: 'Iara',
          city: 'São João Del Rei',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
          folder: 'JoaoCarlotto',
          name: 'João',
          city: 'Feliz',
        },
        {
          images: ['1.jpg', '2.jpeg'],
          folder: 'JorgeHenrique',
          name: 'Jorge',
          city: 'Porto Alegre',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg'],
          folder: 'JulianaFlores',
          name: 'Juliana',
          city: 'Rio Grande',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg'],
          folder: 'LanaAzevedo',
          name: 'Lana',
          city: 'Porto Alegre',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
          folder: 'LeonardoBraga',
          name: 'Leonardo',
          city: 'Camaquã',
        },
        {
          images: ['1.jpg', '2.jpg'],
          folder: 'LeticiaCarvalho',
          name: 'Letícia',
          city: 'Porto Alegre',
        },
        {
          images: ['1.jpg', '2.jpg'],
          folder: 'LucasCurtinaz',
          name: 'Lucas C.',
          city: 'Barra do Ribeiro',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg'],
          folder: 'LucasOliveira',
          name: 'Lucas O.',
          city: 'Rio Grande',
        },
        {
          images: ['1.jpg', '2.jpg'],
          folder: 'LuizFelipe',
          name: 'Luiz',
          city: 'São Leopoldo',
        },
        {
          images: ['1.jpg', '2.jpeg', '3.jpg', '4.jpg'],
          folder: 'RenaFerreira',
          name: 'Renã',
          city: 'Pelotas',
        },
        {
          images: ['1.jpg', '2.jpg'],
          folder: 'RichardAquino',
          name: 'Richard',
          city: 'Pelotas',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
          folder: 'RicherMagalhaes',
          name: 'Richer',
          city: 'Pelotas',
        },
        {
          images: ['1.png', '2.png', '3.png', '4.png'],
          folder: 'RodrigoFlores',
          name: 'Rodrigo',
          city: 'Porto Alegre',
        },
        {
          images: ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'],
          folder: 'ThiagoFelix',
          name: 'Thiago',
          city: 'Porto Alegre',
        },
        {
          images: ['1.jpg', '2.jpg'],
          folder: 'ValdenioMelo',
          name: 'Valdenio',
          city: 'Santo André',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg'],
          folder: 'VictorGrovermann',
          name: 'Victor',
          city: 'Pelotas',
        },
        {
          images: ['1.JPEG', '2.jpg'],
          folder: 'ViniciusPadilha',
          name: 'Vinícius',
          city: 'Sapiranga',
        },
        {
          images: ['1.jpg', '2.jpg'],
          folder: 'WesleyColombo',
          name: 'Wesley',
          city: 'Tramandaí',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg'],
          folder: 'WilliamKolodziejski',
          name: 'William',
          city: 'Pelotas',
        },
      ],
    },
    {
      title: 'uxui',
      people: [
        {
          images: ['1.jpg', '2.jpg', '3.jpg'],
          folder: 'DanielaWolf',
          name: 'Daniela',
          city: 'Porto Alegre',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
          folder: 'LeticiaCarvalho',
          name: 'Letícia',
          city: 'Canoas',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg'],
          folder: 'RodrigoNery',
          name: 'Nery',
          city: 'Porto Alegre',
        },
        {
          images: ['1.png', '2.jpg', '3.jpg'],
          folder: 'VanessaMuller',
          name: 'Vanessa',
          city: 'Sapucaia do Sul',
        },
      ],
    },
    {
      title: 'humanResources',
      people: [
        {
          images: ['1.jpeg', '2.jpeg'],
          folder: 'DeboraSoares',
          name: 'Débora',
          city: 'Valparaíso de Goiás',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg', '4.jpeg', '5.jpeg'],
          folder: 'JessicaScotta',
          name: 'Jéssica',
          city: 'Rio Grande',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
          folder: 'MaiconMartins',
          name: 'Maicon',
          city: 'Porto Alegre',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
          folder: 'MariangelaAvila',
          name: 'Mariangela',
          city: 'Rio Grande',
        },
        {
          images: ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'],
          folder: 'PriscilaDuarte',
          name: 'Priscila',
          city: 'Porto Alegre',
        },
        {
          images: ['1.jpeg', '2.jpeg'],
          folder: 'TamirysFrança',
          name: 'Tamirys',
          city: 'Olinda',
        },
      ],
    },
    {
      title: 'managers',
      people: [
        {
          images: ['1.jpg', '2.jpeg'],
          folder: 'AlexandreScotta',
          name: 'Alexandre',
          city: 'Rio Grande',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg'],
          folder: 'LeroiOliveira',
          name: 'Leroi',
          city: 'Pelotas',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg'],
          folder: 'LucasOliveira',
          name: 'Lucas O.',
          city: 'Rio Grande',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
          folder: 'MaiconMartins',
          name: 'Maicon',
          city: 'Porto Alegre',
        },
        {
          images: ['1.jpg', '2.jpg', '3.jpg'],
          folder: 'RodrigoNery',
          name: 'Nery',
          city: 'Porto Alegre',
        },
      ],
    },
    /*
    {
      title: 'projectManagement',
      people: [
        {
          images: ['BrunoPhoto.png', 'ClausPhoto.png', 'FelipePhoto.png'],
          name: 'Bruno',
          city: 'São Paulo',
        },
        {
          images: ['BrunoPhoto.png', 'ClausPhoto.png', 'FelipePhoto.png'],
          name: 'Felipe',
          city: 'Rio Grande do Sul',
        },
      ],
    }, */
  ];
  return (
    <PeopleMosaicSection>
      {array.map((item, key) => {
        return (
          <PeopleCardList
            title={item.title}
            people={item.people}
            key={key}
            index={key}
            arrayLength={array.length}
          />
        );
      })}
    </PeopleMosaicSection>
  );
}
