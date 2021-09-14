import styled from 'styled-components';

import { People, Location, ArrowBack } from '../../styles/icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    margin: 30px auto;

    button {
        border: none;

        cursor: pointer;
    }
`;

export const BackIcon = styled(ArrowBack)`
    width: 40px;
    height: 30px;

    fill: #c9d1d9;
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

        font-size: 15px;

        h3 {
            font-size: 15px;
            margin-right: 3px;

            color: #c9d1d9;
        }

        span + h3 {
            margin-left: 3px;
        }

        span + span {
            margin-left: 5px;
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

export const PeopleIcon = styled(People)`
    width: 20px;
    height: 20px;

    margin-right: 3px;

    fill: #8b949e;
`;

export const LocationIcon = styled(Location)`
    width: 20px;
    height: 20px;

    fill: #8b949e;
`;

export const FilterBar = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 30px;

    width: 50%;

    select {
        width: 100px;
        height: 50px;

        font-size: 15px;

        color: #c9d1d9;

        border: none;
    }
`;

export const Repos = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 30px;

    width: 50%;
`;