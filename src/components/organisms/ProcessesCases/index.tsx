import React from 'react';
import { SectionOnePageStyled, DivItemStyled, ImageStyled } from './styled';
import { Typography } from '../../../styles/typography';
export default function ProcessesCases() {
  return (
    <SectionOnePageStyled>
      <ImageStyled src="../images/process-memories-up.jpg" alt="L2 Code" />

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
          Processos realizados
        </Typography>

        <Typography tag="p" color="gray" fontFamily="font2">
          Trilhamos uma rica jornada de design, iniciando na concepção de
          negócios e produto até o protótipo de alta fidelidade no celular.
        </Typography>

        <ul>
          <Typography tag="li" color="gray" fontFamily="font2">
            + Ideação
          </Typography>
          <Typography tag="li" color="gray" fontFamily="font2">
            + Wireframe
            </Typography>
            <Typography tag="li" color="gray" fontFamily="font2">
            + Concept art
            </Typography>
            <Typography tag="li" color="gray" fontFamily="font2">
            + Design
            </Typography>
            <Typography tag="li" color="gray" fontFamily="font2">
            + Protótipo navegável
            </Typography>
        </ul>
      </DivItemStyled>
    </SectionOnePageStyled>
  );
}
