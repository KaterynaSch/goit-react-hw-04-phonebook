import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const StyledForm = styled(Form)`
    width: 320px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(6)};
    border: 1px solid ${p => p.theme.colors.secondaryColor};
    border-radius: ${p => p.theme.radius.l};
`
export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(2)};  
    color: ${p => p.theme.colors.labelColor};
`

export const StyledField = styled(Field)`      
    padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};
    outline: transparent;
    border: 1px solid ${p => p.theme.colors.borderColor};
    border-radius: ${p => p.theme.radius.m};    
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));   
`
export const StyledErrMessage = styled(ErrorMessage)`
    color: ${p => p.theme.colors.errorColor};
    font-size: 12px;
`
export const AddContact = styled.button`
    font-weight: 500; 
    width: 150px;
    height: 26px;
    border: 1px solid ${p => p.theme.colors.borderColor};
    border-radius: ${p => p.theme.radius.m};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accentColor};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);        

    &:hover{
        background-color: ${p => p.theme.colors.secondaryColor};       
    }
`
