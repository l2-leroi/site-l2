import { 
    ImageStyled,
    Text,
    Image
} from './styled';

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