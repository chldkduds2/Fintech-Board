import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
        ${reset};
    *{
        box-sizing: border-box;
        font-family: pretendard;        
    }
    a {
        color:#424344;
        text-decoration-line: none;
    }
    body{
        padding: 0;
        margin: 0;
        font-family: pretendard;
        background-color  : ${({ theme }) => theme.colors.white100};
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
`;

export default GlobalStyle;
