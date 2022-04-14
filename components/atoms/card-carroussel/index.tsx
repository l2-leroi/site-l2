import { 
    AuthorArea,
    TextArea,
    DivStyled,
    AuthorImg
} from './styled';

interface Card{
    comment: string;
    authorImg: string;
    authorName: string;
    author: boolean;
}

const CardCarroussel = ({comment,authorImg,authorName,author} : Card) => {
    return(
        <DivStyled>
            {comment && <TextArea> {comment} </TextArea>}
            {author && 
                <AuthorArea>
                    <AuthorImg src={authorImg}/> {authorName}
                </AuthorArea>
            }
        </DivStyled>
    )
}
export default CardCarroussel