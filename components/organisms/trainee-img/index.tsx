import { 
    SectionStyled,
    TextStyled,
    Title,
    Paragraph,
    Subtitle,
    ListItem,
    List,
    DivStyled,
    SpanStyled
} from './styled';

import ImageText from '../../molecules/image-text';
import ApplyButton from '../../atoms/apply-button';
import ScrollCircle from '../../atoms/ScrollCircle';

const TraineeImg = () =>{
    return(
        <SectionStyled>
            <DivStyled>
                <ImageText src={'./images/trainee-image.jpg'} text={'Ultima turma de Trainees chamados.'}/>
                <SpanStyled>
                    <ScrollCircle image={true} />
                </SpanStyled>
            </DivStyled>
            <TextStyled>
                <Title> Sobre o programa de Trainee </Title>
                <Paragraph> Você vai trabalhar num time de TI excepcional e vai ter treinamento durante 12 meses. O foco é ampliar seus conhecimentos em diferentes tecnologias, assim você descobre o que realmente gosta e a gente direciona seu potencial para gerar o máximo de impacto.
                            ● Somos flexíveis com horários, o que facilita para você conciliar sua rotina acadêmica.
                </Paragraph>
                <Subtitle> Requisitos: </Subtitle>
                <List>
                    <ListItem>
                    Desejável estar cursando o último ano de Ciência da computação ou outro curso superior na área de TI;
                    </ListItem>
                    <ListItem>
                        Disponibilidade para trabalhar 30 horas semanais;
                    </ListItem>
                    <ListItem>
                        Conhecimentos de lógica de programação e estrutura de dados.
                    </ListItem>
                </List>
                <ApplyButton applyButton='QUERO ME CANDIDATAR'></ApplyButton>
            </TextStyled>
        </SectionStyled>
    )
}
export default TraineeImg