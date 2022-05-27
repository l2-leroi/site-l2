import {
  OurCustomersStyled,
  HeaderStyled,
  ContentStyled,
  SpinningIconStyled,
  BlackLineStyled,
  SignContainerStyled,
  AsideStyled,
  CustomersContainer,
  BlackBg,
} from './styled';

import CustomersList from '../../molecules/CustomersList/index';
import React from 'react';
import LineAnimation from '../../atoms/LineAnimation';
import OutSourcing from '../../atoms/OutSourcing';
import { colors } from '../../../styles/colors';
import i18next from 'i18next';
import { Typography } from '../../../styles/typography';
const OurCustomers = () => {
  const {t} = i18next
  const ToParadoLogo = './images/OurCustomers/to-parado-logo.svg';
  const PhiLogo = './images/OurCustomers/phi-logo.svg';
  const BancoRCILogo = './images/OurCustomers/banco-rci-logo.svg';
  const SescLogo = './images/OurCustomers/sesc-logo.svg';
  const TalentDreamsLogo = './images/OurCustomers/talent-dreams-logo.svg';
  const AnotaAiLogo = './images/OurCustomers/anotai-logo.svg';
  const MemoriesUpLogo = './images/OurCustomers/memories-up-logo.svg';
  const NoVerdeLogo = './images/OurCustomers/no-verde-logo.svg';
  const DigitalBusinessLogo = './images/OurCustomers/digital-business-logo.svg';
  const FundacredLogo = './images/OurCustomers/fundacred-logo.svg';
  const Spinner = './images/OurCustomers/enfeite-giratorio.svg';
  let spinnerMaxHeight = 0;
  const customers = [
    { alt: 'Tô Parado Logo', src: ToParadoLogo },
    { alt: 'Phi Logo', src: PhiLogo },
    { alt: 'Banco RCI Brasil Logo', src: BancoRCILogo },
    { alt: 'Sesc Logo', src: SescLogo },
    { alt: 'Talent Dreams Logo', src: TalentDreamsLogo },
    { alt: 'Anota Aí Logo', src: AnotaAiLogo },
    { alt: 'Memories Up Logo', src: MemoriesUpLogo },
    { alt: 'No Verde Logo', src: NoVerdeLogo },
    { alt: 'Digital Business Logo', src: DigitalBusinessLogo },
    { alt: 'Fundacred Logo', src: FundacredLogo },
  ];

  const verifyPurpleLine = () => {
    const sign = document.querySelector('.signCustomers') as HTMLElement;
    const purpleLine = document.querySelector('.purpleLine') as HTMLElement;
    let purpleLinePaddingTop = +getComputedStyle(purpleLine)
      .getPropertyValue('padding-top')
      .replace('px', '');
    const purpleLineMovement =
      window.innerHeight * 0.8 - purpleLine.getBoundingClientRect().top - 128;
    const purpleLineWidth = purpleLine.getBoundingClientRect().width;

    let inclination = 25;

    if (window.innerWidth > 600 && window.innerWidth < 800) {
      inclination = 15;
    } else if (window.innerWidth <= 600) {
      inclination = 12;
    }

    let rotationMovement = purpleLineMovement / 15;
    let defaultTopInRotation = 150;
    let morePadding = 0;

    if (window.innerWidth > 800 && window.innerWidth < 1000) {
      morePadding = 38;
      rotationMovement = purpleLineMovement / 10;
    } else if (window.innerWidth <= 800 && window.innerWidth > 750){
      purpleLinePaddingTop = purpleLinePaddingTop / 2.6;
      defaultTopInRotation = 90;
      morePadding = 38;
    }
    else if (window.innerWidth <= 750 && window.innerWidth > 600){
      purpleLinePaddingTop = purpleLinePaddingTop / 2.1;
      defaultTopInRotation = 100;
      morePadding = 20;
    } else if (window.innerWidth <= 600 && window.innerWidth > 400){
      purpleLinePaddingTop = purpleLinePaddingTop / 2.35;
      defaultTopInRotation = 80;
      morePadding = 5;

    }else if (window.innerWidth <= 400 && window.innerWidth > 330) {
      defaultTopInRotation = 110;
      morePadding = 36;
    } else if (window.innerWidth <= 330) {
      defaultTopInRotation = 70;
      morePadding = 20;
      purpleLinePaddingTop = purpleLinePaddingTop / 2.9;
    }

    const arcTangent = Math.atan(
      (purpleLinePaddingTop + morePadding) / purpleLineWidth,
    );
    const degrees = arcTangent * (180 / Math.PI);
    const topInRotation = defaultTopInRotation - purpleLineMovement / 5;

    if (
      purpleLineMovement >= 0 &&
      inclination + purpleLineMovement / 50 < inclination + 5
    ) {
      if (window.innerWidth <= 800) {
        const padding = topInRotation - purpleLinePaddingTop * 0.25;
        sign.style.top = `${padding}px`;
      } else {
        sign.style.top = `${topInRotation}px`;
      }

      if (rotationMovement <= degrees) {
        sign.style.transform = `rotate(${rotationMovement}deg)`;
      } else {
        sign.style.transform = `rotate(${degrees}deg)`;
      }
    }
  };

  const handleScroll = () => {
    verifyPurpleLine();
    const spinner = document.querySelector('.spinner') as HTMLElement;
    const blackLine = document.querySelector('.blackLine') as HTMLElement;
    const hgroup = document.querySelector('.hgroup') as HTMLElement;

    const blackLineMovimento =
      window.innerHeight * 0.8 - blackLine.getBoundingClientRect().top - 128;

    const hgroupHeight = hgroup.getBoundingClientRect().height;
    const blackLinePadding = +getComputedStyle(blackLine)
      .getPropertyValue('padding-top')
      .replace('px', '');
    const spinnerTop = +getComputedStyle(spinner)
      .getPropertyValue('top')
      .replace('px', '');

    if (spinner.getBoundingClientRect().height > spinnerMaxHeight) {
      spinnerMaxHeight = spinner.getBoundingClientRect().height;
    }

    let soma = blackLinePadding + hgroupHeight - spinnerMaxHeight * 0.5;

    if(window.innerWidth <= 500 && window.innerWidth > 350){
      soma = blackLinePadding + (hgroupHeight * 0.2) - spinnerMaxHeight * 0.5;
    }else if(window.innerWidth <= 350){
      soma = blackLinePadding - spinnerMaxHeight * 0.5;
    }

    if (blackLineMovimento >= 0 && spinnerTop <= soma) {
      if (!(blackLineMovimento * 0.8 > soma)) {
        spinner.style.top = blackLineMovimento * 0.8 + 'px';
      }
    }
  };

  const spinnerBehindText = () => {
    if (window.innerWidth < 1164) {
      const content = document.querySelector(
        '.customersContent',
      ) as HTMLElement;
      const blackLine = document.querySelector('.blackLine') as HTMLElement;
      const sign = document.querySelector('.black') as HTMLElement;
      const customers = document.querySelector('.customers') as HTMLElement;

      customers.appendChild(content);

      blackLine.style.height = content.getBoundingClientRect().height + 'px';
      content.style.marginTop =
        -(
          content.getBoundingClientRect().height -
          +getComputedStyle(blackLine)
            .getPropertyValue('padding-top')
            .replace('px', '') *
            1.1
        ) + 'px';
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    spinnerBehindText();
  });

  return (
    <>
      <OurCustomersStyled id="customers" className="customers">
        <SpinningIconStyled className="spinner">
          <img src={Spinner} alt="L2 Code" />
        </SpinningIconStyled>

        <LineAnimation classe="blackLine" backgroundColor={colors.black}>
          <BlackLineStyled className="customersContent">

            <ContentStyled>

              <HeaderStyled className="hgroup">
                <Typography color='gray' tag='h2' size="medium" fontFamily="font1" lineHeight="line90" fontWeight="weight3">{t('customers.someCustomers')}</Typography>

                <Typography color='gray' tag="p">{t('customers.weAreProud')}</Typography>
              </HeaderStyled>

              <AsideStyled>
                <Typography color='gray' tag='p' size="xxsmall" letterSpacing="space1">&lt;{t('customers.alt.30Customers')}&gt;</Typography>
              </AsideStyled>
            </ContentStyled>

            <CustomersContainer className="customersList">
              <CustomersList customers={customers} />
            </CustomersContainer>
          </BlackLineStyled>
        </LineAnimation>
      </OurCustomersStyled>
      <BlackBg className="black">
        <SignContainerStyled className="signCustomers">
          <OutSourcing />
        </SignContainerStyled>
      </BlackBg>
    </>
  );
};

export default OurCustomers;
