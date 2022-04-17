import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    margin: 50px auto 20px auto;
    justify-content: center;
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
    margin: 0px auto;
    color: var(--grey-0);
    height: 70vh;
    border-radius: 4px;
    padding: 20px 0;
    @media (min-width: 400px) {
        width: 400px;
    }

    div {
        text-align: center;
        margin: 20px 0;

        h1 {
            color: var(--grey-0);
            font-weight: 700;
            line-height: 22px;
            font-size: 20px;
            margin-top: 15px;
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
        margin: 30px auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 90%;

        label {
            color: var(--grey-0);
            font-weight: 400;
            font-size: 13px;
            margin-left: 5px;
            margin-top: 10px;
        }

        input,
        select {
            background: var(--grey-2);
            color: var(--grey-1);
            border: 1px solid var(--grey-2);
            padding: 0 12px;
            border-radius: 3px;
            height: 50px;
           
        }

        .inputError {
            border: 1px solid var(--red-1);
            ::placeholder {
                color: var(--red-1);
            }
        }

        span {
            color: red;
            font-size: 12px;
            margin-left: 5px;
            margin-top: 3px;
        }

        button {
            font-size: 15px;
            font-weight: 500;
            color: var(--grey-0);
            background: var(--red-0);
            height: 50px;
            border: 1px solid var(--red-0);
            border-radius: 3px;
            :hover {
                background: var(--red-1);
            }
        }
        p {
            text-align: center;
            color: var(--grey-1);
            font-weight: 600;
            font-size: 12px;
        }
    }
    .btnSignUp {
        width: 90%;
        height: 50px;
        font-size: 15px;
        font-weight: 500;
        margin: 0 auto;
        color: var(--grey-0);
        background: var(--grey-1);
        border: 1px solid var(--grey-1);
        border-radius: 3px;
        :hover {
            background: var(--grey-2);
        }
    }
`;
