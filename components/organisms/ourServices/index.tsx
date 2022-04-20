import React from 'react';
import {
  SectionStyled,
  DivOurServicesStyled,
  DivButtonServicesStyled,
  HeadingStyled,
  ParagraphServicesStyled,
  ButtonServicesStyled,
  ImageStyled,
} from './styles';
import seta from '../../../assets/images/seta.svg';
import OutSourcing from '../../atoms/letreiro';

export default function OurServices() {
  return (
    <SectionStyled>
      <DivOurServicesStyled>
        <HeadingStyled>NOSSOS SERVIÇOS</HeadingStyled>
        <ParagraphServicesStyled>
          Melhoramos a experiência dos produtos e serviços de nossos clientes,
          com foco em resultados para seus negócio.
        </ParagraphServicesStyled>

        <DivButtonServicesStyled>
          <ButtonServicesStyled>NOSSOS SERVIÇOS</ButtonServicesStyled>
          <ImageStyled src={seta} alt="seta" />
        </DivButtonServicesStyled>
      </DivOurServicesStyled>
      <OutSourcing />
    </SectionStyled>
  );
}
