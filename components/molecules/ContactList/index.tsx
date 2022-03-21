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
    <>
      {
        props.contacts.map((c) => (
          <ContentStyled key={c.title}>
            <ItemStyled>
              <TitleStyled>{c.title}</TitleStyled>
              <ContactStyled href={c.link}>{c.contact}</ContactStyled>
            </ItemStyled>
          </ContentStyled>
        ))
      }
    </>
  );
};

export default ContactList;