import Subtitle from '../../atoms/subtitle';
import Title from '../../atoms/title';
import Tag from '../../atoms/tag';

import { 
    Section,
    Text,
} from './styled';


const  SectionTitle = () =>{
    return(
        <Section>
                <Text>
                    <Title title="SEJA TRAINEE NA L2CODE"/>
                    <Subtitle text="Aqui o trainee não faz café, faz a diferença. ● A cada 4 meses contratamos estudantes de graduação para iniciarem suas carreiras conosco."></Subtitle>
                </Text>
                    <Tag tag="<AOS TALENTOS>"/>
        </Section>
    );
}
export default SectionTitle