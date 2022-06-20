import { 
    Div,
    Title,
    Date,
    ExpireDate
} from './styled';

interface Props{
    title:string;
    date: string;
    expireDate: boolean;
}

const RegistrationDate = ({title,date,expireDate} : Props) =>{
    return(
        <Div>
            {title && <Title>{title}</Title>}
            {expireDate ? date && <ExpireDate>{date}</ExpireDate> : date && <Date>{date}</Date>}
        </Div>
    )
}
export default RegistrationDate