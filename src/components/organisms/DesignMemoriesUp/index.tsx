import {ContainerStyled, ContentStyled, DivStyled,TitleStyled, ButtonImages, ImageStyled, ButtonStyled, TechnologiesStyled, TecTitleStyled, ButtonPrototype} from "./styled";
import React, { useEffect } from "react";
import {useState} from 'react';
import i18next from 'i18next';
import DesignPrototype from "../../molecules/DesignPrototype";
import DesignImages from "../../molecules/DesignImages";

function DesignMemoriesUp() {
  const [button1isShown, button1setIsShown] = useState(true);
  const [button2isShown, button2setIsShown] = useState(false);
  const {t}  = i18next;

  useEffect(()=> {
    const btn1 = document.getElementById("btn1");
    btn1.classList.add("classBtn1");
    btn1.classList.add("classPadding1");
    const btn2 = document.getElementById("btn2");
    btn2.classList.add("classBtn2");
    btn2.classList.add("classPadding2");

    if(button1isShown == false){
      btn1.classList.remove("classBtn1");
      btn2.classList.remove("classPadding2");
    }
    if(button2isShown == false){
      btn2.classList.remove("classBtn2");
      btn1.classList.remove("classPadding1");
    }

  },[button1isShown, button2isShown]);

  const buttonOpen1 = event => {
    button1setIsShown(true);
    button2setIsShown(false);
  }
  const buttonOpen2 = event => {
    button2setIsShown(true);
    button1setIsShown(false);
  };

  return ( 
    <ContainerStyled >
      <ContentStyled>

        <DivStyled> 
          <TitleStyled>{t('CasesDetail.design')}</TitleStyled>
        </DivStyled>

        <ButtonStyled>
          <ButtonPrototype onClick={buttonOpen1} id="btn1"> {t('CasesDetail.prototipo')} </ButtonPrototype>
          <ButtonImages onClick={buttonOpen2} id="btn2"> {t('CasesDetail.imagens')} </ButtonImages>
        </ButtonStyled>

        {button1isShown && <DesignPrototype  />}
        {button2isShown && <DesignImages />}
       
        <TecTitleStyled>
          {t('CasesDetail.tecnologias')}
        </TecTitleStyled>
 
        <TechnologiesStyled>
            <ImageStyled src="../images/WebApp.svg" alt="WebApp Logo"/>
            <ImageStyled src="../images/nodejs-logo.svg" alt="Node.js Logo"/>
            <ImageStyled src="../images/reactjs-logo.svg" alt="React Logo"/>
        </TechnologiesStyled>
      
      </ContentStyled>
    </ContainerStyled>
  );
};
export default DesignMemoriesUp;