import {
  CaseNumberStyled,
  CaseStyled,
  ContentStyled,
  ListStyled,
  InfoStyled,
  LinkStyled,
  TitleStyled,
  ImageStyled,
  SliderStyled,
  GhostStyled,
} from './styled';
import { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Case {
  number: string;
  title: string;
  info: string;
  image: string;
  alt: string;
  link: string;
  hover: string[];
}

interface CaseProps {
  cases: Case[];
}

function CaseList(props: CaseProps) {
  const interval = useRef(null);
  var currentImage = '';
  const [actualImage, setActualImage] = useState('');

  let tam = Math.ceil(props.cases.length/3);
  // anime slider
  const settings = {
    infinite: false,
    slidesToShow: 1,//1
    slidesToScroll: 1,
    swipeToSlide: false,
    speed: 400,
    variableWidth: true,
    rows: Math.ceil(props.cases.length/3),
    slidesPerRow: Math.ceil(props.cases.length/3), //1
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
          rows: 1,
          slidesPerRow: 1,
        }
      },
    ]
  };

  // anime scroll 
  useEffect(() => {
    const target = document.querySelectorAll<HTMLElement>('[data-anime]');
    function animeScroll() {
      const windowTop = window.pageYOffset + window.innerHeight * 0.7;
      target.forEach((element) => {
        const position = element.getBoundingClientRect();
        const positionAbsolute = position.top + window.scrollY;
        if (windowTop > positionAbsolute) {
          element.classList.add('animate');
        }
      });
    }
    animeScroll();
    if (target.length) {
      window.addEventListener('scroll', () => {
        animeScroll();
      });
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 500) {
      const images = document.querySelectorAll<HTMLElement>('.images');
      images.forEach((img) => {
        img.addEventListener('contextmenu', (e) => { e.preventDefault() });
      });
    }
  });

  // anime hover
  const initInterval = (images: string[]) => {
    interval.current = setInterval(() => {
      const index = currentImage != '' ? images.indexOf(currentImage) : 0;
      if (index == images.length - 1) {
        currentImage = images[0];
        setActualImage(currentImage);
      } else {
        currentImage = images[index + 1];
        setActualImage(currentImage);
      }
    }, 200);
  };

  const cancelInterval = (image: string) => {
    clearInterval(interval.current);
    interval.current = null;
    setActualImage(image);
  };

  /*let v = []
  for (let j=0; j<3; j++){ 
    for (let i=0; i<2; i++){
      if(((i*3)+j) >= 4)
      {
        break;
      }
      else
      {
        console.log('tt v = ' + ((i*3)+j))
        v.push(props.cases[((i*3)+j)])
      }
  }}
  console.log('helo = '+ v[2].title);*/


 let vetor_cases = []
 
  for (let j=0; j<3; j++){ 
    for (let i=0; i<Math.ceil(props.cases.length/3); i++){
      if(((i*3)+j) >= props.cases.length){
        break;
      }
      else{
        //console.log('tt = ' + ((i*3)+j))
        vetor_cases.push(props.cases[((i*3)+j)])
      }
    }
  }
 // vetor_cases.map((itemCase) => (
  //console.log('vetor_cases = ' + itemCase.number)
  //))

  
  /*
  let pos = 0; 
  let matrix = [];

  props.cases.forEach((item, index) => {
      if(index%3 == 0){
        pos++;
      }
      if(matrix[pos]){
        matrix[pos].push(item);
      }
      else{
        matrix[pos] = [item];
      }
    });
  //matrix.filter(item => item)  
  matrix.shift()
  */
  

  //const cases = 
  //props.cases.map((itemCase) => ( 

  //const cases =  
   // matrix.map((matrixCases) => (
    //  matrixCases.map((itemCase: any) => (
  
  const cases = 
    props.cases.map((itemCase) => (
    <CaseStyled key={itemCase.title} data-anime="animate">
          <CaseNumberStyled>Case {itemCase.number}</CaseNumberStyled>
          <TitleStyled>{itemCase.title}</TitleStyled>
          <InfoStyled>{itemCase.info}</InfoStyled>
          <LinkStyled className="images"
            onMouseEnter={() => {
              if (window.innerWidth > 800) {
                initInterval(itemCase.hover);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 800) {
                cancelInterval(itemCase.image);
              }
            }}
            onTouchStart={() => {
              initInterval(itemCase.hover);
            }}
            onTouchEnd={() => {
              cancelInterval(itemCase.image);
            }}
            >
            <ImageStyled className="images"
              src={itemCase.image}
              alt={itemCase.alt}
            />
            { 
              // itemCase.hover?.map(( 
              //(imageHover: any)
              itemCase.hover.map((
                imageHover => (
                <ImageStyled
                  key={imageHover}
                  src={imageHover}
                  alt={itemCase.alt}
                  className={
                    ((actualImage == imageHover) ? "images imageBlock" : "images imageNone")
                  }
                  />
              )))
            } 
          </LinkStyled>
        </CaseStyled> 
    // ))
  ))
  
  // cases.splice(props.cases.length, 0, <div> </div>)
  //cases.splice(3, 0, <div></div>)
  return (
    <ContentStyled>
      <ListStyled>
           {/* 
           for(let j=0; j<props.cases.length/3; j++){
           cases.splice(0, 3)}
          
            for(let j=0; j<cases.length; j++){
              cases.splice(0, 3)
            } */
          }
        {
          console.log('teste = '+ tam)
          
        }
        <SliderStyled {...settings}>
          { 
            cases
          }
          {/*<GhostStyled></GhostStyled> */}
        </SliderStyled>
      </ListStyled>
    </ContentStyled>
  );
}

export default CaseList;
