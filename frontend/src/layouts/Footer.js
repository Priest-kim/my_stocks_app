import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Foot>
            <div>
                <Github href='https://github.com/Priest-kim/my_stocks_app' target="_blank">Github Repo.</Github>
            </div>
            <div>
                <Github href='https://priest-kim.github.io/' target="_blank">@{new Date().getFullYear()} Blog - Priest-kim</Github>
            </div>

        </Foot>
    )
}

export default Footer

const Foot = styled.footer`
    position: fixed;
    bottom: 0;
    width: inherit;
    height: 4rem;
    border-top: 4px solid ${(pros) => pros.theme.green};
    text-align: center;
    padding: 30px 0 20px 0;
    background-color: #181415;
`;

const Github = styled.a`
    color: gray;

    text-transform: uppercase;
    &:hover {
        text-decoration: underline;
    }
`