import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import i18next from 'i18next';
import ReactGA from 'react-ga4';
import {
  LPage,
  NavWrapper,
  NavLogo,
  Pill,
  PillImage,
  SocialLink,
  SocialWrapper,
  SubtitleS1,
  TitleS1,
  ContactBar,
  ContactButtonsWrapper,
  WhatsappButton,
  ContactBarText,
  QRCodeButton,
  TitleS2,
  WhatsappIcon,
  SubtitleS2,
  ServicesGrid,
  SecondaryContactBar,
  SecondaryWhatsappButton,
  FooterWrapper,
  FooterTitle,
  MarginBlock,
  FooterDescription,
  FooterS1TextWrapper,
  BreakLine,
  FooterItemsGrid,
  FooterItem,
  FooterItemImgBg,
  RecentClientsTitle,
  LogoItem,
  LogoFalseBlock,
  LogoGridDesktop,
  LogoGridMobile,
  NavFooter,
  CopyrightText,
  Modal,
  ModalContent,
  ModalResponsibleBlock,
  ModalResponsibleImage,
  ModalResponsibleDescription,
  ModalResponsibleName,
  ModalResponsibleData,
  ModalTitle,
  ModalQRCode,
  ModalCloseButton,
  ModalContentWrapper,
} from '../../../../styles/alocacao-lp-styled';
import ServiceComponent, { ServiceComponentProps } from './servicecomponent';

