import{
    Text
}from './styled';

interface Props{
    title: string;
}

const Title = ({title}:Props) =>{
    return(
        <>
            {title && <Text>{title}</Text>}
        </>
    )
}
export default Title