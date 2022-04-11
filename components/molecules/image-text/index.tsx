import { 
    ImageStyled,
    Text
} from './styled';

import Image from 'next/image';

const ImageText = (props) =>{
    return(
        <ImageStyled>
            <Image src={props.src} />
            <Text>
                {props.text}
            </Text>
        </ImageStyled>
    )
}
export default ImageText