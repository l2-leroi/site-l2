import { ContentStyled, ItemStyled, TitleStyled, ContactStyled } from './styled';

function ContactList({contacts}) {
  return (
    contacts.map((c) => (
      <ContentStyled key={c.title}>
        <ItemStyled>
          <TitleStyled>{c.title}</TitleStyled>
          <ContactStyled href={c.link}>{c.contact}</ContactStyled>
        </ItemStyled>
      </ContentStyled>
    ))  
  );
};

export default ContactList;