import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Foot>
            <Github href=''>Github Repo.</Github>
        </Foot>
    )
}

export default Footer

const Foot = styled.footer`
    position: fixed;
    bottom: 0;
    width: inherit;
    height: 5rem;
    border-top: 4px solid ${(pros) => pros.theme.primaryColor};
    text-align: center;
`;

const Github = styled.a`
    color: gray;
    
    &:hover {
        text-decoration: underline;
    }
`