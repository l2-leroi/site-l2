import i18next from 'i18next';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
  ContainerStyled,
  PreferenceLineStyled,
  PreferencesContainerStyled,
} from './styled';

import { Typography } from '../../../styles/typography';

export default function ProfilePreferences({ preferences }) {
  const [preferenceList, setPreferenceList] = useState([]);
  const { t } = i18next;

  useEffect(() => {
    const pref = [
      {
        name: 'characters',
        list: preferences.personagens,
      },
      {
        name: 'movies',
        list: preferences.filmes,
      },
      {
        name: 'games',
        list: preferences.jogos,
      },
    ];

    setPreferenceList(pref);
  }, []);

  return (
    <ContainerStyled>
      <PreferencesContainerStyled>
        {preferenceList.length > 0 &&
          preferenceList.map((item, key) => {
            console.log(item, key);
            return (
              <PreferenceLineStyled key={`pref${key}`}>
                <Typography
                  tag="h3"
                  size="small"
                  className="typography"
                  fontFamily="font2"
                  letterSpacing="space1"
                  fontWeight="weight2"
                  lineHeight="line120"
                >
                  {t(`Profile.${item.name}`)}
                </Typography>
                {item.list.map((pref, key) => {
                  return (
                    <Typography
                      tag="li"
                      size="xsmall"
                      className="typography"
                      fontFamily="font2"
                      letterSpacing="space2"
                      fontWeight="weight1"
                      lineHeight="line140"
                    >
                      {pref.name}
                    </Typography>
                  );
                })}
              </PreferenceLineStyled>
            );
          })}
      </PreferencesContainerStyled>
    </ContainerStyled>
  );
}
