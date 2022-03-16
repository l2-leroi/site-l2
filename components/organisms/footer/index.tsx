import { FooterStyled, ContactStyled, InfoStyled } from './styled';
import logo from '../../../assets/images/Logo-Small.svg';
import heart from '../../../assets/images/Vector.svg';

const Footer = () => {
  return (
    <FooterStyled>
      <section>
        <aside>
          <p>&lt;AND DANCE&gt;</p>
        </aside>

        <h2>VAMOS CONVERSAR</h2>

        <ContactStyled>
          <h3>nosso whatsapp</h3>
          <p>+55 51 99693.9336</p>
        </ContactStyled>

        <ContactStyled>
          <h3>nosso e-mail</h3>
          <p>contato@l2code.com.br</p>
        </ContactStyled>

        <ContactStyled>
          <h3>entre no time</h3>
          <p>talentos@l2code.com.br</p>
        </ContactStyled>
      </section>
      <footer>
        <InfoStyled>
          <p>Abraçamos os talentos do mundo</p>
          <p>Somos uma empresa que trabalha 100% remoto</p>
        </InfoStyled>
        <InfoStyled>
          <img src={logo} alt="L2 Code" />
        </InfoStyled>
        <InfoStyled>
          <p>Feito com <img src={heart} alt="Coração" /> L2code</p>
          <p>Copyright © Todos os direitos reservados</p>
        </InfoStyled>
      </footer>
    </FooterStyled>
  );
};

export default Footer;
