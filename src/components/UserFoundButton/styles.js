import styled from 'styled-components';

export const Container = styled.button`
    width: min(500px, 100vw);
    height: 100px;

    cursor: pointer;

    position: relative;
`;

export const Avatar = styled.div`
    position: absolute;
    bottom: 0;

    height: 100%;

    > img {
        width: 80px;
        height: 80px;

        border-radius: 50%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: 90%;

    margin: 2px 0 0 90px;

    > span{
        font-size: 20px;
    }

    > a {
        text-decoration: none;
        font-size: 15px;
        color: #808080;
    }

    > div {
        display: flex;

        position: absolute;
        bottom: 0;

        margin-bottom: 10px;
        
        > span {
            font-size: 15px;

            & + span {
                margin-left: 10px;
            }
        }
    }
`;
