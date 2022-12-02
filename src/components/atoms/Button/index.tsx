/* eslint-disable no-unused-vars */
import { ArrowIcon } from '../../../assets/icons/arrowIcon';
import { ButtonStyled, LinkStyled } from './styled';

interface ButtonProps {
  linkBtn: string;
  borderColor?: string;
  backgroundColor?: string;
  text: string;
  fill?: string;
  fontSize?: string | number;
  onClick?: (any) => any;
}

function Button({
  linkBtn,
  borderColor,
  backgroundColor,
  text,
  fill,
  fontSize,
  onClick,
}: ButtonProps) {
  return (
    <LinkStyled href={linkBtn} onClick={onClick}>
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
