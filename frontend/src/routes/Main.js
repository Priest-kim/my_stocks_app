import React from 'react'
import styled from 'styled-components';
import StockList from '../components/Stock/StockList';


const Main = () => {
    return (
        <Base>
            <StockList />
        </Base>
    )
}

export default Main

const Base = styled.div`
            height: 200vh;
            width: inherit;
            background-color: ${(props) => props.theme.lightBlack};
            `