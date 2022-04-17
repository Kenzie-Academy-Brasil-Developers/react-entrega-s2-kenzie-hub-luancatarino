import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    margin: 50px auto 20px auto;
    justify-content: space-between;
    width: 90%;
    @media (min-width: 768px) {
        width: 700px;
    }

    button {
        background: var(--grey-3);
        color: var(--grey-0);
        padding: 0px 16px;
        border-radius: 4px;
        border: 2px solid var(--grey-3);
        font-weight: 600;
        line-height: 23px;
    }
`;

export const User = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    
    margin: 30px auto;
    align-items: left;
    @media (min-width: 768px) {
        width: 700px;
        flex-direction: row;
        
        justify-content: space-between;
    }

    h1 {
        color: var(--grey-0);
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
    }

    p {
        color: var(--grey-1);
        font-weight: 400;
        line-height: 18px;
        font-size: 14px;
        margin-top: 15px;
    }
`;
export const Container = styled.div`

    hr {
        border: 1px solid var(--grey-3);
    }
`;

export const Content = styled.div`
    margin: 30px auto;
    width: 90%;
    @media (min-width: 768px) {
        width: 700px;
    }

    .addTech {
        display: flex;
        justify-content: space-between;

        h2 {
            color: var(--grey-0);
            font-weight: 600;
            font-size: 16px;
        }

        button {
            width: 20px;
            height: 20px;
            font-size: 16px;
            font-weight: 500;
            color: var(--grey-0);
            background: var(--grey-3);
            border: 1px solid var(--grey-3);
            border-radius: 4px;
        }
    }

    .techs {
        margin: 20px auto;
        background: var(--grey-3);
        border-radius: 4px;
        padding: 10px;

        h1 {
            color: white;
        }
    }
`;

export const Card = styled.div`
    height: 35px;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    margin-bottom: 10px;
    background: var(--grey-4);
    margin: 7px auto 7px auto;
    border-radius: 4px;
    align-items: center;
    :hover {
        background: var(--grey-2)
    }

    h4 {
        color: var(--grey-0);
        font-weight: 700;
        font-size: 14px;
    }

    p {
        color: var(--grey-1);
        font-weight: 400;
        font-size: 12px;
    }
`;
