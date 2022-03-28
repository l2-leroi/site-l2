import styled from 'styled-components';

export const SectionOutSourcingStyled = styled.section`
  overflow: hidden;
  position: absolute;
  padding-top: 83px;
  bottom: 4vw;
`;

export const ParagraphOutSourcingStyled = styled.p`
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
  transform: translateX(100%);
  animation: moving 20s linear infinite;
  @keyframes moving {
    0% {
      transform: translateX(100%);
    }
    0% {
      transform: translateX(-100%);
    }
  }

  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;
