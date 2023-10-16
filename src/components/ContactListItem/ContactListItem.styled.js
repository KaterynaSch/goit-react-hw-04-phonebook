import styled from "styled-components";

export const ListItem = styled.li`
    display: flex;
    gap: ${p => p.theme.spacing(2)};
    text-transform: capitalize;
`
export const DeleteBtn = styled.button`
    font-weight: 500;    
    letter-spacing: 0.04em;
    width: 100px;
    height: 26px;
    border: 1px solid ${p => p.theme.colors.borderColor};
    border-radius: ${p => p.theme.radius.m};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: ${p => p.theme.colors.accentColor};
    background-color: ${p => p.theme.colors.white};    
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        color 250ms cubic-bezier(0.4, 0, 0.2, 1);
     &:hover{ 
        color: ${p => p.theme.colors.white};
        background-color: ${p => p.theme.colors.secondaryColor}; 
    } 
`