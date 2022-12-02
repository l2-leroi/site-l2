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
            espaço respeitado.
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
            Cada pessoa tem seus interesses e paixões, quando fazemos o que
            gostamos fazemos o melhor que podemos fazer. Por isso, nos
            preocupamos em colocar a pessoa certa no lugar certo e recompensar
            cada passo bem sucedido.
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
            3. Não existe o que não podemos fazer, apenas o que não fizemos
            ainda
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Fazer sem medo de errar, aprender com isso e então fazer melhor.
            Estamos em constante aprendizado, e isso nos move para novos
            horizontes.
            <Typography tag="h3">
              <Typography tag="b">#aprendizado</Typography>
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
            4. Nós resolvemos o problema
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Temos orientação a solução, a resolver os problemas sejam eles quais
            forem. Fazemos isso entendendo as necessidades de nossos
            clientes/projetos e criando uma solução propositiva.
            <Typography tag="h3">
              <Typography tag="b">
                #excelência #solução #propositividade #comprometimento
              </Typography>
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
            Ao contrário das tradicionais hierarquias, nós não escondemos
            conhecimento, mas sim compartilhamos ao máximo, seja com clientes,
            colaboradores ou com o mundo. L2 é um grande time! Cada colaborador
            ajuda e fortalece a fraqueza dos outros.
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
            Acreditamos que a diversidade amplia nossa maneira de ver o mundo, a
            forma como analisamos situações e as diferentes maneiras com que
            resolvemos problemas. Criamos um ambiente acolhedor e inclusivo para
            que L2team possa se desenvolver e dar o seu melhor.
            <Typography tag="h3">
              <Typography tag="b">#respeito #inclusão</Typography>
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
            7. Se não for divertido tem algo errado
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Se está chato ou desmotivador tem algo errado. Quando temos espaço
            para usar nossas habilidades, criar coisas novas e nos
            desenvolvermos, sempre será motivador, divertido e empolgante.
            <Typography tag="h3">
              <Typography tag="b">
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
            8. Ninguém tem sempre razão
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Seja desenvolvedor, líder, gestor, cliente ou o papa. Nós acertamos
            ou erramos como time. Se algo pode ser melhorado, você tem o direito
            de dizer de forma clara. Adoramos a cultura de feedbacks, pois nos
            ajuda a crescer.
            <Typography tag="h3">
              <Typography tag="b">
                {' '}
                #clareza #transparência #feedback
              </Typography>
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
            9. Não é feitiçaria, é tecnologia
          </Typography>
        </SubTitleStyled>

        <ParagraphStyled>
          <Typography tag="p">
            Usamos todo o potencial da tecnologia para criar impacto positivo no
            mundo, reinventando soluções e encantando as pessoas com produtos
            digitais e experiências online que as pessoas adoram. Parece mágica,
            mas é código. Parece super poderes, mas é design.
            <Typography tag="h3">
              <Typography tag="b">#encantamento #tecnologia</Typography>
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
