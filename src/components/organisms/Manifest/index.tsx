import React from 'react';
import { t } from 'i18next';
import {
  ContainerStyledManifest,
  GroupStyled,
  TitleStyled,
  SubTitleStyled,
  ParagraphStyled,
  ImageStyled,
} from './styled';
import { Typography } from '../../../styles/typography';
import { StyledScrollCircle } from '../OurCareersPage/styled';

export default function Manifest() {
  return (
    <ContainerStyledManifest>
      <div className="scrollCircleDiv">
        <StyledScrollCircle
          isWhiteImage={false}
          blackImage={`${t('images.spinnerBlack')}`}
          whiteImage={`${t('images.spinnerWhite')}`}
        />
      </div>

      <GroupStyled>
        <TitleStyled>
          <Typography
            tag="h1"
            fontFamily="font1"
            fontWeight="weight3"
            size="medium"
          >
            {' '}
            Manifesto L2code
          </Typography>
        </TitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Vivemos em um universo de inovações onde, em cada fragmento de
            tempo, algo novo é lançado. Por isso somos defensores da diversidade
            de ideias e apoiadores da criatividade sem limites! ● Defendemos que
            a construção do trabalho em equipe fortalece fraquezas e engrandece
            a entrega e as relações humanas. ● A união faz a inovação aqui na
            L2!
            <Typography tag="p">
              {' '}
              Hoje nós somos dados, somos desenvolvimento, somos especialistas,
              somos apaixonados por código, somos pessoas!{' '}
            </Typography>
            <Typography tag="p">
              {' '}
              Somos sonhadores, somos movidos por disrupções, afinal acreditamos
              que a tecnologia pode aproximar e humanizar relações entre
              pessoas, empresas e universos.{' '}
            </Typography>
            <Typography tag="p">
              Nós seguimos os seguintes princípios:
            </Typography>
          </Typography>
        </ParagraphStyled>

        <SubTitleStyled>
          <Typography
            tag="h2"
            size="small"
            letterSpacing="space1"
            fontWeight="weight2"
          >
            {' '}
            1. Pessoas, pessoas e pessoas
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Somos feitos de pessoas, trabalhamos com pessoas e criamos para
            pessoas. Cada indivíduo é único e importante para nós e deve ter seu
            espaço.
            <Typography tag="h3">
              <Typography tag="b">#pessoas #indivíduos</Typography>
            </Typography>
          </Typography>
        </ParagraphStyled>

        <ImageStyled>
          <img src="/images/Manifest/manifest-image-01.png" alt="L2code" />
        </ImageStyled>

        <div className="line" />

        <SubTitleStyled>
          <Typography
            tag="h2"
            size="small"
            letterSpacing="space1"
            fontWeight="weight2"
          >
            {' '}
            2. Somos apaixonados pelo que fazemos
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Cada pessoa tem seus interesses e paixões. Quando fazemos o que
            gostamos fazemos o melhor que podemos fazer, por isso tentamos ao
            máximo colocar a pessoa certa no lugar certo e ajudamos cada
            colaborador a descobrir isso.
            <Typography tag="h3">
              <Typography tag="b">#lovetocode #sintonia</Typography>
            </Typography>
          </Typography>
        </ParagraphStyled>

        <ImageStyled>
          <img src="/images/Manifest/manifest-image-02.png" alt="L2code" />
        </ImageStyled>

        <div className="line" />

        <SubTitleStyled>
          <Typography
            tag="h2"
            size="small"
            letterSpacing="space1"
            fontWeight="weight2"
          >
            {' '}
            3. Nós resolvemos o problema
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Temos orientação a solução, a resolver os problemas sejam eles quais
            forem. Fazemos isso entendendo as necessidades de nossos
            clientes/projetos e ajudamos a criar uma solução propositiva.
            <Typography tag="h3">
              <Typography tag="b">
                #excelência #solução #propositividade #comprometimento
              </Typography>
            </Typography>
          </Typography>
        </ParagraphStyled>

        <ImageStyled>
          <img src="/images/Manifest/manifest-image-03.png" alt="L2code" />
        </ImageStyled>

        <div className="line" />

        <SubTitleStyled>
          <Typography
            tag="h2"
            size="small"
            letterSpacing="space1"
            fontWeight="weight2"
          >
            {' '}
            4. Não existe o que não podemos fazer, apenas o que não fizemos
            ainda
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Fazer, errar, aprender e, então, fazer melhor. Estamos em constante
            aprendizado, e isso nos move para novos horizontes.
            <Typography tag="h3">
              <Typography tag="b">#aprendizado</Typography>
            </Typography>
          </Typography>
        </ParagraphStyled>

        <ImageStyled>
          <img src="/images/Manifest/manifest-image-04.png" alt="L2code" />
        </ImageStyled>

        <div className="line" />

        <SubTitleStyled>
          <Typography
            tag="h2"
            size="small"
            letterSpacing="space1"
            fontWeight="weight2"
          >
            {' '}
            5. Compartilhar conhecimento não é opção, é obrigação
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Não podemos esconder conhecimento. Temos que compartilhar o
            conhecimento ao máximo, seja com clientes, colaboradores ou com o
            mundo. L2 é um grande time! Cada colaborador ajuda e fortalece a
            fraqueza dos outros.
            <Typography tag="h3">
              <Typography tag="b">#compartilhar #colaborar #l2team</Typography>
            </Typography>
          </Typography>
        </ParagraphStyled>

        <ImageStyled>
          <img src="/images/Manifest/manifest-image-05.png" alt="L2code" />
        </ImageStyled>

        <div className="line" />

        <SubTitleStyled>
          <Typography
            tag="h2"
            size="small"
            letterSpacing="space1"
            fontWeight="weight2"
          >
            {' '}
            6. Respeito e diversidade, quanto mais, melhor
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Criamos um ambiente acolhedor e inclusivo para que os Lcoders possam
            dar o seu melhor. Acreditamos que a diversidade amplia nossa maneira
            de ver o mundo, a forma como analisamos situações e as diferentes
            maneiras com que resolvemos problemas.
            <Typography tag="h3">
              <Typography tag="b">#respeito #diversidade #inclusão</Typography>
            </Typography>
          </Typography>
        </ParagraphStyled>

        <ImageStyled>
          <img src="/images/Manifest/manifest-image-06-01.png" alt="L2code" />
          <img src="/images/Manifest/manifest-image-06-02.png" alt="L2code" />
        </ImageStyled>

        <div className="line" />

        <SubTitleStyled>
          <Typography
            tag="h2"
            size="small"
            letterSpacing="space1"
            fontWeight="weight2"
          >
            {' '}
            7. Lazer e Criatividade
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            É preciso saber aproveitar os momentos de lazer de maneira criativa
            e prazerosa, nada de triplicar as jornadas de trabalho! Não adianta
            forçar o cérebro quando está cansado e saturado. O resultado será
            medíocre e insuficiente. Ao mesmo tempo, quando estamos felizes e
            nos sentimos estimulados mentalmente, as melhores ideias chegam até
            nós de forma inesperada.
            <Typography tag="h3">
              <Typography tag="b">
                #Lazer #Criatividade #Produtividade
              </Typography>
            </Typography>
          </Typography>
        </ParagraphStyled>

        <ImageStyled>
          <img src="/images/Manifest/manifest-image-07-01.png" alt="L2code" />
          <img src="/images/Manifest/manifest-image-07-02.png" alt="L2code" />
        </ImageStyled>
        <div className="line" />

        <SubTitleStyled>
          <Typography
            tag="h2"
            size="small"
            letterSpacing="space1"
            fontWeight="weight2"
          >
            {' '}
            8. Se não for divertido tem algo errado
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Se está chato ou desmotivador tem algo errado. Quando temos espaço
            pra usar nossas habilidades, nos desenvolver e criar coisas
            inovadoras sempre será motivador, divertido e empolgante.
            <Typography tag="h3">
              <Typography tag="b">
                {' '}
                #diversão #evolução #crescimento #inovação
              </Typography>
            </Typography>
          </Typography>
        </ParagraphStyled>

        <ImageStyled>
          <img src="/images/Manifest/manifest-image-08.png" alt="L2code" />
        </ImageStyled>
        <div className="line" />

        <SubTitleStyled>
          <Typography
            tag="h2"
            size="small"
            letterSpacing="space1"
            fontWeight="weight2"
          >
            {' '}
            9. Você não precisa pisar em ovos
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Pode dizer as coisas de forma clara. Se algo que te incomoda ou se
            você acha que algo pode ser melhorado, fale! Adoramos feedbacks,
            isso nos ajuda a crescer.
            <Typography tag="h3">
              <Typography tag="b"> #clareza #feedback</Typography>
            </Typography>
          </Typography>
        </ParagraphStyled>

        <ImageStyled>
          <img src="/images/Manifest/manifest-image-09.png" alt="L2code" />
        </ImageStyled>
        <div className="line" />

        <SubTitleStyled>
          <Typography
            tag="h2"
            size="small"
            letterSpacing="space1"
            fontWeight="weight2"
          >
            {' '}
            10. Ninguém tem sempre razão
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Seja desenvolvedor, líder, gestor, cliente ou o papa. Acreditamos em
            dois papéis especialistas e decisores. Os especialistas dão a
            recomendação e o decisor toma as decisões.
            <Typography tag="h3">
              <Typography tag="b"> #especialista #decisor</Typography>
            </Typography>
          </Typography>
        </ParagraphStyled>

        <ImageStyled>
          <img src="/images/Manifest/manifest-image-10.png" alt="L2code" />
        </ImageStyled>

        <div className="line" />

        <SubTitleStyled>
          <Typography
            tag="h2"
            size="small"
            letterSpacing="space1"
            fontWeight="weight2"
          >
            {' '}
            11. Encantamento
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Não é feitiçaria, é tecnologia. É tão fantástico quando as soluções
            de tecnologia resolvem os problemas que chega a ser misterioso. Para
            fazer isso pensamos em cada detalhe, colocamos o usuário no centro e
            então criamos produtos digitais com uma experiência única, funcional
            e encantadora que parece mágica.
            <Typography tag="h3">
              <Typography tag="b"> #encantamento #tecnologia</Typography>
            </Typography>
          </Typography>
        </ParagraphStyled>

        <ImageStyled>
          <img src="/images/Manifest/manifest-image-11.png" alt="L2code" />
        </ImageStyled>
      </GroupStyled>
    </ContainerStyledManifest>
  );
}
