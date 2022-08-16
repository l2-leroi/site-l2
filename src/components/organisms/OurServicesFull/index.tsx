import React, { useRef } from 'react';
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
    VideoTitleStyled,
    TitleGroupStyled,
    OurServicesFullStyled,
    ArrowSpinnerComponentStyled,
    ArrowSpinnerContainerStyled,
    


} from './styled';
import ServiceList from '../../molecules/ServiceList';
import ScrollCircle from '../../atoms/ScrollCircle';
import DiagonalVideo from '../../atoms/DiagonalVideo';
export default function OurServicesFull() {
  const {t} = i18next
  const arrowSpinner = useRef();
  const content = useRef();

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

  const animateCircle = () => {
    const contentElement = content.current as HTMLElement;
    const circleElement = arrowSpinner.current as HTMLElement;

    const heightContent = contentElement.getBoundingClientRect().height;
    const distanceTop = innerHeight * 0.3 - contentElement.getBoundingClientRect().top;

    const topCircle = +getComputedStyle(circleElement).getPropertyValue('top').replace('px', '');
    const contentWithoutCircle = heightContent - +getComputedStyle(circleElement).getPropertyValue('height').replace('px', '')

    if(distanceTop > 0 && distanceTop < contentWithoutCircle)
      circleElement.style.top = distanceTop+"px";

    if(distanceTop < 0 && topCircle > 0)
      circleElement.style.top = "0px";

    if(distanceTop > heightContent && topCircle < contentWithoutCircle)
      circleElement.style.top = contentWithoutCircle+"px";

    if(topCircle > heightContent)
      circleElement.style.top = contentWithoutCircle+"px";
  }

  React.useEffect(()=> {
    window.onresize = animateCircle;
    window.addEventListener('scroll', animateCircle);
    window.addEventListener('resize', animateCircle);
    screen.orientation.addEventListener('change', animateCircle);
    return () => {
      window.removeEventListener('scroll', animateCircle);
      window.removeEventListener('resize', animateCircle);
      screen.orientation.removeEventListener('change', animateCircle);
    }
  }, []);

  return (
    <>
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

      <ArrowSpinnerContainerStyled>
        <ArrowSpinnerComponentStyled ref={arrowSpinner}>
            <ScrollCircle isWhiteImage={true}
                blackImage={''}
                whiteImage={'/images/innovativeCompanies.png'}
                alt={`${t('images.alt.thereIsMore')}`} />
          </ArrowSpinnerComponentStyled>
      </ArrowSpinnerContainerStyled>
        

          <ContentStyled ref={content}>
              <ServiceList services={services}/>
          </ContentStyled>

      </OurServicesFullStyled>
    </SectionStyled>
    <DiagonalVideo>
    <VideoTitleStyled>
        <Typography color='gray' tag="h2" size='medium' fontWeight='weight3' fontFamily='font1' lineHeight='line90'>
              {t('ourServicesFull.seeHowItWorks')}&lt;&gt;
        </Typography>
    </VideoTitleStyled>
    </DiagonalVideo>
    </>
  );
}