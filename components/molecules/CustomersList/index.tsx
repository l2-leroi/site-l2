import { ContentStyled, ListStyled } from './styled';

interface Customer {
  alt: string,
  src: string,
}

interface CustomerProps {
  customers: Customer[];
}

function CustomersList(props: CustomerProps) {
  return (
    <>
    <ListStyled>
      {
        props.customers.map((customer) => (
            <ContentStyled key={customer.alt}>
                <img src={customer.src} alt={customer.alt} />
            </ContentStyled>
        ))
        
      }
      </ListStyled>
    </>
  );
};

export default CustomersList;