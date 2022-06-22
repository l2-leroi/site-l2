import React from 'react';
import Marquee from 'react-fast-marquee';
import i18next from 'i18next';
import { Typography } from '../../../styles/typography';
import {
    SectionStyled,
    HeaderStyled,
    TitleStyled,
    ParagraphStyled,
    AsideStyled,
    AsideTextStyled,
    ContentStyled,
    VideoSectionStyled,
    VideoTitleStyled,
    TitleGroupStyled


} from './styled';
import ServiceList from '../../molecules/ServiceList';
export default function OurServicesFull() {
  const {t} = i18next


  const services = [
    {title: "OutSourcing Consultativo",
    paragraph: "Aumente sua capacidade produtiva ● Com acesso a nossa equipe, você agraga ao seu time profissionais apaixonados com competências diversas.", 
    hasImages: false, 
    images: [], 
    hasVideo: true, 
    video: {src: "", text: "Leroi Oliveira ● Líder técnico"}, 
    list: ["Otimização e controle de custos", "Custos fixos variáveis", "Flexibilidade e rapidez", "Acesso aos recursos da L2",
    "Centro de custos serviços", "Atualizado às mudanças do mercado"]
    },
    {title: "Ideação",
    paragraph: "Co-criação com nosso time multidisciplinar na concepção do seu produto e estratégias de negócio.", 
    hasImages: true, 
    images: ["", ""], 
    hasVideo: false, 
    video: {}, 
    list: ["Preparação do escopo", "Identificação dos diferenciais", "Sessão imersiva", "Justificativa do produto", "Redução do risco",
    "Redução de custos"]
    },
    {title: "UX/UI Design",
    paragraph: "Projetamos um produto encantador e funcional para os usuários, aliado aos objetivos do seu negócio.", 
    hasImages: false, 
    images: [], 
    hasVideo: true, 
    video: {src: "", text: null}, 
    list: ["UX/UI Design", "Pesquisa de experiência", "Design concept", "Design thinking", "Arquitetura de informação",
    "Design systems", "Responsividade e mobile-first", "Protótipos navegáveis"]
    },
    {title: "Atendimento à Startup",
    paragraph: "Nossa equipe de UX/UI e desenvolvimento irá projetar e construir seu MVP a partir do zero, “garantindo” uma entrega rápida e rentável.", 
    hasImages: false, 
    images: [], 
    hasVideo: true, 
    video: {src: "", text: "Leroi Oliveira ● Líder técnico"}, 
    list: ["Direcionamento de mercado", "Foco no crescimento do negócio", "Direcionamento do produto para investidores",
    "Estratégias de pitch de negócio", "Concepção de MVP", "Teste e lançamento"]
    },
    {title: "Consultoria em TI",
    paragraph: "Nosso Tech Lead Maicon Martins irá aconselhar você sobre as melhores práticas que sua empresa pode usar na infraestrutura.", 
    hasImages: true, 
    images: ["", ""], 
    hasVideo: false, 
    video: {}, 
    list: ["Compreensão e análise dos requisitos de TI da organização e do ambiente subjacente", "Aconselhamento de soluções e serviços em TI",
    "Infraestrutura de rede", "Ambientes de nuvem", "Gerenciamento e supervisão do processo de implementação de sistemas"]
    },
  ];

  return (
    <SectionStyled>

        <HeaderStyled>
            <TitleGroupStyled>
                <Typography color='gray' tag="h2" size='medium' fontWeight='weight3' fontFamily='font1' lineHeight='line90'>
                {t('ourServicesFull.ourServices')}
                </Typography>
               <ParagraphStyled>
                    <Typography color='gray' tag="p">{t('ourServicesFull.paragraph')}</Typography>
                </ParagraphStyled> 
            </TitleGroupStyled>

            <AsideStyled>
              <Typography color='gray' tag='p' size="xxsmall" letterSpacing="space1">
                &lt;{t('ourServicesFull.makeItHappen')}&gt;
              </Typography>
            </AsideStyled>
            
        </HeaderStyled>

        <ContentStyled>
            <ServiceList services={services}/>
        </ContentStyled>

        <VideoSectionStyled>
            <VideoTitleStyled>Veja Como Funciona</VideoTitleStyled>
        </VideoSectionStyled>

    </SectionStyled>
  );
}