import styled from 'styled-components';

export const SectionOutSourcingStyled = styled.section`
 overflow: hidden;
  position: absolute;
  transform: translateY(30rem);
  @media (max-width: 500px) {
    transform: translateY(20rem);
  }
`;

export const ParagraphOutSourcingStyled = styled.p`
  transform: translateX(100%);
  animation: moving 20s linear infinite;
  animation-duration: 20s;
  @keyframes moving {
    0% {
      transform: translateX(90%);
    }
    0% {
      transform: translateX(-100%);
    }
  }
  width: 150%;
  ::selection {
    background: #5900cc;
    color: #f2f3f4;
  }
  font-weight: 800;
  font-size: 40px;
  line-height: 120%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #8e9195;
  font-family: 'Neue Machina';

  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    width: 300%;
  }
`;
