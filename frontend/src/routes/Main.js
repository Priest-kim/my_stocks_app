import React from 'react'
import styled from 'styled-components';
import StockList from '../components/Stock/StockList';


const Main = () => {
    return (
        <MainWrapper>
            <StockList />
        </MainWrapper>
    )
}

export default Main

const MainWrapper = styled.div`
    height: 200vh;
    width: inherit;
    background-color: ${(props) => props.theme.lightBlack};
`