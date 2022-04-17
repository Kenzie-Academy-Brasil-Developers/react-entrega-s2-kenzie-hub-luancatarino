import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
    background: rgba(0, 0, 0, 0.7);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`;

export const Content = styled.div`
    margin-top: -220px;
    background: var(--grey-3);
    width: 90%;
    color: var(--grey-0);
    border: 1px solid var(--grey-3);
    border-radius: 4px;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
    height: 40px;
    background-color: var(--grey-2);
    border-radius: 4px 4px 0 0;

    .navBar {
        display: flex;
        justify-content: space-between;
        height: 40px;
        align-items: center;
        background-color: var(--grey-2);
        width: 90%;
        margin: 0 auto;

        h3 {
            font-weight: 700;
            font-size: 14px;
        }

        button {
            width: 20px;
            height: 20px;
            font-size: 16px;
            font-weight: 400;
            color: var(--grey-1);
            background: var(--grey-2);
            border: 1px solid var(--grey-2);
            border-radius: 4px;
        }
    }
`;

export const Form = styled.div`
    background: var(--grey-3);
    margin: 0 auto;
    width: 90%;

    form {
        display: flex;
        flex-direction: column;
        margin: 10px auto;
        justify-content: space-between;

        label {
            color: var(--grey-0);
            font-weight: 400;
            font-size: 13px;
            line-height: 25px;
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
            height: 30px;

        }

        .inputError {
            border: 1px solid var(--red-1);
            ::placeholder {
                color: var(--red-1);
            }
        }

        span {
            color:red;
            font-size: 12px;
            margin-left: 5px;
            margin-top: 3px;;
        }

        .btnAddTech {
            width: 100%;
            margin-top: 15px;
            font-size: 13px;
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
