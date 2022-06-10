import { Typography } from '../../../styles/typography';
import { ContentStyled, ItemStyled, ContactStyled } from './styled';

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
            <Typography tag='h3' color='gray'>{c.title}</Typography>

            <ContactStyled href={c.link} target="_blank">
              <Typography tag="p" color='gray' size='small' lineHeight='line120' letterSpacing='space1' fontWeight='weight3'>{c.contact}</Typography>
            </ContactStyled>
          </ItemStyled>     
        ))
      }
    </ContentStyled>
  );
};

export default ContactList;