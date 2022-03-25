import { ContentStyled, ListStyled } from './styled';
import Image from 'next/image';

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
                <Image src={customer.src} alt={customer.alt} />
            </ContentStyled>
        ))
        
      }
      </ListStyled>
    </>
  );
};

export default CustomersList;