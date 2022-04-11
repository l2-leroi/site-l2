import { 
    Div,
    Button,
    Arrow
} from './styled';

import Image from 'next/image';
import arrowRight from '../../../assets/images/arrow-right.svg'; 

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
            <Image src={arrowRight}/>
        </Arrow>
    </Div>

  );
};

export default ApplyButton;
