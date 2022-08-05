import { Typography } from '../../../styles/typography';
import i18next from 'i18next';

import {
  ListStyled,
  ContentStyled,
  ImageStyled,
  ImageContainerStyled,
  VideoStyled,
  AltVideoStyled,
  AboutListStyled,
  ListItemStyled,
  VideoIconStyled,
  SubtitleStyled,
  ParagraphStyled,
  LineStyled,
  VideoIconContainer,
  IconStyled,

} from './styled';

import { colors } from '../../../styles/colors';
import AudioSpectrum from '../../atoms/AudioSpectrum';
import { useEffect, useRef, useState } from 'react';

interface Service {
  title: string,
  hasImages: boolean,
  images: string[],
  hasVideo: boolean,
  video: {src?: string, text?: string},
  list: string[]
}

interface ServiceProps {
  services: Service[];
}

function ServiceList(props: ServiceProps) {
  const {t} = i18next
  const audioRef = useRef();
  const containerRef = useRef();
  const [isPaused, setIsPaused] = useState(true);
  const [audioPercent, setAudioPercent] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const playAndStop = () => {
    const audio = audioRef.current as HTMLAudioElement;

    isPaused? audio.play() : audio.pause();
    setIsPaused(!isPaused)
  }

  const updateAudioPercent = () => {
    const audio = audioRef.current as HTMLAudioElement;
    const percent = (audio.currentTime * 100)/audio.duration;
    setAudioPercent(percent);

    if(percent === 100)
      return setIsPaused(true);
      
    if(isPaused === false){
      setTimeout(()=> {
        updateAudioPercent();
      }, 100)
    }
    
  }

  useEffect(() => {
    const containerElement = containerRef.current as HTMLElement;
    const width = containerElement.offsetWidth;
    console.log(width);
    setContainerWidth(width);
  })

  useEffect(()=> {
    if(isPaused === false)
      updateAudioPercent(); 
  }, [isPaused])
  return (
    <>
    <ListStyled>
      {
        props.services.map((service) => (
            <ContentStyled key={service.title} ref={containerRef}>
              <SubtitleStyled>
                <Typography fontWeight='weight3' size='small' lineHeight='line120' letterSpacing='space1' color='gray'>{t(service.title+".title")}</Typography>
              </SubtitleStyled>
            
            <ParagraphStyled>
              <Typography color='gray'>{t(service.title+".paragraph")}</Typography>
            </ParagraphStyled>
            
                {(service.hasImages)? (
                  <ImageContainerStyled>
                  {service.images.map((image) => 
                    <ImageStyled src={"/images/"+image} />
                  )}
                  </ImageContainerStyled>
                ) : null}

                {(service.hasVideo)? (
                    <VideoStyled>
                      {(service.video.text !== null)?(<>
                        <VideoIconContainer>
                          <audio id="audio-element"
                          src="/audio/audioTeste2.mp3"
                          ref={audioRef} />
                          <VideoIconStyled onClick={playAndStop} className={isPaused? 'pause' : ''}>
                            <IconStyled src='/images/video-icon.png'></IconStyled>
                          </VideoIconStyled>
                          {/* <AudioSpectrum isPaused={isPaused} audioPercent={audioPercent} containerWidth={containerWidth}/> */}
                        </VideoIconContainer>
                        
                        <AltVideoStyled>
                          <Typography color='gray' size='xxsmall'>{service.video.text}</Typography>
                        </AltVideoStyled>
                        
                        </>
                      ):(
                        <VideoIconContainer><IconStyled src='/images/video-icon-provisional.png'/></VideoIconContainer>
                       
                      )}
                    </VideoStyled>
                ) : null}

                <AboutListStyled>
                  {service.list.map((text, index) => 
                    <ListItemStyled key={index}>
                      
                      <Typography color='gray' tag="p" dangerouslySetInnerHTML={{ __html: t(service.title+".list."+text) }}></Typography>
                    </ListItemStyled>
                  )}
                  
                </AboutListStyled>
                <LineStyled />
            </ContentStyled>
        )) 
      }
      </ListStyled>
    </>
  );
};

export default ServiceList;