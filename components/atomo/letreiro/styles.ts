import styled from 'styled-components';

export const SectionOutSourcingStyled = styled.section`
overflow: hidden;
position:absolute ;
  padding-top: 83px;
  bottom: 80px;
`;

export const ParagraphOutSourcingStyled = styled.p`
width: 150%;
::selection{
    background: #5900cc;
    color: #F2F3F4;
}
  font-weight: 800;
  font-size: 40px;
  line-height: 120%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #8e9195;
  font-family: 'Neue Machina';
  transform: translateX(100%);
  animation: moving 30s linear infinite;
  @keyframes moving {
    0% {
      transform: translateX(100%);
    }
    0% {
      transform: translateX(-100%);
    }
  }
`;
