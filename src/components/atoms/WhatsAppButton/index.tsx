import { FloatingButtonWPP } from './styled';

function WhatsAppButton() {
  return (
    <FloatingButtonWPP>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/message/F4CPD2DMTREDG1"
      >
        <img alt="manda um zap" src="/images/manda_um_zap.svg" />
      </a>
    </FloatingButtonWPP>
  );
}

export default WhatsAppButton;
