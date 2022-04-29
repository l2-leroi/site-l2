import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Heading } from '../../atoms/Typography/teste';

class Teste extends Component {
  render() {
    return (
      <div>
        <>
          <Heading size="xxlarge" fontWeight="wheight1" fontFamily="font1">
            NEUE MACHINA
          </Heading>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            <Heading size="xlarge" fontFamily="font1">
              NEUE MACHINA
            </Heading>
            <br /> <br /> <br />
            <Heading size="large" fontFamily="font1">
              NEUE MACHINA
            </Heading>
          </div>

          <Heading fontFamily="font2" size="xlarge">
            CIRCULAR AIR PRO
          </Heading>
        </>
      </div>
    );
  }
}

export default Teste;
