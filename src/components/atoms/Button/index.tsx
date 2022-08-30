import { ArrowIcon } from '../../../assets/icons/arrowIcon';
import { ButtonStyled, LinkStyled } from './styled';

interface ButtonProps {
  linkBtn: string;
  borderColor?: string;
  backgroundColor?: string;
  text: string;
  onClick: any;
}

function Button({
  linkBtn,
  borderColor,
  backgroundColor,
  text,
  onClick,
}: ButtonProps) {
  return (
    <LinkStyled onClick={onClick} href={linkBtn}>
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
