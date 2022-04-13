import { ContentStyled, ItemStyled, TitleStyled, ContactStyled } from './styled';

interface Contact {
  title: string,
  contact: string,
  link: string,
}

interface ContactProps {
  contacts: Contact[];
}

function ContactList(props: ContactProps) {
  return (
    <ContentStyled>
      {
        props.contacts.map((c) => (      
          <ItemStyled key={c.title}>
            <TitleStyled>{c.title}</TitleStyled>
            <ContactStyled href={c.link}>{c.contact}</ContactStyled>
          </ItemStyled>     
        ))
      }
    </ContentStyled>
  );
};

export default ContactList;