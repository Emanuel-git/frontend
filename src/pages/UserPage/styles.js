import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    margin: 30px auto;

    width: 60vw;
    height: 100vh;
`;

export const Banner = styled.div`
    display: flex;
    justify-content: space-between;

    align-items: center;

    width: 99%;
    height: 290px;

    margin-top: 10px;

    position: relative;
`;

export const Avatar = styled.div`
    width: 280px;
    height: 280px;

    position: absolute;
    left: 0;

    > img {
        width: 100%;
        height: 100%;

        border-radius: 50%;
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;

    width: 60%;
    height: 85%;

    position: absolute;
    right: 0;

    > h1 {
        font-size: 25px;
    }

    > h2 {
        font-size: 20px;
        color: #808080;
    }

    p {
        font-size: 20px;

        margin-top: 10px;
    }

    > div.follow {
        display: flex;

        margin-top: 30px;

        > span {
            font-size: 18px;

            color: #808080;
        }

        > h3 {
            margin-left: 3px;
        }

        h3 + span {
            margin-left: 10px;
        }
    }
`;

export const Repos = styled.div``;