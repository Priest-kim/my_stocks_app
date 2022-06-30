import React from 'react'
import styled from 'styled-components';

const Stock = ({ stock }) => {
    return (
        <Card>{(stock.longName)}</Card>
    )
}

export default Stock

const Card = styled.div`

    height: 80px;
    border: 2px solid ${(props) => props.theme.green};
    margin-bottom: 30px;
    border-radius: 10px;
    padding: 20px;

`