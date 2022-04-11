import { 
    Text
} from './styled';

interface Props{
    text: string;
}

const Subtitle = ({text} : Props) => {
    return(
        <>
        {text && <Text>{text}</Text>}
        </>
    );
}
export default Subtitle