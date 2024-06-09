import styled from "styled-components";

export const CardContainer = styled.div`
    background: ${props => props.theme.cardGradient};
    max-width: 41.2rem;
    padding: 3.2rem;
    border-radius: 3rem;
    

    h1 {
        text-align: center;
        font-size: 2.8rem;
        color: ${props => props.theme.white};
        margin-bottom: 1.5rem;
    }

    p {
        text-align: center;
        font-size: 1.5rem;
        line-height: 2.4rem;
        color: ${props => props.theme.textColor};
    }
`

export const IconContainer = styled.div``

export const ButtonContainer = styled.div``