import React from 'react';
import Image from 'next/image';

import {
  SectionOnePageStyled,
  ContentOnePageStyled,
  DivServicesStyled,
  HeadingStyled,
  ParagraphServicesStyled,
  DivServiceItemsStyled,
  DivItemStyled,
  HeadingItemStyled,
  ParagraphItemStyled,
} from './styles';

//import rectl2 from '../../../assets/images/RectangleL2.svg';

export default function OurServicesOnePage() {
  return (
    <SectionOnePageStyled>
      <ContentOnePageStyled>
        <DivServicesStyled>
          <HeadingStyled>NOSSOS SERVIÇOS</HeadingStyled>
          <ParagraphServicesStyled>
            Melhoramos a experiência dos produtos e serviços de nossos clientes,
            com foco em resultados para seus negócio.
          </ParagraphServicesStyled>
        </DivServicesStyled>

        <DivServiceItemsStyled>
          <DivItemStyled>
            <HeadingItemStyled>Outsourcing Consultivo</HeadingItemStyled>
            <ParagraphItemStyled>
              Aumente sua capacidade produtiva ● Com acesso a nossa equipe, você
              agraga ao seu time profissionais apaixonados com competências
              diversas.
            </ParagraphItemStyled>
          </DivItemStyled>

          <DivItemStyled>
            <HeadingItemStyled>Atendimento à Startup</HeadingItemStyled>
            <ParagraphItemStyled>
              Nossa equipe de UX/UI e desenvolvimento irá projetar e construir
              seu MVP a partir do zero, “garantindo” uma entrega rápida e
              rentável.
            </ParagraphItemStyled>
          </DivItemStyled>

          <DivItemStyled>
            <HeadingItemStyled>Ideação</HeadingItemStyled>
            <ParagraphItemStyled>
              Co-criação com nosso time multidisciplinar na concepção do seu
              produto e estratégias de negócio.
            </ParagraphItemStyled>
          </DivItemStyled>

          <DivItemStyled>
            <HeadingItemStyled>UX / UI Design</HeadingItemStyled>
            <ParagraphItemStyled>
              Projetamos um produto encantador e funcional para os usuários,
              aliado aos objetivos do seu negócio.
            </ParagraphItemStyled>
          </DivItemStyled>

          <DivItemStyled>
            <HeadingItemStyled>Consultoria em TI</HeadingItemStyled>
            <ParagraphItemStyled>
              Nosso Tech Lead Maicon Martins irá aconselhar você sobre as
              melhores práticas que sua empresa pode usar na infraestrutura.
            </ParagraphItemStyled>
          </DivItemStyled>

          <DivItemStyled>
            {/* <Image src={rectl2} alt="L2 Code" layout='responsive'/> */}
          </DivItemStyled>
        </DivServiceItemsStyled>
      </ContentOnePageStyled>
    </SectionOnePageStyled>
  );
}
