import { Header, NavItemStyled, ImageStyled, DivTextStyled, TextMenuStyled} from './styled';
import Link from 'next/link'

const HeaderMemoriesUp = () => {

    return (
        <>
         <Header>
             <NavItemStyled className='logo'>
            <Link href="/">
              <ImageStyled  src="./src/assets/images/seta.svg" alt="L2 Code" />
            </Link>
            </NavItemStyled>
          
          <NavItemStyled className='contato'>contato@l2code.com.br</NavItemStyled>

          <DivTextStyled>
                <TextMenuStyled>ME</TextMenuStyled>
                <TextMenuStyled>NU</TextMenuStyled>
              </DivTextStyled>
          
        </Header>
        </>
       
    );
    }

    export default HeaderMemoriesUp;