const AssigmentLP: NextPage = () => {
  ReactGA.send({
    hitType: '',
    page: '/alocacao',
    title: 'LP Alocacao',
  });

  const language = i18next.language.substring(0, 2);

  const areaValues = [
    {
      value: 'programação',
      image: 'area1',
    },
    {
      value: 'front-end',
      image: 'area2',
    },
    {
      value: 'back-end',
      image: 'area3',
    },
    {
      value: 'protótipo',
      image: 'area4',
    },
    {
      value: 'inteligência artificial',
      image: 'area5',
    },
    {
      value: 'experência do usuário',
      image: 'area6',
    },
    {
      value: 'design',
      image: 'area7',
    },
    {
      value: 'segurança de dados',
      image: 'area8',
    },
    {
      value: 'quality assurance',
      image: 'area9',
    },
    {
      value: 'marketing',
      image: 'area10',
    },
    {
      value: 'produto',
      image: 'area11',
    },
    {
      value: 'engenharia de dados',
      image: 'area12',
    },
  ];

  const placeValues = [
    {
      value: 'fintech',
      image: 'place1',
    },
    {
      value: 'ideia',
      image: 'place2',
    },
    {
      value: 'startup',
      image: 'place3',
    },
    {
      value: 'instituição',
      image: 'place4',
    },
    {
      value: 'empresa',
      image: 'place5',
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [areaData, setAreaData] = useState(areaValues[0]);
  const [placeData, setPlaceData] = useState(placeValues[0]);

  const servicesData: ServiceComponentProps[] = [
    {
      title: 'dev. front-end',
      type: 'tecnologia',
      imageSrc: 'service1',
      // peopleQuantity: '14',
      technologiesTitle: 'tecnologias: ',
      technologies: [
        'html',
        'css',
        'javascript',
        'react',
        'angular',
        'flutter',
      ],
      description:
        // eslint-disable-next-line max-len
        'Implementam a interface visual e interativa de um website ou aplicativo, traduzindo o design em código. Nossos frontends colaboram de perto com designers e devs backend para integrar componentes e garantir a funcionalidade da aplicação.',
    },
    {
      title: 'dev. back-end',
      type: 'tecnologia',
      imageSrc: 'service2',
      // peopleQuantity: '23',
      technologiesTitle: 'tecnologias: ',
      technologies: [
        'java',
        'python',
        'node',
        'spring',
        'csharp',
        'sql',
        'php',
      ],
      description:
        // eslint-disable-next-line max-len
        'Criam e mantém a lógica e funcionalidade dos servidores e bancos de dados que sustentam as aplicações web e móveis. Desenvolvem APIs, gerenciam dados e garantem a segurança e escalabilidade do sistema.',
    },
    {
      title: 'dev. fullstack',
      type: 'tecnologia',
      imageSrc: 'service3',
      // peopleQuantity: '23',
      technologiesTitle: 'tecnologias: ',
      technologies: [
        'javascript',
        'react',
        'flutter',
        'angular',
        'java',
        'python',
        'node',
        'sql',
      ],
      description:
        // eslint-disable-next-line max-len
        'Desenvolvedor fullstack é um profissional versátil em front-end e back-end, com expertise em HTML, CSS, JavaScript e frameworks como React, Angular ou Vue.js para front-end, e Express.js, Django, Ruby on Rails ou Node.js para back-end. Contribui em todas as fases do desenvolvimento, da concepção à manutenção, sendo essencial em equipes ágeis e projetos eficientes.',
    },
    {
      title: 'ux/ui design',
      type: 'design',
      imageSrc: 'service4',
      // peopleQuantity: '06',
      technologiesTitle: 'tecnologias: ',
      technologies: [
        'figma',
        'adobePremiere',
        'photoshop',
        'illustrator',
        'corel',
      ],
      description:
        // eslint-disable-next-line max-len
        'Esse profissional pesquisa, projeta e avalia a experiência do usuário em produtos digitais. Eles colaboram com equipes multidisciplinares para entender as necessidades dos usuários, criar wireframes e protótipos, e realizar testes de usabilidade. Seu objetivo é garantir que os produtos sejam fáceis de usar e eficazes para os usuários.',
    },
    {
      title: 'eng. e cient. de dados',
      type: 'tecnologia',
      imageSrc: 'service5',
      // peopleQuantity: '02',
      technologiesTitle: 'tecnologias: ',
      technologies: ['python', 'sql', 'power-bi', 'excel'],
      description:
        // eslint-disable-next-line max-len
        'Responsável por coletar, limpar, analisar e interpretar grandes conjuntos de dados para extrair insights e informar decisões estratégicas. Eles utilizam técnicas estatísticas, aprendizado de máquina e análise de dados para resolver problemas complexos e prever tendências futuras.',
    },
    {
      title: 'qa',
      type: 'tecnologia',
      imageSrc: 'service6',
      // peopleQuantity: '02',
      technologiesTitle: 'tecnologias: ',
      technologies: ['junit', 'selenium', 'jasmine', 'postman'],
      description:
        // eslint-disable-next-line max-len
        'Garante a qualidade e a integridade dos produtos de software. Eles realizam testes de software, identificam e relatam defeitos e anomalias, e garantem que os produtos atendam aos requisitos e padrões de qualidade estabelecidos.',
    },
    {
      title: 'marketing e tráfego',
      type: 'design',
      imageSrc: 'service7',
      // peopleQuantity: '14',
      technologiesTitle: 'tecnologias: ',
      technologies: ['ads', 'hootsuite', 'ganalytics', 'python', 'sql'],
      description:
        // eslint-disable-next-line max-len
        'Desenvolve e implementa estratégias para promover produtos ou serviços, alcançar clientes em potencial e aumentar as vendas. Isso pode incluir atividades como pesquisa de mercado, análise de concorrência, definição de público-alvo, criação de campanhas de publicidade, gestão de redes sociais, SEO (otimização para mecanismos de busca), marketing de conteúdo, email marketing e análise de desempenho das campanhas.',
    },
    {
      title: 'po/pm',
      type: 'gestão',
      imageSrc: 'service8',
      // peopleQuantity: '02',
      technologiesTitle: 'métodos: ',
      technologies: ['jira', 'scrum', 'power-bi', 'trello'],
      description:
        // eslint-disable-next-line max-len
        'Representam os interesses dos stakeholders e do cliente durante o desenvolvimento do projeto. Eles definem e priorizam os requisitos do projeto, comunicar as necessidades do cliente à equipe de desenvolvimento, garantir a entrega de valor ao cliente em cada incremento do produto, e tomar decisões sobre o escopo e as funcionalidades do projeto.',
    },
  ];

  useEffect(() => {
    const nav = document.querySelector('.nav') as HTMLElement;
    nav.style.display = 'none';

    // if (history.scrollRestoration) {
    //   history.scrollRestoration = 'manual';
    // } else {
    //   window.onbeforeunload = () => {
    //     window.scrollTo(0, 0);
    //   };
    // }
  }, []);

  function setRandomArea() {
    const indexArea = Math.floor(Math.random() * areaValues.length);
    const newArea = areaValues[indexArea];
    if (newArea.value == areaData.value) {
      setRandomArea();
    } else {
      setAreaData(newArea);
    }
  }

  function setRandomPlace() {
    const indexPlace = Math.floor(Math.random() * placeValues.length);
    const newPlace = placeValues[indexPlace];
    if (newPlace.value == placeData.value) {
      setRandomPlace();
    } else {
      setPlaceData(newPlace);
    }
  }

  function eventTriggerGA(action: string) {
    console.log({ action });
    ReactGA.event({
      category: 'click',
      action,
    });
  }

  useEffect(() => {
    const changeHeaderData = setTimeout(() => {
      setRandomArea();
      setRandomPlace();
    }, 3000);
    return () => clearTimeout(changeHeaderData);
  }, [placeData]);

  return (
    <LPage>
      {openModal && (
        <Modal>
          <ModalContentWrapper>
            <ModalContent>
              <ModalTitle>
                Fale com <br /> a nossa comercial
              </ModalTitle>
              <ModalResponsibleBlock>
                <ModalResponsibleImage
                  alt="comercial"
                  src="/images/AssignmentsLP/comercial.svg"
                />
                <ModalResponsibleData>
                  <ModalResponsibleDescription>
                    Responsável comercial:
                  </ModalResponsibleDescription>
                  <ModalResponsibleName>Michelle</ModalResponsibleName>
                </ModalResponsibleData>
              </ModalResponsibleBlock>
            </ModalContent>
          </ModalContentWrapper>
          <ModalQRCode alt="qrcode" src="/images/AssignmentsLP/qrcode.png" />
          <ModalCloseButton
            alt="closebutton"
            onClick={() => setOpenModal(false)}
            src="/images/AssignmentsLP/close.svg"
          />
        </Modal>
      )}
      <MarginBlock>
        {/* HEADER */}
        <NavWrapper>
          <SocialLink
            onClick={() => eventTriggerGA('alocacao-logo-header')}
            href={`/${language}`}
          >
            <NavLogo src="/images/Logo-Small.svg" />
          </SocialLink>
          <SocialWrapper>
            <SocialLink
              onClick={() => eventTriggerGA('alocacao-instagram')}
              href="https://www.instagram.com/l2code.com.br"
            >
              INSTAGRAM
            </SocialLink>
            <SocialLink
              onClick={() => eventTriggerGA('alocacao-linkedin')}
              href="https://br.linkedin.com/company/l2code-dev"
            >
              LINKEDIN
            </SocialLink>
          </SocialWrapper>
        </NavWrapper>
        <TitleS1>
          Alocação <br /> de times
        </TitleS1>
        <SubtitleS1>
          especialistas em
          <Pill>
            <PillImage
              src={`/images/AssignmentsLP/header-loop/${areaData.image}.png`}
            />
            {areaData.value}
          </Pill>
          para sua
          <Pill>
            {placeData.value}
            <PillImage
              src={`/images/AssignmentsLP/header-loop/${placeData.image}.png`}
            />
          </Pill>
        </SubtitleS1>
        <ContactBar backgroundColor="black">
          <ContactBarText color="">Fale com nossa comercial</ContactBarText>
          <ContactButtonsWrapper>
            <QRCodeButton
              onClick={() => {
                setOpenModal(true);
                eventTriggerGA('alocacao-qrcode-header');
              }}
              src="/images/AssignmentsLP/qrcode-contactbar.png"
            />
            <WhatsappButton
              onClick={() => eventTriggerGA('alocacao-whats-header')}
              href="https://wa.me/5518991745920?text=Olá! Gostaria de mais informações sobre alocações da L2!"
            >
              <WhatsappIcon src="/images/AssignmentsLP/wpp-icon.svg" />
              Iniciar chat
            </WhatsappButton>
          </ContactButtonsWrapper>
        </ContactBar>
        <SecondaryContactBar backgroundColor="black">
          Fale com a nossa comercial
          <SecondaryWhatsappButton
            onClick={() => eventTriggerGA('alocacao-whats-header')}
            href="https://wa.me/5518991745920?text=Olá! Gostaria de mais informações sobre alocações da L2!"
          >
            <WhatsappIcon src="/images/AssignmentsLP/wpp-icon.svg" />
            Iniciar chat
          </SecondaryWhatsappButton>
        </SecondaryContactBar>

        {/* LISTA DE PROFISSIONAIS */}
        <TitleS2>
          Qual perfil <BreakLine screen="mobile" /> sua empresa busca?
        </TitleS2>
        <SubtitleS2>
          Atuamos em todo processo de criação do produto digital, com
          profissionais de todas as senioridades, de júniors a sêniors.
        </SubtitleS2>
        <ServicesGrid>
          {servicesData.map((serviceData) => {
            return (
              <ServiceComponent key={`${serviceData.title}`} {...serviceData} />
            );
          })}
        </ServicesGrid>
      </MarginBlock>

      {/* FOOTER */}
      <FooterWrapper backgroundColor="purple" style={{ paddingBottom: '18vw' }}>
        <FooterS1TextWrapper>
          <FooterTitle>
            Contrate <BreakLine screen="desktop" /> sob medida
          </FooterTitle>
          <FooterDescription>
            Nosso modelo é diferente, porque entendemos o desafio e cultura da
            sua empresa <BreakLine screen="desktop" /> antes de recomendar um
            profissional. <br />
            <br /> Afinal, todo time trabalha com uma tecnologia e software
            gráfico específico, <BreakLine screen="desktop" /> ou mesmo busca
            determinada personalidade.
          </FooterDescription>
        </FooterS1TextWrapper>

        <FooterItemsGrid>
          <FooterItem>
            <FooterItemImgBg>
              <img alt="globe" src="/images/AssignmentsLP/globe.svg" />
            </FooterItemImgBg>
            Remoto, mas sempre online
          </FooterItem>
          <FooterItem>
            <FooterItemImgBg>
              <img alt="shield" src="/images/AssignmentsLP/shield.svg" />
            </FooterItemImgBg>
            Proteção de NDA
          </FooterItem>
          <FooterItem>
            <FooterItemImgBg>
              <img alt="monitor" src="/images/AssignmentsLP/monitor.svg" />
            </FooterItemImgBg>
            Equipamento incluso
          </FooterItem>
          <FooterItem>
            <FooterItemImgBg>
              <img alt="message" src="/images/AssignmentsLP/message.svg" />
            </FooterItemImgBg>
            Brasileiros, mas poliglotas
          </FooterItem>
        </FooterItemsGrid>

        <ContactBar backgroundColor="black">
          <ContactBarText color="">Fale com nossa comercial</ContactBarText>
          <ContactButtonsWrapper>
            <QRCodeButton
              onClick={() => {
                setOpenModal(true);
                eventTriggerGA('alocacao-qrcode-footer1');
              }}
              src="/images/AssignmentsLP/qrcode-contactbar.png"
            />
            <WhatsappButton
              onClick={() => eventTriggerGA('alocacao-whats-footer1')}
              href="https://wa.me/5518991745920?text=Olá! Gostaria de mais informações sobre alocações da L2!"
            >
              <WhatsappIcon src="/images/AssignmentsLP/wpp-icon.svg" />
              Iniciar chat
            </WhatsappButton>
          </ContactButtonsWrapper>
        </ContactBar>
        <SecondaryContactBar backgroundColor="black">
          Agregue uma pessoa ou um time inteiro à sua estrutura pelo período
          mínimo de 1 mês
          <SecondaryWhatsappButton
            onClick={() => eventTriggerGA('alocacao-whats-footer1')}
            href="https://wa.me/5518991745920?text=Olá! Gostaria de mais informações sobre alocações da L2!"
          >
            <WhatsappIcon src="/images/AssignmentsLP/wpp-icon.svg" />
            Iniciar chat
          </SecondaryWhatsappButton>
        </SecondaryContactBar>
      </FooterWrapper>

      <FooterWrapper backgroundColor="black" style={{ marginTop: '-12vw' }}>
        <FooterS1TextWrapper>
          <FooterTitle>
            Confie <BreakLine screen="desktop" /> na entrega
          </FooterTitle>
          <FooterDescription>
            Há 7 anos ajudamos grandes bancos e fintechs nacionais a entregarem
            solução de excelência, <BreakLine screen="desktop" />
            conquistando novos cliente e valorizando seus papéis na bolsa de
            valores. <br /> <br /> Fazemos isso com processo e de modo
            consistente.
          </FooterDescription>
        </FooterS1TextWrapper>
        <RecentClientsTitle>Clientes recentes</RecentClientsTitle>
        <LogoGridDesktop>
          <LogoItem
            alt="companylogo1"
            src="/images/AssignmentsLP/companylogo1.svg"
          />
          <LogoItem
            alt="companylogo2"
            src="/images/AssignmentsLP/companylogo2.svg"
          />
          <LogoItem
            alt="companylogo3"
            src="/images/AssignmentsLP/companylogo3.svg"
          />
          <LogoItem
            alt="companylogo4"
            src="/images/AssignmentsLP/companylogo4.svg"
          />
          <LogoItem
            alt="companylogo5"
            src="/images/AssignmentsLP/companylogo5.svg"
          />
        </LogoGridDesktop>
        <LogoGridMobile>
          <LogoFalseBlock>
            <LogoItem
              alt="companylogo1"
              src="/images/AssignmentsLP/companylogo1.svg"
            />
            <LogoItem
              alt="companylogo2"
              src="/images/AssignmentsLP/companylogo2.svg"
            />
          </LogoFalseBlock>
          <LogoFalseBlock>
            <LogoItem
              alt="companylogo3"
              src="/images/AssignmentsLP/companylogo3.svg"
            />
            <LogoItem
              alt="companylogo4"
              src="/images/AssignmentsLP/companylogo4.svg"
            />
            <LogoItem
              alt="companylogo5"
              src="/images/AssignmentsLP/companylogo5.svg"
            />
          </LogoFalseBlock>
        </LogoGridMobile>

        <ContactBar backgroundColor="white">
          <ContactBarText color="">
            Profissionais especializados <BreakLine screen="mobile" /> a partir
            de R$ 74,80 / hora
          </ContactBarText>
          <ContactButtonsWrapper>
            <QRCodeButton
              onClick={() => {
                setOpenModal(true);
                eventTriggerGA('alocacao-qrcode-footer2');
              }}
              src="/images/AssignmentsLP/qrcode-contactbar-white.png"
            />
            <WhatsappButton
              onClick={() => eventTriggerGA('alocacao-whats-footer2')}
              href="https://wa.me/5518991745920?text=Olá! Gostaria de mais informações sobre alocações da L2!"
            >
              <WhatsappIcon src="/images/AssignmentsLP/wpp-icon.svg" />
              Iniciar chat
            </WhatsappButton>
          </ContactButtonsWrapper>
        </ContactBar>
        <SecondaryContactBar backgroundColor="white">
          Profissionais especializados <BreakLine screen="mobile" /> a partir de
          R$ 74,80 / hora
          <SecondaryWhatsappButton
            onClick={() => eventTriggerGA('alocacao-whats-footer2')}
            href="https://wa.me/5518991745920?text=Olá! Gostaria de mais informações sobre alocações da L2!"
          >
            <WhatsappIcon src="/images/AssignmentsLP/wpp-icon.svg" />
            Iniciar chat
          </SecondaryWhatsappButton>
        </SecondaryContactBar>
      </FooterWrapper>

      <NavFooter>
        <SocialLink href={`/${language}`}>
          <NavLogo src="/images/AssignmentsLP/white-logo.svg" />
        </SocialLink>
        <CopyrightText>© 2024 todos os direitos reservados</CopyrightText>
      </NavFooter>
    </LPage>
  );
};

export default AssigmentLP;
