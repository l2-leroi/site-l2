import styled from 'styled-components';

export const Container = styled.div`
  
`;
export const ContainerOutSourcing = styled.div`
  position: absolute;
  padding-top:30px;
  bottom: 80px;
  width: 1899px;
  p {
    font-weight: 800;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.02em;
    color: #8e9195;
    width: 100%;
    font-family: 'Neue Machina';
    transform: translateX(100%);
    animation: moving 25s linear infinite;
  }
  @keyframes moving{
    0%{
      transform: translateX(100%);
    }
    0%{
      transform: translateX(-100%);
    }
  }
`;