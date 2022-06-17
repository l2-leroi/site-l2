import { SpinningIconStyled, SpinnerImage } from './styled';

interface Positions {
  top: string;
  left: string;
  bottom: string;
  right: string;
}

interface SpinnerProps {
  spinnerPosition: Positions;
}

function Spinner(props: SpinnerProps) {
  return (
    <SpinningIconStyled>
      <SpinnerImage
        src="/images/enfeite-giratorio.svg"
        style={{
          top: props.spinnerPosition.top,
          left: props.spinnerPosition.left,
          bottom: props.spinnerPosition.bottom,
          right: props.spinnerPosition.right,
        }}
      />
    </SpinningIconStyled>
  );
}

export default Spinner;
