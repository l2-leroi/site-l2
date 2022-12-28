import { t } from 'i18next';
import Link from 'next/link';
import { Typography } from '../../../styles/typography';
import {
  AsideStyledbutton,
  ContactStyled,
  ContainerImageStyled,
  ContainerStyled,
  ContentStyled,
  DivIcons,
  DivStyled,
  IconsContent,
  IconsStyled,
  ImageStyled,
  LanguageStyled,
  PersonalIcons,
  PhraseStyled,
  SubtitleStyle,
  TitleStyled,
} from './styled';

interface Header {
  nome: string;
  cargo: string;
  email: string;
  fotoPerfil: string;
  profileIcons: Icons[];
  insigniasL2: IconsInsigniasL2[];
}
interface Icons {
  alt: string;
  src: string;
}
interface IconsInsigniasL2 {
  alt: string;
  src: string;
}
interface InternalPageHeaderProps {
  internalHeader: Header;
}

function InternalProfileHeader(props: InternalPageHeaderProps) {
  const href_en = '/en/';
  const href_pt = '/pt/';

  const icon = props.internalHeader.profileIcons.map((itemIcon) => (
    <IconsStyled src={itemIcon.src} alt={itemIcon.alt} />
  ));

  const iconInsigniasL2 = props.internalHeader.insigniasL2.map((itemIcon) => (
    <IconsStyled src={itemIcon.src} alt={itemIcon.alt} />
  ));

  return (
    <ContainerStyled>
      <ContainerImageStyled>
        <ImageStyled
          src={props.internalHeader.fotoPerfil}
          alt="Foto de perfil"
        />
      </ContainerImageStyled>
      <ContentStyled>
        <DivStyled>
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
        <ContactStyled>
          <PhraseStyled>{props.internalHeader.cargo}</PhraseStyled>
          <PhraseStyled>{props.internalHeader.email}</PhraseStyled>
        </ContactStyled>
      </ContentStyled>
      <IconsContent>
        <PersonalIcons>
          <SubtitleStyle>{t('Profile.personal')}</SubtitleStyle>
          <DivIcons>{icon}</DivIcons>
        </PersonalIcons>
        <PersonalIcons>
          <SubtitleStyle>{t('Profile.insignia')}</SubtitleStyle>
          <DivIcons>{iconInsigniasL2}</DivIcons>
        </PersonalIcons>
      </IconsContent>
      <AsideStyledbutton>
        <LanguageStyled>
          <Typography
            tag="button"
            size="xxsmall"
            letterSpacing="space1"
            className="typography"
          >
            <Link href={`${href_pt}perfil`} locale="pt" scroll={false}>
              PT
            </Link>
          </Typography>
          <Typography
            tag="button"
            size="xxsmall"
            letterSpacing="space1"
            className="typography"
          >
            <Link href={`${href_en}perfil`} locale="en" scroll={false}>
              EN
            </Link>
          </Typography>
        </LanguageStyled>
      </AsideStyledbutton>
    </ContainerStyled>
  );
}

export default InternalProfileHeader;
