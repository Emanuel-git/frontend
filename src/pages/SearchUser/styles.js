import styled from "styled-components";

import { Github, Search } from '../../styles/icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 100px;
`;

export const Logo = styled(Github)`
    width: 160px;

    fill: #8b949e;
`;

export const SearchBar = styled.input`
    display:  flex;
    text-align: center;

    width: min(500px, 90vw);
    height: 30px;

    border: none;

    background: #d1d1d1;

    outline: none;
`;

export const SearchButton = styled.div`
    display: flex;

    margin-top: 10px;

    width: 100px;
    height: 40px;

    > button {
        border: none;

        font-size: 15px;

        color: #8b949e;

        cursor: pointer;
    }
`;

export const SearchLogo = styled(Search)`
    width: 20px;
    margin-right: 3px;

    fill: #8b949e;
`;