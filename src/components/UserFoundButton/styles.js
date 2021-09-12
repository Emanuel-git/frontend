import styled from 'styled-components';

export const Container = styled.button`
    width: min(500px, 100vw);
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
        align-content: space-between;   
        
        margin-top: 17px;

        > h2 {
            font-size: 15px;

            color: #808080;

            > span {
                color: #000;
            }

            & + h2 {
                margin-left: 10px;
            }
        }
    }
`;
