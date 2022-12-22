import Link from 'next/link';
import { colors } from '../../../styles/colors';
import { Typography } from '../../../styles/typography';
import {
  AsideStyled,
  AsideStyledbutton,
  ContainerStyled,
  ContentStyled,
  DivStyled,
  EmailStyled,
  ImageStyled,
  LanguageStyled,
  MainDivStyled,
  ParagraphStyled,
  PhraseStyled,
  TitleStyled,
} from './styled';

interface Header {
  nome: string;
  cargo: string;
  apelido: string;
  email: string;
  pageName: string;
  fotoPerfil: string;
}
interface InternalPageHeaderProps {
  internalHeader: Header;
}

function InternalProfileHeader(props: InternalPageHeaderProps) {
  const href_en = '/en/';
  const href_pt = '/pt/';

  return (
    <ContainerStyled>
      <div style={{ width: '33.33%' }}>
        {/* <ImageStyled src="/images/profile\vanessa.jpg" alt="Foto de perfil" /> */}
        <ImageStyled
          src={props.internalHeader.fotoPerfil}
          alt="Foto de perfil"
        />
      </div>
      <ContentStyled>
        <DivStyled>
          {/* <TitleStyled>{props.internalHeader.nome}</TitleStyled> */}
          <TitleStyled>
            <Typography
              tag="h1"
              size="medium"
              className="typography"
              fontFamily="font1"
              letter-spacing="space2"
              font-weight="weight3"
              lineHeight="line90"
            />
            {props.internalHeader.nome}
          </TitleStyled>
        </DivStyled>
        <PhraseStyled>{props.internalHeader.cargo}</PhraseStyled>
        <PhraseStyled>Apelido: {props.internalHeader.apelido}</PhraseStyled>
      </ContentStyled>
      <AsideStyledbutton>
        <LanguageStyled>
          <Typography
            tag="button"
            size="xxsmall"
            letterSpacing="space1"
            className="typography"
          >
            <Link
              href={href_pt + props.internalHeader.pageName}
              locale="pt"
              scroll={false}
            >
              PT
            </Link>
          </Typography>
          <Typography
            tag="button"
            size="xxsmall"
            letterSpacing="space1"
            className="typography"
          >
            <Link
              href={href_en + props.internalHeader.pageName}
              locale="en"
              scroll={false}
            >
              EN
            </Link>
          </Typography>
        </LanguageStyled>
        {/* <PhraseStyled className="email">E-mail</PhraseStyled> */}
        <EmailStyled>
          <PhraseStyled className="email">E-mail</PhraseStyled>
          <PhraseStyled className="email">
            {props.internalHeader.email}
          </PhraseStyled>
          {/* <Typography
            tag="h2"
            size="xxsmall"
            className="typography"
            fontFamily="font1"
            letter-spacing="space2"
            font-weight="weight3"
            lineHeight="line140"
          />
          {props.internalHeader.email} */}
        </EmailStyled>
      </AsideStyledbutton>
    </ContainerStyled>
  );
}

export default InternalProfileHeader;
