import styled from 'styled-components';

import { Location } from '../../styles/icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    margin: 30px auto;

    /* width: 60vw; */
    /* height: 100vh; */
`;

export const Banner = styled.div`
    display: flex;
    justify-content: space-between;

    align-items: center;

    width: 50%;

    margin-top: 10px;

    position: relative;

    img {
        width: 230px;
        height: 230px;

        border-radius: 50%;
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 50px;

    width: 90%;

    > h1 {
        font-size: 20px;
        color: #c9d1d9;
    }

    > h2 {
        font-size: 15px;
        color: #808080;
    }

    p {
        font-size: 15px;

        color: #c9d1d9;

        margin-top: 10px;
    }

    > div.follow {
        display: flex;
        align-items: center;

        margin-top: 10px;

        color: #8b949e;

        > span {
            font-size: 15px;
        }

        > h3 {
            font-size: 15px;
        }

        h3 + span {
            margin-left: 10px;
        }
    }

    > div.location {
        display: flex;
        align-items: center;

        margin-top: 10px;

        color: #8b949e;

        > span {
            font-size: 15px;
        }   
    }
`;

export const LocationLogo = styled(Location)`
    width: 20px;
    height: 20px;

    fill: #8b949e;
`;

export const Repos = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 30px;

    width: 50%;
`;