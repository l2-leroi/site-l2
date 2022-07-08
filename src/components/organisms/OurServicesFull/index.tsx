import React from 'react';
import Marquee from 'react-fast-marquee';
import i18next from 'i18next';
import { Typography } from '../../../styles/typography';
import {
    SectionStyled,
    HeaderStyled,
    TitleStyled,
    ParagraphStyled,
    AsideStyled,
    AsideTextStyled,
    ContentStyled,
    VideoSectionStyled,
    VideoTitleStyled,
    TitleGroupStyled,
    OurServicesFullStyled,
    ArrowSpinnerComponentStyled


} from './styled';
import ServiceList from '../../molecules/ServiceList';
import ScrollCircle from '../../atoms/ScrollCircle';
export default function OurServicesFull() {
  const {t} = i18next


  const services = [
    {title: "ourServicesFull.outSourcingAdvisory",
    hasImages: false, 
    images: [], 
    hasVideo: true, 
    video: {src: "", text: "Leroi Oliveira ● Líder técnico"}, 
    list: ["optimization", "access", "costs", "services", "flexibility", "updated"]
    },
    {
    title: "ourServicesFull.ideation",
    hasImages: true, 
    images: ["first-image-services.png", "second-image-services.png"], 
    hasVideo: false, 
    video: {}, 
    list: ["scope", "product", "differential", "riskReduction", "immersive", "costReduction"]
    },
    {title: "ourServicesFull.UXUI",
    hasImages: false, 
    images: [], 
    hasVideo: true, 
    video: {src: "", text: null}, 
    list: ["design", "architecture", "research", "systems", "concept",
    "mobile", "thinking", "prototype"]
    },
    {title: "ourServicesFull.startupService",
    hasImages: false, 
    images: [], 
    hasVideo: true, 
    video: {src: "", text: "Leroi Oliveira ● Líder técnico"}, 
    list: ["market", "pitch", "growth", "mvp", "investors", "test"]
    },
    {title: "ourServicesFull.ITConsulting",
    hasImages: true, 
    images: ["first-image-services.png", "second-image-services.png"], 
    hasVideo: false, 
    video: {}, 
    list: ["requirement", "cloud", "advice", "process", "infrastructure"]
    },
  ];

  return (
    <SectionStyled>
      <OurServicesFullStyled>
      
          <HeaderStyled>
              <TitleGroupStyled>
                <TitleStyled>
                  <Typography tag='h2' color='gray' size='medium' fontWeight='weight3' fontFamily='font1' lineHeight='line90'>
                    {t('ourServicesFull.ourServices')}
                  </Typography>
                </TitleStyled>
                <ParagraphStyled>
                      <Typography tag='p' color='gray'>{t('ourServicesFull.paragraph')}</Typography>
                  </ParagraphStyled> 
              </TitleGroupStyled>

              <AsideStyled>
                <Typography color='gray' tag='p' size="xxsmall" letterSpacing="space1">
                  &lt;{t('ourServicesFull.makeItHappen')}&gt;
                </Typography>
              </AsideStyled>
              
          </HeaderStyled>

        <ArrowSpinnerComponentStyled>
          <ScrollCircle isWhiteImage={true}
              blackImage={''}
              whiteImage={'/images/innovativeCompanies.png'}
              alt={`${t('images.alt.thereIsMore')}`} />
        </ArrowSpinnerComponentStyled>
          

          <ContentStyled>
              <ServiceList services={services}/>
          </ContentStyled>

          <VideoSectionStyled>
              <VideoTitleStyled>
              <Typography color='gray' tag="h2" size='medium' fontWeight='weight3' fontFamily='font1' lineHeight='line90'>
                  {t('ourServicesFull.seeHowItWorks')}&lt;&gt;
                  </Typography>
              </VideoTitleStyled>
          </VideoSectionStyled>

      </OurServicesFullStyled>
    </SectionStyled>
  );
}