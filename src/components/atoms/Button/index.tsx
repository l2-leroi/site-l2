import { ArrowIcon } from '../../../assets/icons/arrowIcon';
import { WhiteArrowIcon } from '../../../assets/icons/whiteArrowIcon';
import { ButtonStyled, LinkStyled } from './styled';

interface ButtonProps {
  linkBtn: string;
  borderColor?: string;
  backgroundColor?: string;
  text: string;
  onClick: any;
  WhiteArrow: any;
}

function Button({
  linkBtn,
  borderColor,
  backgroundColor,
  text,
  onClick,
  WhiteArrow,
}: ButtonProps) {
  return (
    <LinkStyled onClick={onClick} href={linkBtn}>
      <ButtonStyled bgColor={backgroundColor} borderColor={borderColor}>
        {text}
      </ButtonStyled>
      <ButtonStyled bgColor={backgroundColor} borderColor={borderColor}>
        {!WhiteArrow && <ArrowIcon />}
        {WhiteArrow && <WhiteArrowIcon />}
      </ButtonStyled>
    </LinkStyled>
  );
}

export default Button;
