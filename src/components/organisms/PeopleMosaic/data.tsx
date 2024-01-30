interface IPeople {
  images: string[];
  folder: string;
  firstName: string;
  location: string;
}

interface IPosition {
  position: string;
  people: IPeople[];
}

const developers: IPosition = {
  position: 'developers',
  people: [
    {
      images: ['1.webp'],
      folder: 'AnaJulia',
      firstName: 'Ana Julia',
      location: 'Mato Grosso / BR',
    },
    {
      images: ['1.webp'],
      folder: 'AryaneSilva',
      firstName: 'Aryane',
      location: 'Minas Gerais / BR',
    },
    {
      images: ['1.webp'],
      folder: 'BrendaNogueira',
      firstName: 'Brenda',
      location: 'Ceará / BR',
    },
    {
      images: ['1.webp'],
      folder: 'BrunaPicoli',
      firstName: 'Bruna',
      location: 'São Paulo / BR',
    },
    {
      images: ['1.webp'],
      folder: 'BrunoFerreira',
      firstName: 'Bruno F.',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'BrunoNaibert',
      firstName: 'Bruno N.',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'ClausTessmann',
      firstName: 'Claus',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'DiovaneLuis',
      firstName: 'Diovane Luis',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'EduardoSchmidt',
      firstName: 'Eduardo',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'GeovanniPacheco',
      firstName: 'Geovanni',
      location: 'São Paulo / BR',
    },
    {
      images: ['1.webp'],
      folder: 'GuilhermeRamison',
      firstName: 'Guilherme',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'GustavoLopes',
      firstName: 'Gustavo',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'HeloiseKatharine',
      firstName: 'Heloise',
      location: 'Goiás / BR',
    },
    {
      images: ['1.webp'],
      folder: 'JoaoCarlotto',
      firstName: 'João Victor',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'JorgeHenrique',
      firstName: 'Jorge',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'JulianaFlores',
      firstName: 'Juliana',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'KayaraPereira',
      firstName: 'Kayara',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'LeticiaSampaio',
      firstName: 'Letícia S.',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'LucasCurtinaz',
      firstName: 'Lucas C.',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'LuizFelipe',
      firstName: 'Luiz Felipe',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'RafaelFreitas',
      firstName: 'Rafael F.',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'RafaelPurcino',
      firstName: 'Rafael P.',
      location: 'São Paulo / BR',
    },
    {
      images: ['1.webp'],
      folder: 'RenaFerreira',
      firstName: 'Renã',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'RichardAquino',
      firstName: 'Richard',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'RicherMagalhaes',
      firstName: 'Richer',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'RodrigoFlores',
      firstName: 'Rodrigo',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'RogerioOtto',
      firstName: 'Rogério',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'RonicaRodrigues',
      firstName: 'Rônica',
      location: 'Paraná / BR',
    },
    {
      images: ['1.webp'],
      folder: 'ThallesRibeiro',
      firstName: 'Thalles',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'ThiagoSilvera',
      firstName: 'Thiago',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'ValdenioMelo',
      firstName: 'Valdênio',
      location: 'São Paulo / BR',
    },
    {
      images: ['1.webp'],
      folder: 'VictorGrovermann',
      firstName: 'Victor',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'ViniciusMalec',
      firstName: 'Vinícius M.',
      location: 'Minas Gerais / BR',
    },
    {
      images: ['1.webp'],
      folder: 'ViniciusPadilha',
      firstName: 'Vinícius P.',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'WesleyColombo',
      firstName: 'Wesley',
      location: 'Rio Grande do Sul / BR',
    },
  ],
};

const qa: IPosition = {
  position: 'qa',
  people: [
    {
      images: ['1.webp'],
      folder: 'GabrieleLucas',
      firstName: 'Gabriele',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'MoniqueBatista',
      firstName: 'Monique',
      location: 'Bahia / BR',
    },
  ],
};

const uxui: IPosition = {
  position: 'uxui',
  people: [
    {
      images: ['1.webp'],
      folder: 'HelbioPereira',
      firstName: 'Hélbio',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'LeticiaCarvalho',
      firstName: 'Letícia C.',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'MateusCoelho',
      firstName: 'Mateus',
      location: 'Santa Catarina / BR',
    },
    {
      images: ['1.webp'],
      folder: 'RafaelaCosta',
      firstName: 'Rafaela',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'RodrigoNery',
      firstName: 'Nery',
      location: 'Nômade / América do Sul',
    },
    {
      images: ['1.webp'],
      folder: 'VanessaMuller',
      firstName: 'Vanessa',
      location: 'Rio Grande do Sul / BR',
    },
  ],
};

const newBusinesses: IPosition = {
  position: 'newBusinesses',
  people: [
    {
      images: ['1.webp'],
      folder: 'MichelleBogaz',
      firstName: 'Michelle',
      location: 'São Paulo / BR',
    },
  ],
};

const humanResources: IPosition = {
  position: 'humanResources',
  people: [
    {
      images: ['1.webp'],
      folder: 'ManuelaBrauner',
      firstName: 'Manuela',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'MariangelaAvila',
      firstName: 'Mariangela',
      location: 'Rio Grande do Sul / BR',
    },
    {
      images: ['1.webp'],
      folder: 'PriscilaDuarte',
      firstName: 'Priscila',
      location: 'Rio Grande do Sul / BR',
    },
  ],
};

const peopleAndCulture: IPosition = {
  position: 'peopleAndCulture',
  people: [
    {
      images: ['1.webp'],
      folder: 'AlexandreScotta',
      firstName: 'Alexandre',
      location: 'São Paulo / BR',
    },
    {
      images: ['1.webp'],
      folder: 'DeboraSoares',
      firstName: 'Débora',
      location: 'Goiás / BR',
    },
  ],
};

const dataOffice: IPosition = {
  position: 'dataOffice',
  people: [
    {
      images: ['1.webp'],
      folder: 'LucasOliveira',
      firstName: 'Lucas O.',
      location: 'Rio Grande do Sul / BR',
    },
  ],
};

const coo: IPosition = {
  position: 'coo',
  people: [
    {
      images: ['1.webp'],
      folder: 'MaiconMartins',
      firstName: 'Maicon',
      location: 'Rio Grande do Sul / BR',
    },
  ],
};

const ceo: IPosition = {
  position: 'ceo',
  people: [
    {
      images: ['1.webp'],
      folder: 'LeroiOliveira',
      firstName: 'Leroi',
      location: 'Rio Grande do Sul / BR',
    },
  ],
};

export const data: IPosition[] = [
  developers,
  uxui,
  qa,
  newBusinesses,
  humanResources,
  peopleAndCulture,
  dataOffice,
  coo,
  ceo,
];
