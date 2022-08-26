import i18next from 'i18next';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { Typography } from '../../../styles/typography';

import {
  ListStyled,
  ContentStyled,
  ImageStyled,
  ImageContainerStyled,
  VideoStyled,
  AltVideoStyled,
  AboutListStyled,
  ListItemStyled,
  SubtitleStyled,
  ParagraphStyled,
  LineStyled,
  VideoIconContainer,
  IconStyled,
} from './styled';

const DynamicComponent = dynamic(() => import('../../atoms/AudioSpectrum'), {
  ssr: false,
});

interface Service {
  title: string;
  hasImages: boolean;
  images: string[];
  hasVideo: boolean;
  video: { src?: string; text?: string };
  list: string[];
}

interface ServiceProps {
  services: Service[];
}

function ServiceList({ services }: ServiceProps) {
  const { t } = i18next;
  const containerRef = useRef();

  return (
    <ListStyled>
      {services.map((service) => (
        <ContentStyled key={service.title} ref={containerRef}>
          <SubtitleStyled>
            <Typography
              fontWeight="weight3"
              size="small"
              lineHeight="line120"
              letterSpacing="space1"
              color="gray"
            >
              {t(`${service.title}.title`)}
            </Typography>
          </SubtitleStyled>

          <ParagraphStyled>
            <Typography color="gray">
              {t(`${service.title}.paragraph`)}
            </Typography>
          </ParagraphStyled>

          {service.hasImages ? (
            <ImageContainerStyled>
              {service.images.map((image) => (
                <ImageStyled src={`/images/${image}`} />
              ))}
            </ImageContainerStyled>
          ) : null}

          {service.hasVideo ? (
            <VideoStyled>
              {service.video.text !== null ? (
                <>
                  <VideoIconContainer>
                    <DynamicComponent audio="/audio/audioTeste2.mp3" />
                  </VideoIconContainer>

                  <AltVideoStyled>
                    <Typography color="gray" size="xxsmall">
                      {service.video.text}
                    </Typography>
                  </AltVideoStyled>
                </>
              ) : (
                <VideoIconContainer>
                  <IconStyled src="/images/video-icon-provisional.png" />
                </VideoIconContainer>
              )}
            </VideoStyled>
          ) : null}

          <AboutListStyled>
            {service.list.map((text, index) => (
              <ListItemStyled key={index}>
                <Typography
                  color="gray"
                  tag="p"
                  dangerouslySetInnerHTML={{
                    __html: t(`${service.title}.list.${text}`),
                  }}
                />
              </ListItemStyled>
            ))}
          </AboutListStyled>
          <LineStyled />
        </ContentStyled>
      ))}
    </ListStyled>
  );
}

export default ServiceList;
