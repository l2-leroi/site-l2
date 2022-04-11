import{
    Text
} from './styled'

interface Props{
    tag: string;
}

const Tag = ({tag} : Props) =>{
    return(
        <>
            {tag && <Text>{tag}</Text>}
        </>
    )
}
export default Tag