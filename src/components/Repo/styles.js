import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    & + & {
        margin-top: 10px;
    }

    span:nth-child(1) {
        font-size: 20px;
        font-weight: bold;
        color: #58a6ff;
    }

    span:nth-child(2) {
        color: #8b949e;
    }

    span:nth-child(3), span:nth-child(4) {
        font-size: 15px;
        color: #8b949e;
    }

    span:nth-child(5) {
        font-size: 15px;
        color: #8b949e;

        margin-top: 2px;
    }
`;
