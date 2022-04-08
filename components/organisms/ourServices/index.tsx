import React from 'react';
import Image from 'next/image';
import {
  SectionStyled,
  DivOurServicesStyled,
  DivButtonServicesStyled,
  HeadingStyled,
  ParagraphServicesStyled,
  ButtonServicesStyled,
} from './styles';
import seta from '../../../assets/images/seta.svg';
import OutSourcing from '../../atomo/letreiro';

export default function OurServices() {
  return (
    <SectionStyled>
      <DivOurServicesStyled>
        <HeadingStyled>NOSSOS SERVIÇOS</HeadingStyled>
        <ParagraphServicesStyled>
          Melhoramos a experiência dos produtos e
          serviços de nossos clientes, com foco em resultados para seus negócio.
        </ParagraphServicesStyled>

        <DivButtonServicesStyled>
          <ButtonServicesStyled>NOSSOS SERVIÇOS</ButtonServicesStyled>
          <Image src={seta} alt="seta" />
        </DivButtonServicesStyled>
        <OutSourcing />
      </DivOurServicesStyled>
    </SectionStyled>
  );
}
