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
  VideoIconContainer

} from './styled';

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
  return (
    <>
    <ListStyled>
      {
        props.services.map((service) => (
            <ContentStyled key={service.title}>
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
                          {/* <VideoIconStyled src='/images/video-icon.png'/> */}
                          <VideoIconStyled src='/images/audio-icon.png'/>
                        </VideoIconContainer>
                        
                        <AltVideoStyled>
                          <Typography color='gray' size='xxsmall'>{service.video.text}</Typography>
                        </AltVideoStyled>
                        
                        </>
                      ):(
                        <VideoIconContainer><VideoIconStyled src='/images/video-icon-provisional.png'/></VideoIconContainer>
                       
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