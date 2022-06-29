import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { lighten } from "polished"

const Header = () => {
    return (
        <Head>
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <Title>My Stock</Title>
            <MenuIcon><FontAwesomeIcon icon={faBars} size="2x" /></MenuIcon>
        </Head>
    )
}

export default Header


const Head = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border: 4px solid ${(pros) => pros.theme.primaryColor};
    border-radius: 10px;
    margin-top: 30px;
`;

const Title = styled.div`
    font-size: 2rem;
    font-weight: 600;
`;

const MenuIcon = styled.i`
    cursor: pointer;


    &:hover {
        color: ${(pros) => pros.theme.secondaryColor};
    }
`


