import React from 'react'
import styled from 'styled-components'


const categories = [
    {
        name: "Finance",
        path: "/home",
    },
    {
        name: "Cryptocurrencies",
        path: "/coin"
    },
    {
        name: "News",
        path: "/news",
    },
    {
        name: "Bookmark",
        path: "/mark"
    }
]


const Categories = () => {
    return (
        <Menu>
            {categories.map((menu, idx) => (
                <Category key={idx}>{(menu.name).toUpperCase()}</Category>
            ))}
        </Menu>
    )
}

export default Categories

const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: ${(props) => props.theme.lightBlack};
    border-bottom: 1px solid ${(props) => props.theme.pink};
`

const Category = styled.div`
    margin: 20px;
    color: ${(props) => props.theme.green};
    font-size: ${(props) => props.theme.fontSize_xl};
    cursor: pointer;

    &:hover{
        color: ${(props) => props.theme.pink}
    }
`;
