import { Typography } from '../../../styles/typography';
import {  } from './styled';

import {
  ListStyled,
  ContentStyled,
  ImageStyled,
  VideoStyled,
  AltVideoStyled,
  AboutListStyled,
  ListItemStyled,
  VideoIconStyled,
  SubtitleStyled,
  ParagraphStyled

} from './styled';

interface Service {
  title: string,
  paragraph: string,
  hasImages: boolean,
  images: string[],
  hasVideo: boolean,
  video: {src?: string, text?: string},
  list: string[]
}

interface Video {
  src: string,
  text: string,
}

interface ServiceProps {
  services: Service[];
}

function ServiceList(props: ServiceProps) {
  return (
    <>
    <ListStyled>
      {
        props.services.map((service) => (
            <ContentStyled key={service.title}>
            <Typography tag='h3' fontWeight='weight3' size='small' lineHeight='line120' letterSpacing='space1' color='gray'>{service.title}</Typography>
            <Typography color='gray' tag="p">{service.paragraph}</Typography>
                {(service.hasImages)? (
                  service.images.map(() => 
                    <ImageStyled />
                  )
                ) : null}

                {(service.hasVideo)? (
                    <VideoStyled>
                      {(service.video.text !== null)?(<>
                        <VideoIconStyled src='/images/video-icon.png'/>
                        <VideoIconStyled src='/images/audio-icon.png'/>
                        <AltVideoStyled>
                          <Typography color='gray' tag="span" size='xxsmall'>{service.video.text}</Typography>
                        </AltVideoStyled>
                        
                        </>
                      ):(
                        <VideoIconStyled src='/images/video-icon-provisional.png'/>
                      )}
                    </VideoStyled>
                ) : null}

                <AboutListStyled>
                  {service.list.map((text, index) => 
                    <ListItemStyled key={index}>
                      <Typography color='gray' tag="p">{text}</Typography>
                    </ListItemStyled>
                  )}
                  
                </AboutListStyled>
                <hr/>
            </ContentStyled>
        )) 
      }
      </ListStyled>
    </>
  );
};

export default ServiceList;