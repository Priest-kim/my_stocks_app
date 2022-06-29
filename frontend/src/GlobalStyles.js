import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    // 전역 스타일 추가
    a {
        text-decoration: none;
    }

    body {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 1rem;
        color: white;
        background-color: #181415;
    }
`;
export default GlobalStyles;

