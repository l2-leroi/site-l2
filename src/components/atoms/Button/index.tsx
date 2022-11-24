import { ArrowIcon } from '../../../assets/icons/arrowIcon';
import { WhiteArrowIcon } from '../../../assets/icons/whiteArrowIcon';
import { ButtonStyled, LinkStyled } from './styled';

interface ButtonProps {
  linkBtn: string;
  borderColor?: string;
  backgroundColor?: string;
  text: string;
  fill?: string;
  fontSize?: string | number;
}

function Button({
  linkBtn,
  borderColor,
  backgroundColor,
  text,
  fill,
  fontSize,
}: ButtonProps) {
  return (
    <LinkStyled href={linkBtn}>
      <ButtonStyled
        bgColor={backgroundColor}
        borderColor={borderColor}
        fontSize={fontSize}
      >
        {text}
      </ButtonStyled>
      <ButtonStyled bgColor={backgroundColor} borderColor={borderColor}>
        <ArrowIcon fill={fill} />
      </ButtonStyled>
    </LinkStyled>
  );
}

export default Button;
