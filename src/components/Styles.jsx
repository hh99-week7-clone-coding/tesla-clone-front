import styled from "styled-components";
import { Link } from "react-router-dom";

export const StLink = styled(Link)`
    text-decoration: none;
`;

export const StLogo = styled.h1`
    position: fixed;
    top: 3vh;
    left: 2vw;
    font-family: 'Logo';
    font-size: 18px;
    letter-spacing: 10px;
    &:hover{
        cursor: pointer;
    }
`;