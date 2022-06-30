import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Main from '../routes/Main';
import Categories from './Categories';

const theme = {
    green: '#bfff00',
    pink: '#f29886',
    black: '#181415',
    lightBlack: '#211c1d',
    fontSize_xl: '1.5rem'
}

const Ground = () => {
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Header />
                <Categories />
                <Main />
                <Footer />
            </Wrapper>
        </ThemeProvider>
    )
}

export default Ground;


const Wrapper = styled.div`
    width: 700px;
    margin: auto;
    position: relative;
`