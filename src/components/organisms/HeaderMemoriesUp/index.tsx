import { ContentStyled } from "../Cases/styled";
import { MainContentStyled, 
  MainTextStyled,
  SubtitleStyled, 
  ContainerStyled, 
  TitleStyled, 
  LanguageStyled, 
  LanguageItemStyled, 
  Link, 
  TextStyled,
  ImageStyled,
  DivItemStyled

}
 from "./styled";

const HeaderMemoriesUp = () => {

    return (
        <>
        <ContainerStyled>
            
        <MainContentStyled>
        <LanguageStyled className='anime'>
          <LanguageItemStyled className="link">
            <Link >PT</Link>
          </LanguageItemStyled>
          <LanguageItemStyled className="link">
            <Link >EN</Link>
          </LanguageItemStyled>
        </LanguageStyled>
        
        <MainTextStyled>
            <TitleStyled>Case 01</TitleStyled>
        <SubtitleStyled>Memories Up</SubtitleStyled>
        
        <TextStyled >Design de produto para start-up americana</TextStyled>

        <DivItemStyled>
              <ImageStyled src="../images/LYRS_150_1728x-memories-up.jpg" alt=""  />
        </DivItemStyled>

       
        </MainTextStyled>
        
        </MainContentStyled>
        </ContainerStyled>
        
        </>
        

    )

}

export default HeaderMemoriesUp;