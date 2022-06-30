import React from 'react'
import styled from 'styled-components';
import Stock from './Stock';

const stocks = [
    {
        displayName: 'Apple',
        symbol: "AAPL",
        longName: 'Apple Inc.',
        fullExchangeName: "NasdaqGS",
        quoteSourceName: "Nasdaq Real Time Price",
        currency: 'UDS',
        requlerMarketPreviousPrice: 137.44,
        regulerMarketPrice: 139.23,
        regularMarketDayLow: 136.67,
        regularMarketDayHigh: 140.67,

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