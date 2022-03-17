import { ContentStyled, TitleStyled, ContactStyled } from './styled';

function LinkFooter({title, contact, link}) {
  return (
    <ContentStyled>
      <TitleStyled>{title}</TitleStyled>
      <ContactStyled href={link}>{contact}</ContactStyled>
    </ContentStyled>
  );
};

export default LinkFooter;