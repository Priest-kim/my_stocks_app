import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Main from '../routes/Main';

const theme = {
    primaryColor: '#bfff00',
    secondaryColor: '#DEF7DE'
}

const Ground = () => {
    return (
        <ThemeProvider theme={theme}>
            <Base>
                <Header />
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