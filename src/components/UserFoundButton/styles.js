import styled from 'styled-components';

export const Container = styled.button`
    width: min(500px, 90vw);
    height: 85px;

    margin-top: 10px;

    border: none;

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

    height: 100%;
    margin: 0px 0 0 90px;

    > span:nth-child(1) {
        font-size: 20px;

        color: #c9d1d9;
    }

    > span:nth-child(2) {
        font-size: 15px;
        color: #8b949e;

        @media (max-width: 500px) {
            font-size: 14px;
        }
    }

    > div {
        display: flex;
        align-content: space-between;   
        
        margin-top: 17px;

        @media (max-width: 500px) {
            margin-top: 5px;
        }

        > h2 {
            font-size: 15px;

            color: #8b949e;

            & + h2 {
                margin-left: 10px;
            }
        }
    }
`;
