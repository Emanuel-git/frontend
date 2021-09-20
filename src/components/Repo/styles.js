import styled from 'styled-components';

import { Star } from '../../styles/icons'; 

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px;

    border-top: thin solid #30363d;

    & + & {
        margin-top: 10px;
    }

    > a {
        font-size: 20px;
        font-weight: bold;
        color: #58a6ff;

        text-decoration: none;
    }

    > span:nth-child(2) {
        color: #8b949e;
    }

    > span:nth-child(3), span:nth-child(5) {
        font-size: 15px;
        color: #8b949e;
    }

    > span:nth-child(5) {
        margin-top: 2px;
    }

    div {
        display: flex;
        align-items: center;

        margin-top: 2px;

        > span {
            font-size: 15px;
            color: #8b949e;

            margin-left: 3px;
        }
    }
`;

export const StarIcon = styled(Star)`
    width: 15px;
    height: 15px;

    fill: #8b949e;
`;