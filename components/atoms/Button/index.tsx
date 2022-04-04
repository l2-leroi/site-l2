import { ArrowIcon } from "../../../assets/icons/arrowIcon";
import { ButtonStyled, LinkStyled } from "./styled";

interface ButtonProps {
  linkBtn: string;
  borderColor?: string;
  backgroundColor?: string;
}

function Button(props: ButtonProps) {
  return(
    <LinkStyled href={props.linkBtn}>
      <ButtonStyled borderColor={props.borderColor}>VEJA TODOS OS CASES</ButtonStyled>  
      <ButtonStyled> <ArrowIcon /> </ButtonStyled>
    </LinkStyled>
  );
};

export default Button;