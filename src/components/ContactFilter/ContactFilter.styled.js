import styled from "styled-components";


export const FilterLabel = styled.label`
    width: 300px;   
    display: flex;
    flex-direction: column;
    gap:${p => p.theme.spacing(2)};    
`
export const FilterInput = styled.input`     
    padding: ${p => p.theme.spacing(3)};
    border: 1px solid ${p => p.theme.colors.secondaryColor};
    border-radius: ${p => p.theme.radius.m} ;
    outline: transparent; 
`