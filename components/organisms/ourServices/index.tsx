import React from 'react';
import Image from 'next/image';
import {
  Container,
  DivOurServices,
  OutSourcing,
  ButtonServices,
} from './styles';
import seta from '../../../assets/images/seta.svg';

export default function OurServices() {

  return (
    <Container>
      <DivOurServices>
        <h1>
          NOSSOS <br /> SERVIÇOS
        </h1>
        <p>
          Melhoramos a experiência dos produtos e <br />
          serviços de nossos clientes, com foco em <br /> resultados para seus
          negócio.
        </p>

        <ButtonServices>
          <button>NOSSOS SERVIÇOS</button>
          <Image src={seta} alt="seta" />
        </ButtonServices>
        
      </DivOurServices>
      <OutSourcing>
        <p id="letreiro">
          Outsourcing Consultivo · Ideação · Design · Atendimento à Start-up ·
          Consultora em TI
        </p>
      </OutSourcing>
    </Container>
  );
}
