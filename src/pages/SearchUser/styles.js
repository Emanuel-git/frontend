import styled from "styled-components";

import { Github } from '../../styles/icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

export const Logo = styled(Github)`
    width: 160px;
`;

export const SearchBar = styled.input`
    display:  flex;
    text-align: center;

    width: min(500px, 100vw);
    height: 30px;

    border: none;

    background: #d1d1d1;

`;

export const SearchButton = styled.button`
    
`;