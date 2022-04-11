import { 
    SectionStyled,
    TextStyled
} from './styled';

import RegistrationDiv from '../../molecules/registration-div';

interface Props{
    text: string;
}

const Registration = ({text} : Props) => {
    const dates = [
        {title: "Inscrições até:", date:"20/05/2022", expireDate:true},
        {title: "Resultado em:", date:"24/05/2022", expireDate:false}
    ];
    return(
        <SectionStyled>
            <RegistrationDiv dates={dates} applyButton={'QUERO ME CANDIDATAR'} />
            {text && <TextStyled> {text} </TextStyled>}
        </SectionStyled>
    )
}
export default Registration