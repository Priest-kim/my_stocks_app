import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return (
        <Head>
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <Title>My Stocks</Title>
            <MenuIcon><FontAwesomeIcon icon={faBars} size="2x" /></MenuIcon>
        </Head>
    )
}

export default Header

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border: 4px solid ${(props) => props.theme.green};
    border-radius: 10px;
    margin-top: 30px;
    position: sticky;
    z-index: 9;
    top: 0;
    background-color: rgba(0,0,0, .6);
    
`;

const Title = styled.div`
    font-size: 2rem;
    font-weight: 600;
`;

const MenuIcon = styled.i`
    cursor: pointer;
    &:hover {
        color: ${(pros) => pros.theme.pink};
    }
`


