import styled from "styled-components";
import theme from "../styles/theme";
import { Input } from ".";


const StyledEmailForm = styled.div`
    height: 80px;
    padding-bottom: 15px;   
`;

const EmailForm = (props) => {
    const Component = props.tag || "div";
    return (
        <StyledEmailForm {...props} as={Component}>

            <div style={{fontSize: '0.8em'}}>
                Ваш логин или email
            </div>
            
            <Input width={props.width} icon={props.icon} type={props.type} 
                        colorsTheme={props.colorsTheme} placeholder={props.placeholder} />

            <div className={`${(props.type==='error') ? "" : "d-none"}`} 
                        style={{
                                color: `${theme.colors.error}`,
                                fontSize: '0.8em'
                                }}>
                Почта уже занята
            </div>
            
        </StyledEmailForm>
    )
};

export default EmailForm;