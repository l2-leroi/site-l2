import React from 'react';
import {
  SectionOnePageStyled,
  DivItemStyled,
  DivImageStyled,
  SpinningIconStyled,
  SpinnerImage,
} from './styled';
import { Typography } from '../../../styles/typography';
import i18next from 'i18next';

interface CardTextProps {
  backgroundColor: string;
  backgroundImage: string;
  h1: string;
  p: string;
  li: string[];
}

export default function CardText({
  backgroundColor,
  backgroundImage,
  h1,
  p,
  li,
}: CardTextProps) {
  const { t } = i18next;
  return (
    <SectionOnePageStyled bgColor={backgroundColor}>
      <DivImageStyled  bgImage={backgroundImage} />

      <DivItemStyled>
        <Typography
          tag="h1"
          size="small"
          fontWeight="weight3"
          lineHeight="line120"
          color="gray"
          fontFamily="font1"
          letterSpacing="space1"
        >
          {t(h1)}
        </Typography>

        <Typography tag="p" color="gray" fontFamily="font2">
          {t(p)}
        </Typography>

        <ul>
          { li.map((item) => <li>
            <Typography tag="li" color="gray" fontFamily="font2">
              {t(item)}
            </Typography>
          </li>
          )}
        </ul>
      </DivItemStyled>
      <SpinningIconStyled >
        <SpinnerImage src="/images/enfeite-giratorio.svg" />
      </SpinningIconStyled>
    </SectionOnePageStyled>
  );
}
