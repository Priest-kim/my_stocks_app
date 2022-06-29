import React from 'react'
import styled from 'styled-components';
import Stock from './Stock';

const stocks = [
    {
        bName: 'apple',
    },
    {
        bName: 'google',
    },
    {
        bName: 'samsung',
    },
]


const StockList = () => {
    return (
        <List>
            {stocks.map((stock, idx) => (
                <Stock key={idx} stock={stock} />
            ))}

        </List>

    )
}

export default StockList

const List = styled.div`
    margin: 20px;
    background-color: ${(props) => props.theme.lightBlack};
    height: 100%;
    padding: 20px;
`