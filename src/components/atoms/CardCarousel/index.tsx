import { AuthorArea, TextArea, DivStyled, AuthorImg } from './styled';

interface Card {
  comment: string;
  authorImg: string;
  authorName: string;
  author: boolean;
  className: string;
}

const CardCarroussel = ({
  comment,
  authorImg,
  authorName,
  author,
  className,
}: Card) => {
  return (
    <DivStyled className={className}>
      {comment && <TextArea> {comment} </TextArea>}
      {author && (
        <AuthorArea>
          <AuthorImg src={authorImg} /> {authorName}
        </AuthorArea>
      )}
    </DivStyled>
  );
};
export default CardCarroussel;
