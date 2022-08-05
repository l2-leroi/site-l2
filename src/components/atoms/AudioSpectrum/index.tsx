import { init } from "i18next";
import { useEffect, useRef } from "react";
import { colors } from "../../../styles/colors";

interface audioProps {
    isPaused: boolean;
    audioPercent: number;
    containerWidth: number,
  }

    const AudioSpectrum = (props: audioProps) => {
        const canvas = useRef();
        
        const frequency = [121, 103, 86, 43, 88, 51, 43, 12, 103, 121, 43, 51, 51, 43, 86, 103, 121, 86, 103, 121, 121, 103, 86, 121, 103, 83, 43, 51, 43, 43, 63, 121]
        const width = props.containerWidth - 160;
        const canvaAnimation = () => {
            const canvasElement = canvas.current as HTMLCanvasElement;

            if(canvasElement){
                if(canvasElement.getContext){
                    const ctx = canvasElement.getContext('2d');
                    ctx.globalCompositeOperation = 'destination-over';
                    if(props.audioPercent < 1){
                        ctx.clearRect(0,0,width,150);
                    }
                    frequency.forEach((item, index) => {
                        console.log("audioPercent", props.audioPercent)
                        if(((index) * 16 ) > (width * props.audioPercent)/100){
                            ctx.fillStyle = colors.lightGray;
                            ctx.fillRect(index * 16, 150 - item, 2, item);
                        }else {
                            ctx.fillStyle = colors.green;
                            ctx.clearRect(index * 16, 150 - item, 2, item);

                            for(let i = 0; i < 4; i++){
                                ctx.fillRect(index * 16 + i, 150 - item, 1, item);
                            }

                        }
                        // ctx.fillRect(index * 11, 150 - item, 3, item);
                    })

                }
            }
        }

        useEffect(() => {
            window.requestAnimationFrame(canvaAnimation)
        }, []);

        useEffect(()=> {
            console.log("entrou uma vez")
            window.requestAnimationFrame(canvaAnimation)
        }, [props.audioPercent])
        
    return (
        (props.containerWidth > 0)?
      <canvas width={width} height={150} ref={canvas} />
      :
      <canvas width={300} height={150} ref={canvas} />
    );
  };
  export default AudioSpectrum;
  