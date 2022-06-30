import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretUp,
    faCaretDown
} from "@fortawesome/free-solid-svg-icons"

const Stock = ({ stock }) => {

    const [priceGap, setPriceGap] = useState({});

    // state 연산 하는 함수
    const computedGap = (stock) => {
        const { requlerMarketPreviousPrice, regulerMarketPrice } = stock;
        const gap = -(Math.floor((Number(requlerMarketPreviousPrice) - Number(regulerMarketPrice)) * 100)) / 100;

        const persent = -Math.floor((((Number(requlerMarketPreviousPrice) / Number(regulerMarketPrice)) * 100) - 100) * 100) / 100;

        setPriceGap({
            gap,
            persent
        })
    }

    // 계산된 price가 음수인지 양수인지 판단하는 함수
    const checkPrice = () => {
        if (priceGap.gap > 0) {
            return true;
        }
        return false
    };

    // gap에 따른 컴포넌트 보여주기
    const showComponentByPrice = (value) => {
        let icon;
        if (value) {
            icon = faCaretUp;
        } else {
            icon = faCaretDown;
        }

        return (
            <WrapperPrice condition={value} >
                <FontAwesomeIcon icon={icon} size='lg' />
                <Gap>{priceGap.gap}</Gap>
                ({priceGap.persent}%)
            </WrapperPrice>
        )
    }


    useEffect(() => {
        computedGap(stock);
    }, [stock]);

    return (
        <Card>
            <DisplayName>
                {stock.longName} . <Symbol>({stock.symbol})</Symbol>
                <Description>{stock.fullExchangeName} {stock.quoteSourceName}. currency in {stock.currency} </Description>
            </DisplayName>
            <PriceSelection>
                {stock.regulerMarketPrice}
                {
                    showComponentByPrice(checkPrice())
                }
            </PriceSelection>
        </Card >
    )
}

export default Stock

const Card = styled.div`
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.green};
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    background-color: black 
`;

const DisplayName = styled.div`
    font-size: 1.2rem;
`;

const Description = styled.div`
    margin-top: 10px;
    font-size: .8rem;
    color: lightgray;
`;

const Symbol = styled.span`
    font-size: .8rem;
`;

const PriceSelection = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: ${(props) => props.theme.green};
`;

const WrapperPrice = styled.div`
    color : ${({ condition }) => condition ? "red" : "lightblue"};
    padding-left: 10px;
    font-size: 1.1rem;
`;

const Gap = styled.span`
    margin: 0 7px 0 3px;
`;