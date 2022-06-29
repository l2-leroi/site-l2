import { ArrowIcon } from '../../../assets/icons/arrowIcon';
import { ButtonStyled, LinkStyled } from './styled';

interface ButtonProps {
  linkBtn: string;
  borderColor?: string;
  backgroundColor?: string;
  text: string;
}

function Button({ linkBtn, borderColor, backgroundColor, text }: ButtonProps) {
  return (
    <LinkStyled href={linkBtn}>
      <ButtonStyled bgColor={backgroundColor} borderColor={borderColor}>
        {text}
      </ButtonStyled>
      <ButtonStyled bgColor={backgroundColor} borderColor={borderColor}>
        <ArrowIcon />
      </ButtonStyled>
    </LinkStyled>
  );
}

export default Button;
