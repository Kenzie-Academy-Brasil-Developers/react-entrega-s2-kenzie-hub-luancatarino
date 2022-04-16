import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    margin: 50px auto 20px auto;
    justify-content: space-between;
    width: 90%;

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

export const Form = styled.div`
    background: var(--grey-3);
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    color: var(--grey-0);
    height: 80vh;

    div {
        text-align: center;
        margin: 20px 0;

        h1 {
            color: var(--grey-0);
            font-weight: 700;
            line-height: 22px;
            font-size: 20px;
        }

        p {
            color: var(--grey-1);
            font-weight: 400;
            line-height: 18px;
            font-size: 12px;
            margin-top: 15px;
        }
    }

    form {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 90%;

        label {
            color: var(--grey-0);
            font-weight: 400;
            font-size: 13px;
            margin-bottom: -15px;
            margin-left: 3px;
        }

        input,
        select {
            background: var(--grey-2);
            color: var(--grey-1);
            border: 1px solid var(--grey-2);
            padding: 0 12px;
            border-radius: 3px;
            height: 30px;
        }

        span {
            color:red;
            font-size: 12px;
            margin-left: 3px;
            margin-top: -20px;
        }

        button {
            font-size: 15px;
            font-weight: 500;
            color: var(--grey-0);
            background: var(--red-0);
            height: 30px;
            border: 1px solid var(--red-0);
            border-radius: 3px;
            :hover {
                background: var(--red-1);
            }
        }
    }
`;
