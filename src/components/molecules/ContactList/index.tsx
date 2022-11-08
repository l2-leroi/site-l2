import ReactGA from 'react-ga';
import { Typography } from '../../../styles/typography';
import { ContentStyled, ItemStyled, ContactStyled } from './styled';

interface Contact {
  title: string;
  contact: string;
  link: string;
  key: string;
}

interface ContactProps {
  contacts: Contact[];
}

function ContactList(props: ContactProps) {
  const ClickHandler = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Click nos links do footer',
    });
  };

  return (
    <ContentStyled>
      {props.contacts.map((c) => (
        <ItemStyled key={c.title}>
          <Typography tag="h3" color="gray">
            {c.title}
          </Typography>

          <ContactStyled href={c.link} target="_blank" onClick={ClickHandler}>
            <Typography
              id={c.key}
              tag="p"
              color="gray"
              size="small"
              lineHeight="line120"
              letterSpacing="space1"
              fontWeight="weight3"
              style={{ width: 'fit-content' }}
            >
              {c.contact}
            </Typography>
          </ContactStyled>
        </ItemStyled>
      ))}
    </ContentStyled>
  );
}

export default ContactList;
