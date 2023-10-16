import styled from "styled-components";

export const MainContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    gap: ${p => p.theme.spacing(4)};
    padding: 24px;
    margin: 0 auto;
    align-items: center;
`