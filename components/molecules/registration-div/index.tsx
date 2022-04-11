import { 
    DivStyled,
    ContentStyled,
    DateStyled,
    ItemStyled
} from './styled';

import ApplyButton from '../../atoms/apply-button';
import RegistrationDate from '../../atoms/registrations-date';

interface Date{
    title: string;
    date: string;
    expireDate: boolean
}

interface Props{
    dates: Date[];
    applyButton: string;
}

const RegistrationDiv = ({dates,applyButton} : Props) =>{
    return(
        <DivStyled>
            <ContentStyled>
                {
                    dates.map((d) => (
                        <DateStyled>
                        <RegistrationDate title={d.title} date={d.date} expireDate={d.expireDate} />
                        </DateStyled>
                    ))
                }
            </ContentStyled>
            { applyButton && 
                <ItemStyled>
                    <ApplyButton applyButton={applyButton} />
                </ItemStyled>
            }
        </DivStyled>
    )
}
export default RegistrationDiv