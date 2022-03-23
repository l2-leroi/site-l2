import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  margin-bottom:10vh;
`;

export const DivOurServices = styled.div`
  padding-top: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #171b21;
  border-radius: 8px;
  width: 1200px;
  height: 611px;
  h1 {
    font-weight: 800;
    font-size: 64px;
    line-height: 90%;
    text-align: center;
    letter-spacing: -0.04em;
    color: #f2f3f4;
    margin-bottom: 24px;
    font-family: 'Neue Machina';
  }
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #f2f3f4;
    font-family: 'Circular Air Pro';
  }
`;

export const OutSourcing = styled.div`
  position: absolute;
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
  }
`;

export const ButtonServices = styled.div`
display:flex ;
text-align:center ;
  margin-top: 48px;
  button {
    width: 241px;
    height: 50px;
    font-size: 24px;
    background: #20bd9d;
    border: 2px solid #20bd9d;
    box-sizing: border-box;
    border-radius: 24px;
    letter-spacing: -0.04em;
    color: #171b21;
    margin-right:8px;
  }
`;
