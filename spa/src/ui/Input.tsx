import styled from 'styled-components'

const StyledInput = styled.input`
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 5px;
`

export default function Input(props) {
  return <StyledInput {...props}/>
}
