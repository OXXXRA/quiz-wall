import styled from "styled-components";
import theme from "../styles/theme";
import { Input, ButtonAddClose } from ".";


const StyledInputForm = styled.div`
    height: 80px;
    padding-bottom: 15px;   
    font-size: 0.75em;
`;

const InputForm = (props) => {
    const Component = props.tag || "div";
    return (
        <StyledInputForm {...props} as={Component}>
            <div>Ваш логин или email</div>
            <Input sizeRect='inputs' type={props.type} colors={props.colors} placeholder={props.placeholder} />
            <ButtonAddClose className={`relative ${(props.close) ? "" : "d-no"}`} 
                    colors='whiteBlack' sizes='20px' relative
                    style={{
                        left: '420px',
                        bottom: '45px'
                     }}
            />
            <div className={`${(props.type==='error') ? "" : "d-no"}`} 
                    style={{
                        color: `${theme.colors.error}`,
                    }}
                >Почта уже занята
            </div>
            
        </StyledInputForm>
    );
  };

export default InputForm;