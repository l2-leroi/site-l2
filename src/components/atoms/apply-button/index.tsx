import { 
    Div,
    Button,
    Arrow,
    ArrowIcon
} from './styled';

interface Props{
  applyButton: string;
}

const ApplyButton = ({applyButton} : Props) => {
  return( 
    <Div>
        <Button>
            {applyButton}
        </Button>
        <Arrow>
            <ArrowIcon src={'./images/arrow-right.svg'}/>
        </Arrow>
    </Div>

  );
};

export default ApplyButton;
