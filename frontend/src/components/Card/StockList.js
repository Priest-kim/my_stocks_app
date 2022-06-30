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
        currency: 'USD',
        requlerMarketPreviousPrice: 137.44,
        regulerMarketPrice: 139.23,
        regularMarketDayLow: 136.67,
        regularMarketDayHigh: 140.67,

    },
    {
        displayName: 'Alphabet',
        symbol: "GOOG",
        longName: 'Alphabet Inc.',
        fullExchangeName: "NasdaqGS",
        quoteSourceName: "Delayed Quote",
        currency: 'USD',
        requlerMarketPreviousPrice: 2251.43,
        regulerMarketPrice: 2245.13,
        regularMarketDayLow: 2231.08,
        regularMarketDayHigh: 2273.29,
    },
    {
        displayName: 'Tesla',
        symbol: "TSLA",
        longName: "Tesla, Inc.",
        fullExchangeName: "NasdaqGS",
        quoteSourceName: "Delayed Quote",
        currency: 'USD',
        requlerMarketPreviousPrice: 697.99,
        regulerMarketPrice: 685.47,
        regularMarketDayLow: 666.8311,
        regularMarketDayHigh: 693.52,
    },
    {
        displayName: 'CAKE',
        symbol: "CAKE",
        longName: "The Cheesecake Factory Incorporated",
        fullExchangeName: "NasdaqGS",
        quoteSourceName: "Delayed Quote",
        currency: 'USD',
        requlerMarketPreviousPrice: 27.98,
        regulerMarketPrice: 27.46,
        regularMarketDayLow: 26.82,
        regularMarketDayHigh: 27.98,
    },
    {
        displayName: 'Carnival Corporation &',
        symbol: "CCL",
        longName: "Carnival Corporation & plc",
        fullExchangeName: "NYSE",
        quoteSourceName: "Delayed Quote",
        currency: 'USD',
        requlerMarketPreviousPrice: 10.33,
        regulerMarketPrice: 8.87,
        regularMarketDayLow: 8.66,
        regularMarketDayHigh: 9.6,
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