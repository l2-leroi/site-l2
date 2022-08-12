import { useEffect, useRef, useState } from 'react';
import { ArrowIcon } from '../../../assets/icons/arrowIcon';
import {
  SectionStyled,
  DiagonalDivStyled,
  VideoStyled,
  PlayerIconStyled,
  VideoIconStyled,
  TitleStyled,
  VideoControlsStyled,
  ProgressContainerStyled,
  ControlsStyled,
  ButtonStyled,
  PrimaryButtonsStyled,
  ProgressStyled,
  ProgressCircle,
  VolumeContainerStyled,
  VolumeSliderStyled,
  SliderContainer,
  ControlsContainer,
  Teste,
  AnchorStyled,
} from './styled';

interface ButtonProps {
  linkBtn: string;
  borderColor?: string;
  backgroundColor?: string;
  text: string;
}

const DiagonalVideo = ({ children }) => {
  const diagonal = useRef();
  const video = useRef();
  const controls = useRef();
  const progress = useRef();
  const anchor = useRef();
  const teste = useRef();
  const teste2 = useRef();
  const controlsContainer = useRef();
  const volumeSlider = useRef();
  const videoContainer = useRef();
  const [padding, setPadding] = useState(0);
  const [wasAnimated, setWasAnimated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoHeight, setVideoHeight] = useState('auto');
  const [videoWidth, setVideoWidth] = useState('auto');
  const [fullScreen, setFullScreen] = useState(false);
  const [volumeVideo, setVolumeVideo] = useState('100');
  const [mouseMove, setMouseMove] = useState(false);
  const [clickMobile, setClickMobile] = useState(false);
  let timeout;

  const diagonalPadding = (isResize?) => {
    console.log('entrou');
    if (window.innerWidth < 1000) mobileDiagonalHeight();

    const radians = 17.76 * (Math.PI / 180);
    const padding = (Math.tan(radians) * innerWidth) / 2;

    setPadding(padding);
    updateVideoHeight(padding);
  };

  const mobileDiagonalHeight = () => {
    const videoElement = video.current as HTMLElement;
    const videoContainerElement = videoContainer.current as HTMLElement;
    const diagonalElement = diagonal.current as HTMLElement;

    videoElement.style.width = '100%';
    videoContainerElement.style.width = '100%';

    const height = videoElement.getBoundingClientRect().height;
    diagonalElement.style.height = height + 'px';

    videoElement.style.width = 'auto';
  };

  const updateVideoHeight = (padding) => {
    const diagonalElement = diagonal.current as HTMLElement;
    if (padding > 0) {
      console.log;
      if (window.innerWidth > 1000) diagonalElement.style.height = '80vh';

      const height = +getComputedStyle(diagonalElement)
        .getPropertyValue('height')
        .replace('px', '');
      console.log(height);
      const sum = height + padding * 2;
      setVideoHeight(sum + 'px');
      setVideoWidth('auto');
    } else {
      setVideoHeight('auto');
      setVideoWidth('100%');
    }
  };

  const toggleFullScreen = async () => {
    const diagonalElement = diagonal.current as HTMLElement;
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        await diagonalElement.requestFullscreen();
        setFullScreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
        setFullScreen(false);
      }
    }
  };

  const setFullHeight = () => {
    const diagonalElement = diagonal.current as HTMLElement;
    const height = +getComputedStyle(diagonalElement)
      .getPropertyValue('height')
      .replace('px', '');
    const sum = height + padding * 2;
    setVideoHeight(sum + 'px');
    setVideoWidth('auto');
  };

  const handleScroll = async () => {
    await document.exitFullscreen();
    const diagonalElement = diagonal.current as HTMLElement;

    window.scrollBy({
      top: diagonalElement.getBoundingClientRect().top,
      left: 0,
      behavior: 'smooth',
    });
  };

  const fullScreenMode = async () => {
    await toggleFullScreen();
    if (document.fullscreenElement) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.removeEventListener('fullscreenchange', handleFullScreen);
      exitFullscreen();
    }
  };

  const enterFullscreen = async () => {
    const videoContainerElement = videoContainer.current as HTMLElement;
    setFullScreen(true);
    document.addEventListener('fullscreenchange', handleFullScreen);
    if (innerWidth > 1000) {
      videoContainerElement.onscroll = handleScroll;
    }

    videoContainerElement.style.overflowY = 'scroll';

    if (innerWidth < 1000) {
      await window.screen.orientation.lock('landscape-primary').then(
        (success) => console.log(success),
        (failure) => console.log(failure),
      );
    } else {
      setFullHeight();
    }
  };

  const exitFullscreen = async () => {
    const videoContainerElement = videoContainer.current as HTMLElement;
    const anchorElement = anchor.current as HTMLElement;
    videoContainerElement.onscroll = null;
    videoContainerElement.style.overflowY = 'hidden';
    const videoElement = video.current as HTMLElement;

    setFullScreen(false);
    if (innerWidth < 1000) {
      await window.screen.orientation.unlock();
      videoElement.click();
      videoElement.click();
    }

    anchorElement.click();
  };

  const animateVideo = () => {
    setWasAnimated(true);
    updateVideoHeight(0);
  };

  const handleMouse = () => {
    setMouseMove(true);
    setClickMobile(true);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setMouseMove(false);
      setClickMobile(false);
    }, 5000);
  };

  const videoControl = () => {
    const videoElement = video.current as HTMLVideoElement;

    if (innerWidth < 1000 && !clickMobile && isPlaying) {
      return handleMouse();
    } else {
      if (document.fullscreenElement && isPlaying) {
        fullScreenMode();
      }

      if (!wasAnimated) animateVideo();
      else diagonalPadding(true);

      setWasAnimated(!wasAnimated);

      if (isPlaying) {
        videoElement.pause();
        videoElement.onmousemove = null;
      } else {
        videoElement.onmousemove = handleMouse;
        videoElement.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  const resizeAll = () => {
    if (wasAnimated) {
      console.log('wasAnimated');
      updateVideoHeight(0);
    } else {
      console.log('not was');
      diagonalPadding();
    }
  };

  const onTimeUpdate = () => {
    const videoElement = video.current as HTMLVideoElement;
    const progressElement = progress.current as HTMLProgressElement;
    const percentagePosition =
      (100 * videoElement.currentTime) / videoElement.duration;
    progressElement.value = percentagePosition;
    progressElement.style.backgroundSize = `${percentagePosition}% 100%`;

    if (videoElement.ended) {
      videoControl();
    }
  };

  const onTimeUpdateManually = () => {
    const videoElement = video.current as HTMLVideoElement;
    const progressElement = progress.current as HTMLProgressElement;
    const time = (progressElement.value * videoElement.duration) / 100;
    videoElement.currentTime = time;
    progressElement.style.backgroundSize = `${progressElement.value}% 100%`;
  };

  const skipSeconds = () => {
    const videoElement = video.current as HTMLVideoElement;
    videoElement.currentTime += 10;
  };

  const setInitialVolume = () => {
    const videoElement = video.current as HTMLVideoElement;
    const volumeSliderElement = volumeSlider.current as HTMLInputElement;
    1;
    volumeSliderElement.value = '' + videoElement.volume * 100;
    setVolumeVideo('' + videoElement.volume * 100);
  };

  const volumeControl = () => {
    const videoElement = video.current as HTMLVideoElement;
    const volumeSliderElement = volumeSlider.current as HTMLInputElement;
    setVolumeVideo(volumeSliderElement.value);
    videoElement.volume = +volumeSliderElement.value / 100;
  };

  const muteVideo = () => {
    const videoElement = video.current as HTMLVideoElement;
    const volumeSliderElement = volumeSlider.current as HTMLInputElement;
    videoElement.muted = !videoElement.muted;
    if (videoElement.muted == true) {
      setVolumeVideo('' + 0);
      volumeSliderElement.value = '' + 0;
    } else {
      setVolumeVideo('' + videoElement.volume * 100);
      volumeSliderElement.value = '' + videoElement.volume * 100;
    }
  };

  useEffect(() => {
    diagonalPadding();
    const videoElement = video.current as HTMLVideoElement;
    const progressElement = progress.current as HTMLProgressElement;
    videoElement.addEventListener('timeupdate', onTimeUpdate);
    progressElement.addEventListener('change', onTimeUpdateManually);
    setInitialVolume();

    window.onresize = resizeAll;
    // return window.onresize = null;
  }, []);

  return (
    <>
      <SectionStyled>
        <DiagonalDivStyled
          style={{ margin: `${padding}px 0px`, position: 'relative' }}
          ref={diagonal}
          id="anchor"
          className={wasAnimated ? 'wasAnimated' : ''}
        >
          <AnchorStyled href="#anchor" ref={anchor}></AnchorStyled>
          <TitleStyled
            style={{ display: isPlaying ? 'none' : 'block' }}
            className={isPlaying ? '' : 'animate'}
          >
            {children}
          </TitleStyled>
          <Teste
            ref={videoContainer}
            style={{ height: videoHeight, width: videoWidth }}
          >
            <VideoStyled
              src="/video/video-5-teste.mp4"
              className={
                isPlaying && fullScreen && !mouseMove ? 'mouseHide' : ''
              }
              style={{
                height: videoHeight,
                width: videoWidth,
                margin: fullScreen ? '5px 0px' : 0,
              }}
              ref={video}
              onClick={videoControl}
              onEnded={videoControl}
            />
            <VideoIconStyled>
              <PlayerIconStyled
                src="/images/play-video-icon.png"
                style={{ display: isPlaying ? 'none' : 'block' }}
                className={isPlaying ? '' : 'animate'}
                onClick={videoControl}
              ></PlayerIconStyled>
            </VideoIconStyled>
          </Teste>
          <VideoControlsStyled
            className={isPlaying && (mouseMove || clickMobile) ? 'animate' : ''}
            ref={controls}
          >
            <ProgressContainerStyled>
              <ProgressStyled
                type={'range'}
                min={0}
                max={100}
                step="0.1"
                ref={progress}
                onChange={onTimeUpdateManually}
              />
            </ProgressContainerStyled>
            <ControlsStyled>
              <PrimaryButtonsStyled>
                <ButtonStyled
                  src="/images/control-pause.png"
                  onClick={videoControl}
                ></ButtonStyled>
                <ButtonStyled
                  src="/images/control-skip.png"
                  onClick={skipSeconds}
                ></ButtonStyled>
                <VolumeContainerStyled>
                  <ButtonStyled
                    src={
                      volumeVideo == '0'
                        ? '/images/control-muted.png'
                        : '/images/control-volume.png'
                    }
                    className={volumeVideo == '0' ? 'muted' : ''}
                    onClick={muteVideo}
                  />
                  <SliderContainer>
                    <VolumeSliderStyled
                      type={'range'}
                      min={0}
                      max={100}
                      onChange={volumeControl}
                      ref={volumeSlider}
                      style={{ backgroundSize: `${volumeVideo}% 100%` }}
                    />
                  </SliderContainer>
                </VolumeContainerStyled>
              </PrimaryButtonsStyled>
              <ButtonStyled
                src="/images/control-fullscreen.png"
                onClick={fullScreenMode}
                style={{ marginRight: '40px' }}
              ></ButtonStyled>
              <ButtonStyled src="/images/control-settings.png"></ButtonStyled>
            </ControlsStyled>
          </VideoControlsStyled>
        </DiagonalDivStyled>
      </SectionStyled>
    </>
  );
};

export default DiagonalVideo;
