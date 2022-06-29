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
            <Base>
                <Header />
                <Categories />
                <Main />
                <Footer />
            </Base>
        </ThemeProvider>
    )
}

export default Ground;


const Base = styled.div`
    width: 800px;
    margin: auto;
    position: relative;
`