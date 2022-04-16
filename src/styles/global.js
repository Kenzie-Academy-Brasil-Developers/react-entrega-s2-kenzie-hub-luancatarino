import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :root {
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #f8f9fa;
        --green: #3fe864;
        --red-1: #e83f5b;
        --red-0: #59323F;
    }

    body {
        background: var(--grey-4);
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
    }
`;
