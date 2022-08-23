import { init } from 'i18next';
import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { colors } from '../../../styles/colors';

import {
  IconStyled,
  AudioContainerStyled,
  AudioIconStyled,
  WaveForm,
} from './styled';

interface audioProps {
  audio: string;
}

const AudioSpectrum = (props: audioProps) => {
  const waveform = useRef();
  const audioRef = useRef();
  let wavesurfer;
  const button = useRef();

  const wave =  () => {
    const div = waveform.current as HTMLElement;
    const buttonElement = button.current as HTMLElement;
    wavesurfer = WaveSurfer.create({
      container: div,
      waveColor: colors.lightGray,
      progressColor: colors.green,
      cursorColor: 'transparent',
      barWidth: 3,
      barRadius: 0,
      cursorWidth: 1,
      height: 200,
      barGap: 12,
    })

    wavesurfer.load(props.audio);

    buttonElement.onclick = () => {
        if(wavesurfer.isPlaying()){
            buttonElement.classList.remove("pause")
        }else{
            buttonElement.classList.add("pause")
        }
        wavesurfer.playPause();
    }

    wavesurfer.on('finish', function () {
        wavesurfer.stop();
        buttonElement.classList.remove("pause")
    });

    var responsiveWave = wavesurfer.util.debounce(function() {
        wavesurfer.empty();
        wavesurfer.drawBuffer();
      }, 150);
      
      window.addEventListener('resize', responsiveWave);
  };

  useEffect(() => {
    if (props.audio) {
        wave();
    }
  }, []);

  return (
    <>
      {props.audio && (
        <AudioContainerStyled>
          <AudioIconStyled ref={button}>
            <IconStyled src="/images/video-icon.png" />
          </AudioIconStyled>
          <WaveForm id="waveform" ref={waveform} />
        </AudioContainerStyled>
      )}
    </>
  );
};
export default AudioSpectrum;
