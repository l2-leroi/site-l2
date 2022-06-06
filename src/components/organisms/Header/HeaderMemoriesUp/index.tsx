import {
  MainContentStyled,
  MainTextStyled,
  SubtitleStyled,
  ContainerStyled,
  TitleStyled,
  LanguageStyled,
  LanguageItemStyled,
  Link,
  TextStyled,
  ImageStyled,
  DivItemStyled,
} from './styled';

const HeaderMemoriesUp = () => {
  return (
    <>
      <ContainerStyled>
        <MainContentStyled>
          <MainTextStyled>
            <TitleStyled>Case 01</TitleStyled>
            <SubtitleStyled>Memories Up</SubtitleStyled>
            <TextStyled>Design de produto para start-up americana</TextStyled>
          </MainTextStyled>
          
        </MainContentStyled>
        <DivItemStyled>
        <ImageStyled
          src="../images/imagens-memories-up.jpg"
          alt="Imagens Memories Up"
        />
      </DivItemStyled>
        
      </ContainerStyled>
      

      <LanguageStyled className="anime">
        <LanguageItemStyled className="link">
          <Link>PT</Link>
        </LanguageItemStyled>
        <LanguageItemStyled className="link">
          <Link> EN</Link>
        </LanguageItemStyled>
      </LanguageStyled>
    </>
  );
};

export default HeaderMemoriesUp;
