import {
  AsideStyled,
  ContainerStyled,
  ContentStyled,
  DivStyled,
  ParagraphStyled,
  PhraseStyled,
  TitleStyled,
} from './styled';
import React from 'react';
import i18next from 'i18next';

// import path from 'path';
// import { DivItemStyled, TextStyled } from "../HeaderMemoriesUp/styled";
// import Button from "../../atoms/Button";
// import Spinner from "../../atoms/Spinner";

const DesignsCases  = () => {
  // const  {t}  = i18next;

  return (
    <ContainerStyled>
      <ContentStyled>
        <DivStyled>
          <TitleStyled>Design</TitleStyled>
        </DivStyled>

        {/* <ButtonOpen>Imagens</ButtonOpen>
        
        <ButtonClose>Protótipo</ButtonClose> */}
      </ContentStyled>
    </ContainerStyled>
  );
};
export default DesignsCases ;
