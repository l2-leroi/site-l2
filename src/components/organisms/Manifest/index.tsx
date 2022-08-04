import React from 'react';
import {
  ContainerStyledManifest,
  TitleGroupStyled,
  TitleStyled,
  SubTitleStyled,
  ParagraphStyled,
  ImageStyled,
} from './styled';

export default function Manifest() {
  return (
    <ContainerStyledManifest>
      <TitleGroupStyled>
        <TitleStyled>
          <h1> Manifesto L2code</h1>
        </TitleStyled>

        <ParagraphStyled>
          <p>
            Vivemos em um universo de inovações onde, em cada fragmento de
            tempo, algo novo é lançado. Por isso somos defensores da diversidade
            de ideias e apoiadores da criatividade sem limites! ● Defendemos que
            a construção do trabalho em equipe fortalece fraquezas e engrandece
            a entrega e as relações humanas. ● A união faz a inovação aqui na
            L2!
            <p>
              {' '}
              Hoje nós somos dados, somos desenvolvimento, somos especialistas,
              somos apaixonados por código, somos pessoas!{' '}
            </p>
            <p>
              {' '}
              Somos sonhadores, somos movidos por disrupções, afinal acreditamos
              que a tecnologia pode aproximar e humanizar relações entre
              pessoas, empresas e universos.{' '}
            </p>
            <p>Nós seguimos os seguintes princípios:</p>
          </p>
        </ParagraphStyled>

        <SubTitleStyled>
          <h2> 1. Pessoas, pessoas e pessoas</h2>
        </SubTitleStyled>

        <ParagraphStyled>
          <p>
            Somos feitos de pessoas, trabalhamos com pessoas e criamos para
            pessoas. Cada indivíduo é único e importante para nós e deve ter seu
            espaço.
            <h3>
              <b>#pessoas #indivíduos</b>
            </h3>
          </p>
        </ParagraphStyled>

        <ImageStyled>
          <img src="/images/Manifest/manifest-image-01.png" alt="L2code" />
        </ImageStyled>

        <div className="line" />

        <SubTitleStyled>
          <h2> 2. Somos apaixonados pelo que fazemos</h2>
        </SubTitleStyled>

        <ParagraphStyled>
          <p>
            Cada pessoa tem seus interesses e paixões. Quando fazemos o que
            gostamos fazemos o melhor que podemos fazer, por isso tentamos ao
            máximo colocar a pessoa certa no lugar certo e ajudamos cada
            colaborador a descobrir isso.
            <h3>
              <b>#lovetocode #sintonia</b>
            </h3>
          </p>
        </ParagraphStyled>

        <ImageStyled>
          <img src="/images/Manifest/manifest-image-02.png" alt="L2code" />
        </ImageStyled>

        <div className="line" />

        <SubTitleStyled>
          <h2> 3. Nós resolvemos o problema</h2>
        </SubTitleStyled>

        <ParagraphStyled>
          <p>
            Temos orientação a solução, a resolver os problemas sejam eles quais
            forem. Fazemos isso entendendo as necessidades de nossos
            clientes/projetos e ajudamos a criar uma solução propositiva.
            <h3>
              <b>#excelência #solução #propositividade #comprometimento</b>
            </h3>
          </p>
        </ParagraphStyled>

        <ImageStyled>
          <img src="/images/Manifest/manifest-image-03.png" alt="L2code" />
        </ImageStyled>
      </TitleGroupStyled>
    </ContainerStyledManifest>
  );
}
