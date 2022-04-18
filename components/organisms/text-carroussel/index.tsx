import { 
    SectionStyled,
    Title,
    Paragraph,
    DivStyled
} from './styled';

import Carroussel from '../../molecules/Carroussel';


const TextCarroussel = () => {
    const cards = [
        {
            comment: "“Orgulho por trabalhar em uma empresa com mulheres, gays, pessoas mais velhas.”",
            authorImg: "./images/author-comment1.png",
            authorName: "Mari ● Auxiliar Administrativo",
            id: 1,
            author: true
        },
        {
            comment: "“2”",
            authorImg: "./images/author-comment1.png",
            authorName: "Mari ● Auxiliar Administrativo",
            id: 2,
            author: true
        },
        {
            comment: "“3.”",
            authorImg: "./images/author-comment1.png",
            authorName: "Mari ● Auxiliar Administrativo",
            id: 3,
            author: true
        },
        {
            comment: "“4”",
            authorImg: "./images/author-comment1.png",
            authorName: "Mari ● Auxiliar Administrativo",
            id: 4,
            author: true
        },
        {
            comment: "“5”",
            authorImg: "./images/author-comment1.png",
            authorName: "Mari ● Auxiliar Administrativo",
            id: 5,
            author: true
        },
        {
            comment: "“6”",
            authorImg: "./images/author-comment1.png",
            authorName: "Mari ● Auxiliar Administrativo",
            id: 6,
            author: true
        }
    ]
    return(
        <SectionStyled >
            <DivStyled>
                <Title>
                    Valorizamos pessoas
                </Title>
                <Paragraph>
                    Ter empatia é uma ótima prática de trabalho. Todos estamos em constante aprendizado e buscamos crescer juntos.
                </Paragraph>
                <Paragraph className='paragrafoCarrossel'>
                    O que dizem os Lcoders:
                </Paragraph>
            </DivStyled>
            <div>
                <Carroussel cards={cards} />
            </div>
        </SectionStyled>
    )
}
export default TextCarroussel